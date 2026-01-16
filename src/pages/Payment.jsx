import { useLocation } from "react-router-dom";
import { useState } from "react";
import { API_BASE_URL } from "../config/api";

export default function Payment() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  if (!state || !state.event || !state.ticketCount || !state.form) {
    return <p>Error: Data transaksi tidak lengkap</p>;
  }

  const { event, ticketCount, totalPrice, form } = state;

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/payment/create-transaction`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: `ORDER-${Date.now()}`,
          grossAmount: totalPrice,
          customerDetails: {
            first_name: form.name,
            email: form.email,
            phone: form.phone
          },
          itemDetails: [
            {
              id: event.id_event,
              price: totalPrice,
              quantity: ticketCount,
              name: event.nama_event
            }
          ]
        })
      });
      const data = await res.json();
      if (data.success) {
        // Redirect ke Midtrans Snap
        window.location.href = data.redirect_url;
      } else {
        alert("Gagal membuat transaksi");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan pembayaran");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Bayar {event.nama_event}</h2>
      <p>Total: Rp {totalPrice.toLocaleString()}</p>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Memproses..." : "Bayar Sekarang"}
      </button>
    </div>
  );
}
