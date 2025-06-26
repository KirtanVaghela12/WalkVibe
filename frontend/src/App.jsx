// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Components
import Navbar from './componenst/navbar/navbar';
import HeroSection from './componenst/Herosection';
import Topview from './componenst/topview/Topview';
import Footer from './componenst/footer/Footer';

// ✅ Pages
import CartPage from './pages/Cartpage';
import CategoryPage from './pages/CategoryPage';
import BrandListPage from './pages/BrandListPage';
import BrandProductPage from './pages/BrandProductPage';
import BrandListPageWomen from './pages/BrandListPageWomen';
import BrandProductPageWomen from './pages/BrandProductPageWomen';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage'; // ✅ Import

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Topview />
            </>
          }
        />

        {/* ✅ About Page */}
        <Route path="/about" element={<About />} />

        {/* ✅ MEN Category */}
        <Route path="/category/Men" element={<BrandListPage />} />
        <Route path="/brand/:brand" element={<BrandProductPage />} />

        {/* ✅ WOMEN Category */}
        <Route path="/category/Women" element={<BrandListPageWomen />} />
        <Route path="/brand-women/:brand" element={<BrandProductPageWomen />} />

        {/* ✅ Cart */}
        <Route path="/cart" element={<CartPage />} />

        {/* ✅ Offers */}
        <Route
          path="/offers"
          element={
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h2>🔥 All Offers</h2>
              <p>Explore our best deals, limited-time offers, and more!</p>
            </div>
          }
        />

        {/* ✅ Login & Signup */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* ✅ Fallback */}
        <Route
          path="*"
          element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>404 - Page Not Found</h2>}
        />
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
