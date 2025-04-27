// Sample items data
const itemsData = [
    {
        id: 1,
        title: "Vintage Denim Jacket",
        price: 25.99,
        category: "clothes",
        condition: "good",
        location: "north",
        image: "images/clothes/jacket1.jpg",
        seller: "Jane D.",
        posted: "2 days ago",
        saved: false
    },
    {
        id: 2,
        title: "Wireless Headphones",
        price: 45.50,
        category: "gadgets",
        condition: "like-new",
        location: "central",
        image: "images/gadgets/headphones1.jpg",
        seller: "Mike T.",
        posted: "1 week ago",
        saved: false
    },
    {
        id: 3,
        title: "Leather Crossbody Bag",
        price: 32.00,
        category: "accessories",
        condition: "good",
        location: "south",
        image: "images/accessories/bag1.jpg",
        seller: "Sarah K.",
        posted: "3 days ago",
        saved: false
    },
    {
        id: 4,
        title: "Canvas Sneakers",
        price: 28.75,
        category: "footwear",
        condition: "fair",
        location: "east",
        image: "images/footwear/sneakers1.jpg",
        seller: "Alex P.",
        posted: "5 days ago",
        saved: false
    },
    {
        id: 5,
        title: "Graphic T-Shirt",
        price: 12.99,
        category: "clothes",
        condition: "new",
        location: "west",
        image: "images/clothes/tshirt1.jpg",
        seller: "Chris L.",
        posted: "1 day ago",
        saved: false
    },
    {
        id: 6,
        title: "Smart Watch",
        price: 65.00,
        category: "gadgets",
        condition: "like-new",
        location: "central",
        image: "images/gadgets/watch1.jpg",
        seller: "Taylor M.",
        posted: "2 weeks ago",
        saved: false
    },
    {
        id: 7,
        title: "Silver Necklace",
        price: 18.50,
        category: "accessories",
        condition: "good",
        location: "north",
        image: "images/accessories/necklace1.jpg",
        seller: "Jordan B.",
        posted: "4 days ago",
        saved: false
    },
    {
        id: 8,
        title: "Running Shoes",
        price: 35.25,
        category: "footwear",
        condition: "like-new",
        location: "south",
        image: "images/footwear/shoes1.jpg",
        seller: "Morgan R.",
        posted: "1 week ago",
        saved: false
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Load items based on URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const itemParam = urlParams.get('item');
    
    if (itemParam) {
        // Show single item view (would be implemented)
        showSingleItem(itemParam);
    } else {
        // Show all items with optional category filter
        loadItems(categoryParam);
    }
    
    // Set up event listeners for filters
    setupFilters();
});

function loadItems(categoryFilter = null) {
    const itemsGrid = document.querySelector('.items-grid');
    
    if (!itemsGrid) return;
    
    itemsGrid.innerHTML = '';
    
    let filteredItems = [...itemsData];
    
    // Apply category filter if specified
    if (categoryFilter) {
        filteredItems = filteredItems.filter(item => item.category === categoryFilter);
        // Update the category filter dropdown to reflect the current selection
        const categorySelect = document.getElementById('category-filter');
        if (categorySelect) {
            categorySelect.value = categoryFilter;
        }
    }
    
    // Display items
    filteredItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        
        itemCard.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.title}">
                <span class="item-badge">${item.condition.replace('-', ' ')}</span>
            </div>
            <div class="item-details">
                <h4 class="item-title">${item.title}</h4>
                <div class="item-price">$${item.price.toFixed(2)}</div>
                <div class="item-meta">
                    <span>${item.seller}</span>
                    <span>${item.posted}</span>
                </div>
                <div class="item-actions">
                    <button class="btn-save" data-id="${item.id}">
                        <i class="far fa-heart"></i> Save
                    </button>
                    <button class="btn-contact" data-id="${item.id}">
                        <i class="far fa-comment-dots"></i> Chat
                    </button>
                </div>
            </div>
        `;
        
        // Update save button if item is saved
        if (item.saved) {
            const saveBtn = itemCard.querySelector('.btn-save');
            saveBtn.innerHTML = '<i class="fas fa-heart"></i> Saved';
            saveBtn.style.color = 'var(--accent-color)';
        }
        
        itemsGrid.appendChild(itemCard);
    });
    
    // Set up event listeners for item buttons
    setupItemButtons();
}

function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');
    const locationFilter = document.getElementById('location-filter');
    const conditionCheckboxes = document.querySelectorAll('input[name="condition"]');
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            loadItems(this.value || null);
        });
    }
    
    if (sortBy) {
        sortBy.addEventListener('change', function() {
            // Sorting logic would be implemented here
            console.log('Sort by:', this.value);
        });
    }
    
    if (locationFilter) {
        locationFilter.addEventListener('change', function() {
            // Location filter logic would be implemented here
            console.log('Location:', this.value);
        });
    }
    
    if (conditionCheckboxes) {
        conditionCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                // Condition filter logic would be implemented here
                console.log('Condition filters changed');
            });
        });
    }
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Search logic would be implemented here
            console.log('Search for:', searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                // Search logic would be implemented here
                console.log('Search for:', searchInput.value);
            }
        });
    }
}

function setupItemButtons() {
    // Save button functionality
    document.querySelectorAll('.btn-save').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const itemId = parseInt(this.getAttribute('data-id'));
            const item = itemsData.find(item => item.id === itemId);
            
            if (item) {
                item.saved = !item.saved;
                
                if (item.saved) {
                    this.innerHTML = '<i class="fas fa-heart"></i> Saved';
                    this.style.color = 'var(--accent-color)';
                } else {
                    this.innerHTML = '<i class="far fa-heart"></i> Save';
                    this.style.color = '';
                }
            }
        });
    });
    
    // Contact button functionality
    document.querySelectorAll('.btn-contact').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const itemId = parseInt(this.getAttribute('data-id'));
            
            // Redirect to chat page with the item ID
            window.location.href = `chat.html?item=${itemId}`;
        });
    });
    
    // Item click functionality
    document.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', function() {
            const itemId = this.querySelector('.btn-save').getAttribute('data-id'));
            // Redirect to item detail page (would be implemented)
            console.log('View item:', itemId);
        });
    });
}

function showSingleItem(itemId) {
    // This would display a single item view
    console.log('Show single item:', itemId);
}