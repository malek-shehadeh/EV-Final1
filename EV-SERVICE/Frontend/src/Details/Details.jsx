// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { Star, ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";

// // Assume we have a list of products similar to the one in the catalog
// const products = [
//   {
//     id: 1,
//     name: "EV Charger",
//     category: "Charging",
//     price: 599,
//     image: "/image/EV Charger.jpg",
//     description:
//       "High-speed EV charger compatible with most electric vehicles. Charges your car quickly and efficiently.",
//     rating: 4.5,
//     reviews: [
//       {
//         id: 1,
//         user: "John Doe",
//         comment: "Great product, charges my car really fast!",
//         rating: 5,
//       },
//       {
//         id: 2,
//         user: "Jane Smith",
//         comment: "Good quality, but a bit pricey.",
//         rating: 4,
//       },
//       {
//         id: 3,
//         user: "Jane Smith",
//         comment: "Good quality, but a bit pricey.",
//         rating: 3,
//       },
//     ],
//   },
//   // ... other products
// ];

// const Details = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [newComment, setNewComment] = useState("");
//   const [newRating, setNewRating] = useState(5);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = () => {
//     // Implement add to cart logic here
//     console.log(`Added ${quantity} ${product.name}(s) to cart`);
//   };

//   const handleAddComment = () => {
//     // Implement add comment logic here
//     console.log(`New comment: ${newComment}, Rating: ${newRating}`);
//     setNewComment("");
//     setNewRating(5);
//   };

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={0}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col md:flex-row gap-8">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full md:w-1/2 h-96 object-cover rounded-lg"
//           />
//           <div className="flex flex-col justify-between">
//             <div>
//               <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//               <p className="text-gray-600 dark:text-gray-400 mb-4">
//                 {product.description}
//               </p>
//               <p className="text-2xl font-bold mb-4">${product.price}</p>
//               <div className="flex items-center mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`w-6 h-6 ${
//                       i < Math.floor(product.rating)
//                         ? "text-yellow-400"
//                         : "text-gray-300"
//                     }`}
//                   />
//                 ))}
//                 <span className="ml-2">{product.rating.toFixed(1)}</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center border rounded-lg">
//                 <button
//                   onClick={() => handleQuantityChange(-1)}
//                   className="p-2"
//                 >
//                   <ChevronDown />
//                 </button>
//                 <span className="px-4">{quantity}</span>
//                 <button onClick={() => handleQuantityChange(1)} className="p-2">
//                   <ChevronUp />
//                 </button>
//               </div>
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => navigate("/cart")}
//                 className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
//               >
//                 <ShoppingCart className="inline-block mr-2" />
//                 Go to Cart
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12">
//           <h2 className="text-2xl font-bold mb-4">Reviews</h2>
//           {product.reviews.map((review) => (
//             <div
//               key={review.id}
//               className="mb-4 p-4 border rounded-lg dark:border-gray-700"
//             >
//               <div className="flex items-center mb-2">
//                 <span className="font-bold mr-2">{review.user}</span>
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-4 h-4 ${
//                         i < review.rating ? "text-yellow-400" : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <p>{review.comment}</p>
//             </div>
//           ))}
//           <div className="mt-8">
//             <h3 className="text-xl font-bold mb-4">Add a Review</h3>
//             <textarea
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
//               placeholder="Write your review here..."
//             />
//             <div className="flex items-center mb-4">
//               <span className="mr-2">Rating:</span>
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`w-6 h-6 cursor-pointer ${
//                     i < newRating ? "text-yellow-400" : "text-gray-300"
//                   }`}
//                   onClick={() => setNewRating(i + 1)}
//                 />
//               ))}
//             </div>
//             <button
//               onClick={handleAddComment}
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
//             >
//               Submit Review
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// ////////////////////////////////
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { Star, ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     name: "EV Charger",
//     category: "Charging",
//     price: 599,
//     image: "/image/EV Charger.jpg",
//     description:
//       "High-speed EV charger compatible with most electric vehicles. Charges your car quickly and efficiently.",
//     rating: 4.5,
//     reviews: [
//       {
//         id: 1,
//         user: "John Doe",
//         comment: "Great product, charges my car really fast!",
//         rating: 5,
//       },
//       {
//         id: 2,
//         user: "Jane Smith",
//         comment: "Good quality, but a bit pricey.",
//         rating: 4,
//       },
//       {
//         id: 3,
//         user: "Jane Smith",
//         comment: "Good quality, but a bit pricey.",
//         rating: 3,
//       },
//     ],
//   },
//   // ... other products
// ];

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [newComment, setNewComment] = useState("");
//   const [newRating, setNewRating] = useState(5);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} ${product.name}(s) to cart`);
//   };

//   const handleAddComment = () => {
//     console.log(`New comment: ${newComment}, Rating: ${newRating}`);
//     setNewComment("");
//     setNewRating(5);
//   };

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={0}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="lg:w-1/2">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-96 object-cover rounded-lg"
//             />
//           </div>
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//         {/* <Footer /> */}
//       </div>
//     </div>
//   );
// };

// export default Details;
// ////////////////////////////////////////////
// import React, { useState } from "react"; // Ensure useState is imported
// import { useParams } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { Star, ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     name: "EV Charger",
//     category: "Charging",
//     price: 599,
//     image: "/image/EV Charger.jpg",
//     description:
//       "High-speed EV charger compatible with most electric vehicles. Charges your car quickly and efficiently.",
//     rating: 4.5,
//     reviews: [
//       {
//         id: 1,
//         user: "John Doe",
//         comment: "Great product, charges my car really fast!",
//         rating: 5,
//       },
//       {
//         id: 2,
//         user: "Jane Smith",
//         comment: "Good quality, but a bit pricey.",
//         rating: 4,
//       },
//       {
//         id: 3,
//         user: "Jane Smith",
//         comment: "Good quality, but a bit pricey.",
//         rating: 3,
//       },
//     ],
//   },
//   // ... other products
// ];

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [newComment, setNewComment] = useState("");
//   const [newRating, setNewRating] = useState(5);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} ${product.name}(s) to cart`);
//   };

//   const handleAddComment = () => {
//     console.log(`New comment: ${newComment}, Rating: ${newRating}`);
//     setNewComment("");
//     setNewRating(5);
//   };

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={0}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="lg:w-1/2">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-96 object-cover rounded-lg"
//             />
//           </div>
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// ///////////////ok top////
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { Star, ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";

// // Static product data for demonstration
// const products = [
//   {
//     id: 1,
//     name: "EV Charger",
//     category: "Charging",
//     price: 599,
//     image: "/image/EV Charger.jpg",
//     description:
//       "High-speed EV charger compatible with most electric vehicles. Charges your car quickly and efficiently.",
//     rating: 4.5,
//     reviews: [
//       {
//         id: 1,
//         user: "John Doe",
//         comment: "Great product, charges my car really fast!",
//         rating: 5,
//       },
//       {
//         id: 2,
//         user: "Jane Smith",
//         comment: "Good quality, but a bit pricey.",
//         rating: 4,
//       },
//       {
//         id: 3,
//         user: "Jane Smith",
//         comment: "Good quality, but a bit pricey.",
//         rating: 3,
//       },
//     ],
//   },
//   // ... other products
// ];

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [newComment, setNewComment] = useState("");
//   const [newRating, setNewRating] = useState(5);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   // Find product based on ID from URL
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change)); // Prevent quantity from going below 1
//   };

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} ${product.name}(s) to cart`);
//   };

//   const handleAddComment = () => {
//     console.log(`New comment: ${newComment}, Rating: ${newRating}`);
//     setNewComment("");
//     setNewRating(5);
//   };

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={0}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="lg:w-1/2">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-96 object-cover rounded-lg"
//             />
//           </div>
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// /////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//   }, [id]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} ${product.name}(s) to cart`);
//   };

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={0}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="lg:w-1/2">
//             <img
//               src={`http://localhost:5000/${product.images[0]}`}
//               alt={product.name}
//               className="w-full h-96 object-cover rounded-lg"
//             />
//           </div>
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// //////////////////////////
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//   }, [id]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} ${product.name}(s) to cart`);
//   };

