// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'bright';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'bright' : 'dark';
    
    if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = theme === 'bright' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Product Database
const products = {
    "Wireless Headphones": {
        name: "Wireless Headphones",
        price: 59.99,
        description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
        features: [
            "Bluetooth 5.0 connectivity",
            "20 hours battery life",
            "Active noise cancellation",
            "Built-in microphone for calls",
            "Comfortable over-ear design"
        ],
        specifications: {
            "Battery": "20 hours playback",
            "Weight": "250g",
            "Color": "Matte Black",
            "Connectivity": "Bluetooth 5.0",
            "Charging": "USB-C"
        },
        image: "wireless headphone.webp",
        reviews: [
            { reviewer: "John Doe", rating: 5, text: "Amazing sound quality! The noise cancellation works perfectly." },
            { reviewer: "Jane Smith", rating: 4, text: "Very comfortable to wear for long periods. Battery life is impressive." }
        ]
    },
    "Smartwatch Pro X": {
        name: "Smartwatch Pro X",
        price: 129.99,
        description: "The ultimate fitness and lifestyle companion with advanced health tracking and smart features.",
        features: [
            "Heart rate monitoring & sleep tracking",
            "Waterproof up to 50 meters",
            "7-day battery life",
            "Smart notifications & calls",
            "GPS tracking for workouts",
            "1.3\" AMOLED display"
        ],
        specifications: {
            "Display": "1.3\" AMOLED, 450x450 resolution",
            "Battery": "300mAh, up to 7 days usage",
            "Connectivity": "Bluetooth 5.0, WiFi",
            "Sensors": "Heart rate, GPS, Accelerometer, Gyroscope",
            "Water Resistance": "5 ATM (50 meters)",
            "Compatibility": "iOS 10.0+ & Android 6.0+"
        },
        image: "smart watch.webp",
        reviews: [
            { reviewer: "Sarah Johnson", rating: 5, text: "Absolutely love this smartwatch! The battery life is incredible." },
            { reviewer: "Mike Chen", rating: 4, text: "Great value for money. The waterproof feature works perfectly for swimming." }
        ]
    },
    "Gaming Laptop": {
        name: "Gaming Laptop",
        price: 999.99,
        description: "High-performance gaming laptop with powerful graphics and fast processing for the ultimate gaming experience.",
        features: [
            "NVIDIA RTX graphics",
            "Intel Core i7 processor",
            "16GB RAM, 1TB SSD",
            "144Hz refresh rate display",
            "RGB backlit keyboard"
        ],
        specifications: {
            "Processor": "Intel Core i7-11800H",
            "Graphics": "NVIDIA RTX 3060 6GB",
            "RAM": "16GB DDR4",
            "Storage": "1TB NVMe SSD",
            "Display": "15.6\" 144Hz IPS",
            "Battery": "6-cell 86Wh"
        },
        image: "gaming laptop.jpg",
        reviews: [
            { reviewer: "Alex Rodriguez", rating: 4, text: "Handles all my games smoothly. Great performance for the price." },
            { reviewer: "Emily Wilson", rating: 5, text: "Perfect for both gaming and work. Fast and reliable." }
        ]
    },
    "Smartphone Z Max": {
        name: "Smartphone Z Max",
        price: 699.99,
        description: "Flagship smartphone with cutting-edge camera technology and powerful performance.",
        features: [
            "Triple camera system",
            "6.8\" AMOLED display",
            "5G connectivity",
            "Wireless charging",
            "IP68 water resistance"
        ],
        specifications: {
            "Display": "6.8\" AMOLED 120Hz",
            "Processor": "Snapdragon 8 Gen 2",
            "RAM": "12GB",
            "Storage": "256GB",
            "Camera": "108MP + 12MP + 8MP",
            "Battery": "5000mAh"
        },
        image: "smart phone.png",
        reviews: [
            { reviewer: "David Kim", rating: 5, text: "Camera quality is outstanding. Battery lasts all day." },
            { reviewer: "Lisa Brown", rating: 5, text: "Super fast and responsive. The display is beautiful." }
        ]
    },
    "Classic T-Shirt": {
        name: "Classic T-Shirt",
        price: 19.99,
        description: "Premium quality cotton t-shirt with perfect fit and comfortable wear.",
        features: [
            "100% premium cotton",
            "Classic fit",
            "Multiple color options",
            "Machine washable",
            "Breathable fabric"
        ],
        specifications: {
            "Material": "100% Cotton",
            "Fit": "Classic",
            "Care": "Machine wash cold",
            "Sizes": "S, M, L, XL, XXL",
            "Colors": "Black, White, Gray, Navy"
        },
        image: "classic t shirt.jpg",
        reviews: [
            { reviewer: "Michael Taylor", rating: 5, text: "Perfect fit and very comfortable. Great quality fabric." },
            { reviewer: "Sarah Williams", rating: 5, text: "Love these t-shirts! They hold up well after many washes." }
        ]
    },
    "Leather Jacket": {
        name: "Leather Jacket",
        price: 89.99,
        description: "Genuine leather jacket with stylish design and durable construction.",
        features: [
            "100% genuine leather",
            "Classic biker style",
            "Multiple pockets",
            "Comfortable lining",
            "Durable zippers"
        ],
        specifications: {
            "Material": "Genuine Leather",
            "Lining": "Polyester",
            "Closure": "Zipper",
            "Pockets": "4 total (2 chest, 2 side)",
            "Sizes": "S, M, L, XL"
        },
        image: "leather jacket.jpeg",
        reviews: [
            { reviewer: "James Anderson", rating: 4, text: "Great quality leather. Fits perfectly and looks stylish." },
            { reviewer: "Jessica Lee", rating: 5, text: "Beautiful jacket! The leather is soft and the craftsmanship is excellent." }
        ]
    },
    "Travel Backpack": {
        name: "Travel Backpack",
        price: 39.99,
        description: "Durable and spacious travel backpack with multiple compartments and comfortable straps.",
        features: [
            "Water-resistant material",
            "Multiple compartments",
            "Laptop sleeve",
            "Comfortable shoulder straps",
            "TSA-friendly design"
        ],
        specifications: {
            "Capacity": "40L",
            "Material": "Nylon",
            "Dimensions": "20\" x 13\" x 8\"",
            "Weight": "2.5 lbs",
            "Laptop Sleeve": "Fits up to 17\"",
            "Water Resistance": "Light rain resistant"
        },
        image: "travel backpact.webp",
        reviews: [
            { reviewer: "Robert Garcia", rating: 5, text: "Perfect for travel! Lots of pockets and very durable." },
            { reviewer: "Maria Hernandez", rating: 4, text: "Great backpack for the price. Comfortable to carry even when full." }
        ]
    },
    "Graphic Hoodie": {
        name: "Graphic Hoodie",
        price: 39.99,
        description: "Stylish graphic hoodie made from soft cotton for ultimate comfort.",
        features: [
            "100% cotton",
            "Available in multiple colors",
            "Machine washable",
            "Unisex design"
        ],
        specifications: {
            "Material": "100% Cotton",
            "Sizes": "S, M, L, XL",
            "Care": "Machine wash cold"
        },
        image: "graphic_hoodie.jpg",
        reviews: [
            { reviewer: "Emily Davis", rating: 5, text: "Super comfortable and stylish!" },
            { reviewer: "Mark Johnson", rating: 4, text: "Great quality for the price." }
        ]
    },
    "Denim Jacket": {
        name: "Denim Jacket",
        price: 59.99,
        description: "Classic denim jacket with a modern fit, perfect for layering.",
        features: [
            "100% denim",
            "Multiple pockets",
            "Stylish design",
            "Durable and long-lasting"
        ],
        specifications: {
            "Material": "100% Denim",
            "Sizes": "S, M, L, XL",
            "Care": "Machine wash cold"
        },
        image: "denim_jacket.jpg",
        reviews: [
            { reviewer: "Anna Lee", rating: 5, text: "Love this jacket! It's perfect for any season." },
            { reviewer: "Tom Brown", rating: 4, text: "Fits well and looks great!" }
        ]
    },
    "Bluetooth Speaker": {
        name: "Bluetooth Speaker",
        price: 49.99,
        description: "Portable Bluetooth speaker with high-quality sound and long battery life.",
        features: [
            "Wireless connectivity",
            "12 hours battery life",
            "Water-resistant",
            "Compact and lightweight"
        ],
        specifications: {
            "Battery": "12 hours playback",
            "Weight": "300g",
            "Connectivity": "Bluetooth 5.0"
        },
        image: "bluetooth_speaker.jpg",
        reviews: [
            { reviewer: "Chris Green", rating: 5, text: "Amazing sound quality for such a small speaker!" },
            { reviewer: "Laura White", rating: 4, text: "Great for outdoor use." }
        ]
    },
    "4K Action Camera": {
        name: "4K Action Camera",
        price: 199.99,
        description: "Capture your adventures in stunning 4K resolution with this action camera.",
        features: [
            "4K video recording",
            "Waterproof up to 30 meters",
            "Wide-angle lens",
            "Built-in WiFi"
        ],
        specifications: {
            "Video Resolution": "4K",
            "Battery": "1200mAh",
            "Weight": "150g"
        },
        image: "4k_action_camera.jpg",
        reviews: [
            { reviewer: "Jake Smith", rating: 5, text: "Best action camera I've ever used!" },
            { reviewer: "Sophie Turner", rating: 4, text: "Great quality, but a bit bulky." }
        ]
    },
    "Sunglasses": {
        name: "Sunglasses",
        price: 29.99,
        description: "Stylish sunglasses with UV protection and a comfortable fit.",
        features: [
            "UV400 protection",
            "Lightweight frame",
            "Multiple color options",
            "Polarized lenses"
        ],
        specifications: {
            "Material": "Plastic",
            "Lens Width": "55mm",
            "Bridge Width": "15mm"
        },
        image: "sunglasses.jpg",
        reviews: [
            { reviewer: "Mike Johnson", rating: 5, text: "Perfect for summer days!" },
            { reviewer: "Emma Wilson", rating: 4, text: "Stylish and affordable." }
        ]
    },
    "Wristwatch": {
        name: "Wristwatch",
        price: 89.99,
        description: "Elegant wristwatch with a classic design and durable build.",
        features: [
            "Water-resistant",
            "Quartz movement",
            "Leather strap",
            "Stylish design"
        ],
        specifications: {
            "Material": "Stainless Steel",
            "Water Resistance": "3 ATM",
            "Battery Life": "2 years"
        },
        image: "wristwatch.jpg",
        reviews: [
            { reviewer: "David Brown", rating: 5, text: "Looks great and keeps perfect time." },
            { reviewer: "Sarah Lee", rating: 4, text: "Very stylish and comfortable." }
        ]
    },
    "iPhone Premium Case": {
        name: "iPhone Premium Case",
        price: 29.99,
        description: "Premium protective case for iPhone with sleek design and maximum protection.",
        features: [
            "Military-grade protection",
            "Wireless charging compatible",
            "Slim profile",
            "Raised bezels for screen protection",
            "Multiple color options"
        ],
        specifications: {
            "Compatibility": "iPhone 12/13/14/15 series",
            "Material": "Polycarbonate + TPU",
            "Protection": "Military drop tested",
            "Colors": "Black, Blue, Red, Clear",
            "Wireless Charging": "Yes"
        },
        image: "iPhone-Premium-Case.webp",
        reviews: [
            { reviewer: "Chris Thompson", rating: 5, text: "Excellent protection without adding bulk. Fits perfectly." },
            { reviewer: "Amanda White", rating: 4, text: "Great case! The buttons are responsive and it looks sleek." }
        ]
    }
};

