import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <>
      <Navbar />

      <div className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-blue-100">
              Need help or want to say hi? Reach us via Email or WhatsApp!
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">📧</div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Email</h2>
              <p className="text-gray-600 mb-4">elmorafiutomo@gmail.com</p>
              <a
                href="mailto:elmorafiutomo@gmail.com"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                Send Email
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">💬</div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">WhatsApp</h2>
              <p className="text-gray-600 mb-4">+62 857 1801 4006</p>
              <a
                href="https://wa.me/6285718014006"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