//   const handleImageChange = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % product.images.length
//       );
//     } else {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + product.images.length) % product.images.length
//       );
//     }
//   };

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={0}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => handleImageChange("prev")}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//               <button
//                 onClick={() => handleImageChange("next")}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className="flex mt-4 gap-2 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/${image}`}
//                   alt={`${product.name} - Thumbnail ${index + 1}`}
//                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
//                     index === currentImageIndex
//                       ? "border-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <p className="text-lg mb-4">Category: {product.category}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// /////////////////ok top //////////////
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//   }, [id]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           productId: product._id,
//           quantity: quantity,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(`Added ${quantity} ${product.name}(s) to cart`);
//       // You might want to update some state here or show a notification
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//       setError("Failed to add item to cart. Please try again later.");
//     }
//   };

//   const handleImageChange = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % product.images.length
//       );
//     } else {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + product.images.length) % product.images.length
//       );
//     }
//   };

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={0}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => handleImageChange("prev")}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//               <button
//                 onClick={() => handleImageChange("next")}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className="flex mt-4 gap-2 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/${image}`}
//                   alt={`${product.name} - Thumbnail ${index + 1}`}
//                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
//                     index === currentImageIndex
//                       ? "border-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <p className="text-lg mb-4">Category: {product.category}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// ///////////////ok top ////////////////////
// import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
// import { useCart } from "../CartContext/CartContext";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const { addToCart, cartItems } = useContext(useCart);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//   }, [id]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           productId: product._id,
//           quantity: quantity,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(`Added ${quantity} ${product.name}(s) to cart`);

