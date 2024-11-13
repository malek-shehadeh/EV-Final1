// import React, { useState } from "react";

// const AddProductPage = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Product added:", { name, description, image });
//   };

//   return (
//     <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Product Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Product Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProductPage;
// /////////
// import React, { useState } from "react";
// import axios from "axios";

// const AddProductPage = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [images, setImages] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("category", category);
//     images.forEach((image, index) => {
//       formData.append(`images`, image);
//     });

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/products",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       alert("Product added successfully!");
//       // Reset form fields
//       setName("");
//       setDescription("");
//       setPrice("");
//       setCategory("");
//       setImages([]);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please try again.");
//     }
//   };

//   return (
//     <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Product Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Product Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="number"
//             placeholder="Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="file"
//             onChange={(e) => setImages([...images, ...e.target.files])}
//             multiple
//           />
//         </div>
//         <div>
//           {images.map((image, index) => (
//             <span key={index} className="mr-2">
//               {image.name}
//             </span>
//           ))}
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProductPage;
// /////////ok up up //////////////////////
// import React, { useState } from "react";
// import axios from "axios";

// const AddProductPage = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [images, setImages] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("category", category);
//     images.forEach((image, index) => {
//       formData.append(`images`, image);
//     });

//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const response = await axios.post(
//         "http://localhost:5000/api/products",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert("Product added successfully!");
//       // Reset form fields
//       setName("");
//       setDescription("");
//       setPrice("");
//       setCategory("");
//       setImages([]);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please try again.");
//     }
//   };

//   return (
//     <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Product Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Product Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="number"
//             placeholder="Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="file"
//             onChange={(e) => setImages([...images, ...e.target.files])}
//             multiple
//           />
//         </div>
//         <div>
//           {images.map((image, index) => (
//             <span key={index} className="mr-2">
//               {image.name}
//             </span>
//           ))}
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProductPage;
////////////////

// import React, { useState } from "react";
// import axios from "axios";

// const AddProductPage = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     // Form validation
//     if (!name || !description || !price || !category || images.length === 0) {
//       setError("All fields and at least one image are required");
//       setLoading(false);
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("category", category);

//     // Append images
//     images.forEach((image) => {
//       formData.append("images", image);
//     });

//     try {
//       const token = localStorage.getItem("shopOwnerToken");

//       if (!token) {
//         throw new Error("Please login as a shop owner first");
//       }

//       const response = await axios.post(
//         "http://localhost:5000/api/products",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Product added successfully!");

//       // Reset form
//       setName("");
//       setDescription("");
//       setPrice("");
//       setCategory("");
//       setImages([]);

//     } catch (error) {
//       console.error("Error details:", error.response?.data);
//       const errorMessage = error.response?.data?.message || "Failed to add product";
//       setError(errorMessage);
//       alert(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length + images.length > 5) {
//       alert("Maximum 5 images allowed");
//       return;
//     }

//     // Validate files
//     const validFiles = files.filter(file => {
//       const isImage = file.type.startsWith('image/');
//       const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
//       if (!isImage) alert(`${file.name} is not an image file`);
//       if (!isValidSize) alert(`${file.name} is too large (max 5MB)`);
//       return isImage && isValidSize;
//     });

//     setImages(prev => [...prev, ...validFiles]);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Product Name *
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Product Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Description *
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Product Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             rows="4"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Price *
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="number"
//             placeholder="Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//             min="0"
//             step="0.01"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Category *
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Images * (Max 5)
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="file"
//             onChange={handleImageChange}
//             multiple
//             accept="image/*"
//             required={images.length === 0}
//           />
//         </div>

//         <div className="flex flex-wrap gap-2">
//           {images.map((image, index) => (
//             <div key={index} className="relative">
//               <span className="text-sm text-gray-600">{image.name}</span>
//               <button
//                 type="button"
//                 className="ml-2 text-red-500 hover:text-red-700"
//                 onClick={() => {
//                   const newImages = [...images];
//                   newImages.splice(index, 1);
//                   setImages(newImages);
//                 }}
//               >
//                 ×
//               </button>
//             </div>
//           ))}
//         </div>

//         <button
//           className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           type="submit"
//           disabled={loading}
//         >
//           {loading ? "Adding Product..." : "Add Product"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProductPage;
// /////////////////in the top  % ///
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { X, Upload, AlertCircle } from "lucide-react";

const AddProductPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [previews, setPreviews] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!name || !description || !price || !category || images.length === 0) {
      setError("All fields and at least one image are required");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const token = localStorage.getItem("shopOwnerToken");

      if (!token) {
        throw new Error("Please login as a shop owner first");
      }

      await axios.post("http://localhost:5000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Product added successfully!");

      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImages([]);
      setPreviews([]);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to add product";
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    const validFiles = files.filter((file) => {
      const isImage = file.type.startsWith("image/");
      const isValidSize = file.size <= 5 * 1024 * 1024;
      if (!isImage) alert(`${file.name} is not an image file`);
      if (!isValidSize) alert(`${file.name} is too large (max 5MB)`);
      return isImage && isValidSize;
    });

    setImages((prev) => [...prev, ...validFiles]);

    // Create preview URLs
    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    const newPreviews = [...previews];

    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(previews[index]);

    newImages.splice(index, 1);
    newPreviews.splice(index, 1);

    setImages(newImages);
    setPreviews(newPreviews);
  };

  return (
    <motion.div
      className="min-h-screen bg-green-100 p-3 sm:p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-green-900 mb-6">
            Add New Product
          </h1>

          {error && (
            <motion.div
              className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle className="text-red-500 w-5 h-5 mt-0.5" />
              <p className="text-red-600 text-sm">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Product Name
              </label>
              <input
                className="w-full bg-green-50 border border-green-200 rounded-lg p-2.5 text-green-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full bg-green-50 border border-green-200 rounded-lg p-2.5 text-green-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows="4"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">
                  Price
                </label>
                <input
                  className="w-full bg-green-50 border border-green-200 rounded-lg p-2.5 text-green-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">
                  Category
                </label>
                <input
                  className="w-full bg-green-50 border border-green-200 rounded-lg p-2.5 text-green-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Product Images (Max 5)
              </label>
              <div className="mt-2">
                <label className="flex flex-col items-center justify-center w-full h-32 bg-green-50 border-2 border-green-200 border-dashed rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-green-500" />
                    <p className="text-sm text-green-700">
                      Click to upload images
                    </p>
                    <p className="mt-1 text-xs text-green-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    multiple
                    accept="image/*"
                    required={images.length === 0}
                  />
                </label>
              </div>

              {previews.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Adding Product..." : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default AddProductPage;
