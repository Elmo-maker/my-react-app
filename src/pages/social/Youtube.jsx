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

import { FaYoutube } from "react-icons/fa";

export default function Youtube() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h1 className="text-3xl font-bold text-white mb-4">
        YouTube Festify™
      </h1>

      <p className="text-gray-300 mb-8">
        Subscribe channel YouTube kami untuk video event & highlight terbaru.
      </p>

      <a
        href="https://www.youtube.com/@festify"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-16 h-16 rounded-full
                   bg-red-600 hover:bg-red-700
                   hover:scale-110 transition-transform duration-300 shadow-lg"
      >
        <FaYoutube className="text-white text-3xl" />
      </a>

      <p className="mt-4 text-red-400 font-medium">
        youtube.com/@festify
      </p>
    </div>
  );
}