//       // Update the cart context
//       addToCart(product, quantity);
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//       setError("Failed to add item to cart. Please try again later.");
//     }
//   };

//   const handleImageChange = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % product.images.length
//       );
//     } else {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + product.images.length) % product.images.length
//       );
//     }
//   };

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={cartItems.length}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => handleImageChange("prev")}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//               <button
//                 onClick={() => handleImageChange("next")}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className="flex mt-4 gap-2 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/${image}`}
//                   alt={`${product.name} - Thumbnail ${index + 1}`}
//                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
//                     index === currentImageIndex
//                       ? "border-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <p className="text-lg mb-4">Category: {product.category}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
// import { useCart } from "../CartContext/CartContext";
// import CommentSection from "./CommentSection"
// import { FaUserMd, FaEnvelope, FaCalendarAlt, FaComments, FaStethoscope, FaHospital, FaNotesMedical } from "react-icons/fa";

// import { motion, AnimatePresence } from "framer-motion";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const { cartItemsCount, fetchCartItemsCount } = useCart();

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//   }, [id]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           productId: product._id,
//           quantity: quantity,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(`Added ${quantity} ${product.name}(s) to cart`);

//       // Update the cart count
//       fetchCartItemsCount();
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//       setError("Failed to add item to cart. Please try again later.");
//     }
//   };

//   const handleImageChange = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % product.images.length
//       );
//     } else {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + product.images.length) % product.images.length
//       );
//     }
//   };
//   ///////////////////////////////
//   const ProfilePage = () => {
//     const [comments, setComments] = useState([]);
//     const { id } = useParams();
//     const [currentUserId, setCurrentUserId] = useState(null);
//     const location = useLocation();
//     const commentSectionRef = useRef(null);
//   //////////////////////////
//   useEffect(() => {
//     fetchDoctor();
//     fetchComments();
//     fetchCurrentUser();
//   }, [id]);

