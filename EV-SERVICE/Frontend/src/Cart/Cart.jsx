// // import React from "react";
// // import Header from "../component/Header/Header";
// // import { FaTrash } from "react-icons/fa"; // Import delete icon
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer/Footer";

// // // Sample data for cart items
// // const cartItems = [
// //   {
// //     id: 1,
// //     image: "/assets/electric-car-accessory1.png",
// //     itemName: "Premium Charger",
// //     quantity: 2,
// //     price: 29.99,
// //   },
// //   {
// //     id: 2,
// //     image: "/assets/electric-car-accessory2.png",
// //     itemName: "LED Headlights",
// //     quantity: 1,
// //     price: 99.99,
// //   },
// //   {
// //     id: 3,
// //     image: "/assets/electric-car-accessory3.png",
// //     itemName: "Car Cover",
// //     quantity: 3,
// //     price: 49.99,
// //   },
// // ];

// // export default function Cart() {
// //   return (
// //     <div className="p-4 md:p-8">
// //       <Header />

// //       {/* Menu Banner */}
// //       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#E0F7FA] to-[#B2DFDB]">
// //         <div className="py-24 md:py-48 flex flex-col items-center justify-center">
// //           <div className="text-center px-4 space-y-4 md:space-y-7">
// //             <h2 className="text-3xl md:text-5xl font-bold leading-snug text-gray-800">
// //               Your Electric Car Accessories{" "}
// //               <span className="text-green-500">Cart</span>
// //             </h2>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Table */}
// //       <div className="overflow-x-auto mb-8 md:mb-12 px-4 md:px-16">
// //         <table className="min-w-full divide-y divide-gray-200">
// //           <thead className="bg-green-500 text-white">
// //             <tr>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 No.
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Image
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Item Name
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Quantity
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Price
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Action
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody className="bg-white divide-y divide-gray-200">
// //             {cartItems.map((item, index) => (
// //               <tr key={item.id}>
// //                 <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
// //                 <td className="px-4 py-2 text-sm text-gray-700 flex items-center space-x-2">
// //                   <img
// //                     src={item.image}
// //                     alt={item.itemName}
// //                     className="w-12 h-12 object-cover rounded"
// //                   />
// //                 </td>
// //                 <td className="px-4 py-2 text-sm text-gray-700">
// //                   {item.itemName}
// //                 </td>
// //                 <td className="px-4 py-2 text-sm text-gray-700">
// //                   <div className="flex items-center space-x-2">
// //                     <button className="px-2 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm">
// //                       -
// //                     </button>
// //                     <span className="text-sm text-gray-700">
// //                       {item.quantity}
// //                     </span>
// //                     <button className="px-2 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm">
// //                       +
// //                     </button>
// //                   </div>
// //                 </td>
// //                 <td className="px-4 py-2 text-sm text-gray-700">
// //                   ${item.price.toFixed(2)}
// //                 </td>
// //                 <td className="px-4 py-2 text-sm font-medium">
// //                   <button className="text-red-500 hover:text-red-700">
// //                     <FaTrash className="w-5 h-5" />
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Customer and Shopping Details */}
// //       <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 px-4 md:px-16">
// //         {/* Customer Details */}
// //         <div className="flex-1 mb-8 md:mb-0 md:mr-8">
// //           <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
// //             Customer Details
// //           </h3>
// //           <div className="space-y-2">
// //             <p>
// //               <strong className="text-green-500">Name:</strong> mmmmmmm
// //             </p>
// //             <p>
// //               <strong className="text-green-500">Email:</strong>{" "}
// //               MalekShehadeh@gmail.com
// //             </p>
// //           </div>
// //         </div>

// //         {/* Shopping Details */}
// //         <div className="flex-1">
// //           <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
// //             Shopping Details
// //           </h3>
// //           <div className="space-y-2">
// //             <p>
// //               <strong className="text-green-500">Total Items:</strong> 6
// //             </p>
// //             <p>
// //               <strong className="text-green-500">Total Price:</strong> $
// //               {cartItems
// //                 .reduce((total, item) => total + item.price * item.quantity, 0)
// //                 .toFixed(2)}
// //             </p>
// //           </div>
// //           <Link to="/Menu/Cart/payment">
// //             <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700">
// //               Proceed to Checkout
// //             </button>
// //           </Link>
// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }
// /////////////////////

// // import React from "react";
// // import Header from "../component/Header/Header";
// // import { FaTrash } from "react-icons/fa"; // Import delete icon
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer/Footer";

// // // Sample data for cart items
// // const cartItems = [
// //   {
// //     id: 1,
// //     image: "/assets/electric-car-accessory1.png",
// //     itemName: "Premium Charger",
// //     quantity: 2,
// //     price: 29.99,
// //   },
// //   {
// //     id: 2,
// //     image: "/assets/electric-car-accessory2.png",
// //     itemName: "LED Headlights",
// //     quantity: 1,
// //     price: 99.99,
// //   },
// //   {
// //     id: 3,
// //     image: "/assets/electric-car-accessory3.png",
// //     itemName: "Car Cover",
// //     quantity: 3,
// //     price: 49.99,
// //   },
// // ];

// // export default function Cart() {
// //   return (
// //     <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
// //       <Header />