// Function to load product details based on the product name
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    console.log('Product Name:', productName); // Debugging log
    
    if (productName && products[productName]) {
        const product = products[productName];
        
        // Update page title
        document.title = `${product.name} | EliteMart`;
        
        // Update product information
        console.log('Updating product information:', product); // Debugging log
        document.getElementById('productName').textContent = product.name;
        document.querySelector('.price').textContent = `$${product.price.toFixed(2)}`;
        document.querySelector('.product-description p').textContent = product.description;
        
        // Populate features
        const featuresList = document.querySelector('.product-description ul');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Populate specifications
        const specificationsTable = document.querySelector('.specifications table');
        specificationsTable.innerHTML = '';
        for (const [key, value] of Object.entries(product.specifications)) {
            const row = document.createElement('tr');
            row.innerHTML = `<td><strong>${key}:</strong></td><td>${value}</td>`;
            specificationsTable.appendChild(row);
        }
        
        // Set product image
        document.getElementById('mainImage').src = product.image;
        
        // Update breadcrumb
        const breadcrumb = document.querySelector('.breadcrumb');
        if (breadcrumb) {
            breadcrumb.innerHTML = `
                <a href="index.html">Home</a> > 
                <a href="shop.html">Shop</a> > 
                <span>${product.name}</span>
            `;
        }
        
        // Update add to cart function
        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.setAttribute('onclick', `addToCartWithQuantity('${product.name}', ${product.price})`);
        }
        
    } else {
        // Handle case where product is not found
        document.querySelector('.product-details').innerHTML = '<p class="error">Product not found. Please return to the <a href="shop.html">shop</a>.</p>';
    }
}

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let savedForLater = JSON.parse(localStorage.getItem('savedForLater')) || [];

