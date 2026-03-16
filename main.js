document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.classList.remove('active');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 600);
            }
        }, 1500);
    });
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navCenter = document.querySelector('.nav-center');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navCenter.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navCenter.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    document.addEventListener('click', function(e) {
        if (navCenter && navCenter.classList.contains('active')) {
            if (!navCenter.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navCenter.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    const searchIcon = document.getElementById('search-icon');
    const searchModal = document.getElementById('search-modal');
    const closeSearch = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');
    
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            searchModal.classList.add('active');
            setTimeout(() => searchInput.focus(), 100);
        });
    }
    
    if (closeSearch) {
        closeSearch.addEventListener('click', function() {
            searchModal.classList.remove('active');
        });
    }
    
    if (searchModal) {
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }
    
    const featuredCarousel = document.getElementById('featured-carousel');
    
    if (featuredCarousel) {
        loadFeaturedProducts();
    }
    
    function loadFeaturedProducts() {
    
        const featuredProducts = productsData.slice(0, 8);
        
        featuredCarousel.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
        
        
        attachProductCardListeners();
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
                    <button class="wishlist-btn" data-product-id="${product.id}" aria-label="Add to wishlist">
                        <i class="${WishlistManager.isInWishlist(product.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        <div class="stars">
                            ${ProductUtils.renderStars(product.rating)}
                        </div>
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
    
    function attachProductCardListeners() {
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
    
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            CartManager.showNotification('Thank you for subscribing to our newsletter!', 'success');
            this.reset();
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            if (category) {
                window.location.href = `shop.html?category=${category}`;
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = heroSection.querySelector('.hero-background');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
    
    const reviewsCarousel = document.querySelector('.reviews-carousel');
    
    if (reviewsCarousel) {
        let scrollAmount = 0;
        const scrollStep = 1;
        const scrollInterval = 30;
        
        setInterval(() => {
            if (reviewsCarousel.scrollWidth > reviewsCarousel.clientWidth) {
                scrollAmount += scrollStep;
                if (scrollAmount >= reviewsCarousel.scrollWidth - reviewsCarousel.clientWidth) {
                    scrollAmount = 0;
                }
                reviewsCarousel.scrollLeft = scrollAmount;
            }
        }, scrollInterval);
        
        reviewsCarousel.addEventListener('mouseenter', function() {
            this.style.scrollBehavior = 'auto';
        });
        
        reviewsCarousel.addEventListener('mouseleave', function() {
            this.style.scrollBehavior = 'smooth';
        });
    }
});
