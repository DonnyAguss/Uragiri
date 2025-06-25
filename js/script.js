feather.replace();
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
});

// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");
if (searchButton) {
  searchButton.onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
  };
}

// Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartButton = document.querySelector("#shopping-cart-button");
if (shoppingCartButton) {
  shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
  };
}

// klik di luar sidebar untuk menghilangkan elemen
const hm = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchForm.contains(e.target) && (!searchButton || !searchButton.contains(e.target))) {
    searchForm.classList.remove("active");
  }
  if (!shoppingCart.contains(e.target) && (!shoppingCartButton || !shoppingCartButton.contains(e.target))) {
    shoppingCart.classList.remove("active");
  }
});

// Modal produk (eye icon)
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const closeIcon = document.querySelector(".close-icon");

// Ambil elemen di dalam modal
const modalImg = itemDetailModal.querySelector(".modal-content img");
const modalTitle = itemDetailModal.querySelector(".modal-content h3");
const modalPrice = itemDetailModal.querySelector(".modal-content .product-price");
const modalDesc = itemDetailModal.querySelector(".modal-content p");

// Buka modal saat icon eye diklik
itemDetailButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (modalImg && modalTitle && modalPrice && modalDesc) {
      modalImg.src = btn.getAttribute("data-image");
      modalTitle.textContent = btn.getAttribute("data-title");
      modalPrice.textContent = btn.getAttribute("data-price");
      modalDesc.textContent = btn.getAttribute("data-desc");
    }
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  });
});

// Tutup modal saat icon close diklik
closeIcon.addEventListener("click", function (e) {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});

// Tutup modal jika klik di luar modal-container
itemDetailModal.addEventListener("click", function (e) {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
});
