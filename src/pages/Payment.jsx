import { useLocation } from "react-router-dom";

export default function Payment() {
  const { state } = useLocation();
  if (!state) return <p>Error: Data tidak ditemukan</p>;

  return (
    <div className="max-w-lg mx-auto text-center p-6">
      <h2 className="text-2xl font-bold mb-4">Pembayaran QRIS</h2>

      <p className="text-lg mb-2 font-semibold">Total Pembayaran:</p>
      <p className="text-xl font-bold mb-6">
        Rp {state.totalPrice.toLocaleString()}
      </p>

      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=QRIS-DUMMY"
        className="mx-auto mb-6"
      />

      <p className="text-gray-600">Scan QR ini menggunakan aplikasi pembayaran.</p>
    </div>
  );
}
