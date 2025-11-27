import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"; 
// PERBAIKAN: Tiktok diganti MessageCircle karena Tiktok tidak ada di Lucide.

export default function Footer() {
  
  // Data menu untuk loop
  const menuSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Help Center",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Support Ticket", href: "#" },
        { name: "System Status", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Licensing", href: "#" },
        { name: "Disclaimer", href: "#" },
        { name: "Security", href: "#" },
      ],
    },
  ];

  // Data sosial media (MessageCircle digunakan sebagai ikon Chat/Kontak)
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "Chat" }, 
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    // Latar belakang yang lebih gelap dan kontras
    <footer className="bg-gray-950 text-gray-300 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Konten Utama Footer: Logo + Menu */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-gray-800 pb-12">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-extrabold text-white mb-4">
              Festify<span className="text-indigo-400">™</span>
            </h1>
            <p className="text-base text-gray-400 max-w-sm mb-8">
              Platform terbaik untuk mengatur acara dan festival Anda. Kami membantu menghubungkan kreator dengan penggemar.
            </p>
            {/* Social Media Ikon */}
            <div className="flex space-x-5">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  // Ikon sosial media berwarna abu-abu, hover ke indigo
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  <link.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Menu (Looping) */}
          {menuSections.map((section) => (
            <div key={section.title}>
              {/* Ukuran header lebih besar dan berwarna indigo */}
              <h2 className="mb-6 text-xl font-bold text-indigo-400 uppercase tracking-wide">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      // Ukuran link lebih besar
                      className="text-base text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bagian Copyright & Legal Tambahan */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-base">
          
          {/* Copyright */}
          <span>
            &copy; {new Date().getFullYear()} Festify™. All Rights Reserved.
          </span>

          {/* Legal Links di Kanan */}
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white text-sm transition">Ketentuan Penggunaan</a>
            <a href="#" className="hover:text-white text-sm transition">Kebijakan Privasi</a>
          </div>

        </div>

      </div>
    </footer>
  );
}