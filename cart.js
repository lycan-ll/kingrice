

// document.addEventListener('DOMContentLoaded', () => {
//   const cartSidebar = document.getElementById('cart-sidebar');
//   const menuOverlay = document.querySelector('.menu-overlay');
//   const closeCartButton = document.getElementById('close-cart');
//   const cartIcon = document.querySelector('#cart-icon');

//   function renderCartItems() {
//     const cartItemsContainer = document.querySelector('.cart-items');
//     const totalPriceElement = document.getElementById('cart-total-price');
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let total = 0;
//     let cartHtml = '';


//     cart.forEach(item => {
//       const itemTotal = item.price * item.quantity;
//       total += itemTotal;
//       cartHtml += `
//         <div class="cart-item">
//           <img src="${item.thumbnail}" alt="${item.title}">
//           <div class="cart-item-details">
//             <h2>${item.title}</h2>
//             <p>Price: $${item.price}</p>
//             <p>Quantity: ${item.quantity}</p>
//             <p>Total: $${itemTotal.toFixed(2)}</p>
//           </div>
//           <div class="cart-item-actions">
//             <button class="remove-item" data-id="${item.id}">Remove</button>
//           </div>
//         </div>`;
//     });
//     console.log(`Total Price: ${total}`); 
//     cartItemsContainer.innerHTML = cartHtml;
//     totalPriceElement.textContent = `$${total.toFixed(2)}`;

//     document.querySelectorAll('.remove-item').forEach(button => {
//       button.addEventListener('click', (e) => {
//         const itemId = e.target.dataset.id;
//         removeFromCart(itemId);
//       });
//     });
//   }

//   function removeFromCart(itemId) {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const updatedCart = cart.filter(item => item.id !== itemId);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     renderCartItems();
//   }

//   cartSidebar.addEventListener('click', (e) => {
//     if (e.target.classList.contains('remove-item')) {
//       const itemId = e.target.dataset.id;
//       removeFromCart(itemId);
//     }
//   });

//   cartIcon.addEventListener('click', () => {
//     cartSidebar.classList.add('open');
//     menuOverlay.classList.add('active');
//     renderCartItems();
//   });

//   closeCartButton.addEventListener('click', () => {
//     cartSidebar.classList.remove('open');
//     menuOverlay.classList.remove('active');
//   });

//   menuOverlay.addEventListener('click', () => {
//     cartSidebar.classList.remove('open');
//     menuOverlay.classList.remove('active');
//   });

//   // rendering of cart items and total price
//   renderCartItems();
// });


document.addEventListener('DOMContentLoaded', () => {
  const cartSidebar = document.getElementById('cart-sidebar');
  const menuOverlay = document.querySelector('.menu-overlay');
  const closeCartButton = document.getElementById('close-cart');
  const cartIcons = document.querySelectorAll('#cart-icon, #cart-below-icon');

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

    cartItemsContainer.innerHTML = cartHtml;
    totalPriceElement.textContent = `$${total.toFixed(2)}`;

    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const itemId = e.target.dataset.id;
        removeFromCart(itemId);
      });
    });
  }

  function removeFromCart(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    renderCartItems();
  }

  // Add event listeners to both cart icons to open the cart sidebar
  cartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      cartSidebar.classList.add('open');
      menuOverlay.classList.add('active');
      renderCartItems();
    });
  });

  closeCartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    menuOverlay.classList.remove('active');
  });

  menuOverlay.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    menuOverlay.classList.remove('active');
  });

  // Initially render cart items on page load
  renderCartItems();
});
