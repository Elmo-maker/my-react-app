import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronDown, HelpCircle } from "lucide-react"; // Ikon modern

export default function FAQ() {
  // Contoh data FAQ
  const faqs = [
    {
      question: "Bagaimana cara membeli tiket di FESTIFY?",
      answer:
        "Anda bisa membeli tiket dengan memilih event, memilih kategori tiket, lalu melakukan pembayaran melalui metode yang tersedia. Prosesnya cepat dan terjamin keamanannya.",
    },
    {
      question: "Apakah tiket yang dibeli bisa dikembalikan (refund)?",
      answer:
        "Kebijakan pengembalian tiket (refund) sangat tergantung pada event dan promotor. Beberapa event memungkinkan refund dengan syarat tertentu, beberapa tidak. Pastikan membaca syarat dan ketentuan spesifik event sebelum melakukan pembelian.",
    },
    {
      question: "Bagaimana jika saya kehilangan tiket digital?",
      answer:
        "Tiket digital tersimpan dengan aman di akun FESTIFY Anda. Anda bisa login ke dasbor pengguna Anda untuk mengunduh ulang tiket kapan saja. Jika masih bermasalah, segera hubungi support kami via Email atau WhatsApp.",
    },
    {
      question: "Apakah FESTIFY memiliki aplikasi mobile?",
      answer:
        "Saat ini FESTIFY masih beroperasi penuh melalui platform web yang responsif. Rencana pengembangan aplikasi mobile untuk iOS dan Android sedang dalam tahap perencanaan dan diharapkan segera tersedia.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      {/* Background Utama: Tema Gelap */}
      <div className="bg-gray-950 text-white min-h-screen">
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <HelpCircle size={48} className="text-indigo-400 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
                Pertanyaan Umum (FAQ)
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Kami telah mengumpulkan jawaban untuk pertanyaan yang paling sering diajukan tentang layanan FESTIFY.
            </p>
          </div>
        </section>

        {/* FAQ List / Accordion */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                // Kontainer Accordion: Latar belakang gelap, border halus
                className={`p-6 rounded-xl shadow-xl transition duration-300 border 
                           ${openIndex === index 
                                ? 'bg-gray-800 border-indigo-500' 
                                : 'bg-gray-800/80 border-gray-700 hover:border-indigo-600/50'}`
                           }
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Pertanyaan */}
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  
                  {/* Ikon Panah */}
                  <ChevronDown 
                        size={24} 
                        className={`text-indigo-400 transition-transform duration-300 
                                   ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                    />
                </div>

                {/* Jawaban (Tergantung status openIndex) */}
                {openIndex === index && (
                  <p className="mt-4 pt-4 border-t border-gray-700 text-gray-400 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Padding Bawah Tambahan */}
        <div className="h-10"></div>
        
      </div>
     
    </>
  );
}