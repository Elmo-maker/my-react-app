import { useState, useEffect } from "react";
import { Mail, Lock, X, Loader2 } from "lucide-react";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // ESC close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsRegisterOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // ---------------- LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3000/login/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert(`Login berhasil: ${data.message}`);
        setIsOpen(false);
        setEmail("");
        setPassword("");
      } else {
        alert(`Login gagal: ${data.error || "Cek email/password"}`);
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  // ---------------- REGISTER ----------------
  const handleRegister = async (e) => {
    e.preventDefault();

    if (regPassword !== regConfirm) {
      alert("Password tidak sama.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/login/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: regEmail, // pakai email juga sebagai username
          email: regEmail,
          password: regPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Register berhasil! Silakan login.");
        setIsRegisterOpen(false);
        setIsOpen(true);

        setRegEmail("");
        setRegPassword("");
        setRegConfirm("");
      } else {
        alert(`Gagal register: ${data.error || "Cek input"}`);
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* BUTTON LOGIN */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-900 text-amber-300 px-7 py-3 rounded-xl shadow-2xl shadow-gray-900/50 border border-amber-300/30 hover:bg-gray-800 transition duration-300 tracking-wider"
      >
        Login
      </button>

      {/* LOGIN MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm p-8 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-amber-300 transition"
            >
              <X size={20} />
            </button>

            <h2 className="text-4xl font-light text-white text-center mb-1">Selamat Datang</h2>
            <p className="text-center text-white/60 text-sm mb-10">Silakan masuk untuk melanjutkan.</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="text-white/70 mb-2 text-sm block">EMAIL</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Mail className="text-amber-300" size={20} />
                  <input
                    type="email"
                    required
                    placeholder="nama@domain.com"
                    className="bg-transparent text-white w-full focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label className="text-white/70 mb-2 text-sm block">PASSWORD</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Lock className="text-amber-300" size={20} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="bg-transparent text-white w-full focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3.5 rounded-lg font-semibold text-lg tracking-wider ${
                  isLoading
                    ? "bg-gray-700 text-white/50 cursor-not-allowed"
                    : "bg-gray-800 text-amber-300 border border-amber-300/60 hover:bg-amber-300 hover:text-gray-900 transition"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2" size={20} /> Memuat...
                  </span>
                ) : (
                  "MASUK"
                )}
              </button>

              <p className="text-white/60 text-sm text-center mt-4">
                Belum punya akun?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsRegisterOpen(true);
                  }}
                  className="text-amber-300 hover:underline"
                >
                  Register
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* REGISTER MODAL */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm p-8 relative">
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-amber-300 transition"
            >
              <X size={20} />
            </button>

            <h2 className="text-4xl font-light text-white text-center mb-1">Register</h2>
            <p className="text-center text-white/60 text-sm mb-10">Buat akun untuk mulai menggunakan aplikasi.</p>

            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="text-white/70 mb-2 text-sm block">EMAIL</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Mail className="text-amber-300" size={20} />
                  <input
                    type="email"
                    required
                    placeholder="nama@domain.com"
                    className="bg-transparent text-white w-full focus:outline-none"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-white/70 mb-2 text-sm block">PASSWORD</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Lock className="text-amber-300" size={20} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="bg-transparent text-white w-full focus:outline-none"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-white/70 mb-2 text-sm block">KONFIRMASI PASSWORD</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Lock className="text-amber-300" size={20} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="bg-transparent text-white w-full focus:outline-none"
                    value={regConfirm}
                    onChange={(e) => setRegConfirm(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3.5 rounded-lg font-semibold text-lg tracking-wider ${
                  isLoading
                    ? "bg-gray-700 text-white/50 cursor-not-allowed"
                    : "bg-gray-800 text-amber-300 border border-amber-300/60 hover:bg-amber-300 hover:text-gray-900 transition"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2" size={20} /> Memuat...
                  </span>
                ) : (
                  "DAFTAR"
                )}
              </button>

              <p className="text-white/60 text-sm text-center mt-4">
                Sudah punya akun?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsRegisterOpen(false);
                    setIsOpen(true);
                  }}
                  className="text-amber-300 hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
