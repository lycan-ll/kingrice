  let objectData = [];
  let filteredData = [];
  let itemsPerPage = 20;
  let currentPage = 1;
  let currentCategory = 'all';
  let currentSearch = '';

  // Fetch product data based on current page, search, and category
  function fetchProductData(page = 1, search = '', category = 'all') {
    const skip = (page - 1) * itemsPerPage;
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`;

    if (search) {
      url = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${itemsPerPage}&skip=${skip}`;
    } else if (category !== 'all') {
      url = `https://dummyjson.com/products/category/${category}?limit=${itemsPerPage}&skip=${skip}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        objectData = data.products;
        filteredData = objectData;
        renderGrid(filteredData); 
        Pagination(data.total);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // Render Grid
  function renderGrid(data) {
    let gridData = "";
    data.forEach((product) => {
      gridData += `
        <div class="product-item">
          <a href="description.html?id=${product.id}" class="product-link">
            <img src="${product.thumbnail}" alt="${product.title}" class="product-img" />
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price}</p>
            ${getStarRating(product.rating)}
          </a>
          <button class="add-to-cart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-thumbnail="${product.thumbnail}">Add To Cart</button>
        </div>`;
    });

    document.getElementById("product-grid").innerHTML = gridData;

    // Add event listener to "Add To Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', (event) => {
        const button = event.target;
        const product = {
          id: button.getAttribute('data-id'),
          title: button.getAttribute('data-title'),
          price: button.getAttribute('data-price'),
          thumbnail: button.getAttribute('data-thumbnail')
        };
        addToCart(product);
      });
    });
  }

  function Pagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationHtml = `<a href="#" data-page="1">&laquo;</a>`;

    for (let i = 1; i <= totalPages; i++) {
      paginationHtml += `<a href="#" data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
    }

    paginationHtml += `<a href="#" data-page="${totalPages}">&raquo;</a>`;
    document.querySelector(".pagination").innerHTML = paginationHtml;

    document.querySelectorAll('.pagination a').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const page = parseInt(link.getAttribute('data-page'));
        currentPage = page;
        fetchProductData(currentPage, currentSearch, currentCategory);
      });
    });
  }

  // Search function to filter products based on input
  function search(event) {
    currentSearch = event.target.value;
    currentPage = 1; // Reset to the first page
    fetchProductData(currentPage, currentSearch, currentCategory);
  }

  document.getElementById("search-input").addEventListener("input", search);

  // Fetch and populate product categories in the dropdown
  fetch('https://dummyjson.com/products/categories')
    .then((response) => response.json())
    .then((categories) => {
      const categorySelect = document.getElementById("Category");
      categorySelect.innerHTML = `<option value="all">All Categories</option>`;
      categories.forEach((category) => {
        categorySelect.innerHTML += `<option value="${category.slug}">${category.name}</option>`;
      });
      categorySelect.addEventListener('change', (event) => {
        currentCategory = event.target.value;
        currentPage = 1; // Reset to the first page
        fetchProductData(currentPage, currentSearch, currentCategory);
      });
    })
    .catch((error) => {
      console.error('Error fetching categories:', error);
    });

  fetchProductData(currentPage);

  // Add product to cart
  function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);
    if(existingProduct){
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show cart sidebar instead of redirecting to cart.html
    const cartSidebar = document.getElementById("cart-sidebar");
    if (cartSidebar) {
      cartSidebar.classList.add("open");
      renderCartItems();
    }
  }

 // Render Cart Items
  function renderCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('cart-total-price');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    let cartHtml = '';

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      cartHtml += `
        <div class="cart-item">
          <img src="${item.thumbnail}" alt="${item.title}">
          <div class="cart-item-details">
            <h2>${item.title}</h2>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${itemTotal.toFixed(2)}</p>
          </div>
          <div class="cart-item-actions">
            <button class="remove-item" data-id="${item.id}">Remove</button>
          </div>
        </div>`;
    });
    console.log(`Total Price: ${total}`); 
    cartItemsContainer.innerHTML = cartHtml;
    totalPriceElement.textContent = `$${total.toFixed(2)}`;

    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const itemId = e.target.dataset.id;
        removeFromCart(itemId);
      });
    });
  }
  
  // Remove item from cart
  function removeFromCart(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    renderCartItems();
  }
