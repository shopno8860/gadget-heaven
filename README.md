# Gadget Haven

A modern, full-featured e-commerce platform for browsing and purchasing the latest gadgets and electronics. Built with React and modern web technologies for a seamless shopping experience.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Key Components](#key-components)
- [Context API](#context-api)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Gadget Haven is a comprehensive e-commerce application designed to showcase modern web development practices. It provides users with an intuitive interface to explore, compare, and purchase electronic gadgets including computers, phones, smartwatches, and more.

---

## Features

✨ **Core Functionality**
- 📱 Browse and filter products by categories
- 🛒 Shopping cart management with persistent storage
- ❤️ Wishlist functionality for saving favorite items
- 📊 Product statistics and analytics dashboard
- 🔍 Detailed product information and specifications
- ⭐ Product ratings and reviews
- 📈 Sales and performance analytics

🎨 **User Experience**
- 🌓 Dark/Light theme toggle
- 🎯 Responsive design for all devices
- ⚡ Fast page loads with Vite optimization
- 🔔 Toast notifications for user feedback
- 🧭 Intuitive navigation and routing

---

## Tech Stack

**Frontend Framework & Build Tool**
- **React 19** - UI library with hooks and functional components
- **Vite 7** - Next-generation front-end build tool

**Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

**Routing & State Management**
- **React Router DOM** - Client-side routing
- **Context API** - Global state management (Cart, Wishlist, Theme)

**Visualization & UI Enhancements**
- **Recharts** - Composable charting library for statistics
- **React Icons** - Popular icon library
- **React Hot Toast** - Toast notifications

**Development & Quality**
- **ESLint** - Code quality and consistency
- **Node.js modules** - ES modules for modern JavaScript

---

## Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gadget-haven.git
   cd gadget-heaven
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

---

## Getting Started

### Development Workflow

1. **Run development server**
   ```bash
   npm run dev
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Preview production build**
   ```bash
   npm run preview
   ```

4. **Lint code**
   ```bash
   npm run lint
   ```

---

## Project Structure

```
gadget-heaven/
├── public/
│   ├── data.json              # Product data source
│   └── _redirects            # Netlify redirects configuration
├── src/
│   ├── assets/               # Static assets (images, fonts)
│   ├── components/           # Reusable React components
│   │   ├── Banner.jsx        # Hero banner section
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Footer.jsx        # Footer component
│   │   ├── CategorySidebar.jsx # Product categories filter
│   │   ├── GadgetCard.jsx    # Product card display
│   │   └── ProductCard.jsx   # Individual product card
│   ├── context/              # Context API providers
│   │   ├── CartContext.jsx   # Shopping cart state
│   │   ├── WishContext.jsx   # Wishlist state
│   │   ├── ThemeContext.jsx  # Theme preference state
│   │   └── WishlistContext.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx    # Main layout wrapper
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Homepage
│   │   ├── Dashboard.jsx     # Cart & wishlist dashboard
│   │   ├── ProductDetails.jsx # Detailed product view
│   │   ├── Statistics.jsx    # Analytics dashboard
│   │   ├── About.jsx         # About page
│   │   └── ErrorPage.jsx     # 404 error page
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Application entry point
│   ├── App.css               # Global styles
│   └── index.css             # Base styles
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── eslint.config.js          # ESLint rules
└── README.md                 # This file
```

---

## Usage

### Browsing Products

1. Navigate to the homepage to view all available gadgets
2. Use the **Category Sidebar** to filter products by type (Computers, Phones, etc.)
3. Click on a product card to view detailed information

### Shopping Cart

- Add products to your cart with the **"Add to Cart"** button
- Access your cart from the **Dashboard**
- Modify quantities and remove items as needed
- View order summary and proceed to checkout

### Wishlist

- Click the heart icon to add products to your wishlist
- Access saved items from the **Dashboard**
- Compare wishlist items side-by-side

### Theme Customization

- Toggle between light and dark themes using the theme switcher in the navbar
- Your preference is persisted across sessions

### Statistics & Analytics

- Navigate to the **Statistics** page to view:
  - Sales data visualization
  - Product performance metrics
  - Category-wise distribution

---

## Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| Development | `npm run dev` | Start development server with HMR |
| Build | `npm run build` | Create optimized production build |
| Preview | `npm run preview` | Preview production build locally |
| Lint | `npm run lint` | Check code quality and consistency |

---

## Key Components

### Navbar
- Logo and branding
- Navigation links
- Theme toggle
- Cart indicator

### Banner
- Hero section with call-to-action
- Category showcase

### GadgetCard / ProductCard
- Product image and title
- Price display
- Rating information
- Add to cart/wishlist buttons

### Dashboard
- Shopping cart management
- Wishlist display
- Order summary

### ProductDetails
- Comprehensive product information
- Specifications and features
- Customer reviews and ratings
- Add to cart/wishlist actions

---

## Context API

The application uses React Context API for global state management:

### CartContext
Manages shopping cart state including:
- Cart items and quantities
- Add/remove item operations
- Cart total calculations

### WishlistContext
Manages user's favorite items:
- Add/remove from wishlist
- Wishlist persistence

### ThemeContext
Manages application theme:
- Light/Dark mode toggle
- Theme persistence

---

## Development Best Practices

- **Component Structure**: Keep components small and focused on a single responsibility
- **State Management**: Use Context API for global state; useState for local component state
- **Styling**: Leverage Tailwind CSS utility classes for consistency
- **Routing**: Use React Router's nested routing for maintainable navigation
- **Code Quality**: Run `npm run lint` before committing code
- **Performance**: Optimize images and use React's built-in performance tools

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's ESLint configuration and maintains consistency with the existing codebase.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Support & Contact

For support, questions, or feedback:
- Open an issue on GitHub
- Contact the development team
- Visit our website

---

## Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Charts powered by [Recharts](https://recharts.org/)
- Notifications with [React Hot Toast](https://react-hot-toast.com/)

---

## Developer

**Rakesh Al Yadin**
- Email: [shopno8860@gmail.com](mailto:shopno8860@gmail.com)

---

**Happy Shopping! 🛍️**