//   useEffect(() => {
//     if (
//       location.state &&
//       location.state.commentId &&
//       commentSectionRef.current
//     ) {
//       const commentElement = document.getElementById(
//         `comment-${location.state.commentId}`
//       );
//       if (commentElement) {
//         commentElement.scrollIntoView({ behavior: "smooth", block: "center" });
//         commentElement.classList.add("highlight-comment");
//       }
//     }
//   }, [location, comments]);

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/comment/doctors/${id}/comments`
//       );
//       setComments(response.data);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };

//   const addComment = async (commentText, parentCommentId = null) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/comment/doctors/comments",
//         {
//           doctor_id: id,
//           parent_comment_id: parentCommentId,
//           comment_text: commentText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       setComments([response.data, ...comments]);
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't add your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const updateComment = async (commentId, newText) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/comment/doctors/comments/${commentId}`,
//         {
//           comment_text: newText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       setComments(
//         comments.map((comment) =>
//           comment.comment_id === commentId
//             ? { ...comment, comment_text: newText }
//             : comment
//         )
//       );
//     } catch (error) {
//       console.error("Error updating comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't update your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const deleteComment = async (commentId) => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/comment/doctors/comments/${commentId}`,
//         {
//           withCredentials: true,
//         }
//       );
//       setComments(
//         comments.filter((comment) => comment.comment_id !== commentId)
//       );
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't delete your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   /////////////////////////////

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={cartItemsCount}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => handleImageChange("prev")}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//               <button
//                 onClick={() => handleImageChange("next")}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className="flex mt-4 gap-2 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/${image}`}
//                   alt={`${product.name} - Thumbnail ${index + 1}`}
//                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
//                     index === currentImageIndex
//                       ? "border-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <p className="text-lg mb-4">Category: {product.category}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             ref={commentSectionRef}
//             className="mt-8 bg-white rounded-2xl shadow-2xl p-8"
//           >
//           <CommentSection
//             comments={comments}
//             addComment={addComment}
//             updateComment={updateComment}
//             deleteComment={deleteComment}
//             currentUserId={currentUserId}
//           />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// //////////////////////////////////////////
// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
// import { useCart } from "../CartContext/CartContext";
// import CommentSection from "./CommentSection";
// import {
//   FaUserMd,
//   FaEnvelope,
//   FaCalendarAlt,
//   FaComments,
//   FaStethoscope,
//   FaHospital,
//   FaNotesMedical,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const { cartItemsCount, fetchCartItemsCount } = useCart();
//   const [comments, setComments] = useState([]);
//   const [currentUserId, setCurrentUserId] = useState(null);
//   const location = useLocation();
//   const commentSectionRef = useRef(null);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//     fetchComments();
//     fetchCurrentUser();
//   }, [id]);

//   useEffect(() => {
//     if (
//       location.state &&
//       location.state.commentId &&
//       commentSectionRef.current
//     ) {
//       const commentElement = document.getElementById(
//         `comment-${location.state.commentId}`
//       );
//       if (commentElement) {
//         commentElement.scrollIntoView({ behavior: "smooth", block: "center" });
//         commentElement.classList.add("highlight-comment");
//       }
//     }
//   }, [location, comments]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/comment/doctors/${id}/comments`
//       );
//       setComments(response.data);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };

//   const fetchCurrentUser = async () => {
//     // 实现获取当前用户ID的逻辑
//     // setCurrentUserId(userId);
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           productId: product._id,
//           quantity: quantity,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(`Added ${quantity} ${product.name}(s) to cart`);

//       fetchCartItemsCount();
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//       setError("Failed to add item to cart. Please try again later.");
//     }
//   };

//   const handleImageChange = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % product.images.length
//       );
//     } else {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + product.images.length) % product.images.length
//       );
//     }
//   };

