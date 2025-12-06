import { useLocation, Link, useSearchParams } from "react-router-dom";
import { CheckCircle, Home } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PaymentSuccess() {
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  
  // Ambil data dari URL params (callback Midtrans)
  const orderId = searchParams.get('order_id') || state?.orderId;
  const statusCode = searchParams.get('status_code');
  const transactionStatus = searchParams.get('transaction_status');

  return (
    <>
      <Navbar />
      <div className="bg-gray-950 text-white min-h-screen pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6 py-8 text-center">
          
          {/* Success Icon */}
          <CheckCircle className="w-32 h-32 text-green-500 mx-auto mb-6 animate-bounce" />
          
          <h1 className="text-5xl font-bold text-white mb-4">
            Pembayaran Berhasil! 🎉
          </h1>
          
          <p className="text-gray-400 text-xl mb-8">
            Terima kasih atas pembelian Anda
          </p>

          {/* Order Info */}
          <div className="bg-gray-900 rounded-xl p-6 border border-green-500/30 mb-8">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Order ID:</span>
                <span className="text-white font-mono text-sm">{orderId}</span>
              </div>
              
              {statusCode && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Status Code:</span>
                  <span className="text-green-400 font-semibold">{statusCode}</span>
                </div>
              )}
              
              {transactionStatus && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Transaction Status:</span>
                  <span className="text-green-400 font-semibold capitalize">{transactionStatus}</span>
                </div>
              )}
            </div>
          </div>

          {/* E-Ticket Info */}
          <div className="bg-indigo-900/20 border border-indigo-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-2">📧 E-Ticket Anda</h3>
            <p className="text-gray-300">
              E-ticket akan dikirim ke email Anda dalam beberapa menit
            </p>
          </div>

          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg
                       hover:bg-indigo-500 transition duration-300 shadow-lg shadow-indigo-600/30"
          >
            <Home size={24} className="mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </>
  );
}