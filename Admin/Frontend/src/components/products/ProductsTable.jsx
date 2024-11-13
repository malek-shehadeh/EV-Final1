// // // import { motion } from "framer-motion";
// // // import { Edit, Search, Trash2 } from "lucide-react";
// // // import { useState } from "react";

// // // const PRODUCT_DATA = [
// // // 	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
// // // 	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
// // // 	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
// // // 	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
// // // 	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
// // // ];

// // // const ProductsTable = () => {
// // // 	const [searchTerm, setSearchTerm] = useState("");
// // // 	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

// // // 	const handleSearch = (e) => {
// // // 		const term = e.target.value.toLowerCase();
// // // 		setSearchTerm(term);
// // // 		const filtered = PRODUCT_DATA.filter(
// // // 			(product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
// // // 		);

// // // 		setFilteredProducts(filtered);
// // // 	};

// // // 	return (
// // // 		<motion.div
// // // 			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
// // // 			initial={{ opacity: 0, y: 20 }}
// // // 			animate={{ opacity: 1, y: 0 }}
// // // 			transition={{ delay: 0.2 }}
// // // 		>
// // // 			<div className='flex justify-between items-center mb-6'>
// // // 				<h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
// // // 				<div className='relative'>
// // // 					<input
// // // 						type='text'
// // // 						placeholder='Search products...'
// // // 						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
// // // 						onChange={handleSearch}
// // // 						value={searchTerm}
// // // 					/>
// // // 					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
// // // 				</div>
// // // 			</div>

// // // 			<div className='overflow-x-auto'>
// // // 				<table className='min-w-full divide-y divide-gray-700'>
// // // 					<thead>
// // // 						<tr>
// // // 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// // // 								Name
// // // 							</th>
// // // 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// // // 								Category
// // // 							</th>
// // // 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// // // 								Price
// // // 							</th>
// // // 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// // // 								Stock
// // // 							</th>
// // // 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// // // 								Sales
// // // 							</th>
// // // 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// // // 								Actions
// // // 							</th>
// // // 						</tr>
// // // 					</thead>

// // // 					<tbody className='divide-y divide-gray-700'>
// // // 						{filteredProducts.map((product) => (
// // // 							<motion.tr
// // // 								key={product.id}
// // // 								initial={{ opacity: 0 }}
// // // 								animate={{ opacity: 1 }}
// // // 								transition={{ duration: 0.3 }}
// // // 							>
// // // 								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
// // // 									<img
// // // 										src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
// // // 										alt='Product img'
// // // 										className='size-10 rounded-full'
// // // 									/>
// // // 									{product.name}
// // // 								</td>

// // // 								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
// // // 									{product.category}
// // // 								</td>

// // // 								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
// // // 									${product.price.toFixed(2)}
// // // 								</td>
// // // 								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.stock}</td>
// // // 								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.sales}</td>
// // // 								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
// // // 									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
// // // 										<Edit size={18} />
// // // 									</button>
// // // 									<button className='text-red-400 hover:text-red-300'>
// // // 										<Trash2 size={18} />
// // // 									</button>
// // // 								</td>
// // // 							</motion.tr>
// // // 						))}
// // // 					</tbody>
// // // 				</table>
// // // 			</div>
// // // 		</motion.div>
// // // 	);
// // // };
// // // export default ProductsTable;

// // //////////////////////////////

// // import { motion } from "framer-motion";
// // import { Edit, Search, Trash2, CheckCircle, XCircle } from "lucide-react";
// // import { useState, useEffect } from "react";
// // import axios from "axios";

// // const ProductsTable = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = async () => {
// //     try {
// //       const response = await axios.get("/api/products");
// //       setProducts(response.data);
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //     }
// //   };

// //   const handleSearch = (e) => {
// //     const term = e.target.value.toLowerCase();
// //     setSearchTerm(term);
// //   };

// //   const handleApproval = async (productId, currentStatus) => {
// //     try {
// //       await axios.put(`/api/products/${productId}/approve`, {
// //         isApproved: !currentStatus,
// //       });
// //       fetchProducts(); // Refresh the product list
// //     } catch (error) {
// //       console.error("Error updating product approval status:", error);
// //     }
// //   };

// //   const filteredProducts = products.filter(
// //     (product) =>
// //       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       product.category.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <motion.div
// //       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ delay: 0.2 }}
// //     >
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
// //         <div className="relative">
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             onChange={handleSearch}
// //             value={searchTerm}
// //           />
// //           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
// //         </div>
// //       </div>