// //       {/* Menu Banner */}
// //       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#E3F2FD] to-[#B3E5FC]">
// //         <div className="py-24 md:py-48 flex flex-col items-center justify-center">
// //           <div className="text-center px-4 space-y-4 md:space-y-7">
// //             <h2 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
// //               Your Electric Car Accessories{" "}
// //               <span className="text-blue-500">Cart</span>
// //             </h2>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Table */}
// //       <div className="overflow-x-auto mb-8 md:mb-12 px-4 md:px-16">
// //         <table className="min-w-full divide-y divide-gray-200">
// //           <thead className="bg-blue-600 text-white">
// //             <tr>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 No.
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Image
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Item Name
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Quantity
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Price
// //               </th>
// //               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Action
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody className="bg-white divide-y divide-gray-200">
// //             {cartItems.map((item, index) => (
// //               <tr key={item.id}>
// //                 <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
// //                 <td className="px-4 py-2 text-sm text-gray-800 flex items-center space-x-2">
// //                   <img
// //                     src={item.image}
// //                     alt={item.itemName}
// //                     className="w-12 h-12 object-cover rounded border border-gray-300"
// //                   />
// //                 </td>
// //                 <td className="px-4 py-2 text-sm text-gray-800">
// //                   {item.itemName}
// //                 </td>
// //                 <td className="px-4 py-2 text-sm text-gray-800">
// //                   <div className="flex items-center space-x-2">
// //                     <button className="px-2 py-1 bg-gray-300 rounded text-gray-800 hover:bg-gray-400 text-sm">
// //                       -
// //                     </button>
// //                     <span className="text-sm text-gray-800">
// //                       {item.quantity}
// //                     </span>
// //                     <button className="px-2 py-1 bg-gray-300 rounded text-gray-800 hover:bg-gray-400 text-sm">
// //                       +
// //                     </button>
// //                   </div>
// //                 </td>
// //                 <td className="px-4 py-2 text-sm text-gray-800">
// //                   ${item.price.toFixed(2)}
// //                 </td>
// //                 <td className="px-4 py-2 text-sm font-medium">
// //                   <button className="text-red-500 hover:text-red-700">
// //                     <FaTrash className="w-5 h-5" />
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Customer and Shopping Details */}
// //       <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 px-4 md:px-16">
// //         {/* Customer Details */}
// //         <div className="flex-1 mb-8 md:mb-0 md:mr-8">
// //           <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
// //             Customer Details
// //           </h3>
// //           <div className="space-y-2">
// //             <p>
// //               <strong className="text-blue-500">Name:</strong> mmmmmmm
// //             </p>
// //             <p>
// //               <strong className="text-blue-500">Email:</strong>{" "}
// //               MalekShehadeh@gmail.com
// //             </p>
// //           </div>
// //         </div>

// //         {/* Shopping Details */}
// //         <div className="flex-1">
// //           <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
// //             Shopping Details
// //           </h3>
// //           <div className="space-y-2">
// //             <p>
// //               <strong className="text-blue-500">Total Items:</strong> 6
// //             </p>
// //             <p>
// //               <strong className="text-blue-500">Total Price:</strong> $
// //               {cartItems
// //                 .reduce((total, item) => total + item.price * item.quantity, 0)
// //                 .toFixed(2)}
// //             </p>
// //           </div>
// //           <Link to="/Menu/Cart/payment">
// //             <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-800">
// //               Proceed to Checkout
// //             </button>
// //           </Link>
// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }
// /////////////////////////
// // import React from "react";
// // import Header from "../component/Header/Header";
// // import { FaTrash } from "react-icons/fa"; // Import delete icon
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer/Footer";

// // // Sample data for cart items
// // const cartItems = [
// //   {
// //     id: 1,
// //     image: "/assets/electric-car-accessory1.png",
// //     itemName: "Premium Charger",
// //     quantity: 2,
// //     price: 29.99,
// //   },
// //   {
// //     id: 2,
// //     image: "/assets/electric-car-accessory2.png",
// //     itemName: "LED Headlights",
// //     quantity: 1,
// //     price: 99.99,
// //   },
// //   {
// //     id: 3,
// //     image: "/assets/electric-car-accessory3.png",
// //     itemName: "Car Cover",
// //     quantity: 3,
// //     price: 49.99,
// //   },
// // ];

// // export default function Cart() {
// //   const subtotal = cartItems
// //     .reduce((total, item) => total + item.price * item.quantity, 0)
// //     .toFixed(2);
// //   const deliveryFee = 10.0; // example delivery fee
// //   const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

// //   return (
// //     <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
// //       <Header />

// //       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-8">
// //         <h2 className="text-3xl font-bold leading-snug text-gray-900 mb-8">
// //           Shopping Cart
// //         </h2>

// //         <div className="flex flex-col lg:flex-row justify-between">
// //           {/* Cart Items */}
// //           <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
// //             {cartItems.map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="bg-white p-4 rounded-lg shadow mb-4 flex items-center justify-between"
// //               >
// //                 <div className="flex items-center">
// //                   <img
// //                     src={item.image}
// //                     alt={item.itemName}
// //                     className="w-24 h-24 object-cover rounded border border-gray-300 mr-4"
// //                   />
// //                   <div>
// //                     <h3 className="text-lg font-semibold text-gray-800">
// //                       {item.itemName}
// //                     </h3>
// //                     <div className="flex items-center mt-2">
// //                       <span className="mr-2">QTY</span>
// //                       <select className="border border-gray-300 rounded px-2 py-1">
// //                         {[...Array(10).keys()].map((n) => (
// //                           <option key={n + 1} value={n + 1}>
// //                             {n + 1}
// //                           </option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                     <button className="mt-2 text-sm text-gray-500 hover:text-gray-700 flex items-center">
// //                       <FaTrash className="mr-1" /> Remove
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <div className="text-lg font-semibold text-gray-900">
// //                   ${(item.price * item.quantity).toFixed(2)}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Cart Summary */}
// //           <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow">
// //             <h3 className="text-xl font-semibold text-gray-900 mb-4">
// //               Cart Summary
// //             </h3>
// //             <div className="mb-4">
// //               <label className="block text-gray-700 mb-2" htmlFor="promo-code">
// //                 Add Promo Code
// //               </label>
// //               <div className="flex">
// //                 <input
// //                   type="text"
// //                   id="promo-code"
// //                   className="border border-gray-300 rounded-l px-4 py-2 w-full"
// //                   placeholder="Promo code"
// //                 />
// //                 <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
// //                   Apply
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="border-t border-gray-200 pt-4">
// //               <div className="flex justify-between text-gray-700 mb-2">
// //                 <span>Subtotal</span>
// //                 <span>${subtotal}</span>
// //               </div>
// //               <div className="flex justify-between text-gray-700 mb-2">
// //                 <span>Delivery</span>
// //                 <span>${deliveryFee.toFixed(2)}</span>
// //               </div>
// //               <div className="flex justify-between text-lg font-semibold text-gray-900">
// //                 <span>Total (Incl. VAT)</span>
// //                 <span>${total}</span>
// //               </div>
// //             </div>
// //             <Link to="/Menu/Cart/payment">
// //               <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
// //                 Go to Secure Checkout
// //               </button>
// //             </Link>
// //             <div className="mt-4">
// //               <p className="text-gray-700">We Accept</p>
// //               <div className="flex mt-2 space-x-2">
// //                 <img
// //                   src="/assets/visa.png"
// //                   alt="Visa"
// //                   className="w-10 h-6 object-contain"
// //                 />
// //                 <img
// //                   src="/assets/mastercard.png"
// //                   alt="MasterCard"
// //                   className="w-10 h-6 object-contain"
// //                 />
// //                 <img
// //                   src="/assets/amex.png"
// //                   alt="Amex"
// //                   className="w-10 h-6 object-contain"
// //                 />
// //                 <img
// //                   src="/assets/discover.png"
// //                   alt="Discover"
// //                   className="w-10 h-6 object-contain"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }
// //////////////////
// // import React, { useState } from "react";
// // import Header from "../component/Header/Header";
// // import { FaTrash } from "react-icons/fa"; // Import delete icon
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer/Footer";

