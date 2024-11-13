// // // import React, { useState } from 'react';
// // // import { Camera } from 'lucide-react';

// // // const ProfilePage = () => {
// // //   const [name, setName] = useState('John Doe');
// // //   const [email, setEmail] = useState('john.doe@example.com');
// // //   const [password, setPassword] = useState('');
// // //   const [imageUrl, setImageUrl] = useState('/api/placeholder/150/150');

// // //   const purchasedParts = [
// // //     { id: 1, name: 'EV Battery Pack', date: '2024-07-15' },
// // //     { id: 2, name: 'Electric Motor', date: '2024-07-20' },
// // //     { id: 3, name: 'Charging Port', date: '2024-07-25' },
// // //   ];

// // //   const handleImageChange = (e) => {
// // //     // In a real app, you'd handle file upload here
// // //     console.log('Image changed:', e.target.files[0]);
// // //     // For demo purposes, we're just logging the file
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Handle form submission (e.g., API call to update profile)
// // //     console.log('Profile updated:', { name, email, password });
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //         <div className="md:col-span-2">
// // //           <div className="bg-white shadow rounded-lg p-6">
// // //             <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
// // //             <form onSubmit={handleSubmit}>
// // //               <div className="space-y-4">
// // //                 <div className="flex items-center space-x-4">
// // //                   <div className="relative">
// // //                     <img
// // //                       src={imageUrl}
// // //                       alt="Profile"
// // //                       className="w-24 h-24 rounded-full object-cover"
// // //                     />
// // //                     <label htmlFor="profile-picture" className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer">
// // //                       <Camera className="w-4 h-4 text-white" />
// // //                       <input
// // //                         type="file"
// // //                         id="profile-picture"
// // //                         className="hidden"
// // //                         onChange={handleImageChange}
// // //                         accept="image/*"
// // //                       />
// // //                     </label>
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <input
// // //                       type="text"
// // //                       value={name}
// // //                       onChange={(e) => setName(e.target.value)}
// // //                       placeholder="Full Name"
// // //                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //                 <input
// // //                   type="email"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                   placeholder="Email"
// // //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                 />
// // //                 <input
// // //                   type="password"
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   placeholder="New Password"
// // //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                 />
// // //                 <button
// // //                   type="submit"
// // //                   className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// // //                 >
// // //                   Update Profile
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </div>

// // //         <div>
// // //           <div className="bg-white shadow rounded-lg p-6">
// // //             <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
// // //             <ul className="space-y-2">
// // //               {purchasedParts.map((part) => (
// // //                 <li key={part.id} className="flex justify-between items-center border-b pb-2">
// // //                   <span>{part.name}</span>
// // //                   <span className="text-sm text-gray-500">{part.date}</span>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
// // //         <p>
// // //           Keep your profile up to date to receive personalized recommendations for electric car parts!
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProfilePage;
// // /////////////////////
// // import React, { useState } from "react";
// // import { Camera } from "lucide-react";

// // const ProfilePage = () => {
// //   const [name, setName] = useState("جون دو");
// //   const [email, setEmail] = useState("john.doe@example.com");
// //   const [password, setPassword] = useState("");
// //   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

