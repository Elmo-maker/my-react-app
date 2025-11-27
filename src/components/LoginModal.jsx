import { useState, useEffect } from "react";
import { Mail, X, Loader2 } from "lucide-react"; // Menambahkan Loader2 untuk ikon memuat

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Hook untuk menutup modal dengan tombol ESC
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulasi fetch request. Ganti dengan endpoint Anda yang sebenarnya.
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Login berhasil: ${data.message}`);
        setIsOpen(false);
        setEmail("");
      } else {
        alert(`Login gagal: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("Error server. Silakan coba lagi nanti.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        // Tombol utama di luar modal dengan gaya premium
        className="bg-gray-900 text-amber-300 px-7 py-3 rounded-xl shadow-2xl shadow-gray-900/50 
                   border border-amber-300/30 hover:bg-gray-800 transition duration-300 font-medium tracking-wider"
      >
        Login
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-black/30 backdrop-blur-xl border border-white/10
                          rounded-2xl shadow-2xl shadow-black/80 w-full max-w-sm p-8 relative transform transition duration-300 ease-out">
            
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-amber-300 transition p-1 rounded-full"
              aria-label="Tutup Modal"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-4xl font-light text-white text-center mb-1 tracking-wide">
              Selamat Datang
            </h2>
            <p className="text-center text-white/60 text-sm mb-10">
              Silakan masukkan email Anda untuk melanjutkan.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="email-input" className="block text-white/70 mb-2 text-sm font-light">
                    ALAMAT EMAIL
                </label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3
                                focus-within:border-amber-300 transition duration-300">
                  <Mail className="text-amber-300" size={20} />
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="nama.anda@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none text-base font-light"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                // Tombol Submit dengan border/accent Emas
                className={`w-full py-3.5 rounded-lg font-semibold text-lg tracking-wider
                           ${isLoading 
                              ? 'bg-gray-700 text-white/50 cursor-not-allowed' 
                              : 'bg-gray-800 text-amber-300 border border-amber-300/60 hover:bg-amber-300 hover:text-gray-900 shadow-xl shadow-amber-300/10 transition duration-300'}`
                           }
              >
                {isLoading ? (
                    <span className="flex items-center justify-center">
                        <Loader2 className="animate-spin mr-2" size={20} /> Memuat...
                    </span>
                ) : 'LANJUTKAN'}
              </button>
            </form>

            <p className="text-center text-white/40 text-xs mt-8 font-light">
              © {new Date().getFullYear()} Aplikasi Premium Anda.
            </p>
          </div>
        </div>
      )}
    </>
  );
}