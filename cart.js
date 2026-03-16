document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartLayout = document.getElementById('cart-layout');
    const proceedCheckout = document.getElementById('proceed-checkout');
    
    loadCart();
    
    function loadCart() {
        const cart = CartManager.getCart();
        
        if (cart.length === 0) {
            showEmptyCart();
        } else {
            displayCart(cart);
            updateSummary(cart);
        }
    }
    
    function showEmptyCart() {
        if (cartLayout) cartLayout.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
    }
    
    function displayCart(cart) {
        if (cartLayout) cartLayout.style.display = 'grid';
        if (emptyCart) emptyCart.style.display = 'none';
        
        cartItems.innerHTML = cart.map(item => {
            const product = ProductUtils.getProductById(item.id);
            return `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div>
                            <h3 class="cart-item-name">${item.name}</h3>
                            <p class="cart-item-price">${ProductUtils.formatPrice(item.price)}</p>
                        </div>
                        <div class="cart-item-actions">
                            <div class="quantity-controls">
                                <button class="decrease-qty" data-id="${item.id}">-</button>
                                <input type="number" value="${item.quantity}" min="1" readonly>
                                <button class="increase-qty" data-id="${item.id}">+</button>
                            </div>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        attachCartListeners();
    }
    
    function attachCartListeners() {
        document.querySelectorAll('.increase-qty').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const cart = CartManager.getCart();
                const item = cart.find(i => i.id === productId);
                if (item) {
                    CartManager.updateQuantity(productId, item.quantity + 1);
                    loadCart();
                }
            });
        });
        
        document.querySelectorAll('.decrease-qty').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const cart = CartManager.getCart();
                const item = cart.find(i => i.id === productId);
                if (item && item.quantity > 1) {
                    CartManager.updateQuantity(productId, item.quantity - 1);
                    loadCart();
                }
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                CartManager.removeFromCart(productId);
                loadCart();
            });
        });
    }
    
    function updateSummary(cart) {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 999 ? 0 : 49;
        const tax = subtotal * 0.18;
        const total = subtotal + shipping + tax;
        
        document.getElementById('items-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('subtotal').textContent = ProductUtils.formatPrice(subtotal);
        document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : ProductUtils.formatPrice(shipping);
        document.getElementById('tax').textContent = ProductUtils.formatPrice(tax);
        document.getElementById('total').textContent = ProductUtils.formatPrice(total);
    }
    
    if (proceedCheckout) {
        proceedCheckout.addEventListener('click', function() {
            const cart = CartManager.getCart();
            if (cart.length > 0) {
                window.location.href = 'checkout.html';
            }
        });
    }
});
