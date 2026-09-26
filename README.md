# eCommerce Frontend Project

Welcome to the **eCommerce Frontend** repository. This is a clean, responsive, and structured user interface built using vanilla **HTML5**, **CSS3**, and **JavaScript (ES6)**. It provides separate views and management logic for both customers (Storefront) and administrators (Admin Dashboard).

---

## 📂 Project Structure

Based on your repository tree, here is how the source code is organized:

```text
eCommerceFrontend/
├── CSS/
│   ├── product.css           # Styling for detailed product layouts
│   └── style.css             # Main stylesheet (global layouts, typography, navigation)
├── JS/
│   ├── admin.js              # Base admin logic and core event listeners
│   ├── admin-categories.js   # Admin category management (Add/Edit/Delete)
│   ├── admin-orders.js       # Admin panel tracking and status updates
│   ├── admin-products.js     # Inventory control & product listings management
│   ├── admin-users.js        # User control and role moderation
│   ├── auth.js               # Global authentication helper functions
│   ├── cart.js               # Cart items, local storage sync, calculations
│   ├── login.js              # Logic handling user sign-in forms
│   ├── main.js               # Global app configurations and core UI triggers
│   ├── order-details.js      # Customer order tracking page scripts
│   ├── orders.js             # General customer orders overview management
│   ├── product.js            # Individual product view interaction (variations, sizing)
│   ├── profile.js            # User profile management UI logic
│   └── register.js           # Form handling for user registration and validation
├── admin.html                # Main Administrator Dashboard interface
├── admin-categories.html     # Admin Categories Management page
├── admin-orders.html         # Admin Orders Management page
├── admin-products.html       # Admin Products/Inventory page
├── admin-users.html          # Admin User Moderation portal
├── cart.html                 # Customer Checkout Cart page
├── index.html                # Store Home Page / Landing portal
├── login.html                # User Login form page
├── order-details.html        # Detailed Invoice / Order Track page
├── orders.html               # Customer Order History page
├── product.html              # Individual Single Product Detail view page
├── profile.html              # Customer Account Settings page
└── register.html             # Customer Account Registration page
```

---

## 🚀 Features

### 👤 Customer Facing Website
* **Home Page (`index.html`):** Displays product grids, banner highlights, and primary storefront navigation.
* **Product Management (`product.html`):** Renders item details, handles configuration options (size, color selection) with dynamic UI updates using `JS/product.js`.
* **Shopping Cart (`cart.html`):** Tracks user selections, handles price aggregations, quantities, and persistent state using local storage management (`JS/cart.js`).
* **Authentication Suite (`login.html` & `register.html`):** Form handling, field constraints verification, and credential transport helpers (`JS/login.js`, `JS/register.js`).
* **User Center (`profile.html`, `orders.html`):** Allows customers to view historical actions, tracking information, and updates safely.

### 👑 Administrator Dashboard
* **Main Dashboard (`admin.html`):** Central console mapping metrics and administrative overview logs.
* **Inventory Control (`admin-products.html` & `admin-categories.html`):** Add, modify, or scrap stock categories and product item structures.
* **Fulfillment (`admin-orders.html`):** Access customer purchase listings, update delivery markers, and review logs.
* **User Management (`admin-users.html`):** Audit active registry profiles and adjust configuration variables.

---

## 🛠️ Getting Started & Installation

Since this frontend uses standard, clean vanilla files, **no intricate frameworks or package managers are required** to test it out.

### Prerequisites
A modern, up-to-date web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).

### Local Execution Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```
2. Navigate to your project folder:
   ```bash
   cd repository2
   ```
3. **Launch the project:**
   * Open `index.html` directly in your browser by double-clicking it.
   * *Alternative (Recommended):* Right-click `index.html` within IDE editors like VS Code or Eclipse and leverage tools like **Live Server** to deploy it over a local address (`http://127.0.0.1:5500`).

---

## 🛠️ Technologies Implemented
* **HTML5:** Semantic architecture styling your app sections securely.
* **CSS3:** Responsive structural layout systems utilizing Flexbox/Grid systems.
* **JavaScript (ES6):** Client-side operations, state management tracking, and user event dispatchers.
