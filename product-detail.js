document.addEventListener('DOMContentLoaded', function() {
    const productId = parseInt(URLUtils.getParam('id'));
    
    if (!productId) {
        window.location.href = 'shop.html';
        return;
    }
    
    const product = ProductUtils.getProductById(productId);
    
    if (!product) {
        window.location.href = 'shop.html';
        return;
    }
    
    loadProductDetails(product);
    loadRelatedProducts(product);
    
    function loadProductDetails(product) {
        document.getElementById('product-name-breadcrumb').textContent = product.name;
        document.getElementById('main-product-image').src = product.image;
        document.getElementById('main-product-image').alt = product.name;
        
        const thumbnailsContainer = document.getElementById('thumbnail-images');
        if (product.images && product.images.length > 0) {
            thumbnailsContainer.innerHTML = product.images.map((img, index) => `
                <img src="${img}" alt="${product.name}" class="${index === 0 ? 'active' : ''}" data-image="${img}">
            `).join('');
            
            thumbnailsContainer.querySelectorAll('img').forEach(thumb => {
                thumb.addEventListener('click', function() {
                    document.getElementById('main-product-image').src = this.getAttribute('data-image');
                    thumbnailsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        }
        
        document.getElementById('product-title').textContent = product.name;
        document.getElementById('product-stars').innerHTML = ProductUtils.renderStars(product.rating);
        document.getElementById('rating-text').textContent = `(${product.reviews} reviews)`;
        document.getElementById('current-price').textContent = ProductUtils.formatPrice(product.price);
        
        if (product.originalPrice && product.originalPrice > product.price) {
            document.getElementById('original-price').textContent = ProductUtils.formatPrice(product.originalPrice);
            const discount = ProductUtils.calculateDiscount(product.price, product.originalPrice);
            document.getElementById('discount-badge').textContent = `${discount}% OFF`;
        } else {
            document.getElementById('original-price').style.display = 'none';
            document.getElementById('discount-badge').style.display = 'none';
        }
        
        const doshaContainer = document.getElementById('product-doshas');
        if (product.dosha && product.dosha.length > 0) {
            doshaContainer.innerHTML = product.dosha.map(d => 
                `<span class="dosha-badge ${d}">${d.charAt(0).toUpperCase() + d.slice(1)}</span>`
            ).join('');
        }
        
        document.getElementById('product-short-desc').textContent = product.shortDesc;
        document.getElementById('product-sku').textContent = product.sku;
        document.getElementById('product-category').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
        document.getElementById('product-description').innerHTML = `<p>${product.description}</p>`;
        
        if (product.ingredients) {
            document.getElementById('product-ingredients').innerHTML = `
                <ul>
                    ${product.ingredients.map(ing => `<li>🌿 ${ing}</li>`).join('')}
                </ul>
            `;
        }
        
        if (product.benefits) {
            document.getElementById('product-benefits').innerHTML = `
                <ul>
                    ${product.benefits.map(benefit => `<li>✓ ${benefit}</li>`).join('')}
                </ul>
            `;
        }
        
        if (product.usage) {
            document.getElementById('product-usage').innerHTML = `<p>${product.usage}</p>`;
        }
        
        loadReviews(product);
        
        const wishlistBtnLarge = document.getElementById('wishlist-btn-large');
        const wishlistIcon = wishlistBtnLarge.querySelector('i');
        if (WishlistManager.isInWishlist(product.id)) {
            wishlistIcon.classList.remove('far');
            wishlistIcon.classList.add('fas');
        }
        
        wishlistBtnLarge.addEventListener('click', function() {
            if (WishlistManager.isInWishlist(product.id)) {
                WishlistManager.removeFromWishlist(product.id);
                wishlistIcon.classList.remove('fas');
                wishlistIcon.classList.add('far');
            } else {
                WishlistManager.addToWishlist(product);
                wishlistIcon.classList.remove('far');
                wishlistIcon.classList.add('fas');
            }
        });
        
        const quantityInput = document.getElementById('quantity');
        document.getElementById('decrease-qty').addEventListener('click', function() {
            const current = parseInt(quantityInput.value);
            if (current > 1) {
                quantityInput.value = current - 1;
            }
        });
        
        document.getElementById('increase-qty').addEventListener('click', function() {
            const current = parseInt(quantityInput.value);
            quantityInput.value = current + 1;
        });
        
        document.getElementById('add-to-cart-main').addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value);
            CartManager.addToCart(product, quantity);
        });
        
        document.getElementById('buy-now').addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value);
            CartManager.addToCart(product, quantity);
            window.location.href = 'cart.html';
        });
    }
    
    function loadReviews(product) {
        const reviewsList = document.getElementById('reviews-list');
        const sampleReviews = [
            {
                name: "Priya S.",
                rating: 5,
                date: "March 15, 2024",
                comment: "Excellent product! Noticed significant improvement in my wellness routine."
            },
            {
                name: "Rahul K.",
                rating: 5,
                date: "March 10, 2024",
                comment: "Authentic quality and very effective. Highly recommended!"
            },
            {
                name: "Anjali M.",
                rating: 4,
                date: "March 5, 2024",
                comment: "Good product, works well. Fast delivery too."
            }
        ];
        
        reviewsList.innerHTML = sampleReviews.map(review => `
            <div class="review-item" style="border-bottom: 1px solid var(--accent-beige); padding: 1rem 0; margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <strong>${review.name}</strong>
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">${review.date}</span>
                </div>
                <div style="color: var(--highlight-gold); margin-bottom: 0.5rem;">
                    ${ProductUtils.renderStars(review.rating)}
                </div>
                <p style="color: var(--text-secondary);">${review.comment}</p>
            </div>
        `).join('');
    }
    
    function loadRelatedProducts(product) {
        const relatedContainer = document.getElementById('related-products');
        const related = productsData
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
        
        relatedContainer.innerHTML = related.map(p => {
            const discount = ProductUtils.calculateDiscount(p.price, p.originalPrice);
            return `
                <div class="product-card" data-product-id="${p.id}" style="cursor: pointer;">
                    <div class="product-image-container">
                        <img src="${p.image}" alt="${p.name}" class="product-image">
                        ${discount > 0 ? `<div class="product-badges"><span class="product-badge">${discount}% OFF</span></div>` : ''}
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${p.name}</h3>
                        <div class="product-rating">
                            <div class="stars">${ProductUtils.renderStars(p.rating)}</div>
                        </div>
                        <div class="product-price">${ProductUtils.formatPrice(p.price)}</div>
                    </div>
                </div>
            `;
        }).join('');
        
        relatedContainer.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function() {
                const id = this.getAttribute('data-product-id');
                window.location.href = `product-detail.html?id=${id}`;
            });
        });
    }
    
    const productTabs = document.querySelectorAll('.product-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    productTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            productTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });
});
