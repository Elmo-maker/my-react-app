// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";

// // Main Pages
// import Home from "./pages/Home.jsx";
// import FAQ from "./pages/FAQ.jsx";
// import AboutUs from "./pages/AboutUs.jsx";
// import ContactUs from "./pages/ContactUs.jsx";
// import PaymentSuccess from "./pages/PaymentSuccess.jsx";
// import EventDetail from "./pages/EventDetail.jsx";
// import Checkout from "./pages/Checkout.jsx";
// import Payment from "./pages/Payment.jsx";
// import Dashboard from "./pages/admin/Dashboard.jsx";
// import Events from "./pages/admin/Events.jsx";
// import Tickets from "./pages/admin/Tickets.jsx";
// import Transactions from "./pages/admin/Transactions.jsx";


// // HELP (folder help/)
// import Privacy from "./pages/help/Privacy.jsx";
// import Support from "./pages/help/Support.jsx";
// import Updates from "./pages/help/Updates.jsx";
// import NewTicket from "./pages/help/NewTicket.jsx";

// // LEGAL (folder legal/)
// import Guides from "./pages/legal/Guides.jsx";
// import Terms from "./pages/legal/Terms.jsx";
// import HakUser from "./pages/legal/HakUser.jsx";
// import Responsibilites from "./pages/legal/Responsibilites.jsx";
// import Refund from "./pages/legal/Refund.jsx";

// // SOCIAL (folder social/)
// import Instagram from "./pages/social/Instagram.jsx";
// import Tiktok from "./pages/social/Tiktok.jsx";
// import Youtube from "./pages/social/Youtube.jsx";

// function App() {
//   return (
//     <>
//       <Navbar />

//       {/* INI ADALAH PERUBAHAN KRITIS: HANYA ADA bg-gray-50 */}
//       <div className="bg-gray-50">
//         <Routes>

//           {/* MAIN */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/event/:id" element={<EventDetail />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/payment/success" element={<PaymentSuccess />} />
//           <Route path="/admin" element={<Dashboard />} />
//           <Route path="/admin/events" element={<Events />} />
//           <Route path="/admin/tickets" element={<Tickets />} />
//           <Route path="/admin/transactions" element={<Transactions />} />

//           {/* HELP */}
//           <Route path="/help/privacy" element={<Privacy />} />
//           <Route path="/help/support" element={<Support />} />
//           <Route path="/help/updates" element={<Updates />} />
//           <Route path="/help/new-ticket" element={<NewTicket />} />

//           {/* LEGAL */}
//           <Route path="/legal/guides" element={<Guides />} />
//           <Route path="/legal/terms" element={<Terms />} />
//           <Route path="/legal/hak-user" element={<HakUser />} />
//           <Route path="/legal/responsibilities" element={<Responsibilites />} />
//           <Route path="/legal/refund" element={<Refund />} />

//           {/* SOCIAL */}
//           <Route path="/social/instagram" element={<Instagram />} />
//           <Route path="/social/tiktok" element={<Tiktok />} />
//           <Route path="/social/youtube" element={<Youtube />} />
          
//           {/* 404 CATCH-ALL */}
//           {/* <Route path="*" element={<NotFound />} /> */}

//         </Routes>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";

// Layout & Halaman Admin
import AdminLayout from "./components/layouts/AdminLayout";   // <-- PASTIKAN FILE INI ADA
import Dashboard from "./pages/admin/Dashboard";
import Events from "./pages/admin/Events";
import Tickets from "./pages/admin/Tickets";
import Transactions from "./pages/admin/Transactions";
import CreateEvent from "./pages/admin/events/CreateEvent";
import EditEvent from "./pages/admin/events/EditEvent";


// Halaman User
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import EventDetail from "./pages/EventDetail";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";

// Help, Legal, Social
import Privacy from "./pages/help/Privacy";
import Support from "./pages/help/Support";
import Updates from "./pages/help/Updates";
import NewTicket from "./pages/help/NewTicket";
import Guides from "./pages/legal/Guides";
import Terms from "./pages/legal/Terms";
import HakUser from "./pages/legal/HakUser";
import Responsibilites from "./pages/legal/Responsibilites";
import Refund from "./pages/legal/Refund";
import Instagram from "./pages/social/Instagram";
import Tiktok from "./pages/social/Tiktok";
import Youtube from "./pages/social/Youtube";

// Komponen
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  // KALAU SEDANG DI /admin → PAKAI ADMIN LAYOUT (tanpa navbar/footer user)
  if (isAdmin) {
    return (
      <AdminLayout>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/events" element={<Events />} />
          <Route path="/admin/tickets" element={<Tickets />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/events/create" element={<CreateEvent />} />
          <Route path="/admin/events/edit/:id" element={<EditEvent />} />
        </Routes>
      </AdminLayout>
    );
  }

  // KALAU BUKAN ADMIN → TAMPILAN USER BIASA (navbar + footer + bg-gray-50)
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />

          <Route path="/help/privacy" element={<Privacy />} />
          <Route path="/help/support" element={<Support />} />
          <Route path="/help/updates" element={<Updates />} />
          <Route path="/help/new-ticket" element={<NewTicket />} />

          <Route path="/legal/guides" element={<Guides />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/hak-user" element={<HakUser />} />
          <Route path="/legal/responsibilities" element={<Responsibilites />} />
          <Route path="/legal/refund" element={<Refund />} />

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