// // // Sample data for cart items
// // const cartItems = [
// //   {
// //     id: 1,
// //     image: "/assets/electric-car-accessory1.png",
// //     itemName: "Premium Charger",
// //     quantity: 2,
// //     price: 29.99,
// //   },
// //   {
// //     id: 2,
// //     image: "/assets/electric-car-accessory2.png",
// //     itemName: "LED Headlights",
// //     quantity: 1,
// //     price: 99.99,
// //   },
// //   {
// //     id: 3,
// //     image: "/assets/electric-car-accessory3.png",
// //     itemName: "Car Cover",
// //     quantity: 3,
// //     price: 49.99,
// //   },
// // ];

// // export default function Cart() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const toggleDarkMode = () => setDarkMode(!darkMode);

// //   const subtotal = cartItems
// //     .reduce((total, item) => total + item.price * item.quantity, 0)
// //     .toFixed(2);
// //   const deliveryFee = 10.0; // example delivery fee
// //   const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

// //   return (
// //     <div
// //       className={`p-4 md:p-8 min-h-screen ${
// //         darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
// //       }`}
// //     >
// //       <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

// //       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-8">
// //         <h2 className="text-3xl font-bold leading-snug mb-8">Shopping Cart</h2>

// //         <div className="flex flex-col lg:flex-row justify-between">
// //           {/* Cart Items */}
// //           <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
// //             {cartItems.map((item) => (
// //               <div
// //                 key={item.id}
// //                 className={`p-4 rounded-lg shadow mb-4 flex items-center justify-between ${
// //                   darkMode ? "bg-gray-800" : "bg-white"
// //                 }`}
// //               >
// //                 <div className="flex items-center">
// //                   <img
// //                     src={item.image}
// //                     alt={item.itemName}
// //                     className="w-24 h-24 object-cover rounded border border-gray-300 mr-4"
// //                   />
// //                   <div>
// //                     <h3 className="text-lg font-semibold">{item.itemName}</h3>
// //                     <div className="flex items-center mt-2">
// //                       <span className="mr-2">QTY</span>
// //                       <select className="border border-gray-300 rounded px-2 py-1">
// //                         {[...Array(10).keys()].map((n) => (
// //                           <option key={n + 1} value={n + 1}>
// //                             {n + 1}
// //                           </option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                     <button className="mt-2 text-sm flex items-center">
// //                       <FaTrash className="mr-1" /> Remove
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <div className="text-lg font-semibold">
// //                   ${(item.price * item.quantity).toFixed(2)}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Cart Summary */}
// //           <div
// //             className={`lg:w-1/3 p-6 rounded-lg shadow ${
// //               darkMode ? "bg-gray-800" : "bg-white"
// //             }`}
// //           >
// //             <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
// //             <div className="mb-4">
// //               <label className="block mb-2" htmlFor="promo-code">
// //                 Add Promo Code
// //               </label>
// //               <div className="flex">
// //                 <input
// //                   type="text"
// //                   id="promo-code"
// //                   className="border border-gray-300 rounded-l px-4 py-2 w-full"
// //                   placeholder="Promo code"
// //                 />
// //                 <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
// //                   Apply
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="border-t border-gray-200 pt-4">
// //               <div className="flex justify-between mb-2">
// //                 <span>Subtotal</span>
// //                 <span>${subtotal}</span>
// //               </div>
// //               <div className="flex justify-between mb-2">
// //                 <span>Delivery</span>
// //                 <span>${deliveryFee.toFixed(2)}</span>
// //               </div>
// //               <div className="flex justify-between text-lg font-semibold">
// //                 <span>Total (Incl. VAT)</span>
// //                 <span>${total}</span>
// //               </div>
// //             </div>
// //             <Link to="/Menu/Cart/payment">
// //               <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
// //                 Go to Secure Checkout
// //               </button>
// //             </Link>
// //             <div className="mt-4">
// //               <p>We Accept</p>
// //               <div className="flex mt-2 space-x-2">
// //                 <img
// //                   src="/assets/visa.png"
// //                   alt="Visa"
// //                   className="w-10 h-6 object-contain"
// //                 />
// //                 <img
// //                   src="/assets/mastercard.png"
// //                   alt="MasterCard"
// //                   className="w-10 h-6 object-contain"
// //                 />
// //                 <img
// //                   src="/assets/amex.png"
// //                   alt="Amex"
// //                   className="w-10 h-6 object-contain"
// //                 />
// //                 <img
// //                   src="/assets/discover.png"
// //                   alt="Discover"
// //                   className="w-10 h-6 object-contain"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }
// // ////////////////////////
// // import React, { useState } from "react";
// // import Header from "../component/Header/Header";
// // import { FaTrash } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer/Footer";

// // const cartItems = [
// //   {
// //     id: 1,
// //     image: "/image/Portable Charger.jpg",
// //     itemName: "Premium Charger",
// //     quantity: 2,
// //     price: 29.99,
// //   },
// //   {
// //     id: 2,
// //     image: "/image/EV Charger.jpg",
// //     itemName: "LED Headlights",
// //     quantity: 1,
// //     price: 99.99,
// //   },
// //   {
// //     id: 3,
// //     image: "/image/Tire 1.jpg",
// //     itemName: "Tire",
// //     quantity: 3,
// //     price: 49.99,
// //   },
// // ];

// // export default function Cart() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const toggleDarkMode = () => setDarkMode(!darkMode);

// //   const subtotal = cartItems
// //     .reduce((total, item) => total + item.price * item.quantity, 0)
// //     .toFixed(2);
// //   const deliveryFee = 10.0; // example delivery fee
// //   const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);
// //   // p-4 md:p-8
// //   return (
// //     <div className={`${darkMode ? "dark" : ""}`}>
// //       <div className=" min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
// //         <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

// //         <div className="max-w-screen-2xl container mx-auto xl:px-24  pt-28 px-16">
// //           <h2 className="text-3xl font-bold leading-snug mb-8">
// //             Shopping Cart
// //           </h2>