//   const addComment = async (commentText, parentCommentId = null) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/comment/doctors/comments",
//         {
//           doctor_id: id,
//           parent_comment_id: parentCommentId,
//           comment_text: commentText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       setComments([response.data, ...comments]);
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't add your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const updateComment = async (commentId, newText) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/comment/doctors/comments/${commentId}`,
//         {
//           comment_text: newText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       setComments(
//         comments.map((comment) =>
//           comment.comment_id === commentId
//             ? { ...comment, comment_text: newText }
//             : comment
//         )
//       );
//     } catch (error) {
//       console.error("Error updating comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't update your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const deleteComment = async (commentId) => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/comment/doctors/comments/${commentId}`,
//         {
//           withCredentials: true,
//         }
//       );
//       setComments(
//         comments.filter((comment) => comment.comment_id !== commentId)
//       );
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't delete your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={cartItemsCount}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => handleImageChange("prev")}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//               <button
//                 onClick={() => handleImageChange("next")}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className="flex mt-4 gap-2 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/${image}`}
//                   alt={`${product.name} - Thumbnail ${index + 1}`}
//                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
//                     index === currentImageIndex
//                       ? "border-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <p className="text-lg mb-4">Category: {product.category}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           ref={commentSectionRef}
//           className="mt-8 bg-white rounded-2xl shadow-2xl p-8"
//         >
//           <CommentSection
//             comments={comments}
//             addComment={addComment}
//             updateComment={updateComment}
//             deleteComment={deleteComment}
//             currentUserId={currentUserId}
//           />
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// ////////////////////////////////////
// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
// import { useCart } from "../CartContext/CartContext";
// import CommentSection from "./CommentSection";
// import {
//   FaUserMd,
//   FaEnvelope,
//   FaCalendarAlt,
//   FaComments,
//   FaStethoscope,
//   FaHospital,
//   FaNotesMedical,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const { cartItemsCount, fetchCartItemsCount } = useCart();
//   const [comments, setComments] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const location = useLocation();
//   const commentSectionRef = useRef(null);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//     fetchComments();
//     fetchNotifications();
//   }, [id]);

//   useEffect(() => {
//     if (
//       location.state &&
//       location.state.commentId &&
//       commentSectionRef.current
//     ) {
//       const commentElement = document.getElementById(
//         `comment-${location.state.commentId}`
//       );
//       if (commentElement) {
//         commentElement.scrollIntoView({ behavior: "smooth", block: "center" });
//         commentElement.classList.add("highlight-comment");
//       }
//     }
//   }, [location, comments]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   // const fetchComments = async () => {
//   //   try {
//   //     const response = await axios.get(
//   //       `http://localhost:5000/api/Comment/products/${productId}/comments`
//   //     );
//   //     setComments(response.data);
//   //   } catch (error) {
//   //     console.error("Error fetching comments:", error);
//   //   }
//   // };

//   ///////////////////////////////////////
//   const fetchComments = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Adjust this based on how you store the token
//       const response = await axios.get(
//         `http://localhost:5000/api/Comment/products/${id}/comments`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Add this line
//           },
//           withCredentials: true, // Add this if using cookies for auth
//         }
//       );
//       setComments(response.data);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };
//   ///////////////////////////////////////

//   const fetchNotifications = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/notifications",
//         { withCredentials: true }
//       );
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           productId: product._id,
//           quantity: quantity,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(`Added ${quantity} ${product.name}(s) to cart`);

//       fetchCartItemsCount();
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//       setError("Failed to add item to cart. Please try again later.");
//     }
//   };

//   const handleImageChange = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % product.images.length
//       );
//     } else {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + product.images.length) % product.images.length
//       );
//     }
//   };