function addToCart(name, price, quantity = 1, image = 'https://via.placeholder.com/100x100/667eea/ffffff?text=Product') {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += quantity;
        showToast(`${name} quantity updated!`);
    } else {
        cart.push({ name, price, quantity, image });
        showToast(`${name} added to cart!`);
    }
    
    updateCartCount();
    saveCart();
    renderCart();
}

function addToCartWithQuantity(name, price) {
    const quantity = parseInt(document.getElementById('qty').value) || 1;
    addToCart(name, price, quantity);
}

function removeFromCart(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
        const cartItemElement = document.querySelector(`.cart-item[data-name="${name}"]`);
        if (cartItemElement) {
            cartItemElement.classList.add('removing');
            setTimeout(() => {
                cart = cart.filter(item => item.name !== name);
                updateCartCount();
                saveCart();
                renderCart();
            }, 500);
        }
    }
}

function updateQuantity(name, quantity) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(name);
        } else {
            saveCart();
            updateCartTotals();
        }
    }
}

function incrementQuantity(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
        saveCart();
        updateCartTotals();
    }
}

function decrementQuantity(name) {
    const item = cart.find(item => item.name === name);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCart();
        updateCartTotals();
    }
}

function saveForLater(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
        savedForLater.push(item);
        cart = cart.filter(cartItem => cartItem.name !== name);
        saveCart();
        saveSavedForLater();
        renderCart();
        showToast(`${name} saved for later!`);
    }
}

