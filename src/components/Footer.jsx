export default function Footer() {
  return (
    <footer className="bg-neutral-primary mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Bagian menu */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-heading uppercase">Company</h2>
            <ul className="text-body space-y-2">
              <li><a href="#" className="hover:underline text-xs">About Us</a></li>
              <li><a href="#" className="hover:underline text-xs">Contact Us</a></li>
              <li><a href="#" className="hover:underline text-xs"></a></li>
              <li><a href="#" className="hover:underline text-xs">Blog</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-heading uppercase">Help Center</h2>
            <ul className="text-body space-y-2">
              <li><a href="#" className="hover:underline text-xs">Discord Server</a></li>
              <li><a href="#" className="hover:underline text-xs">Instagram</a></li>
              <li><a href="#" className="hover:underline text-xs">Facebook</a></li>
              <li><a href="#" className="hover:underline text-xs">Tiktok</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-heading uppercase">Legal</h2>
            <ul className="text-body space-y-2">
              <li><a href="#" className="hover:underline text-xs">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline text-xs">Licensing</a></li>
              <li><a href="#" className="hover:underline text-xs">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-neutral-secondary-soft pt-6 flex flex-col md:flex-row items-center justify-between text-body text-sm">
          <span>© 2025 Festify™. All Rights Reserved.</span>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-heading text-xs">Facebook</a>
            <a href="#" className="hover:text-heading text-xs">Instagram</a>
            <a href="#" className="hover:text-heading text-xs">Whatsapp</a>
            <a href="#" className="hover:text-heading text-xs">Tiktok</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
