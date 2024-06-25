// import React from "react";

// function Card({ image, title, description, livehref, githref }) {
//   return (
//     <div className="relative overflow-hidden group cursor-pointer mb-5">
//       <img
//         src={image}
//         className="w-72 h-48 object-fill rounded-md transition-transform duration-300 group-hover:scale-105"
//         alt={title}
//         style={{ minHeight: "180px" }}
//       />
//       <div className="info absolute inset-0 bg-black bg-opacity-60 text-white p-4 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//         <h3 className="mt-7  text-xs sm:text-sm font-semibold">{title}</h3>
//         <p className="text-gray-400 text-xs sm:text-sm mt-2">{description}</p>
//         <div className="flex mt-4">
//           <a
//             href={livehref}
//             className="relative px-3 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group text-xs"
//           >
//             <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
//             <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
//             <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
//             <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
//             <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-900 opacity-0 group-hover:opacity-100"></span>
//             <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
//               Live preview
//             </span>
//           </a>
//           <a
//             href={githref}
//             className="relative px-3 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group text-xs ml-2"
//           >
//             <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
//             <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
//             <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
//             <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
//             <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-900 opacity-0 group-hover:opacity-100"></span>
//             <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
//               Checkout GitHub
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
import React from "react";

function Card({ image, title, description, livehref, githref }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer mb-5">
      <img
        src={image}
        className="w-72 h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
        alt={title}
        style={{ minHeight: "180px" }}
      />
      <div className="info absolute inset-0 bg-black bg-opacity-80 text-white p-4 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h3 className="text-sm font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-xs mb-4">{description}</p>
        <div className="flex">
          <a
            href={livehref}
            className="flex items-center justify-center px-3 py-2 bg-gray-600 border border-gray-600 rounded-lg shadow-md group hover:bg-gray-700 text-xs transition-colors duration-300 ease-in-out mr-2"
          >
            <span className="transition duration-200 ease-in-out group-hover:text-white">
              Live Preview
            </span>
          </a>
          <a
            href={githref}
            className="flex items-center justify-center px-3 py-2 bg-gray-600 border border-gray-600 rounded-lg shadow-md group hover:bg-gray-700 text-xs transition-colors duration-300 ease-in-out ml-2"
          >
            <span className="transition duration-200 ease-in-out group-hover:text-white">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
