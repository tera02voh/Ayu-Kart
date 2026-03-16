# 🌿 AyuKart - Ayurvedic E-commerce Platform

## Ancient Wellness, Modern Living

AyuKart is a fully functional, professional, and responsive e-commerce website for an Ayurvedic lifestyle store. Built with HTML, CSS, and Vanilla JavaScript, it combines modern UI/UX with calm natural aesthetics inspired by Ayurveda.

---

## ✨ Features

### 🎨 Design & UI
- **Premium Ayurvedic aesthetics** with calming natural color palette
- **Fully responsive** design (Desktop, Tablet, Mobile)
- **Smooth animations** and micro-interactions throughout
- **Glassmorphism effects** on navigation bar
- **Beautiful loading screen** with rotating leaf animation
- **Parallax effects** on hero section

### 📄 Complete Page Set (17 Pages)
1. **Home Page** - Hero section, featured categories, dosha education, products, reviews, newsletter
2. **Shop Page** - Product grid with advanced filtering, sorting, and pagination
3. **Product Detail Page** - Image gallery, product info, reviews, related products
4. **Cart Page** - Shopping cart with quantity controls and order summary
5. **Checkout Page** - Multi-step checkout (shipping, delivery, payment)
6. **Order Success Page** - Confirmation with order details
7. **Dosha Quiz Page** - Interactive 8-question quiz with progress tracking
8. **Dosha Result Page** - Personalized recommendations based on quiz results
9. **Blog Page** - Knowledge center with article grid
10. **Blog Article Page** - Full article view with related content
11. **Wishlist Page** - Saved products
12. **Profile Dashboard** - User profile with order history
13. **Login Page** - User authentication
14. **Signup Page** - New user registration
15. **Contact Page** - Contact form and information
16. **About Page** - Company story and values
17. **Wishlist** - Save favorite products

### 🛒 E-commerce Functionality
- **Shopping Cart** - Add/remove items, update quantities
- **Wishlist** - Save favorite products
- **Product Filtering** - By category, dosha, price, rating
- **Product Search** - Real-time search functionality
- **Product Sorting** - Price, name, rating
- **Pagination** - Efficient product browsing
- **Local Storage** - Persistent cart and wishlist data

### 🧘 Ayurvedic Features
- **Dosha Quiz** - 8-question interactive assessment
- **Dosha Results** - Personalized Vata/Pitta/Kapha analysis
- **Product Dosha Compatibility** - Products tagged for specific doshas
- **Seasonal Tips** - Ayurvedic wellness guidance
- **Knowledge Center** - Educational blog articles

### 🎭 Animations & Interactions
- Smooth fade-in on scroll
- Card hover lift effects
- Button ripple effects
- Product image zoom
- Cart icon bounce animation
- Floating leaf animations
- Loading screen with vine growth
- Smooth page transitions

### 📱 Mobile Optimization
- Hamburger menu for mobile navigation
- Touch-optimized buttons (44px minimum)
- Responsive product grids
- Mobile-friendly filters
- Optimized images and performance

---

## 🏗️ Project Structure

```
ayukart/
├── index.html              # Homepage
├── shop.html               # Shop page
├── product-detail.html     # Product detail page
├── cart.html               # Shopping cart
├── checkout.html           # Checkout flow
├── order-success.html      # Order confirmation
├── dosha-quiz.html         # Interactive quiz
├── dosha-result.html       # Quiz results
├── blog.html               # Blog listing
├── blog-article.html       # Individual article
├── wishlist.html           # Saved products
├── profile.html            # User dashboard
├── login.html              # Login page
├── signup.html             # Registration page
├── contact.html            # Contact form
├── about.html              # About page
├── css/
│   ├── style.css           # Main styles
│   ├── pages.css           # Page-specific styles
│   └── responsive.css      # Responsive breakpoints
└── js/
    ├── data.js             # Product & quiz data
    ├── utils.js            # Utility functions
    ├── main.js             # Homepage JavaScript
    ├── shop.js             # Shop page functionality
    ├── cart.js             # Cart functionality
    └── product-detail.js   # Product page functionality
```

---

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2E6F4E` - Deep herbal green
- **Secondary Sage**: `#A8C3A0` - Soft sage green
- **Accent Beige**: `#E8DCC8` - Warm sand beige
- **Background**: `#F8F6F2` - Soft natural white
- **Highlight Gold**: `#D6A84C` - Turmeric gold

### Typography
- **Headings**: Playfair Display (Serif)
- **Body Text**: Poppins (Sans-serif)

### Spacing Scale
- xs: 0.5rem, sm: 1rem, md: 2rem, lg: 3rem, xl: 5rem

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for best experience)

### Installation

