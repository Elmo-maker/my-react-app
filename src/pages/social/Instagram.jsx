// export default function Instagram() {
//   return (
//     <div className="max-w-4xl mx-auto py-20 px-6">
//       <h1 className="text-3xl font-bold text-white mb-4">Instagram</h1>
//       <p className="text-gray-300">
//         Ini adalah halaman placeholder Instagram Festify™. 
//         Anda dapat menghubungkannya ke akun Instagram resmi kapan saja.
//       </p>
//     </div>
//   );
// }

import { FaInstagram } from "react-icons/fa";

export default function Instagram() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h1 className="text-3xl font-bold text-white mb-4">
        Instagram Festify™
      </h1>

      <p className="text-gray-300 mb-8">
        Ikuti kami di Instagram untuk update event & promo terbaru.
      </p>

      <a
        href="https://www.instagram.com/festify.id"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-16 h-16 rounded-full
                   bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500
                   hover:scale-110 transition-transform duration-300 shadow-lg"
      >
        <FaInstagram className="text-white text-3xl" />
      </a>

      <p className="mt-4 text-pink-400 font-medium">
        @festify.id
      </p>
    </div>
  );
}
