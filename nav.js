

// class SpecialHeader extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//       <section id="header">
//         <div class="logo-container">
//           <img src="/images/logo.png" alt="Logo" class="logo" />
//         </div>
//         <nav>
//           <ul class="nav-links">
//             <li><a href="/index/index.html">Home</a></li>
//             <li><a href="/shop/shop.html">Shop</a></li>
//             <li>
//               <a href="#" id="category-link"></a>
//               <select name="category" id="Category">
//                 <option value="">All Categories</option>
//               </select>
//             </li>
//             <li><a href="#" id="cart-icon">Cart<i class="fa fa-shopping-cart"></i></a></li>
//           </ul>
//           <div class="menu-icon" id="menu-icon">
//             <i class="fa fa-bars"></i>
//           </div>
//         </nav>
//         <div id="cart-sidebar" class="cart-sidebar">
//           <button id="close-cart" class="close-cart">&times;</button>
//           <h2>Your Cart</h2>
//           <div class="cart-items"></div>
//           <div class="cart-summary">
//             <p>Total: <span id="cart-total-price">$0.00</span></p>
//             <button id="checkout-button">Checkout</button>
//           </div>
//         </div>
//       </section>

//     `;

//     const menuIcon = this.querySelector("#menu-icon");
//     const navLinks = this.querySelector(".nav-links");
//     const overlay = document.createElement("div");
//     overlay.classList.add("menu-overlay");
//     document.body.appendChild(overlay);

//     // Toggle mobile menu
//     menuIcon.addEventListener("click", () => {
//       navLinks.classList.toggle("nav-active");
//       overlay.classList.toggle("overlay-active");
//     });

//     // Close mobile menu when clicking outside
//     overlay.addEventListener("click", () => {
//       navLinks.classList.remove("nav-active");
//       overlay.classList.remove("overlay-active");
//     });

//     // Open cart sidebar
//     this.querySelector("#cart-icon").addEventListener("click", () => {
//       document.getElementById("cart-sidebar").classList.add("open");
//     });

//     // Close cart sidebar
//     document.getElementById("close-cart").addEventListener("click", () => {
//       document.getElementById("cart-sidebar").classList.remove("open");
//     });

//     this.loadCategories();
//   }

//   async loadCategories() {
//     try {
//       const response = await fetch('https://dummyjson.com/products/categories');
//       const categories = await response.json();
//       const categorySelect = document.getElementById("Category");

//       categories.forEach((category) => {
//         const option = document.createElement("option");
//         option.value = category.slug;
//         option.textContent = category.name;
//         categorySelect.appendChild(option);
//       });

//       categorySelect.addEventListener('change', (event) => {
//         const category = event.target.value;
//         if (category) {
//           window.open(`/category/category.html?category=${encodeURIComponent(category)}`, '_blank');
//         }
//       });
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   }
// }

// customElements.define("special-header", SpecialHeader);



// class SpecialFooter extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//       <footer>
//         <div class="end">
//           <div class="one">
//             <img src="/images/7.jpg" alt="About Image">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptas?</p>
//             <p style="line-height: 4;">izaanvohra40@gmail.com</p>
//           </div>
//           <div class="explore">
//             <h2>Explore</h2>
//             <ul>
//               <li><a href="/index/index.html">Home</a></li>
//               <li><a href="/shop/shop.html">Shop</a></li>
//               <li>About</li>
//               <li>Skills</li>
//               <li>Projects</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//           <div class="follow">
//             <h2>Follow Me</h2>
//             <img src="/images/instagram.png" alt="Instagram" height="40rem">
//             <img src="/images/facebook.png" alt="Facebook" height="40rem">
//             <img src="/images/twitter.png" alt="Twitter" height="40rem">
//             <img src="/images/linkedin.png" alt="LinkedIn" height="40rem">
//             <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.0435293336805!2d67.05781131062027!3d24.858438277838612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f61f7ff7ffb%3A0x4a327d1cb63b0875!2sSolCoders!5e1!3m2!1sen!2s!4v1726050571135!5m2!1sen!2s" width="" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
//           </div>
//         </div>
//         <div class="copyright">
//           <div class="copy">
//             <p>All Rights Reserved &copy; 2024 Credeisgn</p>
//           </div>
//           <div class="term">
//             <p>Terms</p>
//           </div>
//           <div class="condition">
//             <p>Conditions</p>
//           </div>
//         </div>
//       </footer>`
//     ;
//   }
// }
// customElements.define("special-footer", SpecialFooter);


