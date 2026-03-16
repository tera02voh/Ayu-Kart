document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 1;
    const itemsPerPage = 12;
    let filteredProducts = [...productsData];
    let currentFilters = {
        categories: ['all'],
        doshas: [],
        priceMin: 0,
        priceMax: 5000,
        minRating: 0,
        search: ''
    };
    
    const productsGrid = document.getElementById('products-grid');
    const resultsCount = document.getElementById('results-count');
    const sortSelect = document.getElementById('sort-select');
    const productSearch = document.getElementById('product-search');
    const paginationContainer = document.getElementById('pagination');
    const filterToggle = document.getElementById('filter-toggle');
    const shopSidebar = document.getElementById('shop-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const clearFilters = document.getElementById('clear-filters');
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    const priceMinVal = document.getElementById('price-min-val');
    const priceMaxVal = document.getElementById('price-max-val');
    init();
    
    function init() {
        const urlCategory = URLUtils.getParam('category');
        const urlSearch = URLUtils.getParam('search');
        
        if (urlCategory) {
            currentFilters.categories = [urlCategory];
            updateCategoryCheckboxes();
        }
        
        if (urlSearch) {
            currentFilters.search = urlSearch;
            if (productSearch) productSearch.value = urlSearch;
        }
        
        applyFilters();
        attachEventListeners();
    }
    
    function attachEventListeners() {
        document.querySelectorAll('input[name="category"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.value === 'all' && this.checked) {
                    document.querySelectorAll('input[name="category"]').forEach(cb => {
                        if (cb.value !== 'all') cb.checked = false;
                    });
                    currentFilters.categories = ['all'];
                } else if (this.checked && this.value !== 'all') {
                    document.querySelector('input[name="category"][value="all"]').checked = false;
                    currentFilters.categories = Array.from(
                        document.querySelectorAll('input[name="category"]:checked:not([value="all"])')
                    ).map(cb => cb.value);
                } else if (!this.checked && this.value !== 'all') {
                    currentFilters.categories = Array.from(
                        document.querySelectorAll('input[name="category"]:checked:not([value="all"])')
                    ).map(cb => cb.value);
                    if (currentFilters.categories.length === 0) {
                        document.querySelector('input[name="category"][value="all"]').checked = true;
                        currentFilters.categories = ['all'];
                    }
                }
                applyFilters();
            });
        });
        
        document.querySelectorAll('input[name="dosha"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                currentFilters.doshas = Array.from(
                    document.querySelectorAll('input[name="dosha"]:checked')
                ).map(cb => cb.value);
                applyFilters();
            });
        });
        
        if (priceMin && priceMax) {
            priceMin.addEventListener('input', function() {
                const minVal = parseInt(this.value);
                const maxVal = parseInt(priceMax.value);
                if (minVal > maxVal - 100) {
                    this.value = maxVal - 100;
                }
                priceMinVal.textContent = this.value;
                currentFilters.priceMin = parseInt(this.value);
                applyFilters();
            });
            
            priceMax.addEventListener('input', function() {
                const minVal = parseInt(priceMin.value);
                const maxVal = parseInt(this.value);
                if (maxVal < minVal + 100) {
                    this.value = minVal + 100;
                }
                priceMaxVal.textContent = this.value;
                currentFilters.priceMax = parseInt(this.value);
                applyFilters();
            });
        }
        
        document.querySelectorAll('input[name="rating"]').forEach(radio => {
            radio.addEventListener('change', function() {
                currentFilters.minRating = this.value === 'all' ? 0 : parseFloat(this.value);
                applyFilters();
            });
        });
        
        if (productSearch) {
            productSearch.addEventListener('input', UIUtils.debounce(function() {
                currentFilters.search = this.value;
                applyFilters();
            }, 300));
        }
        
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                displayProducts();
            });
        }
        
        if (clearFilters) {
            clearFilters.addEventListener('click', function() {
                resetFilters();
            });
        }
        
        if (filterToggle) {
            filterToggle.addEventListener('click', function() {
                shopSidebar.classList.add('active');
            });
        }
        
        if (closeSidebar) {
            closeSidebar.addEventListener('click', function() {
                shopSidebar.classList.remove('active');
            });
        }
    }
    
    function updateCategoryCheckboxes() {
        document.querySelectorAll('input[name="category"]').forEach(cb => {
            cb.checked = currentFilters.categories.includes(cb.value);
        });
    }
    
    function applyFilters() {
        filteredProducts = ProductUtils.filterProducts(currentFilters);
        currentPage = 1;
        displayProducts();
    }
    
    function displayProducts() {
        const sortedProducts = ProductUtils.sortProducts(
            filteredProducts,
            sortSelect ? sortSelect.value : 'default'
        );
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedProducts = sortedProducts.slice(startIndex, endIndex);
    
        if (resultsCount) {
            resultsCount.textContent = `Showing ${sortedProducts.length} products`;
        }
        
        if (productsGrid) {
            if (paginatedProducts.length === 0) {
                productsGrid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                        <i class="fas fa-search" style="font-size: 4rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                        <h3>No products found</h3>
                        <p style="color: var(--text-secondary);">Try adjusting your filters</p>
                    </div>
                `;
            } else {
                productsGrid.innerHTML = paginatedProducts.map(product => createProductCard(product)).join('');
                attachProductListeners();
            }
        }
        renderPagination(sortedProducts.length);
    }
    
    function createProductCard(product) {
        const discount = ProductUtils.calculateDiscount(product.price, product.originalPrice);
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    ${discount > 0 ? `
                        <div class="product-badges">
                            <span class="product-badge">${discount}% OFF</span>
                        </div>
                    ` : ''}
                    <button class="wishlist-btn" data-product-id="${product.id}">
                        <i class="${WishlistManager.isInWishlist(product.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        <div class="stars">${ProductUtils.renderStars(product.rating)}</div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <div class="product-price">${ProductUtils.formatPrice(product.price)}</div>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    }
    
    function attachProductListeners() {
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const productId = parseInt(this.getAttribute('data-product-id'));
                const product = ProductUtils.getProductById(productId);
                if (product) {
                    CartManager.addToCart(product);
                }
            });
        });
        
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const productId = parseInt(this.getAttribute('data-product-id'));
                const product = ProductUtils.getProductById(productId);
                const icon = this.querySelector('i');
                
                if (product) {
                    if (WishlistManager.isInWishlist(productId)) {
                        WishlistManager.removeFromWishlist(productId);
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                    } else {
                        WishlistManager.addToWishlist(product);
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                    }
                }
            });
        });
        
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('button')) {
                    const productId = this.getAttribute('data-product-id');
                    window.location.href = `product-detail.html?id=${productId}`;
                }
            });
        });
    }
    
    function renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }
        
        let paginationHTML = `
            <button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
                <i class="fas fa-chevron-left"></i>
            </button>
        `;
        
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                paginationHTML += `
                    <button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                        ${i}
                    </button>
                `;
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                paginationHTML += '<span>...</span>';
            }
        }
        
        paginationHTML += `
            <button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
        
        paginationContainer.innerHTML = paginationHTML;
    }
    
    function resetFilters() {
        currentFilters = {
            categories: ['all'],
            doshas: [],
            priceMin: 0,
            priceMax: 5000,
            minRating: 0,
            search: ''
        };
        
        document.querySelectorAll('input[name="category"]').forEach(cb => {
            cb.checked = cb.value === 'all';
        });
        
        document.querySelectorAll('input[name="dosha"]').forEach(cb => {
            cb.checked = false;
        });
        
        document.querySelector('input[name="rating"][value="all"]').checked = true;
        
        if (priceMin) priceMin.value = 0;
        if (priceMax) priceMax.value = 5000;
        if (priceMinVal) priceMinVal.textContent = 0;
        if (priceMaxVal) priceMaxVal.textContent = 5000;
        if (productSearch) productSearch.value = '';
        
        applyFilters();
    }
    
    window.changePage = function(page) {
        currentPage = page;
        displayProducts();
        UIUtils.scrollToTop();
    };
});
