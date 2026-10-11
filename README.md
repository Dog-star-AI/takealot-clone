# Takealot.com Clone

A responsive, feature-packed clone of **Takealot.com** (South Africa's leading online store) built with **React**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Branded Takealot Interface & Styling**:
  - Iconic Takealot Blue (`#0b79bf`), Deal Orange (`#f97316`), and Cart Green (`#1c9444`).
  - Top bar with South African location selector ("Deliver to: Sandton, JHB", "Sea Point, CPT", etc.) and live order tracking.
  - Search bar with department selection, clear buttons, and live keyword matching.
  - "Shop by Department" mega flyout menu with 7 distinct departments and subcategories.

- **Authentic South African Catalog**:
  - South African Rand pricing (`R 1,499`, `R 17,999`, etc.), list price strikethroughs, and discount badges.
  - eBucks rewards earning badges (`eB 14,990`).
  - Warehouse availability tags (`JHB & CPT`, `JHB`, `CPT` stock).
  - Next-Day Delivery eligibility tags with green truck badges.
  - Local favourites: Load-shedding power stations (EcoFlow), Weber kettle braais, Simonsberg Pinotage, Inverroche fynbos craft gin, PlayStation 5, MacBooks, Smart Air Fryers, and more.

- **Urgent Daily Deals Section**:
  - Live ticking countdown timer ("Deals end in: 07h 38m 44s").
  - Stock scarcity meter ("Only 6 left in stock at JHB warehouse").
  - Quick Add to Cart.

- **Refined Filtering & Sorting**:
  - Filter by Department, Category, Brand, Price Range (Min/Max Rands), Customer Rating (4★+), In-Stock at Warehouse, Next-Day Delivery, and Daily Deals.
  - Sort by Featured, Price (Low to High), Price (High to Low), Highest Rated, and Biggest Discount.

- **Product Detail Modal**:
  - Multi-image gallery with thumbnail switcher.
  - Full product description, key bullet points, and technical specifications table.
  - "Want it tomorrow?" delivery urgency prompt.
  - Quantity picker, "Add to Cart", and one-click "Buy Now".

- **Interactive Cart & Checkout**:
  - Slide-out Cart Drawer with animated **Free Delivery Progress Bar** (unlocks free delivery over R500).
  - Multi-step checkout modal with Door Delivery vs. **Takealot Pickup Point collection** (Richmond Park, Midrand, Sandton, Umhlanga, Menlyn).
  - South African payment methods: Credit/Debit Card, Ozow Instant EFT, eBucks, and Payflex (4 installments).
  - **Live Order Tracking Simulation**: Order Placed → Packing at Warehouse → Out for Delivery → Delivered with unique `TSA-` order reference numbers.

- **Wishlist & Toasts**:
  - Save items to wishlist with heart count badge, 1-click "Move to Cart".
  - Floating toast notifications for every user action.

## Running Locally

```bash
cd /home/sebata/.gemini/antigravity/scratch/takealot-clone
npm install
npm run dev
```

Visit the app at [http://localhost:3001](http://localhost:3001).
