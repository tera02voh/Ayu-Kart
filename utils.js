const STORAGE_KEYS = {
    CART: 'ayukart_cart',
    WISHLIST: 'ayukart_wishlist',
    USER: 'ayukart_user',
    DOSHA_RESULT: 'ayukart_dosha_result'
};

const CartManager = {
    getCart: function() {
        const cart = localStorage.getItem(STORAGE_KEYS.CART);
        return cart ? JSON.parse(cart) : [];
    },
    
    saveCart: function(cart) {
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
        this.updateCartCount();
    },
    
    addToCart: function(product, quantity = 1) {
        const cart = this.getCart();
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
        
        this.saveCart(cart);
        this.showNotification('Added to cart successfully!', 'success');
        this.animateCartIcon();
        return cart;
    },
    
    removeFromCart: function(productId) {
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== productId);
        this.saveCart(cart);
        this.showNotification('Removed from cart', 'info');
        return cart;
    },
    
    updateQuantity: function(productId, quantity) {
        const cart = this.getCart();
        const item = cart.find(item => item.id === productId);
        
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart(cart);
        }
        
        return cart;
    },
    
    clearCart: function() {
        localStorage.removeItem(STORAGE_KEYS.CART);
        this.updateCartCount();
    },
    
    getCartTotal: function() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    getCartItemCount: function() {
        const cart = this.getCart();
        return cart.reduce((count, item) => count + item.quantity, 0);
    },
    
    updateCartCount: function() {
        const count = this.getCartItemCount();
        const cartCountElements = document.querySelectorAll('#cart-count');
        cartCountElements.forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    },
    
    animateCartIcon: function() {
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.classList.add('animate');
            setTimeout(() => cartIcon.classList.remove('animate'), 500);
        }
    },
    
    showNotification: function(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: ${type === 'success' ? 'var(--primary-green)' : 'var(--highlight-gold)'};
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

const WishlistManager = {
    getWishlist: function() {
        const wishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
        return wishlist ? JSON.parse(wishlist) : [];
    },
    
    saveWishlist: function(wishlist) {
        localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
        this.updateWishlistCount();
    },
    
    addToWishlist: function(product) {
        const wishlist = this.getWishlist();
        const exists = wishlist.find(item => item.id === product.id);
        
        if (!exists) {
            wishlist.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image
            });
            this.saveWishlist(wishlist);
            CartManager.showNotification('Added to wishlist!', 'success');
            return true;
        }
        
        return false;
    },
    
    removeFromWishlist: function(productId) {
        let wishlist = this.getWishlist();
        wishlist = wishlist.filter(item => item.id !== productId);
        this.saveWishlist(wishlist);
        CartManager.showNotification('Removed from wishlist', 'info');
        return wishlist;
    },
    
    isInWishlist: function(productId) {
        const wishlist = this.getWishlist();
        return wishlist.some(item => item.id === productId);
    },
    
    updateWishlistCount: function() {
        const count = this.getWishlist().length;
        const wishlistCountElements = document.querySelectorAll('#wishlist-count');
        wishlistCountElements.forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }
};
const ProductUtils = {
    getProductById: function(id) {
        return productsData.find(product => product.id === parseInt(id));
    },
    
    getProductsByCategory: function(category) {
        if (category === 'all') return productsData;
        return productsData.filter(product => product.category === category);
    },
    
    searchProducts: function(query) {
        const lowerQuery = query.toLowerCase();
        return productsData.filter(product => 
            product.name.toLowerCase().includes(lowerQuery) ||
            product.shortDesc.toLowerCase().includes(lowerQuery)
        );
    },
    
    filterProducts: function(filters) {
        let filtered = [...productsData];
        if (filters.categories && filters.categories.length > 0 && !filters.categories.includes('all')) {
            filtered = filtered.filter(p => filters.categories.includes(p.category));
        }
        if (filters.doshas && filters.doshas.length > 0) {
            filtered = filtered.filter(p => 
                filters.doshas.some(d => p.dosha.includes(d))
            );
        }
        if (filters.priceMin !== undefined && filters.priceMax !== undefined) {
            filtered = filtered.filter(p => 
                p.price >= filters.priceMin && p.price <= filters.priceMax
            );
        }
        if (filters.minRating) {
            filtered = filtered.filter(p => p.rating >= filters.minRating);
        }
        if (filters.search) {
            const query = filters.search.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(query) ||
                p.shortDesc.toLowerCase().includes(query)
            );
        }
        
        return filtered;
    },
    
    sortProducts: function(products, sortBy) {
        const sorted = [...products];
        
        switch(sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'name':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            default:
                return sorted;
        }
    },
    
    renderStars: function(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let starsHTML = '';
        
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        return starsHTML;
    },
    
    formatPrice: function(price) {
        return `₹${price.toLocaleString('en-IN')}`;
    },
    
    calculateDiscount: function(price, originalPrice) {
        if (!originalPrice || originalPrice <= price) return 0;
        return Math.round(((originalPrice - price) / originalPrice) * 100);
    }
};
const QuizManager = {
    saveResult: function(result) {
        localStorage.setItem(STORAGE_KEYS.DOSHA_RESULT, JSON.stringify(result));
    },
    
    getResult: function() {
        const result = localStorage.getItem(STORAGE_KEYS.DOSHA_RESULT);
        return result ? JSON.parse(result) : null;
    },
    
    calculateDoshaScores: function(answers) {
        const scores = { vata: 0, pitta: 0, kapha: 0 };
        
        answers.forEach(answer => {
            scores[answer.dosha] += answer.points;
        });
        
        const total = scores.vata + scores.pitta + scores.kapha;
        
        return {
            vata: Math.round((scores.vata / total) * 100),
            pitta: Math.round((scores.pitta / total) * 100),
            kapha: Math.round((scores.kapha / total) * 100)
        };
    },
    
    getDominantDosha: function(scores) {
        return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    }
};
const UIUtils = {
    showLoading: function(element) {
        element.innerHTML = '<div class="loading-spinner">Loading...</div>';
    },
    
    scrollToTop: function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    scrollReveal: function() {
        const reveals = document.querySelectorAll('.scroll-reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    },
    
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    formatDate: function(date) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
};
const URLUtils = {
    getParam: function(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    },
    
    setParam: function(param, value) {
        const url = new URL(window.location);
        url.searchParams.set(param, value);
        window.history.pushState({}, '', url);
    }
};
document.addEventListener('DOMContentLoaded', function() {
    CartManager.updateCartCount();
    WishlistManager.updateWishlistCount();
    window.addEventListener('scroll', UIUtils.scrollReveal);
    UIUtils.scrollReveal();
});
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .loading-spinner {
        text-align: center;
        padding: 2rem;
        color: var(--text-secondary);
    }
`;
document.head.appendChild(style);