//   const addComment = async (commentText, parentCommentId = null) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/products/comments",
//         {
//           product_id: id,
//           parent_comment_id: parentCommentId,
//           comment_text: commentText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't add your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const updateComment = async (commentId, newText) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/comments/${commentId}`,
//         {
//           comment_text: newText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error updating comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't update your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const deleteComment = async (commentId) => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/products/comments/${commentId}`,
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't delete your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const markNotificationAsRead = async (notificationId) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/notifications/${notificationId}/read`,
//         {},
//         { withCredentials: true }
//       );
//       fetchNotifications();
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={cartItemsCount}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         {/* Product details section */}
//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Image section */}
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => handleImageChange("prev")}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//               <button
//                 onClick={() => handleImageChange("next")}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className="flex mt-4 gap-2 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/${image}`}
//                   alt={`${product.name} - Thumbnail ${index + 1}`}
//                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
//                     index === currentImageIndex
//                       ? "border-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Product info section */}
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <p className="text-lg mb-4">Category: {product.category}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//         {/* Comment section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           ref={commentSectionRef}
//           className="mt-8 bg-white rounded-2xl shadow-2xl p-8"
//         >
//           <CommentSection
//             comments={comments}
//             addComment={addComment}
//             updateComment={updateComment}
//             deleteComment={deleteComment}
//             productId={id}
//           />
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// /////////////////////////////////ok up////////
// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
// import { useCart } from "../CartContext/CartContext";
// import CommentSection from "./CommentSection";
// import {
//   FaUserMd,
//   FaEnvelope,
//   FaCalendarAlt,
//   FaComments,
//   FaStethoscope,
//   FaHospital,
//   FaNotesMedical,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const { cartItemsCount, fetchCartItemsCount } = useCart();
//   const [comments, setComments] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const location = useLocation();
//   const commentSectionRef = useRef(null);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//     fetchComments();
//     fetchNotifications();
//   }, [id]);

//   useEffect(() => {
//     if (
//       location.state &&
//       location.state.commentId &&
//       commentSectionRef.current
//     ) {
//       const commentElement = document.getElementById(
//         `comment-${location.state.commentId}`
//       );
//       if (commentElement) {
//         commentElement.scrollIntoView({ behavior: "smooth", block: "center" });
//         commentElement.classList.add("highlight-comment");
//       }
//     }
//   }, [location, comments]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         `http://localhost:5000/api/Comment/products/${id}/comments`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       setComments(response.data);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };

//   const fetchNotifications = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/notification/notifications",
//         { withCredentials: true }
//       );
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           productId: product._id,
//           quantity: quantity,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(`Added ${quantity} ${product.name}(s) to cart`);

//       fetchCartItemsCount();
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//       setError("Failed to add item to cart. Please try again later.");
//     }
//   };

//   const handleImageChange = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % product.images.length
//       );
//     } else {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + product.images.length) % product.images.length
//       );
//     }
//   };

//   const addComment = async (commentText, parentCommentId = null) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/products/comments",
//         {
//           product_id: id,
//           parent_comment_id: parentCommentId,
//           comment_text: commentText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't add your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const updateComment = async (commentId, newText) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/comments/${commentId}`,
//         {
//           comment_text: newText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error updating comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't update your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const deleteComment = async (commentId) => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/products/comments/${commentId}`,
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't delete your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const markNotificationAsRead = async (notificationId) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/notifications/${notificationId}/read`,
//         {},
//         { withCredentials: true }
//       );
//       fetchNotifications();
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={cartItemsCount}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         {/* Product details section */}
//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Image section */}
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => handleImageChange("prev")}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//               <button
//                 onClick={() => handleImageChange("next")}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className="flex mt-4 gap-2 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/${image}`}
//                   alt={`${product.name} - Thumbnail ${index + 1}`}
//                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
//                     index === currentImageIndex
//                       ? "border-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Product info section */}
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <p className="text-lg mb-4">Category: {product.category}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//         {/* Comment section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           ref={commentSectionRef}
//           className="mt-8 bg-white rounded-2xl shadow-2xl p-8"
//         >
//           <CommentSection
//             comments={comments}
//             addComment={addComment}
//             updateComment={updateComment}
//             deleteComment={deleteComment}
//             productId={id}
//           />
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
// ///////////////////////////////////
// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
// import { useCart } from "../CartContext/CartContext";
// import CommentSection from "./CommentSection";
// import {
//   FaUserMd,
//   FaEnvelope,
//   FaCalendarAlt,
//   FaComments,
//   FaStethoscope,
//   FaHospital,
//   FaNotesMedical,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Details = () => {
//   const { id } = useParams();
//   const [darkMode, setDarkMode] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const { cartItemsCount, fetchCartItemsCount } = useCart();
//   const [comments, setComments] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const location = useLocation();
//   const commentSectionRef = useRef(null);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     fetchProductDetails();
//     fetchComments();
//     fetchNotifications();
//   }, [id]);

