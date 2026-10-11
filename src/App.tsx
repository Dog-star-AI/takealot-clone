import React from 'react';
import { AppProvider } from './context/AppContext';
import { TopBar } from './components/Header/TopBar';
import { Navbar } from './components/Header/Navbar';
import { DepartmentNav } from './components/Header/DepartmentNav';
import { HeroBanner } from './components/Hero/HeroBanner';
import { DepartmentIcons } from './components/Hero/DepartmentIcons';
import { DailyDealsSection } from './components/Deals/DailyDealsSection';
import { ProductGrid } from './components/Product/ProductGrid';
import { ProductDetailModal } from './components/Product/ProductDetailModal';
import { CartDrawer } from './components/Cart/CartDrawer';
import { WishlistDrawer } from './components/Wishlist/WishlistDrawer';
import { CheckoutModal } from './components/Checkout/CheckoutModal';
import { OrderSuccessModal } from './components/Checkout/OrderSuccessModal';
import { Toast } from './components/UI/Toast';
import { Footer } from './components/Footer/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f4] text-[#333333]">
      {/* Top Header Bars */}
      <TopBar />
      <Navbar />
      <DepartmentNav />

      {/* Main Page Content */}
      <main className="flex-1">
        <HeroBanner />
        <DepartmentIcons />
        <DailyDealsSection />
        <ProductGrid />
      </main>

      {/* Modals & Overlays */}
      <ProductDetailModal />
      <CartDrawer />
      <WishlistDrawer />
      <CheckoutModal />
      <OrderSuccessModal />
      <Toast />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