// //           <div className="flex flex-col lg:flex-row justify-between">
// //             {/* Cart Items */}
// //             <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
// //               {cartItems.map((item) => (
// //                 <div
// //                   key={item.id}
// //                   className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center justify-between"
// //                 >
// //                   <div className="flex items-center">
// //                     <img
// //                       src={item.image}
// //                       alt={item.itemName}
// //                       className="w-24 h-24 object-cover rounded border border-gray-300 dark:border-gray-700 mr-4"
// //                     />
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
// //                         {item.itemName}
// //                       </h3>
// //                       <div className="flex items-center mt-2">
// //                         <span className="mr-2">QTY</span>
// //                         <select className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
// //                           {[...Array(10).keys()].map((n) => (
// //                             <option key={n + 1} value={n + 1}>
// //                               {n + 1}
// //                             </option>
// //                           ))}
// //                         </select>
// //                       </div>
// //                       <button className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
// //                         <FaTrash className="mr-1" /> Remove
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
// //                     ${(item.price * item.quantity).toFixed(2)}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Cart Summary */}
// //             <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
// //               <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
// //               <div className="mb-4">
// //                 <label className="block mb-2" htmlFor="promo-code">
// //                   Add Promo Code
// //                 </label>
// //                 <div className="flex">
// //                   <input
// //                     type="text"
// //                     id="promo-code"
// //                     className="border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                     placeholder="Promo code"
// //                   />
// //                   <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
// //                     Apply
// //                   </button>
// //                 </div>
// //               </div>
// //               <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //                 <div className="flex justify-between mb-2">
// //                   <span>Subtotal</span>
// //                   <span>${subtotal}</span>
// //                 </div>
// //                 <div className="flex justify-between mb-2">
// //                   <span>Delivery</span>
// //                   <span>${deliveryFee.toFixed(2)}</span>
// //                 </div>
// //                 <div className="flex justify-between text-lg font-semibold">
// //                   <span>Total (Incl. VAT)</span>
// //                   <span>${total}</span>
// //                 </div>
// //               </div>
// //               <Link to="/Menu/Cart/payment">
// //                 <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
// //                   Go to Secure Checkout
// //                 </button>
// //               </Link>
// //               <div className="mt-4">
// //                 <p>We Accept</p>
// //                 <div className="flex mt-2 space-x-2">
// //                   <img
// //                     src="/image/Visa-Logo-700x394.png"
// //                     alt="Visa"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/Mastercard-Logo.png"
// //                     alt="MasterCard"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/PayPal-Logo.png"
// //                     alt="paypal"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }
// ////////////////////okkkkkkkkkkkkkkkkkkkkkk///////
// // import React, { useState, useEffect } from "react";
// // import Header from "../component/Header/Header";
// // import { FaTrash } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer/Footer";

// // export default function Cart() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const toggleDarkMode = () => setDarkMode(!darkMode);
// //   const [cartItems, setCartItems] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetchCart();
// //   }, []);

// //   const fetchCart = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/cart");
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }
// //       const data = await response.json();
// //       setCartItems(data.items);
// //     } catch (error) {
// //       console.error("Error fetching cart:", error);
// //       setError("Failed to load cart. Please try again later.");
// //     }
// //   };

// //   const handleQuantityChange = async (itemId, newQuantity) => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/cart/update", {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           productId: itemId,
// //           quantity: newQuantity,
// //         }),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       await fetchCart(); // Refresh the cart after update
// //     } catch (error) {
// //       console.error("Error updating cart item:", error);
// //       setError("Failed to update cart item. Please try again later.");
// //     }
// //   };

// //   const handleRemoveItem = async (itemId) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:5000/api/cart/remove/${itemId}`,
// //         {
// //           method: "DELETE",
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       await fetchCart(); // Refresh the cart after removal
// //     } catch (error) {
// //       console.error("Error removing cart item:", error);
// //       setError("Failed to remove cart item. Please try again later.");
// //     }
// //   };

// //   const subtotal = cartItems
// //     .reduce((total, item) => total + item.productId.price * item.quantity, 0)
// //     .toFixed(2);
// //   const deliveryFee = 10.0;
// //   const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

// //   if (error) {
// //     return <div className="text-red-500">{error}</div>;
// //   }

// //   return (
// //     <div className={`${darkMode ? "dark" : ""}`}>
// //       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
// //         <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

// //         <div className="max-w-screen-2xl container mx-auto xl:px-24 pt-28 px-16">
// //           <h2 className="text-3xl font-bold leading-snug mb-8">
// //             Shopping Cart
// //           </h2>

// //           <div className="flex flex-col lg:flex-row justify-between">
// //             {/* Cart Items */}
// //             <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
// //               {cartItems.map((item) => (
// //                 <div
// //                   key={item._id}
// //                   className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center justify-between"
// //                 >
// //                   <div className="flex items-center">
// //                     <img
// //                       src={`http://localhost:5000/${item.productId.images[0]}`}
// //                       alt={item.productId.name}
// //                       className="w-24 h-24 object-cover rounded border border-gray-300 dark:border-gray-700 mr-4"
// //                     />
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
// //                         {item.productId.name}
// //                       </h3>
// //                       <div className="flex items-center mt-2">
// //                         <span className="mr-2">QTY</span>
// //                         <select
// //                           className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                           value={item.quantity}
// //                           onChange={(e) =>
// //                             handleQuantityChange(
// //                               item.productId._id,
// //                               parseInt(e.target.value)
// //                             )
// //                           }
// //                         >
// //                           {[...Array(10).keys()].map((n) => (
// //                             <option key={n + 1} value={n + 1}>
// //                               {n + 1}
// //                             </option>
// //                           ))}
// //                         </select>
// //                       </div>
// //                       <button
// //                         className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"
// //                         onClick={() => handleRemoveItem(item._id)}
// //                       >
// //                         <FaTrash className="mr-1" /> Remove
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
// //                     ${(item.productId.price * item.quantity).toFixed(2)}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Cart Summary */}
// //             <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
// //               <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
// //               <div className="mb-4">
// //                 <label className="block mb-2" htmlFor="promo-code">
// //                   Add Promo Code
// //                 </label>
// //                 <div className="flex">
// //                   <input
// //                     type="text"
// //                     id="promo-code"
// //                     className="border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                     placeholder="Promo code"
// //                   />
// //                   <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
// //                     Apply
// //                   </button>
// //                 </div>
// //               </div>
// //               <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //                 <div className="flex justify-between mb-2">
// //                   <span>Subtotal</span>
// //                   <span>${subtotal}</span>
// //                 </div>
// //                 <div className="flex justify-between mb-2">
// //                   <span>Delivery</span>
// //                   <span>${deliveryFee.toFixed(2)}</span>
// //                 </div>
// //                 <div className="flex justify-between text-lg font-semibold">
// //                   <span>Total (Incl. VAT)</span>
// //                   <span>${total}</span>
// //                 </div>
// //               </div>
// //               <Link to="/Menu/Cart/payment">
// //                 <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
// //                   Go to Secure Checkout
// //                 </button>
// //               </Link>
// //               <div className="mt-4">
// //                 <p>We Accept</p>
// //                 <div className="flex mt-2 space-x-2">
// //                   <img
// //                     src="/image/Visa-Logo-700x394.png"
// //                     alt="Visa"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/Mastercard-Logo.png"
// //                     alt="MasterCard"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/PayPal-Logo.png"
// //                     alt="paypal"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }
// ///////////////////////////////////////
// // import React, { useState, useEffect } from "react";
// // import Header from "../component/Header/Header";
// // import { FaTrash } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer/Footer";
// // import { useCart } from "../CartContext/CartContext";