//   useEffect(() => {
//     if (
//       location.state &&
//       location.state.commentId &&
//       commentSectionRef.current
//     ) {
//       const commentElement = document.getElementById(
//         `comment-${location.state.commentId}`
//       );
//       if (commentElement) {
//         commentElement.scrollIntoView({ behavior: "smooth", block: "center" });
//         commentElement.classList.add("highlight-comment");
//       }
//     }
//   }, [location, comments]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//       setError("Failed to load product details. Please try again later.");
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         `http://localhost:5000/api/Comment/products/${id}/comments`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       setComments(response.data);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };

//   const fetchNotifications = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found");
//         return;
//       }
//       const response = await axios.get(
//         "http://localhost:5000/api/notification/notifications",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           productId: product._id,
//           quantity: quantity,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(`Added ${quantity} ${product.name}(s) to cart`);

//       fetchCartItemsCount();
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//       setError("Failed to add item to cart. Please try again later.");
//     }
//   };

//   const handleImageChange = (direction) => {
//     if (direction === "next") {
//       setCurrentImageIndex(
//         (prevIndex) => (prevIndex + 1) % product.images.length
//       );
//     } else {
//       setCurrentImageIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + product.images.length) % product.images.length
//       );
//     }
//   };

//   const addComment = async (commentText, parentCommentId = null) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/products/comments",
//         {
//           product_id: id,
//           parent_comment_id: parentCommentId,
//           comment_text: commentText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't add your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const updateComment = async (commentId, newText) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/products/comments/${commentId}`,
//         {
//           comment_text: newText,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error updating comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't update your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const deleteComment = async (commentId) => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/products/comments/${commentId}`,
//         {
//           withCredentials: true,
//         }
//       );
//       fetchComments();
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//       Swal.fire({
//         title: "Oops!",
//         text: "We couldn't delete your comment. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//         customClass: {
//           popup:
//             "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
//           title: "text-[#04333a] text-xl font-bold",
//           content: "text-[#04333a]",
//           confirmButton:
//             "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
//         },
//       });
//     }
//   };

