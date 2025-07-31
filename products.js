let allProducts = [];
let productsLoaded = 0;
const productsPerLoad = 9;

// Load products from JSON
async function fetchProducts() {
  try {
    const response = await fetch("products_data.json");
    allProducts = await response.json();
    renderInitialProducts();
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

function renderInitialProducts() {
  const grouped = groupByCategory(allProducts);
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  for (const category in grouped) {
    const section = document.createElement("div");
    section.innerHTML = `
      <h3 class="mt-5 mb-3 text-dark">${capitalize(category)}</h3>
      <div class="row g-4 category-section" id="cat-${category}"></div>
    `;
    grid.appendChild(section);

    // Render first batch of products
    renderCategoryProducts(category, grouped[category], true);
  }

  // Show Load More if needed
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.style.display = productsPerLoad < allProducts.length ? "block" : "none";
}

function renderCategoryProducts(category, products, initialLoad = false) {
  const section = document.querySelector(`#cat-${category}`);
  const toRender = products.slice(0, productsLoaded + productsPerLoad);

  section.innerHTML = "";
  toRender.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 product-item";
    col.innerHTML = generateCard(product);
    section.appendChild(col);
  });
}

function groupByCategory(products) {
  return products.reduce((acc, product) => {
    const cat = product.category || "other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});
}

function generateCard(product) {
  const imageHtml = product.image
    ? `<img src="${product.image}" class="img-fluid mb-3" style="max-height:200px;object-fit:cover;" alt="${product.name}">`
    : `<div class="image-placeholder bg-light d-flex align-items-center justify-content-center" style="height: 200px;"><i class="${product.icon || 'fas fa-box'} text-primary" style="font-size: 3rem;"></i></div>`;

  return `
    <div class="card h-100 shadow-sm">
      <div class="card-body text-center">
        ${imageHtml}
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text text-muted">${product.description}</p>
        <p><strong>₵${product.price}</strong> <del class="text-muted">₵${product.oldPrice || ""}</del></p>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" onclick='showProductDetails(${JSON.stringify(product)})'>
            <i class="fas fa-eye me-1"></i> View Details
          </button>
          <button class="btn btn-warning" onclick='openPreorderModal(${JSON.stringify(product)})'>
            <i class="fas fa-shopping-cart me-1"></i> Pre-Order
          </button>
        </div>
      </div>
    </div>
  `;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function loadMoreProducts() {
  productsLoaded += productsPerLoad;
  renderInitialProducts();
}

function showProductDetails(product) {
  const modal = new bootstrap.Modal(document.getElementById("productDetailsModal"));
  document.getElementById("productModalTitle").innerText = product.name;
  document.getElementById("productModalBody").innerHTML = `
    <img src="${product.image}" class="img-fluid mb-3" alt="${product.name}">
    <p>${product.description}</p>
    <p><strong>Price:</strong> ₵${product.price}</p>
  `;
  modal.show();
}

function openPreorderModal(productName, productPrice) {
  const modal = new bootstrap.Modal(document.getElementById("preorderModal"));
  document.getElementById("selectedProduct").value = `${productName} (${productPrice})`;
  modal.show();
}


function submitPreorder() {
  const product = document.getElementById("selectedProduct").value;
  const name = document.getElementById("customerName").value.trim();
  const email = document.getElementById("customerEmail").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const quantity = document.getElementById("quantity").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!name || !email || !phone || !quantity) {
    alert("Please fill in all required fields.");
    return;
  }

  const message = `
📦 *New Pre-Order Notification*

🛍️ Product: ${product}
👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
🔢 Quantity: ${quantity}
📝 Notes: ${notes || "N/A"}
🕒 Time: ${new Date().toLocaleString()}

– Odisika Import
  `;

  // Option 1: Modern WhatsApp automation (for backend, Apps Script, or webhook)
  // For now, simulate sending:
  const adminNumber = "233209707452"; // Replace with your actual admin number
  const encoded = encodeURIComponent(message);
  const url = `https://api.whatsapp.com/send?phone=${adminNumber}&text=${encoded}`;

  window.open(url, "_blank");

  // Optionally reset form and close modal
  document.getElementById("preorderForm").reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById("preorderModal"));
  if (modal) modal.hide();
}



window.onload = fetchProducts;