// // export default function Cart() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const toggleDarkMode = () => setDarkMode(!darkMode);
// //   const [cartItems, setCartItems] = useState([]);
// //   const [error, setError] = useState(null);
// //   const { fetchCartItemsCount } = useCart();

// //   useEffect(() => {
// //     fetchCart();
// //   }, []);

// //   const fetchCart = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/cart");
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }
// //       const data = await response.json();
// //       setCartItems(data.items);
// //       fetchCartItemsCount(); // Update cart count after fetching cart
// //     } catch (error) {
// //       console.error("Error fetching cart:", error);
// //       setError("Failed to load cart. Please try again later.");
// //     }
// //   };

// //   const handleQuantityChange = async (itemId, newQuantity) => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/cart/update", {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           productId: itemId,
// //           quantity: newQuantity,
// //         }),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       await fetchCart(); // Refresh the cart after update
// //     } catch (error) {
// //       console.error("Error updating cart item:", error);
// //       setError("Failed to update cart item. Please try again later.");
// //     }
// //   };

// //   const handleRemoveItem = async (itemId) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:5000/api/cart/remove/${itemId}`,
// //         {
// //           method: "DELETE",
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       await fetchCart(); // Refresh the cart after removal
// //     } catch (error) {
// //       console.error("Error removing cart item:", error);
// //       setError("Failed to remove cart item. Please try again later.");
// //     }
// //   };

// //   const subtotal = cartItems
// //     .reduce((total, item) => total + item.productId.price * item.quantity, 0)
// //     .toFixed(2);
// //   const deliveryFee = 10.0;
// //   const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

// //   if (error) {
// //     return <div className="text-red-500">{error}</div>;
// //   }

// //   return (
// //     <div className={`${darkMode ? "dark" : ""}`}>
// //       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
// //         <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

// //         <div className="max-w-screen-2xl container mx-auto xl:px-24 pt-28 px-16">
// //           <h2 className="text-3xl font-bold leading-snug mb-8">
// //             Shopping Cart
// //           </h2>

// //           <div className="flex flex-col lg:flex-row justify-between">
// //             {/* Cart Items */}
// //             <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
// //               {cartItems.map((item) => (
// //                 <div
// //                   key={item._id}
// //                   className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center justify-between"
// //                 >
// //                   <div className="flex items-center">
// //                     <img
// //                       src={`http://localhost:5000/${item.productId.images[0]}`}
// //                       alt={item.productId.name}
// //                       className="w-24 h-24 object-cover rounded border border-gray-300 dark:border-gray-700 mr-4"
// //                     />
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
// //                         {item.productId.name}
// //                       </h3>
// //                       <div className="flex items-center mt-2">
// //                         <span className="mr-2">QTY</span>
// //                         <select
// //                           className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                           value={item.quantity}
// //                           onChange={(e) =>
// //                             handleQuantityChange(
// //                               item.productId._id,
// //                               parseInt(e.target.value)
// //                             )
// //                           }
// //                         >
// //                           {[...Array(10).keys()].map((n) => (
// //                             <option key={n + 1} value={n + 1}>
// //                               {n + 1}
// //                             </option>
// //                           ))}
// //                         </select>
// //                       </div>
// //                       <button
// //                         className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"
// //                         onClick={() => handleRemoveItem(item._id)}
// //                       >
// //                         <FaTrash className="mr-1" /> Remove
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
// //                     ${(item.productId.price * item.quantity).toFixed(2)}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Cart Summary */}
// //             <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
// //               <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
// //               <div className="mb-4">
// //                 <label className="block mb-2" htmlFor="promo-code">
// //                   Add Promo Code
// //                 </label>
// //                 <div className="flex">
// //                   <input
// //                     type="text"
// //                     id="promo-code"
// //                     className="border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                     placeholder="Promo code"
// //                   />
// //                   <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
// //                     Apply
// //                   </button>
// //                 </div>
// //               </div>
// //               <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //                 <div className="flex justify-between mb-2">
// //                   <span>Subtotal</span>
// //                   <span>${subtotal}</span>
// //                 </div>
// //                 <div className="flex justify-between mb-2">
// //                   <span>Delivery</span>
// //                   <span>${deliveryFee.toFixed(2)}</span>
// //                 </div>
// //                 <div className="flex justify-between text-lg font-semibold">
// //                   <span>Total (Incl. VAT)</span>
// //                   <span>${total}</span>
// //                 </div>
// //               </div>
// //               <Link to="/Menu/Cart/payment">
// //                 <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
// //                   Go to Secure Checkout
// //                 </button>
// //               </Link>
// //               <div className="mt-4">
// //                 <p>We Accept</p>
// //                 <div className="flex mt-2 space-x-2">
// //                   <img
// //                     src="/image/Visa-Logo-700x394.png"
// //                     alt="Visa"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/Mastercard-Logo.png"
// //                     alt="MasterCard"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/PayPal-Logo.png"
// //                     alt="paypal"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }
// // //////////////////////////////////////
// // import React, { useState, useEffect } from "react";
// // import Header from "../component/Header/Header";
// // import { FaTrash } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer/Footer";
// // import { useCart } from "../CartContext/CartContext";

// // export default function Cart() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const toggleDarkMode = () => setDarkMode(!darkMode);
// //   const [cartItems, setCartItems] = useState([]);
// //   const [error, setError] = useState(null);
// //   const { fetchCartItemsCount } = useCart();

// //   useEffect(() => {
// //     fetchCart();
// //   }, []);