1. **Download/Clone the project**
   ```bash
   # Clone if using git
   git clone [repository-url]
   cd ayukart
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

3. **Access the website**
   - Direct: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

---

## 📱 Pages & Features

### Home Page (`index.html`)
- Animated loading screen with rotating leaves
- Hero section with parallax effect
- 6 featured product categories
- Dosha education cards (Vata, Pitta, Kapha)
- Featured products carousel
- Seasonal Ayurvedic tips
- Customer reviews
- Newsletter signup

### Shop Page (`shop.html`)
- Advanced filtering system
  - Category filter
  - Dosha compatibility
  - Price range slider
  - Rating filter
- Real-time product search
- Sort by: price, name, rating
- Pagination with 12 products per page
- Mobile-friendly filter sidebar

### Product Detail Page (`product-detail.html`)
- Image gallery with zoom
- Product information and pricing
- Dosha compatibility badges
- Quantity selector
- Add to cart & Buy now
- Tabbed content (Description, Ingredients, Benefits, Usage, Reviews)
- Related products

### Cart Page (`cart.html`)
- Cart items with quantity controls
- Remove item functionality
- Order summary with tax calculation
- Free shipping over ₹999
- Proceed to checkout button

### Checkout Page (`checkout.html`)
- 3-step checkout process
  1. Shipping address
  2. Delivery method
  3. Payment method
- Multiple payment options (UPI, Card, Wallet, COD)
- Order summary sidebar

### Dosha Quiz (`dosha-quiz.html`)
- 8 interactive questions
- Progress bar
- Previous/Next navigation
- Calculates Vata, Pitta, Kapha percentages

### Dosha Result (`dosha-result.html`)
- Personalized dosha distribution
- Dominant dosha highlighting
- Diet recommendations
- Lifestyle tips
- Product recommendations

---

## 💾 Data Management

### Local Storage
The website uses browser's Local Storage for:
- **Cart**: `ayukart_cart`
- **Wishlist**: `ayukart_wishlist`
- **User**: `ayukart_user`
- **Dosha Result**: `ayukart_dosha_result`

### Product Data
16 sample products across categories:
- Herbal Supplements (Ashwagandha, Triphala, Turmeric, Brahmi)
- Ayurvedic Oils (Neem, Kumkumadi)
- Hair Care (Bhringraj oil, Amla shampoo)
- Skincare (Rose cream, Neem face wash)
- Herbal Teas (Tulsi, Chamomile, Ginger-Turmeric)
- Immunity Boosters (Chyawanprash, Giloy, Amla)

---

## 🛠️ Technical Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No frameworks, pure JS

### Libraries (CDN)
- **Google Fonts** - Playfair Display, Poppins
- **Font Awesome 6.4.0** - Icons

### Features Implemented
- ES6+ JavaScript
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- LocalStorage API
- Intersection Observer API
- Responsive Design
- Mobile-first approach

---

## 🎯 Key Functionality

### Cart Management
```javascript
// Add to cart
CartManager.addToCart(product, quantity);

// Update quantity
CartManager.updateQuantity(productId, newQuantity);

// Remove from cart
CartManager.removeFromCart(productId);

// Get cart total
CartManager.getCartTotal();
```

### Wishlist Management
```javascript
// Add to wishlist
WishlistManager.addToWishlist(product);

// Remove from wishlist
WishlistManager.removeFromWishlist(productId);

// Check if in wishlist
WishlistManager.isInWishlist(productId);
```

### Product Utilities
```javascript
// Get product by ID
ProductUtils.getProductById(id);

// Filter products
ProductUtils.filterProducts(filters);

// Sort products
ProductUtils.sortProducts(products, sortBy);

// Search products
ProductUtils.searchProducts(query);
```

---

## 📊 Product Categories

1. **Herbal Supplements** - Ashwagandha, Triphala, Turmeric, Brahmi
2. **Ayurvedic Oils** - Neem & Turmeric, Kumkumadi
3. **Natural Hair Care** - Bhringraj Oil, Amla Shampoo
4. **Herbal Skincare** - Rose Cream, Neem Face Wash
5. **Herbal Teas** - Tulsi Green Tea, Chamomile, Ginger-Turmeric
6. **Immunity Boosters** - Chyawanprash, Giloy, Amla

---

## 🎨 Animations

- **Loading Screen**: Rotating leaves with vine growth bar
- **Scroll Animations**: Fade-in on scroll using Intersection Observer
- **Hover Effects**: Card lift, image zoom, button glow
- **Cart Animation**: Bounce effect when items added
- **Hero Parallax**: Background moves on scroll
- **Page Transitions**: Smooth fade effects

---

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

---

## 🚀 Performance Optimizations

- Lazy loading for images
- Debounced search input
- Pagination for large product sets
- Optimized CSS (no unused styles)
- Minimal JavaScript libraries
- Efficient DOM manipulation
- LocalStorage for state persistence

---

## 🔒 Security Notes

This is a **frontend-only** demo website. For production use:
- Implement backend API for products
- Add user authentication system
- Use secure payment gateway
- Implement HTTPS
- Add CSRF protection
- Sanitize user inputs
- Implement rate limiting

---

## 🌐 Browser Compatibility

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Opera (76+)

---

## 📝 Future Enhancements

- Backend integration with REST API
- Real user authentication
- Payment gateway integration
- Order tracking system
- Product reviews and ratings
- Advanced search with filters
- Multi-language support
- Dark mode toggle
- PWA capabilities
- Email notifications

---

## 👥 Credits

**Design & Development**: AyuKart Team
**Ayurvedic Consultation**: Traditional Ayurveda Experts
**Images**: Unsplash (placeholder images)
**Icons**: Font Awesome
**Fonts**: Google Fonts

---

## 📄 License

This project is created for educational and demonstration purposes.

---

## 📞 Support

For questions or issues:
- Email: support@ayukart.com
- Website: [ayukart.com](https://ayukart.com)

---

## 🌟 Acknowledgments

Special thanks to the ancient wisdom of Ayurveda and modern web technologies that made this project possible.

---

**Built with 💚 for Wellness**

*AyuKart - Ancient Wellness, Modern Living*