class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="header">
        <div class="logo-container">
          <img src="logo.png" alt="Logo" class="logo" />
        </div>
        <nav>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li>
              <a href="#" id="category-link"></a>
              <select name="category" id="Category">
                <option value="">All Categories</option>
              </select>
            </li>
            <li><a href="#" id="cart-icon">Cart<i class="fa fa-shopping-cart"></i></a></li>
          </ul>
          <div class="menu-icon" id="menu-icon">
            <i class="fa fa-bars"></i>
          </div>
        </nav>
      </section>

      <!-- Cart Icon Section -->
      <div class="cart-container">
        <a href="#" id="cart-below-icon">
          <i class="fa fa-shopping-cart"></i>
        </a>
      </div>

      <div id="cart-sidebar" class="cart-sidebar">
        <button id="close-cart" class="close-cart">&times;</button>
        <h2>Your Cart</h2>
        <div class="cart-items"></div>
        <div class="cart-summary">
          <p>Total: <span id="cart-total-price">$0.00</span></p>
          <button id="checkout-button">Checkout</button>
        </div>
      </div>
    `;

    const menuIcon = this.querySelector("#menu-icon");
    const navLinks = this.querySelector(".nav-links");
    const overlay = document.createElement("div");
    overlay.classList.add("menu-overlay");
    document.body.appendChild(overlay);

    // Toggle mobile menu
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
      overlay.classList.toggle("overlay-active");
    });

    // Close mobile menu when clicking outside
    overlay.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
      overlay.classList.remove("overlay-active");
    });

    // Open cart sidebar from top navbar
    this.querySelector("#cart-icon").addEventListener("click", () => {
      document.getElementById("cart-sidebar").classList.add("open");
      renderCartItems();  // Call renderCartItems here to ensure cart is displayed
    });

    // Open cart sidebar from below navbar cart icon
    this.querySelector("#cart-below-icon").addEventListener("click", () => {
      document.getElementById("cart-sidebar").classList.add("open");
      renderCartItems();  // Call renderCartItems here as well
    });

    // Close cart sidebar
    document.getElementById("close-cart").addEventListener("click", () => {
      document.getElementById("cart-sidebar").classList.remove("open");
    });

    this.loadCategories();
  }

  async loadCategories() {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      const categories = await response.json();
      const categorySelect = document.getElementById("Category");

      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.slug;
        option.textContent = category.name;
        categorySelect.appendChild(option);
      });

      categorySelect.addEventListener('change', (event) => {
        const category = event.target.value;
        if (category) {
          window.open(`category.html?category=${encodeURIComponent(category)}`, '_blank');
        }
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }
}

customElements.define("special-header", SpecialHeader);
class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="end">
          <div class="one">
            <img src="7.jpg" alt="About Image">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptas?</p>
            <p style="line-height: 4;">izaanvohra40@gmail.com</p>
          </div>
          <div class="explore">
            <h2>Explore</h2>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div class="follow">
            <h2>Follow Me</h2>
            <img src="instagram.png" alt="Instagram" height="40rem">
            <img src="facebook.png" alt="Facebook" height="40rem">
            <img src="twitter.png" alt="Twitter" height="40rem">
            <img src="linkedin.png" alt="LinkedIn" height="40rem">
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.0435293336805!2d67.05781131062027!3d24.858438277838612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f61f7ff7ffb%3A0x4a327d1cb63b0875!2sSolCoders!5e1!3m2!1sen!2s!4v1726050571135!5m2!1sen!2s" width="" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          </div>
        </div>
        <div class="copyright">
          <div class="copy">
            <p>All Rights Reserved &copy; 2024 Credeisgn</p>
          </div>
          <div class="term">
            <p>Terms</p>
          </div>
          <div class="condition">
            <p>Conditions</p>
          </div>
        </div>
      </footer>`
    ;
  }
}
customElements.define("special-footer", SpecialFooter);