// //   const fetchCart = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/cart", {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you store the token in localStorage
// //         },
// //       });
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }
// //       const data = await response.json();
// //       setCartItems(data.items);
// //       fetchCartItemsCount(); // Update cart count after fetching cart
// //     } catch (error) {
// //       console.error("Error fetching cart:", error);
// //       setError("Failed to load cart. Please try again later.");
// //     }
// //   };

// //   const handleQuantityChange = async (itemId, newQuantity) => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/cart/update", {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //         body: JSON.stringify({
// //           productId: itemId,
// //           quantity: newQuantity,
// //         }),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       await fetchCart(); // Refresh the cart after update
// //     } catch (error) {
// //       console.error("Error updating cart item:", error);
// //       setError("Failed to update cart item. Please try again later.");
// //     }
// //   };

// //   const handleRemoveItem = async (itemId) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:5000/api/cart/remove/${itemId}`,
// //         {
// //           method: "DELETE",
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       await fetchCart(); // Refresh the cart after removal
// //     } catch (error) {
// //       console.error("Error removing cart item:", error);
// //       setError("Failed to remove cart item. Please try again later.");
// //     }
// //   };

// //   const subtotal = cartItems
// //     .reduce((total, item) => total + item.productId.price * item.quantity, 0)
// //     .toFixed(2);
// //   const deliveryFee = 10.0;
// //   const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

// //   if (error) {
// //     return <div className="text-red-500">{error}</div>;
// //   }

// //   return (
// //     <div className={`${darkMode ? "dark" : ""}`}>
// //       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
// //         <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

// //         <div className="max-w-screen-2xl container mx-auto xl:px-24 pt-28 px-16">
// //           <h2 className="text-3xl font-bold leading-snug mb-8">
// //             Shopping Cart
// //           </h2>

// //           <div className="flex flex-col lg:flex-row justify-between">
// //             {/* Cart Items */}
// //             <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
// //               {cartItems.map((item) => (
// //                 <div
// //                   key={item._id}
// //                   className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center justify-between"
// //                 >
// //                   <div className="flex items-center">
// //                     <img
// //                       src={`http://localhost:5000/${item.productId.images[0]}`}
// //                       alt={item.productId.name}
// //                       className="w-24 h-24 object-cover rounded border border-gray-300 dark:border-gray-700 mr-4"
// //                     />
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
// //                         {item.productId.name}
// //                       </h3>
// //                       <div className="flex items-center mt-2">
// //                         <span className="mr-2">QTY</span>
// //                         <select
// //                           className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                           value={item.quantity}
// //                           onChange={(e) =>
// //                             handleQuantityChange(
// //                               item.productId._id,
// //                               parseInt(e.target.value)
// //                             )
// //                           }
// //                         >
// //                           {[...Array(10).keys()].map((n) => (
// //                             <option key={n + 1} value={n + 1}>
// //                               {n + 1}
// //                             </option>
// //                           ))}
// //                         </select>
// //                       </div>
// //                       <button
// //                         className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"
// //                         onClick={() => handleRemoveItem(item._id)}
// //                       >
// //                         <FaTrash className="mr-1" /> Remove
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
// //                     ${(item.productId.price * item.quantity).toFixed(2)}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Cart Summary */}
// //             <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
// //               <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
// //               <div className="mb-4">
// //                 <label className="block mb-2" htmlFor="promo-code">
// //                   Add Promo Code
// //                 </label>
// //                 <div className="flex">
// //                   <input
// //                     type="text"
// //                     id="promo-code"
// //                     className="border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                     placeholder="Promo code"
// //                   />
// //                   <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
// //                     Apply
// //                   </button>
// //                 </div>
// //               </div>
// //               <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //                 <div className="flex justify-between mb-2">
// //                   <span>Subtotal</span>
// //                   <span>${subtotal}</span>
// //                 </div>
// //                 <div className="flex justify-between mb-2">
// //                   <span>Delivery</span>
// //                   <span>${deliveryFee.toFixed(2)}</span>
// //                 </div>
// //                 <div className="flex justify-between text-lg font-semibold">
// //                   <span>Total (Incl. VAT)</span>
// //                   <span>${total}</span>
// //                 </div>
// //               </div>
// //               <Link to="/Menu/Cart/payment">
// //                 <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
// //                   Go to Secure Checkout
// //                 </button>
// //               </Link>
// //               <div className="mt-4">
// //                 <p>We Accept</p>
// //                 <div className="flex mt-2 space-x-2">
// //                   <img
// //                     src="/image/Visa-Logo-700x394.png"
// //                     alt="Visa"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/Mastercard-Logo.png"
// //                     alt="MasterCard"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/PayPal-Logo.png"
// //                     alt="paypal"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }
// // ///////////////////////////////////////////////////
// // import React, { useState, useEffect } from "react";
// // import Header from "../component/Header/Header";
// // import { FaTrash } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer/Footer";
// // import { useCart } from "../CartContext/CartContext";

// // export default function Cart() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const toggleDarkMode = () => setDarkMode(!darkMode);
// //   const [cartItems, setCartItems] = useState([]);
// //   const [error, setError] = useState(null);
// //   const { fetchCartItemsCount } = useCart();

// //   useEffect(() => {
// //     console.log("Fetching cart with token:", localStorage.getItem("token"));
// //     fetchCart();
// //   }, []);

// //   const fetchCart = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/cart", {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });
// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(
// //           `HTTP error! status: ${response.status}, message: ${errorData.message}`
// //         );
// //       }
// //       const data = await response.json();
// //       setCartItems(data.items);
// //       fetchCartItemsCount();
// //     } catch (error) {
// //       console.error("Error fetching cart:", error.message);
// //       setError(error.message || "Failed to load cart. Please try again later.");
// //     }
// //   };

