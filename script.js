// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Load featured items
    loadFeaturedItems();
    
    // Chat button functionality
    const chatButton = document.getElementById('chat-button');
    chatButton.addEventListener('click', function() {
        window.location.href = 'chat.html';
    });
});

// Featured items data
const featuredItems = [
    {
        id: 1,
        title: "Vintage Denim Jacket",
        price: 25.99,
        category: "clothes",
        image: "images/clothes/jacket1.jpg",
        seller: "Jane D.",
        posted: "2 days ago"
    },
    {
        id: 2,
        title: "Wireless Headphones",
        price: 45.50,
        category: "gadgets",
        image: "images/gadgets/headphones1.jpg",
        seller: "Mike T.",
        posted: "1 week ago"
    },
    {
        id: 3,
        title: "Leather Crossbody Bag",
        price: 32.00,
        category: "accessories",
        image: "images/accessories/bag1.jpg",
        seller: "Sarah K.",
        posted: "3 days ago"
    },
    {
        id: 4,
        title: "Canvas Sneakers",
        price: 28.75,
        category: "footwear",
        image: "images/footwear/sneakers1.jpg",
        seller: "Alex P.",
        posted: "5 days ago"
    }
];

function loadFeaturedItems() {
    const itemsGrid = document.querySelector('.items-grid');
    
    if (itemsGrid) {
        itemsGrid.innerHTML = '';
        
        featuredItems.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            
            itemCard.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="item-details">
                    <h4 class="item-title">${item.title}</h4>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                    <div class="item-meta">
                        <span>${item.seller}</span>
                        <span>${item.posted}</span>
                    </div>
                </div>
            `;
            
            itemCard.addEventListener('click', () => {
                window.location.href = `browse.html?item=${item.id}`;
            });
            
            itemsGrid.appendChild(itemCard);
        });
    }
}