// //       <div className="overflow-x-auto">
// //         <table className="min-w-full divide-y divide-gray-700">
// //           <thead>
// //             <tr>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Name
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Category
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Price
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Approval Status
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Actions
// //               </th>
// //             </tr>
// //           </thead>

// //           <tbody className="divide-y divide-gray-700">
// //             {filteredProducts.map((product) => (
// //               <motion.tr
// //                 key={product._id}
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
// //                   {product.images && product.images.length > 0 ? (
// //                     <img
// //                       src={product.images[0]}
// //                       alt={product.name}
// //                       className="size-10 rounded-full object-cover"
// //                     />
// //                   ) : (
// //                     <div className="size-10 rounded-full bg-gray-600"></div>
// //                   )}
// //                   {product.name}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   {product.category}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   ${product.price.toFixed(2)}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   {product.isApproved ? (
// //                     <span className="text-green-400">Approved</span>
// //                   ) : (
// //                     <span className="text-red-400">Not Approved</span>
// //                   )}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   <button
// //                     className={`mr-2 ${
// //                       product.isApproved
// //                         ? "text-red-400 hover:text-red-300"
// //                         : "text-green-400 hover:text-green-300"
// //                     }`}
// //                     onClick={() =>
// //                       handleApproval(product._id, product.isApproved)
// //                     }
// //                   >
// //                     {product.isApproved ? (
// //                       <XCircle size={18} />
// //                     ) : (
// //                       <CheckCircle size={18} />
// //                     )}
// //                   </button>
// //                   <button className="text-indigo-400 hover:text-indigo-300 mr-2">
// //                     <Edit size={18} />
// //                   </button>
// //                   <button className="text-red-400 hover:text-red-300">
// //                     <Trash2 size={18} />
// //                   </button>
// //                 </td>
// //               </motion.tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default ProductsTable;
// // /////////////////////////////////////////////////////////
// // import { motion } from "framer-motion";
// // import {
// //   Edit,
// //   Search,
// //   Trash2,
// //   CheckCircle,
// //   XCircle,
// //   Upload,
// // } from "lucide-react";
// // import { useState, useEffect } from "react";
// // import axios from "axios";

// // const ProductsTable = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [products, setProducts] = useState([]);
// //   const [selectedFile, setSelectedFile] = useState(null);

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:4000/api/products");
// //       setProducts(response.data);
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //     }
// //   };

// //   const handleSearch = (e) => {
// //     const term = e.target.value.toLowerCase();
// //     setSearchTerm(term);
// //   };

// //   const handleApproval = async (productId, currentStatus) => {
// //     try {
// //       await axios.put(
// //         `http://localhost:4000/api/products/${productId}/approve`,
// //         {
// //           isApproved: !currentStatus,
// //         }
// //       );
// //       fetchProducts(); // Refresh the product list
// //     } catch (error) {
// //       console.error("Error updating product approval status:", error);
// //     }
// //   };

// //   const handleFileChange = (event) => {
// //     setSelectedFile(event.target.files[0]);
// //   };

// //   const handleUpload = async (productId) => {
// //     if (!selectedFile) {
// //       alert("Please select a file first!");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("productImage", selectedFile);

// //     try {
// //       await axios.post(
// //         `http://localhost:4000/api/products/${productId}/upload-image`,
// //         formData,
// //         {
// //           headers: {
// //             "Content-Type": "multipart/form-data",
// //           },
// //         }
// //       );
// //       fetchProducts(); // Refresh the product list
// //       setSelectedFile(null);
// //     } catch (error) {
// //       console.error("Error uploading image:", error);
// //     }
// //   };

// //   const filteredProducts = products.filter(
// //     (product) =>
// //       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       product.category.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <motion.div
// //       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ delay: 0.2 }}
// //     >
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
// //         <div className="relative">
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             onChange={handleSearch}
// //             value={searchTerm}
// //           />
// //           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
// //         </div>
// //       </div>

// //       <div className="overflow-x-auto">
// //         <table className="min-w-full divide-y divide-gray-700">
// //           <thead>
// //             <tr>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Name
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Category
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Price
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Approval Status
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Actions
// //               </th>
// //             </tr>
// //           </thead>

// //           <tbody className="divide-y divide-gray-700">
// //             {filteredProducts.map((product) => (
// //               <motion.tr
// //                 key={product._id}
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
// //                   {product.images && product.images.length > 0 ? (
// //                     <img
// //                       src={product.images[0]}
// //                       alt={product.name}
// //                       className="size-10 rounded-full object-cover"
// //                     />
// //                   ) : (
// //                     <div className="size-10 rounded-full bg-gray-600"></div>
// //                   )}
// //                   {product.name}
// //                 </td> */}