// //   const handleQuantityChange = async (itemId, newQuantity) => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/cart/update", {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //         body: JSON.stringify({
// //           productId: itemId,
// //           quantity: newQuantity,
// //         }),
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(
// //           `HTTP error! status: ${response.status}, message: ${errorData.message}`
// //         );
// //       }

// //       await fetchCart();
// //     } catch (error) {
// //       console.error("Error updating cart item:", error.message);
// //       setError(
// //         error.message || "Failed to update cart item. Please try again later."
// //       );
// //     }
// //   };

// //   const handleRemoveItem = async (itemId) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:5000/api/cart/remove/${itemId}`,
// //         {
// //           method: "DELETE",
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(
// //           `HTTP error! status: ${response.status}, message: ${errorData.message}`
// //         );
// //       }

// //       await fetchCart();
// //     } catch (error) {
// //       console.error("Error removing cart item:", error.message);
// //       setError(
// //         error.message || "Failed to remove cart item. Please try again later."
// //       );
// //     }
// //   };

// //   const subtotal = cartItems
// //     .reduce((total, item) => total + item.productId.price * item.quantity, 0)
// //     .toFixed(2);
// //   const deliveryFee = 10.0;
// //   const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
// //         <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
// //           <h2 className="text-2xl font-bold mb-4">Error</h2>
// //           <p className="text-red-500">{error}</p>
// //           <button
// //             onClick={fetchCart}
// //             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //           >
// //             Retry
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className={`${darkMode ? "dark" : ""}`}>
// //       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
// //         <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

// //         <div className="max-w-screen-2xl container mx-auto xl:px-24 pt-28 px-16">
// //           <h2 className="text-3xl font-bold leading-snug mb-8">
// //             Shopping Cart
// //           </h2>

// //           <div className="flex flex-col lg:flex-row justify-between">
// //             {/* Cart Items */}
// //             <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
// //               {cartItems.length === 0 ? (
// //                 <p>Your cart is empty.</p>
// //               ) : (
// //                 cartItems.map((item) => (
// //                   <div
// //                     key={item._id}
// //                     className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center justify-between"
// //                   >
// //                     <div className="flex items-center">
// //                       <img
// //                         src={`http://localhost:5000/${item.productId.images[0]}`}
// //                         alt={item.productId.name}
// //                         className="w-24 h-24 object-cover rounded border border-gray-300 dark:border-gray-700 mr-4"
// //                       />
// //                       <div>
// //                         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
// //                           {item.productId.name}
// //                         </h3>
// //                         <div className="flex items-center mt-2">
// //                           <span className="mr-2">QTY</span>
// //                           <select
// //                             className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                             value={item.quantity}
// //                             onChange={(e) =>
// //                               handleQuantityChange(
// //                                 item.productId._id,
// //                                 parseInt(e.target.value)
// //                               )
// //                             }
// //                           >
// //                             {[...Array(10).keys()].map((n) => (
// //                               <option key={n + 1} value={n + 1}>
// //                                 {n + 1}
// //                               </option>
// //                             ))}
// //                           </select>
// //                         </div>
// //                         <button
// //                           className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"
// //                           onClick={() => handleRemoveItem(item._id)}
// //                         >
// //                           <FaTrash className="mr-1" /> Remove
// //                         </button>
// //                       </div>
// //                     </div>
// //                     <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
// //                       ${(item.productId.price * item.quantity).toFixed(2)}
// //                     </div>
// //                   </div>
// //                 ))
// //               )}
// //             </div>

// //             {/* Cart Summary */}
// //             <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
// //               <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
// //               <div className="mb-4">
// //                 <label className="block mb-2" htmlFor="promo-code">
// //                   Add Promo Code
// //                 </label>
// //                 <div className="flex">
// //                   <input
// //                     type="text"
// //                     id="promo-code"
// //                     className="border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
// //                     placeholder="Promo code"
// //                   />
// //                   <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
// //                     Apply
// //                   </button>
// //                 </div>
// //               </div>
// //               <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
// //                 <div className="flex justify-between mb-2">
// //                   <span>Subtotal</span>
// //                   <span>${subtotal}</span>
// //                 </div>
// //                 <div className="flex justify-between mb-2">
// //                   <span>Delivery</span>
// //                   <span>${deliveryFee.toFixed(2)}</span>
// //                 </div>
// //                 <div className="flex justify-between text-lg font-semibold">
// //                   <span>Total (Incl. VAT)</span>
// //                   <span>${total}</span>
// //                 </div>
// //               </div>
// //               <Link to="/Menu/Cart/payment">
// //                 <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
// //                   Go to Secure Checkout
// //                 </button>
// //               </Link>
// //               <div className="mt-4">
// //                 <p>We Accept</p>
// //                 <div className="flex mt-2 space-x-2">
// //                   <img
// //                     src="/image/Visa-Logo-700x394.png"
// //                     alt="Visa"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/Mastercard-Logo.png"
// //                     alt="MasterCard"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                   <img
// //                     src="/image/PayPal-Logo.png"
// //                     alt="paypal"
// //                     className="w-10 h-6 object-contain"
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }
// //////////////ok dowun 100//////////////////////
// import React, { useState, useEffect } from "react";
// import Header from "../component/Header/Header";
// import { FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Footer from "../component/Footer/Footer";
// import { useCart } from "../CartContext/CartContext";

// export default function Cart() {
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleDarkMode = () => setDarkMode(!darkMode);
//   const [cartItems, setCartItems] = useState([]);
//   const [error, setError] = useState(null);
//   const { fetchCartItemsCount } = useCart();

//   useEffect(() => {
//     console.log("Fetching cart with token:", localStorage.getItem("token"));
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/cart", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           `HTTP error! status: ${response.status}, message: ${errorData.message}`
//         );
//       }
//       const data = await response.json();
//       setCartItems(data.items);
//       await fetchCartItemsCount();
//     } catch (error) {
//       console.error("Error fetching cart:", error.message);
//       setError(error.message || "Failed to load cart. Please try again later.");
//     }
//   };

//   const handleQuantityChange = async (itemId, newQuantity) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/cart/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({
//           productId: itemId,
//           quantity: newQuantity,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           `HTTP error! status: ${response.status}, message: ${errorData.message}`
//         );
//       }

//       await fetchCart();
//     } catch (error) {
//       console.error("Error updating cart item:", error.message);
//       setError(
//         error.message || "Failed to update cart item. Please try again later."
//       );
//     }
//   };

//   const handleRemoveItem = async (itemId) => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/cart/remove/${itemId}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           `HTTP error! status: ${response.status}, message: ${errorData.message}`
//         );
//       }

//       await fetchCart();
//     } catch (error) {
//       console.error("Error removing cart item:", error.message);
//       setError(
//         error.message || "Failed to remove cart item. Please try again later."
//       );
//     }
//   };

//   const subtotal = cartItems
//     .reduce((total, item) => total + item.productId.price * item.quantity, 0)
//     .toFixed(2);
//   const deliveryFee = 10.0;
//   const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
//         <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Error</h2>
//           <p className="text-red-500">{error}</p>
//           <button
//             onClick={fetchCart}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={`${darkMode ? "dark" : ""}`}>
//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//         <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

//         <div className="max-w-screen-2xl container mx-auto xl:px-24 pt-28 px-16">
//           <h2 className="text-3xl font-bold leading-snug mb-8">
//             Shopping Cart
//           </h2>

//           <div className="flex flex-col lg:flex-row justify-between">
//             {/* Cart Items */}
//             <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
//               {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//               ) : (
//                 cartItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center justify-between"
//                   >
//                     <div className="flex items-center">
//                       <img
//                         src={`http://localhost:5000/${item.productId.images[0]}`}
//                         alt={item.productId.name}
//                         className="w-24 h-24 object-cover rounded border border-gray-300 dark:border-gray-700 mr-4"
//                       />
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//                           {item.productId.name}
//                         </h3>
//                         <div className="flex items-center mt-2">
//                           <span className="mr-2">QTY</span>
//                           <select
//                             className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                             value={item.quantity}
//                             onChange={(e) =>
//                               handleQuantityChange(
//                                 item.productId._id,
//                                 parseInt(e.target.value)
//                               )
//                             }
//                           >
//                             {[...Array(10).keys()].map((n) => (
//                               <option key={n + 1} value={n + 1}>
//                                 {n + 1}
//                               </option>
//                             ))}
//                           </select>
//                         </div>
//                         <button
//                           className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"
//                           onClick={() => handleRemoveItem(item._id)}
//                         >
//                           <FaTrash className="mr-1" /> Remove
//                         </button>
//                       </div>
//                     </div>
//                     <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
//                       ${(item.productId.price * item.quantity).toFixed(2)}
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* Cart Summary */}
//             <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
//               <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
//               <div className="mb-4">
//                 <label className="block mb-2" htmlFor="promo-code">
//                   Add Promo Code
//                 </label>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     id="promo-code"
//                     className="border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                     placeholder="Promo code"
//                   />
//                   <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
//                     Apply
//                   </button>
//                 </div>
//               </div>
//               <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//                 <div className="flex justify-between mb-2">
//                   <span>Subtotal</span>
//                   <span>${subtotal}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Delivery</span>
//                   <span>${deliveryFee.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-lg font-semibold">
//                   <span>Total (Incl. VAT)</span>
//                   <span>${total}</span>
//                 </div>
//               </div>
//               <Link to="/Menu/Cart/payment">
//                 <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
//                   Go to Secure Checkout
//                 </button>
//               </Link>
//               <div className="mt-4">
//                 <p>We Accept</p>
//                 <div className="flex mt-2 space-x-2">
//                   <img
//                     src="/image/Visa-Logo-700x394.png"
//                     alt="Visa"
//                     className="w-10 h-6 object-contain"
//                   />
//                   <img
//                     src="/image/Mastercard-Logo.png"
//                     alt="MasterCard"
//                     className="w-10 h-6 object-contain"
//                   />
//                   <img
//                     src="/image/PayPal-Logo.png"
//                     alt="paypal"
//                     className="w-10 h-6 object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// }
///////////////////////////

