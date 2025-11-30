import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";

// Main Pages
import Home from "./pages/Home.jsx";
import FAQ from "./pages/FAQ.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import Checkout from "./pages/Checkout.jsx";
import Payment from "./pages/Payment.jsx";

// HELP (folder help/)
import Privacy from "./pages/help/Privacy.jsx";
import Support from "./pages/help/Support.jsx";
import Updates from "./pages/help/Updates.jsx";
import NewTicket from "./pages/help/NewTicket.jsx";

// LEGAL (folder legal/)
import Guides from "./pages/legal/Guides.jsx";
import Terms from "./pages/legal/Terms.jsx";
import HakUser from "./pages/legal/HakUser.jsx";
import Responsibilites from "./pages/legal/Responsibilites.jsx";
import Refund from "./pages/legal/Refund.jsx";

// SOCIAL (folder social/)
import Instagram from "./pages/social/Instagram.jsx";
import Tiktok from "./pages/social/Tiktok.jsx";
import Youtube from "./pages/social/Youtube.jsx";

function App() {
  return (
    <>
      <Navbar />

      {/* INI ADALAH PERUBAHAN KRITIS: HANYA ADA bg-gray-50 */}
      <div className="bg-gray-50">
        <Routes>

          {/* MAIN */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />

          {/* HELP */}
          <Route path="/help/privacy" element={<Privacy />} />
          <Route path="/help/support" element={<Support />} />
          <Route path="/help/updates" element={<Updates />} />
          <Route path="/help/new-ticket" element={<NewTicket />} />

          {/* LEGAL */}
          <Route path="/legal/guides" element={<Guides />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/hak-user" element={<HakUser />} />
          <Route path="/legal/responsibilities" element={<Responsibilites />} />
          <Route path="/legal/refund" element={<Refund />} />

          {/* SOCIAL */}
          <Route path="/social/instagram" element={<Instagram />} />
          <Route path="/social/tiktok" element={<Tiktok />} />
          <Route path="/social/youtube" element={<Youtube />} />
          
          {/* 404 CATCH-ALL */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;