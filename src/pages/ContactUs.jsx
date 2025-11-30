import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <Navbar />

      {/* Background Utama: Tema Gelap */}
      <div className="bg-gray-950 text-white min-h-screen"> 
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full 
                             bg-indigo-900/50 text-indigo-400 border border-indigo-700/50 tracking-wider uppercase">
                    Hubungi Kami
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
                Siap Membantu Anda
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tim kami selalu siap sedia. Silakan kirimkan pertanyaan, *feedback*, atau sapaan Anda melalui opsi di bawah.
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="h-10"></div>

        {/* Contact Options (Grid) */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* OPSI 1: Email (Menggunakan mailto: yang berfungsi) */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700/50 text-center 
                          hover:shadow-indigo-500/10 transition duration-300 transform hover:-translate-y-1">
              
              <Mail size={48} className="text-indigo-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-white">Email Support</h2>
              <p className="text-gray-400 mb-4 font-light">officialfestify@gmail.com</p>
              <a
                href="mailto:officialfestify@gmail.com" 
                  /* Pastikan menggunakan 'mailto:' untuk membuka email client */
                className="inline-flex items-center space-x-2 text-indigo-400 font-semibold mt-4 hover:text-indigo-300 transition"
              >
                <span>Kirim Email</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* OPSI 2: WhatsApp (Di-highlight sebagai Paling Cepat) */}
            <div className="bg-indigo-600 p-8 rounded-xl shadow-2xl border border-indigo-500/70 text-center 
                          hover:shadow-indigo-400/20 transition duration-300 transform hover:-translate-y-1">
              
              <MessageCircle size={48} className="text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-white">Live Chat (WA)</h2>
              <p className="text-indigo-100 mb-4 font-light">+62 857 1801 4006</p>
              <a
                href="https://wa.me/6285718014006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white font-semibold mt-4 hover:text-gray-200 transition"
              >
                <span>Chat Langsung</span>
                <ArrowRight size={18} />
              </a>
            </div>
            
            {/* OPSI 3: Telepon */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700/50 text-center 
                          hover:shadow-indigo-500/10 transition duration-300 transform hover:-translate-y-1">
              
              <Phone size={48} className="text-indigo-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-white">Customer Service</h2>
              <p className="text-gray-400 mb-4 font-light">Senin-Jumat, 09:00 - 17:00 WIB</p>
              <a
                href="tel:+6285718014006"
                className="inline-flex items-center space-x-2 text-indigo-400 font-semibold mt-4 hover:text-indigo-300 transition"
              >
                <span>Panggil Kami</span>
                <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </section>

        {/* Separator */}
        <div className="h-16"></div>

      </div>

      
    </>
  );
}