// //   const purchasedParts = [
// //     {
// //       id: 1,
// //       name: "بطارية EV",
// //       date: "2024-07-15",
// //       image: "/api/placeholder/100/100",
// //     },
// //     {
// //       id: 2,
// //       name: "محرك كهربائي",
// //       date: "2024-07-20",
// //       image: "/api/placeholder/100/100",
// //     },
// //     {
// //       id: 3,
// //       name: "منفذ شحن",
// //       date: "2024-07-25",
// //       image: "/api/placeholder/100/100",
// //     },
// //   ];

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setImageUrl(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("تم تحديث الملف الشخصي:", { name, email, password });
// //   };

// //   return (
// //     <div className="container mx-auto p-4 font-arabic" dir="rtl">
// //       <h1 className="text-3xl font-bold mb-6 text-right">الملف الشخصي</h1>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <div className="md:col-span-2">
// //           <div className="bg-white shadow rounded-lg p-6">
// //             <div className="mb-6 flex justify-center">
// //               <div className="relative">
// //                 <img
// //                   src={imageUrl}
// //                   alt="الصورة الشخصية"
// //                   className="w-32 h-32 rounded-full object-cover"
// //                 />
// //                 <label
// //                   htmlFor="profile-picture"
// //                   className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
// //                 >
// //                   <Camera className="w-4 h-4 text-white" />
// //                   <input
// //                     type="file"
// //                     id="profile-picture"
// //                     className="hidden"
// //                     onChange={handleImageChange}
// //                     accept="image/*"
// //                   />
// //                 </label>
// //               </div>
// //             </div>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <input
// //                 type="text"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 placeholder="الاسم الكامل"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
// //               />
// //               <input
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="البريد الإلكتروني"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
// //               />
// //               <input
// //                 type="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 placeholder="كلمة المرور الجديدة"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
// //               />
// //               <button
// //                 type="submit"
// //                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //               >
// //                 تحديث الملف الشخصي
// //               </button>
// //             </form>
// //           </div>
// //         </div>

// //         <div>
// //           <div className="bg-white shadow rounded-lg p-6">
// //             <h2 className="text-xl font-semibold mb-4 text-right">
// //               القطع المشتراة
// //             </h2>
// //             <ul className="space-y-4">
// //               {purchasedParts.map((part) => (
// //                 <li
// //                   key={part.id}
// //                   className="flex items-center space-x-4 space-x-reverse"
// //                 >
// //                   <img
// //                     src={part.image}
// //                     alt={part.name}
// //                     className="w-16 h-16 object-cover rounded-md"
// //                   />
// //                   <div className="flex-1">
// //                     <h3 className="font-semibold">{part.name}</h3>
// //                     <p className="text-sm text-gray-500">{part.date}</p>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mt-6 bg-blue-100 border-r-4 border-blue-500 text-blue-700 p-4 rounded-md text-right">
// //         <p>
// //           حافظ على تحديث ملفك الشخصي لتلقي توصيات مخصصة لقطع غيار السيارات
// //           الكهربائية!
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;
// ////////////
// import React, { useState } from "react";
// import { Camera } from "lucide-react";

// const ProfilePage = () => {
//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("john.doe@example.com");
//   const [password, setPassword] = useState("");
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

//   const purchasedParts = [
//     {
//       id: 1,
//       name: "EV Battery Pack",
//       date: "2024-07-15",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 2,
//       name: "Electric Motor",
//       date: "2024-07-20",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 3,
//       name: "Charging Port",
//       date: "2024-07-25",
//       image: "/api/placeholder/100/100",
//     },
//   ];

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImageUrl(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Profile updated:", { name, email, password });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2">
//           <div className="bg-white shadow rounded-lg p-6">
//             <div className="mb-6 flex justify-center">
//               <div className="relative">
//                 <img
//                   src={imageUrl}
//                   alt="Profile Picture"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//                 <label
//                   htmlFor="profile-picture"
//                   className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
//                 >
//                   <Camera className="w-4 h-4 text-white" />
//                   <input
//                     type="file"
//                     id="profile-picture"
//                     className="hidden"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                   />
//                 </label>
//               </div>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Full Name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="New Password"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Update Profile
//               </button>
//             </form>
//           </div>
//         </div>

//         <div>
//           <div className="bg-white shadow rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
//             <ul className="space-y-4">
//               {purchasedParts.map((part) => (
//                 <li key={part.id} className="flex items-center space-x-4">
//                   <img
//                     src={part.image}
//                     alt={part.name}
//                     className="w-16 h-16 object-cover rounded-md"
//                   />
//                   <div>
//                     <h3 className="font-semibold">{part.name}</h3>
//                     <p className="text-sm text-gray-500">{part.date}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//         <p>
//           Keep your profile up to date to receive personalized recommendations
//           for electric car parts!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
// //////////////////////////////
// import React, { useState } from "react";
// import { Camera } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("john.doe@example.com");
//   const [password, setPassword] = useState("");
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

//   const purchasedParts = [
//     {
//       id: 1,
//       name: "EV Battery Pack",
//       date: "2024-07-15",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 2,
//       name: "Electric Motor",
//       date: "2024-07-20",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 3,
//       name: "Charging Port",
//       date: "2024-07-25",
//       image: "/api/placeholder/100/100",
//     },
//   ];

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImageUrl(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Profile updated:", { name, email, password });
//     alert("Profile updated successfully!");
//   };

//   return (
//     <div className="container mx-24 py-28">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2">
//           <div className="bg-white shadow rounded-lg p-6">
//             <div className="mb-6 flex justify-center">
//               <div className="relative">
//                 <img
//                   src={imageUrl}
//                   alt="Profile Picture"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//                 <label
//                   htmlFor="profile-picture"
//                   className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
//                 >
//                   <Camera className="w-4 h-4 text-white" />
//                   <input
//                     type="file"
//                     id="profile-picture"
//                     className="hidden"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                   />
//                 </label>
//               </div>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Full Name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="New Password"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Update Profile
//               </button>
//             </form>
//           </div>
//         </div>

//         <div>
//           <div className="bg-white shadow rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
//             <ul className="space-y-4">
//               {purchasedParts.map((part) => (
//                 <li key={part.id} className="flex items-center space-x-4">
//                   <img
//                     src="/public/image/EV Charger.jpg"
//                     alt={part.name}
//                     className="w-16 h-16 object-cover rounded-md"
//                   />
//                   <div>
//                     <h3 className="font-semibold">{part.name}</h3>
//                     <p className="text-sm text-gray-500">{part.date}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//         <p>
//           Keep your profile up to date to receive personalized recommendations
//           for electric car parts!
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfilePage;
// //////////////////
// import React, { useState } from "react";
// import { Camera } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("john.doe@example.com");
//   const [password, setPassword] = useState("");
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

//   const purchasedParts = [
//     {
//       id: 1,
//       name: "EV Battery Pack",
//       date: "2024-07-15",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 2,
//       name: "Electric Motor",
//       date: "2024-07-20",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 3,
//       name: "Charging Port",
//       date: "2024-07-25",
//       image: "/api/placeholder/100/100",
//     },
//   ];

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImageUrl(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Profile updated:", { name, email, password });
//     alert("Profile updated successfully!");
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="mb-6 flex justify-center">
//             <div className="relative">
//               <img
//                 src={imageUrl}
//                 alt="Profile Picture"
//                 className="w-32 h-32 rounded-full object-cover"
//               />
//               <label
//                 htmlFor="profile-picture"
//                 className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
//               >
//                 <Camera className="w-4 h-4 text-white" />
//                 <input
//                   type="file"
//                   id="profile-picture"
//                   className="hidden"
//                   onChange={handleImageChange}
//                   accept="image/*"
//                 />
//               </label>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Full Name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email Address"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="New Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Update Profile
//             </button>
//           </form>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
//           <ul className="space-y-4">
//             {purchasedParts.map((part) => (
//               <li key={part.id} className="flex items-center space-x-4">
//                 <img
//                   src={part.image}
//                   alt={part.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{part.name}</h3>
//                   <p className="text-sm text-gray-500">{part.date}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//         <p>
//           Keep your profile up to date to receive personalized recommendations
//           for electric car parts!
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfilePage;
// /////////////////////////////////////
// import React, { useState } from "react";
// import { Camera } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("john.doe@example.com");
//   const [password, setPassword] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

//   const purchasedParts = [
//     {
//       id: 1,
//       name: "EV Battery Pack",
//       date: "2024-07-15",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 2,
//       name: "Electric Motor",
//       date: "2024-07-20",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 3,
//       name: "Charging Port",
//       date: "2024-07-25",
//       image: "/api/placeholder/100/100",
//     },
//   ];

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImageUrl(URL.createObjectURL(file)); // Show preview of the image
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);
//     if (imageFile) {
//       formData.append("profileImage", imageFile);
//     }

//     fetch("/api/users/profile", {
//       method: "PUT",
//       body: formData,
//       headers: {
//         // Add any required headers here
//         // For example: 'Authorization': `Bearer ${token}`
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Profile updated:", data);
//         alert("Profile updated successfully!");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="mb-6 flex justify-center">
//             <div className="relative">
//               <img
//                 src={imageUrl}
//                 alt="Profile Picture"
//                 className="w-32 h-32 rounded-full object-cover"
//               />
//               <label
//                 htmlFor="profile-picture"
//                 className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
//               >
//                 <Camera className="w-4 h-4 text-white" />
//                 <input
//                   type="file"
//                   id="profile-picture"
//                   className="hidden"
//                   onChange={handleImageChange}
//                   accept="image/*"
//                 />
//               </label>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Full Name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email Address"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="New Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Update Profile
//             </button>
//           </form>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
//           <ul className="space-y-4">
//             {purchasedParts.map((part) => (
//               <li key={part.id} className="flex items-center space-x-4">
//                 <img
//                   src={part.image}
//                   alt={part.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{part.name}</h3>
//                   <p className="text-sm text-gray-500">{part.date}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//         <p>
//           Keep your profile up to date to receive personalized recommendations
//           for electric car parts!
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfilePage;
// /////////////////////////////////////////////////
// import React, { useState } from "react";
// import { Camera } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("john.doe@example.com");
//   const [password, setPassword] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

//   const purchasedParts = [
//     {
//       id: 1,
//       name: "EV Battery Pack",
//       date: "2024-07-15",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 2,
//       name: "Electric Motor",
//       date: "2024-07-20",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 3,
//       name: "Charging Port",
//       date: "2024-07-25",
//       image: "/api/placeholder/100/100",
//     },
//   ];

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImageUrl(URL.createObjectURL(file)); // Show preview of the image
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);
//     if (imageFile) {
//       formData.append("profileImage", imageFile);
//     }

//     fetch("/api/users/profile", {
//       method: "PUT",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Profile updated:", data);
//         setImageUrl(data.profileImage); // تحديث رابط الصورة بعد رفعها
//         alert("Profile updated successfully!");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="mb-6 flex justify-center">
//             <div className="relative">
//               <img
//                 src={imageUrl}
//                 alt="Profile Picture"
//                 className="w-32 h-32 rounded-full object-cover"
//               />
//               <label
//                 htmlFor="profile-picture"
//                 className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
//               >
//                 <Camera className="w-4 h-4 text-white" />
//                 <input
//                   type="file"
//                   id="profile-picture"
//                   className="hidden"
//                   onChange={handleImageChange}
//                   accept="image/*"
//                 />
//               </label>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Full Name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email Address"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="New Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Update Profile
//             </button>
//           </form>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
//           <ul className="space-y-4">
//             {purchasedParts.map((part) => (
//               <li key={part.id} className="flex items-center space-x-4">
//                 <img
//                   src={part.image}
//                   alt={part.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{part.name}</h3>
//                   <p className="text-sm text-gray-500">{part.date}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//         <p>
//           Keep your profile up to date to receive personalized recommendations
//           for electric car parts!
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfilePage;
// ////////////
// import React, { useState, useEffect } from "react";
// import { Camera } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

//   const purchasedParts = [
//     {
//       id: 1,
//       name: "EV Battery Pack",
//       date: "2024-07-15",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 2,
//       name: "Electric Motor",
//       date: "2024-07-20",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 3,
//       name: "Charging Port",
//       date: "2024-07-25",
//       image: "/api/placeholder/100/100",
//     },
//   ];

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const response = await fetch("/api/users/profile", {
//         method: "GET",
//         credentials: "include",
//       });
//       const data = await response.json();
//       setName(data.user.username);
//       setEmail(data.user.email);
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImageUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("username", name);
//     formData.append("email", email);
//     if (password) formData.append("password", password);
//     if (imageFile) {
//       formData.append("profileImage", imageFile);
//     }

//     try {
//       const response = await fetch("/api/users/profile", {
//         method: "PUT",
//         body: formData,
//         credentials: "include",
//       });
//       const data = await response.json();
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="mb-6 flex justify-center">
//             <div className="relative">
//               <img
//                 src={imageUrl}
//                 alt="Profile Picture"
//                 className="w-32 h-32 rounded-full object-cover"
//               />
//               <label
//                 htmlFor="profile-picture"
//                 className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
//               >
//                 <Camera className="w-4 h-4 text-white" />
//                 <input
//                   type="file"
//                   id="profile-picture"
//                   className="hidden"
//                   onChange={handleImageChange}
//                   accept="image/*"
//                 />
//               </label>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Full Name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email Address"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="New Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Update Profile
//             </button>
//           </form>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
//           <ul className="space-y-4">
//             {purchasedParts.map((part) => (
//               <li key={part.id} className="flex items-center space-x-4">
//                 <img
//                   src={part.image}
//                   alt={part.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{part.name}</h3>
//                   <p className="text-sm text-gray-500">{part.date}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//         <p>
//           Keep your profile up to date to receive personalized recommendations
//           for electric car parts!
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfilePage;
// ///////////////
// import React, { useState, useEffect } from "react";
// import { Camera } from "lucide-react";
// import Footer from "../component/Footer/Footer";
// import Header from "../component/Header/Header";

// const ProfilePage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

//   const purchasedParts = [
//     {
//       id: 1,
//       name: "EV Battery Pack",
//       date: "2024-07-15",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 2,
//       name: "Electric Motor",
//       date: "2024-07-20",
//       image: "/api/placeholder/100/100",
//     },
//     {
//       id: 3,
//       name: "Charging Port",
//       date: "2024-07-25",
//       image: "/api/placeholder/100/100",
//     },
//   ];

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "GET",
//         credentials: "include",
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setName(data.user.username);
//       setEmail(data.user.email);
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImageUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("username", name);
//     formData.append("email", email);
//     if (password) formData.append("password", password);
//     if (imageFile) {
//       formData.append("profileImage", imageFile);
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/users/profile", {
//         method: "PUT",
//         body: formData,
//         credentials: "include",
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       if (data.user.profileImage) {
//         setImageUrl(`http://localhost:5000${data.user.profileImage}`);
//       }
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6">
//           <div className="mb-6 flex justify-center">
//             <div className="relative">
//               <img
//                 src={imageUrl}
//                 alt="Profile Picture"
//                 className="w-32 h-32 rounded-full object-cover"
//               />
//               <label
//                 htmlFor="profile-picture"
//                 className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
//               >
//                 <Camera className="w-4 h-4 text-white" />
//                 <input
//                   type="file"
//                   id="profile-picture"
//                   className="hidden"
//                   onChange={handleImageChange}
//                   accept="image/*"
//                 />
//               </label>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Full Name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email Address"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="New Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Update Profile
//             </button>
//           </form>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
//           <ul className="space-y-4">
//             {purchasedParts.map((part) => (
//               <li key={part.id} className="flex items-center space-x-4">
//                 <img
//                   src={part.image}
//                   alt={part.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{part.name}</h3>
//                   <p className="text-sm text-gray-500">{part.date}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
//         <p>
//           Keep your profile up to date to receive personalized recommendations
//           for electric car parts!
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfilePage;
//////////////////////////////////////
import React, { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");

  const purchasedParts = [
    {
      id: 1,
      name: "EV Battery Pack",
      date: "2024-07-15",
      image: "/api/placeholder/100/100",
    },
    {
      id: 2,
      name: "Electric Motor",
      date: "2024-07-20",
      image: "/api/placeholder/100/100",
    },
    {
      id: 3,
      name: "Charging Port",
      date: "2024-07-25",
      image: "/api/placeholder/100/100",
    },
  ];

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setName(data.user.username);
      setEmail(data.user.email);
      if (data.user.profileImage) {
        setImageUrl(`http://localhost:5000${data.user.profileImage}`);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", name);
    formData.append("email", email);
    if (password) formData.append("password", password);
    if (imageFile) {
      formData.append("profileImage", imageFile);
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/users/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.user.profileImage) {
        setImageUrl(`http://localhost:5000${data.user.profileImage}`);
      }
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />

      <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img
                src={imageUrl}
                alt="Profile Picture"
                className="w-32 h-32 rounded-full object-cover"
              />
              <label
                htmlFor="profile-picture"
                className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
              >
                <Camera className="w-4 h-4 text-white" />
                <input
                  type="file"
                  id="profile-picture"
                  className="hidden"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update Profile
            </button>
          </form>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Purchased Parts</h2>
          <ul className="space-y-4">
            {purchasedParts.map((part) => (
              <li key={part.id} className="flex items-center space-x-4">
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{part.name}</h3>
                  <p className="text-sm text-gray-500">{part.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
        <p>
          Keep your profile up to date to receive personalized recommendations
          for electric car parts!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
