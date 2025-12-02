import { useState, useEffect } from "react";
import { Mail, Lock, X, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GOOGLE_CLIENT_ID = "1079040205204-n7ohrl1h0lealsm5jkv2gs9hqm1ieeau.apps.googleusercontent.com";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Event dari Navbar
  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    window.addEventListener("open-login", openHandler);
    return () => window.removeEventListener("open-login", openHandler);
  }, []);

  // Update Navbar saat login sukses
  useEffect(() => {
    const handleLogin = () => setIsOpen(false);
    window.addEventListener("login-success", handleLogin);
    return () => window.removeEventListener("login-success", handleLogin);
  }, []);

  // Google SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      if (window.google && isOpen && !isRegisterOpen) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGoogleResponse,
        });
        window.google.accounts.id.renderButton(
          document.getElementById("google-sign-in-button"),
          { theme: "outline", size: "large", shape: "pill", text: "continue_with" }
        );
      }
    };
    document.head.appendChild(script);

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsRegisterOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, isRegisterOpen]);

  const handleGoogleResponse = async (response) => {
    if (!response.credential) return alert("Gagal mendapatkan kredensial Google");
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/login/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        window.dispatchEvent(new Event("login-success"));
      } else alert(data.error || "Gagal login Google");
    } catch {
      alert("Server error Google login");
    } finally {
      setIsLoading(false);
    }
  };

  // Login manual
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/login/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        window.dispatchEvent(new Event("login-success"));
        setEmail(""); setPassword("");
        if (data.user?.role === "admin") navigate("/admin");
        else navigate("/");
      } else alert(data.error || "Cek email/password");
    } catch {
      alert("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  // Register
  const handleRegister = async (e) => {
    e.preventDefault();
    if (regPassword !== regConfirm) return alert("Password tidak sama");
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/login/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: regEmail,
          email: regEmail,
          password: regPassword,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Register berhasil! Silakan login.");
        setIsRegisterOpen(false);
        setIsOpen(true);
        setRegEmail(""); setRegPassword(""); setRegConfirm("");
      } else alert(data.error || "Cek input");
    } catch {
      alert("Server error register");
    } finally { setIsLoading(false); }
  };

  // RENDER
  return (
    <>
      {/* Login Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm p-8 relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-amber-300">
              <X size={20} />
            </button>
            <h2 className="text-4xl font-light text-white text-center mb-1">Selamat Datang</h2>
            <p className="text-center text-white/60 text-sm mb-6">Silakan masuk untuk melanjutkan.</p>

            <div className="mb-6">
              <p className="text-center text-white/50 text-xs mb-3">Opsi Login</p>
              <div id="google-sign-in-button" className="mx-auto w-full flex justify-center"></div>
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink mx-4 text-white/50 text-xs">ATAU</span>
                <div className="flex-grow border-t border-white/10"></div>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="text-white/70 mb-2 text-sm block">EMAIL</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Mail className="text-amber-300" size={20} />
                  <input type="email" required placeholder="nama@domain.com" className="bg-transparent text-white w-full focus:outline-none"
                    value={email} onChange={(e)=>setEmail(e.target.value)} disabled={isLoading} />
                </div>
              </div>
              <div>
                <label className="text-white/70 mb-2 text-sm block">PASSWORD</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Lock className="text-amber-300" size={20} />
                  <input type="password" required placeholder="••••••••" className="bg-transparent text-white w-full focus:outline-none"
                    value={password} onChange={(e)=>setPassword(e.target.value)} disabled={isLoading} />
                </div>
              </div>
              <button type="submit" disabled={isLoading} className={`w-full py-3.5 rounded-lg font-semibold text-lg tracking-wider ${isLoading ? "bg-gray-700 text-white/50 cursor-not-allowed" : "bg-gray-800 text-amber-300 border border-amber-300/60 hover:bg-amber-300 hover:text-gray-900 transition"}`}>
                {isLoading ? <Loader2 className="animate-spin mx-auto" size={20}/> : "MASUK"}
              </button>
              <p className="text-white/60 text-sm text-center mt-4">
                Belum punya akun? <button type="button" onClick={()=>{setIsOpen(false); setIsRegisterOpen(true);}} className="text-amber-300 hover:underline">Register</button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm p-8 relative">
            <button onClick={()=>setIsRegisterOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-amber-300"><X size={20}/></button>
            <h2 className="text-4xl font-light text-white text-center mb-1">Register</h2>
            <p className="text-center text-white/60 text-sm mb-10">Buat akun untuk mulai menggunakan aplikasi.</p>
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="text-white/70 mb-2 text-sm block">EMAIL</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Mail className="text-amber-300" size={20}/>
                  <input type="email" required placeholder="nama@domain.com" className="bg-transparent text-white w-full focus:outline-none" value={regEmail} onChange={(e)=>setRegEmail(e.target.value)}/>
                </div>
              </div>
              <div>
                <label className="text-white/70 mb-2 text-sm block">PASSWORD</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Lock className="text-amber-300" size={20}/>
                  <input type="password" required placeholder="••••••••" className="bg-transparent text-white w-full focus:outline-none" value={regPassword} onChange={(e)=>setRegPassword(e.target.value)}/>
                </div>
              </div>
              <div>
                <label className="text-white/70 mb-2 text-sm block">KONFIRMASI PASSWORD</label>
                <div className="flex items-center gap-3 bg-black/20 border border-white/20 rounded-lg px-4 py-3">
                  <Lock className="text-amber-300" size={20}/>
                  <input type="password" required placeholder="••••••••" className="bg-transparent text-white w-full focus:outline-none" value={regConfirm} onChange={(e)=>setRegConfirm(e.target.value)}/>
                </div>
              </div>
              <button type="submit" disabled={isLoading} className={`w-full py-3.5 rounded-lg font-semibold text-lg tracking-wider ${isLoading ? "bg-gray-700 text-white/50 cursor-not-allowed" : "bg-gray-800 text-amber-300 border border-amber-300/60 hover:bg-amber-300 hover:text-gray-900 transition"}`}>
                {isLoading ? <Loader2 className="animate-spin mx-auto" size={20}/> : "DAFTAR"}
              </button>
              <p className="text-white/60 text-sm text-center mt-4">
                Sudah punya akun? <button type="button" onClick={()=>{setIsRegisterOpen(false); setIsOpen(true);}} className="text-amber-300 hover:underline">Login</button>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