// //                 {/* ///// */}
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
// //                   {product.images && product.images.length > 0 ? (
// //                     product.images.map((image, index) => (
// //                       <img
// //                         key={index}
// //                         src={`http://localhost:5000/${image}`}
// //                         alt={`${product.name} - Image ${index + 1}`}
// //                         className="size-10 rounded-full object-cover"
// //                       />
// //                     ))
// //                   ) : (
// //                     <div className="size-10 rounded-full bg-gray-600"></div>
// //                   )}
// //                   {product.name}
// //                 </td>

// //                 {/* ///// */}
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   {product.category}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   ${product.price.toFixed(2)}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   {product.isApproved ? (
// //                     <span className="text-green-400">Approved</span>
// //                   ) : (
// //                     <span className="text-red-400">Not Approved</span>
// //                   )}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 flex items-center">
// //                   <button
// //                     className={`mr-2 ${
// //                       product.isApproved
// //                         ? "text-red-400 hover:text-red-300"
// //                         : "text-green-400 hover:text-green-300"
// //                     }`}
// //                     onClick={() =>
// //                       handleApproval(product._id, product.isApproved)
// //                     }
// //                   >
// //                     {product.isApproved ? (
// //                       <XCircle size={18} />
// //                     ) : (
// //                       <CheckCircle size={18} />
// //                     )}
// //                   </button>
// //                   <button className="text-indigo-400 hover:text-indigo-300 mr-2">
// //                     <Edit size={18} />
// //                   </button>
// //                   <button className="text-red-400 hover:text-red-300 mr-2">
// //                     <Trash2 size={18} />
// //                   </button>
// //                   <input
// //                     type="file"
// //                     onChange={handleFileChange}
// //                     className="hidden"
// //                     id={`file-upload-${product._id}`}
// //                   />
// //                   <label
// //                     htmlFor={`file-upload-${product._id}`}
// //                     className="cursor-pointer text-blue-400 hover:text-blue-300 mr-2"
// //                   >
// //                     <Upload size={18} />
// //                   </label>
// //                   <button
// //                     onClick={() => handleUpload(product._id)}
// //                     className="text-green-400 hover:text-green-300"
// //                     disabled={!selectedFile}
// //                   >
// //                     Upload
// //                   </button>
// //                 </td>
// //               </motion.tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default ProductsTable;
// // ///////////////////////////ok top ////////////////
// // import { motion } from "framer-motion";
// // import {
// //   Edit,
// //   Search,
// //   Trash2,
// //   CheckCircle,
// //   XCircle,
// //   Upload,
// //   ChevronLeft,
// //   ChevronRight,
// // } from "lucide-react";
// // import { useState, useEffect } from "react";
// // import axios from "axios";

// // const ProductsTable = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [products, setProducts] = useState([]);
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [currentImageIndex, setCurrentImageIndex] = useState({});

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:4000/api/products");
// //       setProducts(response.data);
// //       const initialImageIndices = {};
// //       response.data.forEach((product) => {
// //         initialImageIndices[product._id] = 0;
// //       });
// //       setCurrentImageIndex(initialImageIndices);
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //     }
// //   };

// //   const handleSearch = (e) => {
// //     const term = e.target.value.toLowerCase();
// //     setSearchTerm(term);
// //   };

// //   const handleApproval = async (productId, currentStatus) => {
// //     try {
// //       await axios.put(
// //         `http://localhost:4000/api/products/${productId}/approve`,
// //         {
// //           isApproved: !currentStatus,
// //         }
// //       );
// //       fetchProducts();
// //     } catch (error) {
// //       console.error("Error updating product approval status:", error);
// //     }
// //   };

// //   const handleFileChange = (event) => {
// //     setSelectedFile(event.target.files[0]);
// //   };

// //   const handleUpload = async (productId) => {
// //     if (!selectedFile) {
// //       alert("Please select a file first!");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("productImage", selectedFile);

// //     try {
// //       await axios.post(
// //         `http://localhost:4000/api/products/${productId}/upload-image`,
// //         formData,
// //         {
// //           headers: {
// //             "Content-Type": "multipart/form-data",
// //           },
// //         }
// //       );
// //       fetchProducts();
// //       setSelectedFile(null);
// //     } catch (error) {
// //       console.error("Error uploading image:", error);
// //     }
// //   };

// //   const filteredProducts = products.filter(
// //     (product) =>
// //       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       product.category.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const handlePrevImage = (productId) => {
// //     setCurrentImageIndex((prev) => ({
// //       ...prev,
// //       [productId]: prev[productId] > 0 ? prev[productId] - 1 : 0,
// //     }));
// //   };

// //   const handleNextImage = (productId, imagesLength) => {
// //     setCurrentImageIndex((prev) => ({
// //       ...prev,
// //       [productId]:
// //         prev[productId] < imagesLength - 1
// //           ? prev[productId] + 1
// //           : prev[productId],
// //     }));
// //   };

// //   return (
// //     <motion.div
// //       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ delay: 0.2 }}
// //     >
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
// //         <div className="relative">
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             onChange={handleSearch}
// //             value={searchTerm}
// //           />
// //           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
// //         </div>
// //       </div>

// //       <div className="overflow-x-auto">
// //         <table className="min-w-full divide-y divide-gray-700">
// //           <thead>
// //             <tr>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Product
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Category
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Price
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Approval Status
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                 Actions
// //               </th>
// //             </tr>
// //           </thead>

// //           <tbody className="divide-y divide-gray-700">
// //             {filteredProducts.map((product) => (
// //               <motion.tr
// //                 key={product._id}
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
// //                   <div className="flex items-center">
// //                     <div className="relative w-20 h-20 mr-4">
// //                       {product.images && product.images.length > 0 ? (
// //                         <>
// //                           <motion.img
// //                             key={currentImageIndex[product._id]}
// //                             src={`http://localhost:5000/${
// //                               product.images[currentImageIndex[product._id]]
// //                             }`}
// //                             alt={`${product.name} - Image ${
// //                               currentImageIndex[product._id] + 1
// //                             }`}
// //                             className="w-20 h-20 rounded-lg object-cover"
// //                             initial={{ opacity: 0 }}
// //                             animate={{ opacity: 1 }}
// //                             transition={{ duration: 0.3 }}
// //                           />
// //                           {product.images.length > 1 && (
// //                             <div className="absolute inset-0 flex items-center justify-between">
// //                               <button
// //                                 onClick={() => handlePrevImage(product._id)}
// //                                 className="bg-black bg-opacity-50 text-white rounded-full p-1"
// //                               >
// //                                 <ChevronLeft size={20} />
// //                               </button>
// //                               <button
// //                                 onClick={() =>
// //                                   handleNextImage(
// //                                     product._id,
// //                                     product.images.length
// //                                   )
// //                                 }
// //                                 className="bg-black bg-opacity-50 text-white rounded-full p-1"
// //                               >
// //                                 <ChevronRight size={20} />
// //                               </button>
// //                             </div>
// //                           )}
// //                         </>
// //                       ) : (
// //                         <div className="w-20 h-20 rounded-lg bg-gray-600"></div>
// //                       )}
// //                     </div>
// //                     <div>
// //                       <div className="text-sm font-medium text-gray-100">
// //                         {product.name}
// //                       </div>
// //                       <p className="text-sm text-gray-600 dark:text-gray-400">
// //                         Shop: {product.shopOwner.ownerName}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   {product.category}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   ${product.price.toFixed(2)}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
// //                   {product.isApproved ? (
// //                     <span className="text-green-400">Approved</span>
// //                   ) : (
// //                     <span className="text-red-400">Not Approved</span>
// //                   )}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 flex items-center">
// //                   <button
// //                     className={`mr-2 ${
// //                       product.isApproved
// //                         ? "text-red-400 hover:text-red-300"
// //                         : "text-green-400 hover:text-green-300"
// //                     }`}
// //                     onClick={() =>
// //                       handleApproval(product._id, product.isApproved)
// //                     }
// //                   >
// //                     {product.isApproved ? (
// //                       <XCircle size={18} />
// //                     ) : (
// //                       <CheckCircle size={18} />
// //                     )}
// //                   </button>
// //                   <button className="text-indigo-400 hover:text-indigo-300 mr-2">
// //                     <Edit size={18} />
// //                   </button>
// //                   <button className="text-red-400 hover:text-red-300 mr-2">
// //                     <Trash2 size={18} />
// //                   </button>
// //                   <input
// //                     type="file"
// //                     onChange={handleFileChange}
// //                     className="hidden"
// //                     id={`file-upload-${product._id}`}
// //                   />
// //                   <label
// //                     htmlFor={`file-upload-${product._id}`}
// //                     className="cursor-pointer text-blue-400 hover:text-blue-300 mr-2"
// //                   >
// //                     <Upload size={18} />
// //                   </label>
// //                   <button
// //                     onClick={() => handleUpload(product._id)}
// //                     className="text-green-400 hover:text-green-300"
// //                     disabled={!selectedFile}
// //                   >
// //                     Upload
// //                   </button>
// //                 </td>
// //               </motion.tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default ProductsTable;
// /////////////////////////////////////////////////////////////////////////////
// import { motion } from "framer-motion";
// import {
//   Edit,
//   Search,
//   Trash2,
//   CheckCircle,
//   XCircle,
//   Upload,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const ProductCard = ({
//   product,
//   handleApproval,
//   handleFileChange,
//   handleUpload,
//   selectedFile,
// }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : 0));
//   };

//   const handleNextImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev < product.images.length - 1 ? prev + 1 : prev
//     );
//   };

//   return (
//     <motion.div
//       className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="relative h-48">
//         {product.images && product.images.length > 0 ? (
//           <>
//             <motion.img
//               key={currentImageIndex}
//               src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//               alt={`${product.name} - Image ${currentImageIndex + 1}`}
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             />
//             {product.images.length > 1 && (
//               <div className="absolute inset-0 flex items-center justify-between">
//                 <button
//                   onClick={handlePrevImage}
//                   className="bg-black bg-opacity-50 text-white rounded-full p-1 ml-2"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   onClick={handleNextImage}
//                   className="bg-black bg-opacity-50 text-white rounded-full p-1 mr-2"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="w-full h-full bg-gray-600"></div>
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-100 mb-1">
//           {product.name}
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           Shop: {product.shopOwner.ownerName}
//         </p>
//         <p className="text-sm text-gray-300 mb-2">
//           Category: {product.category}
//         </p>
//         <p className="text-sm text-gray-300 mb-2">
//           Price: ${product.price.toFixed(2)}
//         </p>
//         <p className="text-sm mb-4">
//           Status:{" "}
//           {product.isApproved ? (
//             <span className="text-green-400">Approved</span>
//           ) : (
//             <span className="text-red-400">Not Approved</span>
//           )}
//         </p>
//         <div className="flex items-center justify-between">
//           <button
//             className={`mr-2 ${
//               product.isApproved
//                 ? "text-red-400 hover:text-red-300"
//                 : "text-green-400 hover:text-green-300"
//             }`}
//             onClick={() => handleApproval(product._id, product.isApproved)}
//           >
//             {product.isApproved ? (
//               <XCircle size={18} />
//             ) : (
//               <CheckCircle size={18} />
//             )}
//           </button>
//           <button className="text-indigo-400 hover:text-indigo-300 mr-2">
//             <Edit size={18} />
//           </button>
//           <button className="text-red-400 hover:text-red-300 mr-2">
//             <Trash2 size={18} />
//           </button>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="hidden"
//             id={`file-upload-${product._id}`}
//           />
//           <label
//             htmlFor={`file-upload-${product._id}`}
//             className="cursor-pointer text-blue-400 hover:text-blue-300 mr-2"
//           >
//             <Upload size={18} />
//           </label>
//           <button
//             onClick={() => handleUpload(product._id)}
//             className="text-green-400 hover:text-green-300"
//             disabled={!selectedFile}
//           >
//             Upload
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ProductsGrid = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [products, setProducts] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(8);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     setCurrentPage(1);
//   };

//   const handleApproval = async (productId, currentStatus) => {
//     try {
//       await axios.put(
//         `http://localhost:4000/api/products/${productId}/approve`,
//         {
//           isApproved: !currentStatus,
//         }
//       );
//       fetchProducts();
//     } catch (error) {
//       console.error("Error updating product approval status:", error);
//     }
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async (productId) => {
//     if (!selectedFile) {
//       alert("Please select a file first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("productImage", selectedFile);

//     try {
//       await axios.post(
//         `http://localhost:4000/api/products/${productId}/upload-image`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       fetchProducts();
//       setSelectedFile(null);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleSearch}
//             value={searchTerm}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {currentProducts.map((product) => (
//           <ProductCard
//             key={product._id}
//             product={product}
//             handleApproval={handleApproval}
//             handleFileChange={handleFileChange}
//             handleUpload={handleUpload}
//             selectedFile={selectedFile}
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-8 flex justify-center">
//         {Array.from({
//           length: Math.ceil(filteredProducts.length / productsPerPage),
//         }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={`mx-1 px-3 py-1 rounded ${
//               currentPage === index + 1
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default ProductsGrid;
// ///////////////////////////////////////ok top with full code////////////////

// import { motion } from "framer-motion";
// import {
//   Edit,
//   Search,
//   Trash2,
//   CheckCircle,
//   XCircle,
//   Upload,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// const ProductCard = ({
//   product,
//   handleApproval,
//   handleFileChange,
//   handleUpload,
//   handleDelete,
//   selectedFile,
// }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : 0));
//   };

//   const handleNextImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev < product.images.length - 1 ? prev + 1 : prev
//     );
//   };

//   return (
//     <motion.div
//       className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="relative h-48">
//         {product.images && product.images.length > 0 ? (
//           <>
//             <motion.img
//               key={currentImageIndex}
//               src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//               alt={`${product.name} - Image ${currentImageIndex + 1}`}
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             />
//             {product.images.length > 1 && (
//               <div className="absolute inset-0 flex items-center justify-between">
//                 <button
//                   onClick={handlePrevImage}
//                   className="bg-black bg-opacity-50 text-white rounded-full p-1 ml-2"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   onClick={handleNextImage}
//                   className="bg-black bg-opacity-50 text-white rounded-full p-1 mr-2"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="w-full h-full bg-gray-600"></div>
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-100 mb-1">
//           {product.name}
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           Shop: {product.shopOwner.ownerName}
//         </p>
//         <p className="text-sm text-gray-300 mb-2">
//           Category: {product.category}
//         </p>
//         <p className="text-sm text-gray-300 mb-2">
//           Price: ${product.price.toFixed(2)}
//         </p>
//         <p className="text-sm mb-4">
//           Status:{" "}
//           {product.isApproved ? (
//             <span className="text-green-400">Approved</span>
//           ) : (
//             <span className="text-red-400">Not Approved</span>
//           )}
//         </p>
//         <div className="flex items-center justify-between">
//           <button
//             className={`mr-2 ${
//               product.isApproved
//                 ? "text-red-400 hover:text-red-300"
//                 : "text-green-400 hover:text-green-300"
//             }`}
//             onClick={() => handleApproval(product._id, product.isApproved)}
//           >
//             {product.isApproved ? (
//               <XCircle size={18} />
//             ) : (
//               <CheckCircle size={18} />
//             )}
//           </button>
//           <button className="text-indigo-400 hover:text-indigo-300 mr-2">
//             <Edit size={18} />
//           </button>
//           <AlertDialog>
//             <AlertDialogTrigger asChild>
//               <button className="text-red-400 hover:text-red-300 mr-2">
//                 <Trash2 size={18} />
//               </button>
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//               <AlertDialogHeader>
//                 <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                 <AlertDialogDescription>
//                   This action cannot be undone. This will permanently delete the
//                   product from the admin side.
//                 </AlertDialogDescription>
//               </AlertDialogHeader>
//               <AlertDialogFooter>
//                 <AlertDialogCancel>Cancel</AlertDialogCancel>
//                 <AlertDialogAction onClick={() => handleDelete(product._id)}>
//                   Continue
//                 </AlertDialogAction>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialog>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="hidden"
//             id={`file-upload-${product._id}`}
//           />
//           <label
//             htmlFor={`file-upload-${product._id}`}
//             className="cursor-pointer text-blue-400 hover:text-blue-300 mr-2"
//           >
//             <Upload size={18} />
//           </label>
//           <button
//             onClick={() => handleUpload(product._id)}
//             className="text-green-400 hover:text-green-300"
//             disabled={!selectedFile}
//           >
//             Upload
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ProductsGrid = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [products, setProducts] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(8);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     setCurrentPage(1);
//   };

//   const handleApproval = async (productId, currentStatus) => {
//     try {
//       await axios.put(
//         `http://localhost:4000/api/products/${productId}/approve`,
//         {
//           isApproved: !currentStatus,
//         }
//       );
//       fetchProducts();
//     } catch (error) {
//       console.error("Error updating product approval status:", error);
//     }
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(
//         `http://localhost:4000/api/products/${productId}/delete-admin`
//       );
//       fetchProducts();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async (productId) => {
//     if (!selectedFile) {
//       alert("Please select a file first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("productImage", selectedFile);

//     try {
//       await axios.post(
//         `http://localhost:4000/api/products/${productId}/upload-image`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       fetchProducts();
//       setSelectedFile(null);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleSearch}
//             value={searchTerm}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {currentProducts.map((product) => (
//           <ProductCard
//             key={product._id}
//             product={product}
//             handleApproval={handleApproval}
//             handleFileChange={handleFileChange}
//             handleUpload={handleUpload}
//             handleDelete={handleDelete}
//             selectedFile={selectedFile}
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-8 flex justify-center">
//         {Array.from({
//           length: Math.ceil(filteredProducts.length / productsPerPage),
//         }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={`mx-1 px-3 py-1 rounded ${
//               currentPage === index + 1
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default ProductsGrid;
///////

// import { motion } from "framer-motion";
// import {
//   Edit,
//   Search,
//   Trash2,
//   CheckCircle,
//   XCircle,
//   Upload,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Modal from "react-modal";

// // Set the app element for accessibility
// Modal.setAppElement("#root");

// const ProductCard = ({
//   product,
//   handleApproval,
//   handleFileChange,
//   handleUpload,
//   handleDelete,
//   selectedFile,
// }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : 0));
//   };

//   const handleNextImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev < product.images.length - 1 ? prev + 1 : prev
//     );
//   };

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <motion.div
//       className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="relative h-48">
//         {product.images && product.images.length > 0 ? (
//           <>
//             <motion.img
//               key={currentImageIndex}
//               src={`http://localhost:5000/${product.images[currentImageIndex]}`}
//               alt={`${product.name} - Image ${currentImageIndex + 1}`}
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             />
//             {product.images.length > 1 && (
//               <div className="absolute inset-0 flex items-center justify-between">
//                 <button
//                   onClick={handlePrevImage}
//                   className="bg-black bg-opacity-50 text-white rounded-full p-1 ml-2"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   onClick={handleNextImage}
//                   className="bg-black bg-opacity-50 text-white rounded-full p-1 mr-2"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="w-full h-full bg-gray-600"></div>
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-100 mb-1">
//           {product.name}
//         </h3>
//         <p className="text-sm text-gray-400 mb-2">
//           Shop: {product.shopOwner.ownerName}
//         </p>
//         <p className="text-sm text-gray-300 mb-2">
//           Category: {product.category}
//         </p>
//         <p className="text-sm text-gray-300 mb-2">
//           Price: ${product.price.toFixed(2)}
//         </p>
//         <p className="text-sm mb-4">
//           Status:{" "}
//           {product.isApproved ? (
//             <span className="text-green-400">Approved</span>
//           ) : (
//             <span className="text-red-400">Not Approved</span>
//           )}
//         </p>
//         <div className="flex items-center justify-between">
//           <button
//             className={`mr-2 ${
//               product.isApproved
//                 ? "text-red-400 hover:text-red-300"
//                 : "text-green-400 hover:text-green-300"
//             }`}
//             onClick={() => handleApproval(product._id, product.isApproved)}
//           >
//             {product.isApproved ? (
//               <XCircle size={18} />
//             ) : (
//               <CheckCircle size={18} />
//             )}
//           </button>
//           <button className="text-indigo-400 hover:text-indigo-300 mr-2">
//             <Edit size={18} />
//           </button>
//           <button
//             className="text-red-400 hover:text-red-300 mr-2"
//             onClick={openModal}
//           >
//             <Trash2 size={18} />
//           </button>
//           <Modal
//             isOpen={isModalOpen}
//             onRequestClose={closeModal}
//             contentLabel="Delete Confirmation"
//             className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl max-w-md w-full z-50"
//             overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
//           >
//             <h2 className="text-xl font-bold mb-4 text-gray-800">
//               Are you absolutely sure?
//             </h2>
//             <p className="mb-6 text-gray-600">
//               This action cannot be undone. This will permanently delete the
//               product from the admin side.
//             </p>
//             <div className="flex justify-end">
//               <button
//                 onClick={closeModal}
//                 className="mr-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
//                   handleDelete(product._id);
//                   closeModal();
//                 }}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
//               >
//                 Delete
//               </button>
//             </div>
//           </Modal>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="hidden"
//             id={`file-upload-${product._id}`}
//           />
//           <label
//             htmlFor={`file-upload-${product._id}`}
//             className="cursor-pointer text-blue-400 hover:text-blue-300 mr-2"
//           >
//             <Upload size={18} />
//           </label>
//           <button
//             onClick={() => handleUpload(product._id)}
//             className="text-green-400 hover:text-green-300"
//             disabled={!selectedFile}
//           >
//             Upload
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ProductsGrid = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [products, setProducts] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(8);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     setCurrentPage(1);
//   };

//   const handleApproval = async (productId, currentStatus) => {
//     try {
//       await axios.put(
//         `http://localhost:4000/api/products/${productId}/approve`,
//         {
//           isApproved: !currentStatus,
//         }
//       );
//       fetchProducts();
//     } catch (error) {
//       console.error("Error updating product approval status:", error);
//     }
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(
//         `http://localhost:4000/api/products/${productId}/delete-admin`
//       );
//       fetchProducts();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async (productId) => {
//     if (!selectedFile) {
//       alert("Please select a file first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("productImage", selectedFile);

//     try {
//       await axios.post(
//         `http://localhost:4000/api/products/${productId}/upload-image`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       fetchProducts();
//       setSelectedFile(null);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleSearch}
//             value={searchTerm}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {currentProducts.map((product) => (
//           <ProductCard
//             key={product._id}
//             product={product}
//             handleApproval={handleApproval}
//             handleFileChange={handleFileChange}
//             handleUpload={handleUpload}
//             handleDelete={handleDelete}
//             selectedFile={selectedFile}
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-8 flex justify-center">
//         {Array.from({
//           length: Math.ceil(filteredProducts.length / productsPerPage),
//         }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={`mx-1 px-3 py-1 rounded ${
//               currentPage === index + 1
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default ProductsGrid;
/////////////////////////////////////////////
/////
/////////////////
///////////////////////////
import { motion } from "framer-motion";
import {
  Edit,
  Search,
  Trash2,
  CheckCircle,
  XCircle,
  Upload,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

const ProductCard = ({
  product,
  handleApproval,
  handleFileChange,
  handleUpload,
  handleDelete,
  selectedFile,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < product.images.length - 1 ? prev + 1 : prev
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        {product.images && product.images.length > 0 ? (
          <>
            <motion.img
              key={currentImageIndex}
              src={`http://localhost:5000/${product.images[currentImageIndex]}`}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {product.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  onClick={handlePrevImage}
                  className="bg-black bg-opacity-50 text-white rounded-full p-1 ml-2"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="bg-black bg-opacity-50 text-white rounded-full p-1 mr-2"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gray-600"></div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-100 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 mb-2">
          Shop: {product.shopOwner.ownerName}
        </p>
        <p className="text-sm text-gray-300 mb-2">
          Category: {product.category}
        </p>
        <p className="text-sm text-gray-300 mb-2">
          Price: ${product.price.toFixed(2)}
        </p>
        <p className="text-sm mb-4">
          Status:{" "}
          {product.isApproved ? (
            <span className="text-green-400">Approved</span>
          ) : (
            <span className="text-red-400">Not Approved</span>
          )}
        </p>
        <div className="flex items-center justify-between">
          <button
            className={`mr-2 ${
              product.isApproved
                ? "text-red-400 hover:text-red-300"
                : "text-green-400 hover:text-green-300"
            }`}
            onClick={() => handleApproval(product._id, product.isApproved)}
          >
            {product.isApproved ? (
              <XCircle size={18} />
            ) : (
              <CheckCircle size={18} />
            )}
          </button>
          <button className="text-indigo-400 hover:text-indigo-300 mr-2">
            <Edit size={18} />
          </button>
          <button
            className="text-red-400 hover:text-red-300 mr-2"
            onClick={openModal}
          >
            <Trash2 size={18} />
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Delete Confirmation"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl max-w-md w-full z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Are you absolutely sure?
            </h2>
            <p className="mb-6 text-gray-600">
              This action cannot be undone. This will permanently delete the
              product from the admin side.
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="mr-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(product._id);
                  closeModal();
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </Modal>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id={`file-upload-${product._id}`}
          />
          <label
            htmlFor={`file-upload-${product._id}`}
            className="cursor-pointer text-blue-400 hover:text-blue-300 mr-2"
          >
            <Upload size={18} />
          </label>
          <button
            onClick={() => handleUpload(product._id)}
            className="text-green-400 hover:text-green-300"
            disabled={!selectedFile}
          >
            Upload
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/products");
      // Filter out products with isDeleted set to true
      const activeProducts = response.data.filter(
        (product) => !product.isDeleted
      );
      setProducts(activeProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleApproval = async (productId, currentStatus) => {
    try {
      await axios.put(
        `http://localhost:4000/api/products/${productId}/approve`,
        {
          isApproved: !currentStatus,
        }
      );
      fetchProducts();
    } catch (error) {
      console.error("Error updating product approval status:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/products/${productId}/delete-admin`
      );
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (productId) => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("productImage", selectedFile);

    try {
      await axios.post(
        `http://localhost:4000/api/products/${productId}/upload-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchProducts();
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handleApproval={handleApproval}
            handleFileChange={handleFileChange}
            handleUpload={handleUpload}
            handleDelete={handleDelete}
            selectedFile={selectedFile}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        {Array.from({
          length: Math.ceil(filteredProducts.length / productsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsGrid;