function moveToCart(name) {
    const item = savedForLater.find(item => item.name === name);
    if (item) {
        cart.push(item);
        savedForLater = savedForLater.filter(savedItem => savedItem.name !== name);
        saveCart();
        saveSavedForLater();
        renderCart();
        showToast(`${name} moved to cart!`);
    }
}

function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function calculateTax() {
    return calculateTotal() * 0.08; // 8% tax
}

function updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElements.forEach(el => el.textContent = totalItems);
}

function updateCartTotals() {
    const subtotal = calculateTotal();
    const tax = calculateTax();
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('totalItems').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update shipping progress
    updateShippingProgress(subtotal);
}

function updateShippingProgress(subtotal) {
    const progressFill = document.getElementById('progressFill');
    const shippingMessage = document.getElementById('shippingMessage');
    
    const freeShippingThreshold = 50;
    const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
    
    progressFill.style.width = `${progress}%`;
    
    if (subtotal >= freeShippingThreshold) {
        shippingMessage.textContent = '🎉 You qualify for free shipping!';
        shippingMessage.style.color = '#22c55e';
    } else {
        const amountNeeded = (freeShippingThreshold - subtotal).toFixed(2);
        shippingMessage.textContent = `Add $${amountNeeded} more for free shipping!`;
        shippingMessage.style.color = '#64748b';
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveSavedForLater() {
    localStorage.setItem('savedForLater', JSON.stringify(savedForLater));
}

// Cart Rendering
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    
    if (cartItems && emptyCart) {
        // Clear existing items
        const existingItems = cartItems.querySelectorAll('.cart-item:not(.empty-cart)');
        existingItems.forEach(item => item.remove());
        
        if (cart.length === 0) {
            emptyCart.style.display = 'block';
            document.querySelector('.cart-summary').style.display = 'none';
        } else {
            emptyCart.style.display = 'none';
            document.querySelector('.cart-summary').style.display = 'block';
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.setAttribute('data-name', item.name);
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)} each</p>
                    </div>
                    <div class="cart-item-quantity">
                        <div class="quantity-stepper">
                            <button class="quantity-btn" onclick="decrementQuantity('${item.name}')">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                                   onchange="updateQuantity('${item.name}', this.value)">
                            <button class="quantity-btn" onclick="incrementQuantity('${item.name}')">+</button>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="remove-btn" onclick="removeFromCart('${item.name}')">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                        <button class="save-later-btn" onclick="saveForLater('${item.name}')">
                            <i class="fas fa-bookmark"></i> Save for later
                        </button>
                    </div>
                `;
                cartItems.insertBefore(cartItem, emptyCart);
            });
        }
        
        updateCartTotals();
    }
}

// Toast notifications
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Checkout function
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    // Add loading state
    const checkoutBtn = document.querySelector('.btn-checkout');
    const originalText = checkoutBtn.innerHTML;
    checkoutBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    checkoutBtn.classList.add('cart-loading');
    
    // Simulate processing
    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 1500);
}

// Navigation Toggle
function toggleMenu(event) {
    if (event && event.key !== "Enter" && event.key !== " ") return; // Allow toggling only on Enter or Space
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Form Validation
function validateCheckoutForm(event) {
    event.preventDefault();
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    if (isValid) {
        alert('Order placed successfully! Thank you for your purchase.');
        cart = [];
        saveCart();
        updateCartCount();
        window.location.href = 'index.html';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    updateCartCount();
    
    // Render cart if on cart page
    if (document.getElementById('cartTable')) {
        renderCart();
    }
    
    // Add form validation if on checkout page
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', validateCheckoutForm);
    }
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Initialize search functionality
    searchProducts();
});

// Search Functionality
function searchProducts() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase().trim();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            if (query === '' || productName.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Product Filtering (for shop page)
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function sortProducts(sortBy) {
    const productGrid = document.querySelector('.product-grid');
    const products = Array.from(productGrid.querySelectorAll('.product-card'));
    
    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
        
        if (sortBy === 'price-low') return priceA - priceB;
        if (sortBy === 'price-high') return priceB - priceA;
        return 0;
    });
    
    products.forEach(product => productGrid.appendChild(product));
}
