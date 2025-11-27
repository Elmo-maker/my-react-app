import events from "../data/events";
import EventCard from "../components/EventCard";

export default function Home() {
  return (
    // Kontainer Home: Latar belakang gelap (sesuai tema Navbar/Footer)
    <div className="bg-gray-950 text-white min-h-screen">
        
        {/* Padding atas disesuaikan agar di bawah Navbar fixed (pt-28) */}
        <div className="max-w-7xl mx-auto px-6 py-16 pt-28"> 
        
            {/* JUDUL BAGIAN */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tighter">
                <span className="text-indigo-400">#</span>Event Populer
            </h2>

            {/* GRID EVENT CARD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    </div>
  );
}