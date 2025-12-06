// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Instagram, Youtube, MessageCircle } from "lucide-react";

function TikTokIcon(props) {
  // simple TikTok mark (monochrome) — small inline SVG, inherits currentColor
  return (
    <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} fill="currentColor" aria-hidden="true">
      <path d="M12 2v7.1a4.5 4.5 0 1 0 4.5 4.5V8h3.5A7 7 0 1 1 12 2z" />
    </svg>
  );
}

export default function Footer() {
  const menuSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Contact Us", to: "/contact" },
        { name: "FAQ", to: "/faq" },
      ],
    },
    {
      title: "Help Center",
      // matches src/pages/help/*.jsx
      links: [
        { name: "Support", to: "/help/support" },
        { name: "System Updates", to: "/help/updates" },
        { name: "Privacy", to: "/help/privacy" },
      ],
    },
    {
      title: "Legal",
      // matches src/pages/legal/*.jsx (Cookies removed)
      links: [
        { name: "Guides", to: "/legal/guides" },
        { name: "Terms", to: "/legal/terms" },
      ],
    },
  ];

  const socialLinks = [
    { Icon: Instagram, to: "/social/instagram", label: "Instagram" },
    { Icon: TikTokIcon, to: "/social/tiktok", label: "TikTok" },
    { Icon: Youtube, to: "/social/youtube", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-gray-800 pb-12">

          <div className="md:col-span-2">
            <h1 className="text-3xl font-extrabold text-white mb-4">
              Festify<span className="text-indigo-400">™</span>
            </h1>
            <p className="text-base text-gray-400 max-w-sm mb-8">
              Platform terbaik untuk mengatur acara dan festival Anda.
              Kami membantu menghubungkan kreator dengan penggemar.
            </p>

            <div className="flex space-x-5">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  to={s.to}
                  aria-label={s.label}
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  <s.Icon size={22} />
                </Link>
              ))}
            </div>
          </div>

          {menuSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-6 text-xl font-bold text-indigo-400 uppercase tracking-wide">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-base text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-base">
          <span>&copy; {new Date().getFullYear()} Festify™. All Rights Reserved.</span>

          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/legal/terms" className="hover:text-white text-sm transition">
              Ketentuan Penggunaan
            </Link>
            <Link to="/help/privacy" className="hover:text-white text-sm transition">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