//   const markNotificationAsRead = async (notificationId) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/notifications/${notificationId}/read`,
//         {},
//         { withCredentials: true }
//       );
//       fetchNotifications();
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header
//         handleDarkMode={toggleDarkMode}
//         darkMode={darkMode}
//         cartItemsCount={cartItemsCount}
//       />
//       <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
//         {/* Product details section */}
//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Image section */}
//           <div className="lg:w-1/2">
//             <div className="relative">
//               <img
//                 src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//               <button
//                 onClick={() => handleImageChange("prev")}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &lt;
//               </button>
//               <button
//                 onClick={() => handleImageChange("next")}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className="flex mt-4 gap-2 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/${image}`}
//                   alt={`${product.name} - Thumbnail ${index + 1}`}
//                   className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
//                     index === currentImageIndex
//                       ? "border-2 border-blue-500"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Product info section */}
//           <div className="lg:w-1/2">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//               {product.description}
//             </p>
//             <p className="text-2xl font-bold mb-4">${product.price}</p>
//             <p className="text-lg mb-4">Category: {product.category}</p>
//             <div className="flex items-center gap-4 mb-6">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronDown />
//               </button>
//               <span className="text-lg font-bold">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="bg-gray-200 p-2 rounded-full"
//               >
//                 <ChevronUp />
//               </button>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
//             >
//               <ShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//         {/* Comment section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           ref={commentSectionRef}
//           className="mt-8 bg-white rounded-2xl shadow-2xl p-8"
//         >
//           <CommentSection
//             comments={comments}
//             addComment={addComment}
//             updateComment={updateComment}
//             deleteComment={deleteComment}
//             productId={id}
//           />
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Details;
///////////////////////////ok top ok top ////////////////////
import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";
import { useCart } from "../CartContext/CartContext";
import CommentSection from "./CommentSection";
import {
  FaUserMd,
  FaEnvelope,
  FaCalendarAlt,
  FaComments,
  FaStethoscope,
  FaHospital,
  FaNotesMedical,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState(null);
  const { cartItemsCount, addToCart, fetchCart } = useCart();
  const [comments, setComments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const location = useLocation();
  const commentSectionRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    fetchProductDetails();
    fetchComments();
    fetchNotifications();
  }, [id]);

  useEffect(() => {
    if (
      location.state &&
      location.state.commentId &&
      commentSectionRef.current
    ) {
      const commentElement = document.getElementById(
        `comment-${location.state.commentId}`
      );
      if (commentElement) {
        commentElement.scrollIntoView({ behavior: "smooth", block: "center" });
        commentElement.classList.add("highlight-comment");
      }
    }
  }, [location, comments]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/catalog/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setError("Failed to load product details. Please try again later.");
    }
  };

  const fetchComments = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5000/api/Comment/products/${id}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await axios.get(
        "http://localhost:5000/api/notification/notifications",
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      setNotifications(response.data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = async () => {
    try {
      await addToCart(product._id, quantity);
      console.log(`Added ${quantity} ${product.name}(s) to cart`);
      await fetchCart(); // Refresh the cart after adding an item
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setError("Failed to add item to cart. Please try again later.");
    }
  };

  const handleImageChange = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.images.length
      );
    } else {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + product.images.length) % product.images.length
      );
    }
  };

  const addComment = async (commentText, parentCommentId = null) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products/comments",
        {
          product_id: id,
          parent_comment_id: parentCommentId,
          comment_text: commentText,
        },
        {
          withCredentials: true,
        }
      );
      fetchComments();
    } catch (error) {
      console.error("Error adding comment:", error);
      Swal.fire({
        title: "Oops!",
        text: "We couldn't add your comment. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup:
            "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
          title: "text-[#04333a] text-xl font-bold",
          content: "text-[#04333a]",
          confirmButton:
            "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
        },
      });
    }
  };

  const updateComment = async (commentId, newText) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/products/comments/${commentId}`,
        {
          comment_text: newText,
        },
        {
          withCredentials: true,
        }
      );
      fetchComments();
    } catch (error) {
      console.error("Error updating comment:", error);
      Swal.fire({
        title: "Oops!",
        text: "We couldn't update your comment. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup:
            "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
          title: "text-[#04333a] text-xl font-bold",
          content: "text-[#04333a]",
          confirmButton:
            "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
        },
      });
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/products/comments/${commentId}`,
        {
          withCredentials: true,
        }
      );
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
      Swal.fire({
        title: "Oops!",
        text: "We couldn't delete your comment. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup:
            "bg-[#e6f0f5] rounded-lg shadow-xl border border-[#04333a] max-w-md",
          title: "text-[#04333a] text-xl font-bold",
          content: "text-[#04333a]",
          confirmButton:
            "bg-[#04333a] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-300",
        },
      });
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/notifications/${notificationId}/read`,
        {},
        { withCredentials: true }
      );
      fetchNotifications();
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        handleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        cartItemsCount={cartItemsCount}
      />
      <div className="bg-white dark:bg-gray-900 dark:text-white pt-28 px-16">
        {/* Product details section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image section */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={`http://localhost:5000/${product.images[currentImageIndex]}`}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
              <button
                onClick={() => handleImageChange("prev")}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={() => handleImageChange("next")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
            <div className="flex mt-4 gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000/${image}`}
                  alt={`${product.name} - Thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                    index === currentImageIndex
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
          {/* Product info section */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {product.description}
            </p>
            <p className="text-2xl font-bold mb-4">${product.price}</p>
            <p className="text-lg mb-4">Category: {product.category}</p>
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="bg-gray-200 p-2 rounded-full"
              >
                <ChevronDown />
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="bg-gray-200 p-2 rounded-full"
              >
                <ChevronUp />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center gap-2"
            >
              <ShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
        {/* Comment section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={commentSectionRef}
          className="mt-8 bg-white rounded-2xl shadow-2xl p-8"
        >
          <CommentSection
            comments={comments}
            addComment={addComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
            productId={id}
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
