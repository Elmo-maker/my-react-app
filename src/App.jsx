import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PaymentSuccess from "./pages/PaymentSuccess";
import EventDetail from "./pages/EventDetail";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

// HELP (folder help/)
import Privacy from "./pages/help/Privacy";
import Support from "./pages/help/Support";
import Updates from "./pages/help/Updates";
import NewTicket from "./pages/help/NewTicket";

// LEGAL (folder legal/)
import Guides from "./pages/legal/Guides";
import Terms from "./pages/legal/Terms";

// SOCIAL (folder social/)
import Instagram from "./pages/social/Instagram";
import Tiktok from "./pages/social/tiktok";
import Youtube from "./pages/social/Youtube";

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-20 min-h-screen bg-gray-50">
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

          {/* HELP — sesuai folder kamu */}
          <Route path="/help/privacy" element={<Privacy />} />
          <Route path="/help/support" element={<Support />} />
          <Route path="/help/updates" element={<Updates />} />
          <Route path="/help/new-ticket" element={<NewTicket />} />

          {/* LEGAL — sesuai folder kamu */}
          <Route path="/legal/guides" element={<Guides />} />
          <Route path="/legal/terms" element={<Terms />} />

          {/* SOCIAL — sesuai folder kamu */}
          <Route path="/social/instagram" element={<Instagram />} />
          <Route path="/social/tiktok" element={<Tiktok />} />
          <Route path="/social/youtube" element={<Youtube />} />

        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
