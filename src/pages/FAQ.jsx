import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  // Contoh data FAQ
  const faqs = [
    {
      question: "Bagaimana cara membeli tiket di FESTIFY?",
      answer:
        "Anda bisa membeli tiket dengan memilih event, memilih kategori tiket, lalu melakukan pembayaran melalui metode yang tersedia.",
    },
    {
      question: "Apakah tiket yang dibeli bisa dikembalikan?",
      answer:
        "Kebijakan pengembalian tiket tergantung pada event. Beberapa event memungkinkan refund, beberapa tidak. Pastikan membaca syarat event sebelum membeli.",
    },
    {
      question: "Bagaimana jika saya kehilangan tiket digital?",
      answer:
        "Tiket digital tersimpan di akun FESTIFY Anda. Anda bisa login untuk mengunduh ulang tiket. Jika masih bermasalah, hubungi support kami via Email atau WhatsApp.",
    },
    {
      question: "Apakah FESTIFY memiliki aplikasi mobile?",
      answer:
        "Saat ini FESTIFY masih menggunakan web platform. Rencana aplikasi mobile sedang dalam pengembangan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h1>
            <p className="text-lg text-purple-100">
              Frequently Asked Questions – Jawaban untuk pertanyaan umum tentang FESTIFY
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-gray-600">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