//////////////////////
//////////////////////////////////
import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import { useCart } from "../CartContext/CartContext";

export default function Cart() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchCartItemsCount } = useCart();

  useEffect(() => {
    console.log("Fetching cart with token:", localStorage.getItem("token"));
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message}`
        );
      }
      const data = await response.json();
      setCartItems(data.items || []);
      await fetchCartItemsCount();
    } catch (error) {
      console.error("Error fetching cart:", error.message);
      setError(error.message || "Failed to load cart. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          productId: itemId,
          quantity: newQuantity,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message}`
        );
      }

      await fetchCart();
    } catch (error) {
      console.error("Error updating cart item:", error.message);
      setError(
        error.message || "Failed to update cart item. Please try again later."
      );
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/remove/${itemId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message}`
        );
      }

      await fetchCart();
    } catch (error) {
      console.error("Error removing cart item:", error.message);
      setError(
        error.message || "Failed to remove cart item. Please try again later."
      );
    }
  };

  const subtotal = cartItems
    .reduce((total, item) => {
      const price =
        item.productId && item.productId.price ? item.productId.price : 0;
      const quantity = item.quantity || 0;
      return total + price * quantity;
    }, 0)
    .toFixed(2);

  const deliveryFee = 10.0;
  const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-red-500">{error}</p>
          <button
            onClick={fetchCart}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header darkMode={darkMode} handleDarkMode={toggleDarkMode} />

        <div className="max-w-screen-2xl container mx-auto xl:px-24 pt-28 px-16">
          <h2 className="text-3xl font-bold leading-snug mb-8">
            Shopping Cart
          </h2>

          <div className="flex flex-col lg:flex-row justify-between">
            {/* Cart Items */}
            <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src={
                          item.productId &&
                          item.productId.images &&
                          item.productId.images.length > 0
                            ? `http://localhost:5000/${item.productId.images[0]}`
                            : "/placeholder-image.jpg"
                        }
                        alt={item.productId ? item.productId.name : "Product"}
                        className="w-24 h-24 object-cover rounded border border-gray-300 dark:border-gray-700 mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {item.productId
                            ? item.productId.name
                            : "Unknown Product"}
                        </h3>
                        <div className="flex items-center mt-2">
                          <span className="mr-2">QTY</span>
                          <select
                            className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.productId._id,
                                parseInt(e.target.value)
                              )
                            }
                          >
                            {[...Array(10).keys()].map((n) => (
                              <option key={n + 1} value={n + 1}>
                                {n + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <button
                          className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center"
                          onClick={() => handleRemoveItem(item._id)}
                        >
                          <FaTrash className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      $
                      {(
                        (item.productId ? item.productId.price : 0) *
                        item.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Summary */}
            <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="promo-code">
                  Add Promo Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="promo-code"
                    className="border border-gray-300 dark:border-gray-700 rounded-l px-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder="Promo code"
                  />
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
                    Apply
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Delivery</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total (Incl. VAT)</span>
                  <span>${total}</span>
                </div>
              </div>
              <Link to="/payment">
  <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">
    Go to Secure Checkout
  </button>
</Link>
              <div className="mt-4">
                <p>We Accept</p>
                <div className="flex mt-2 space-x-2">
                  <img
                    src="/image/Visa-Logo-700x394.png"
                    alt="Visa"
                    className="w-10 h-6 object-contain"
                  />
                  <img
                    src="/image/Mastercard-Logo.png"
                    alt="MasterCard"
                    className="w-10 h-6 object-contain"
                  />
                  <img
                    src="/image/PayPal-Logo.png"
                    alt="paypal"
                    className="w-10 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
