// export default function Youtube() {
//   return (
//     <div className="max-w-4xl mx-auto py-20 px-6">
//       <h1 className="text-3xl font-bold text-white mb-4">YouTube</h1>
//       <p className="text-gray-300">
//         Halaman ini adalah placeholder YouTube Festify™. 
//         Nantinya bisa diarahkan ke channel YouTube resmi.
//       </p>
//     </div>
//   );
// }

import { FaTiktok } from "react-icons/fa";

export default function TikTok() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h1 className="text-3xl font-bold text-white mb-4">
        TikTok Festify™
      </h1>

      <p className="text-gray-300 mb-8">
        Tonton konten singkat, teaser event, dan highlight terbaru di TikTok kami.
      </p>

      <a
        href="https://www.tiktok.com/@festify"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-16 h-16 rounded-full
                   bg-black hover:bg-gray-900
                   hover:scale-110 transition-transform duration-300 shadow-lg"
      >
        <FaTiktok className="text-white text-3xl" />
      </a>

      <p className="mt-4 text-gray-200 font-medium">
        @festify
      </p>
    </div>
  );
}

