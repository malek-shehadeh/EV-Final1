// import React from "react";
// import { useNavigate } from "react-router-dom"; // Assuming you are using react-router

// const SidebarComponent = ({ setActivePage }) => {
//   const Navigate = useNavigate();

//   // Function to handle logout
//   const handleLogout = () => {
//     // Remove token from local storage
//     localStorage.removeItem("shopOwnerToken");
//     // Redirect to login page
//     Navigate("/login");
//   };

//   // Check if token exists in local storage
//   const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

//   return (
//     <div className="w-64 h-screen bg-gray-100">
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-4">Car Parts Admin</h2>
//         <nav>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("add")}
//           >
//             Add Product
//           </button>
//           <button
//             className="w-full text-left p-2 hover:bg-gray-200"
//             onClick={() => setActivePage("list")}
//           >
//             Product List
//           </button>

//           {/* Show Logout button only if the user is logged in */}
//           {isLoggedIn && (
//             <button
//               className="w-full text-left p-2 mt-4 flex items-center hover:bg-gray-200"
//               onClick={handleLogout}
//             >
//               {/* Logout Icon */}
//               <svg
//                 className="w-5 h-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h3a3 3 0 013 3v1"
//                 ></path>
//               </svg>
//               Logout
//             </button>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SidebarComponent;
/////////////

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SidebarComponent = ({ setActivePage }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("shopOwnerToken");
//     navigate("/login");
//   };

//   const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

//   return (
//     <div className="w-64 h-screen bg-gray-100">
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-4">Car Parts Admin</h2>
//         <nav>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("add")}
//           >
//             Add Product
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("list")}
//           >
//             Product List
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("Orders")}
//           >
//             Orders
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("profile")}
//           >
//             Shop Owner Profile
//           </button>
//           {isLoggedIn && (
//             <button
//               className="w-full text-left p-2 mt-4 flex items-center hover:bg-gray-200"
//               onClick={handleLogout}
//             >
//               <svg
//                 className="w-5 h-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h3a3 3 0 013 3v1"
//                 ></path>
//               </svg>
//               Logout
//             </button>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SidebarComponent;
// /////////////////////////////
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SidebarComponent = ({ setActivePage }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("shopOwnerToken");
//     navigate("/login");

//   };

//   const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

//   return (
//     <div className="w-64 h-screen bg-gray-100">
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-4">Car Parts Admin</h2>
//         <nav>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("add")}
//           >
//             Add Product
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("list")}
//           >
//             Product List
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("orders")} // تغيير هنا
//           >
//             Orders
//           </button>
//           <button
//             className="w-full text-left p-2 mb-2 hover:bg-gray-200"
//             onClick={() => setActivePage("profile")}
//           >
//             Shop Owner Profile
//           </button>
//           {isLoggedIn && (
//             <button
//               className="w-full text-left p-2 mt-4 flex items-center hover:bg-gray-200"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SidebarComponent;
// ///////////////////in the top 100%
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Menu,
//   ShoppingBag,
//   Package,
//   ShoppingCart,
//   User,
//   LogOut,
//   Plus,
// } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// const SIDEBAR_ITEMS = [
//   {
//     name: "Add Product",
//     icon: Plus,
//     color: "#6366f1",
//     action: "add",
//     href: "/addproduct",
//   },
//   {
//     name: "Product List",
//     icon: Package,
//     color: "#8B5CF6",
//     action: "list",
//   },
//   {
//     name: "Orders",
//     icon: ShoppingCart,
//     color: "#F59E0B",
//     action: "orders",
//   },
//   {
//     name: "Shop Owner Profile",
//     icon: User,
//     color: "#EC4899",
//     action: "profile",
//   },
// ];

// const SidebarComponent = ({ setActivePage }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

//   const handleLogout = () => {
//     localStorage.removeItem("shopOwnerToken");
//     navigate("/login");
//   };

//   return (
//     <motion.div
//       className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
//         isSidebarOpen ? "w-64" : "w-20"
//       }`}
//       animate={{ width: isSidebarOpen ? 256 : 80 }}
//     >
//       <div className="h-screen bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
//         <div className="flex items-center justify-between mb-8">
//           <motion.h2
//             className={`text-xl font-bold text-white ${
//               !isSidebarOpen && "hidden"
//             }`}
//           >
//             Car Parts Admin
//           </motion.h2>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="p-2 rounded-full hover:bg-gray-700 transition-colors"
//           >
//             <Menu size={24} className="text-white" />
//           </motion.button>
//         </div>

//         <nav className="flex-grow">
//           {SIDEBAR_ITEMS.map((item) => (
//             <motion.div
//               key={item.action}
//               className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer"
//               onClick={() => setActivePage(item.action)}
//             >
//               <item.icon
//                 size={20}
//                 style={{ color: item.color, minWidth: "20px" }}
//               />
//               <AnimatePresence>
//                 {isSidebarOpen && (
//                   <motion.span
//                     className="ml-4 whitespace-nowrap text-white"
//                     initial={{ opacity: 0, width: 0 }}
//                     animate={{ opacity: 1, width: "auto" }}
//                     exit={{ opacity: 0, width: 0 }}
//                     transition={{ duration: 0.2, delay: 0.1 }}
//                   >
//                     {item.name}
//                   </motion.span>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}

//           {isLoggedIn && (
//             <motion.div
//               className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer mt-auto"
//               onClick={handleLogout}
//             >
//               <LogOut
//                 size={20}
//                 style={{ color: "#6EE7B7", minWidth: "20px" }}
//               />
//               <AnimatePresence>
//                 {isSidebarOpen && (
//                   <motion.span
//                     className="ml-4 whitespace-nowrap text-white"
//                     initial={{ opacity: 0, width: 0 }}
//                     animate={{ opacity: 1, width: "auto" }}
//                     exit={{ opacity: 0, width: 0 }}
//                     transition={{ duration: 0.2, delay: 0.1 }}
//                   >
//                     Logout
//                   </motion.span>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           )}
//         </nav>
//       </div>
//     </motion.div>
//   );
// };

// export default SidebarComponent;
// /////////////
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   Menu,
//   ShoppingBag,
//   Package,
//   ShoppingCart,
//   User,
//   LogOut,
//   Plus,
// } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// const SIDEBAR_ITEMS = [
//   {
//     name: "Add Product",
//     icon: Plus,
//     color: "#6366f1",
//     action: "add",
//     href: "/addproduct",
//   },
//   {
//     name: "Product List",
//     icon: Package,
//     color: "#8B5CF6",
//     action: "list",
//     href: "/products",
//   },
//   {
//     name: "Orders",
//     icon: ShoppingCart,
//     color: "#F59E0B",
//     action: "orders",
//     href: "/orders",
//   },
//   {
//     name: "Shop Owner Profile",
//     icon: User,
//     color: "#EC4899",
//     action: "profile",
//     href: "/profile",
//   },
// ];

// const SidebarComponent = ({ setActivePage }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

//   const handleLogout = () => {
//     localStorage.removeItem("shopOwnerToken");
//     navigate("/login");
//   };

//   return (
//     <motion.div
//       className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
//         isSidebarOpen ? "w-64" : "w-20"
//       }`}
//       animate={{ width: isSidebarOpen ? 256 : 80 }}
//     >
//       <div className="h-screen bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
//         <div className="flex items-center justify-between mb-8">
//           <motion.h2
//             className={`text-xl font-bold text-white ${
//               !isSidebarOpen && "hidden"
//             }`}
//           >
//             Car Parts Admin
//           </motion.h2>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="p-2 rounded-full hover:bg-gray-700 transition-colors"
//           >
//             <Menu size={24} className="text-white" />
//           </motion.button>
//         </div>

//         <nav className="flex-grow">
//           {SIDEBAR_ITEMS.map((item) => (
//             <Link
//               key={item.action}
//               to={item.href}
//               className="block text-white no-underline"
//               onClick={() => setActivePage(item.action)}
//             >
//               <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer">
//                 <item.icon
//                   size={20}
//                   style={{ color: item.color, minWidth: "20px" }}
//                 />
//                 <AnimatePresence>
//                   {isSidebarOpen && (
//                     <motion.span
//                       className="ml-4 whitespace-nowrap text-white"
//                       initial={{ opacity: 0, width: 0 }}
//                       animate={{ opacity: 1, width: "auto" }}
//                       exit={{ opacity: 0, width: 0 }}
//                       transition={{ duration: 0.2, delay: 0.1 }}
//                     >
//                       {item.name}
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </Link>
//           ))}

//           {isLoggedIn && (
//             <motion.div
//               className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer mt-auto"
//               onClick={handleLogout}
//             >
//               <LogOut
//                 size={20}
//                 style={{ color: "#6EE7B7", minWidth: "20px" }}
//               />
//               <AnimatePresence>
//                 {isSidebarOpen && (
//                   <motion.span
//                     className="ml-4 whitespace-nowrap text-white"
//                     initial={{ opacity: 0, width: 0 }}
//                     animate={{ opacity: 1, width: "auto" }}
//                     exit={{ opacity: 0, width: 0 }}
//                     transition={{ duration: 0.2, delay: 0.1 }}
//                   >
//                     Logout
//                   </motion.span>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           )}
//         </nav>
//       </div>
//     </motion.div>
//   );
// };

// export default SidebarComponent;
/////////////////////////////////////////////////////
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Menu,
  ShoppingBag,
  Package,
  ShoppingCart,
  User,
  LogOut,
  Plus,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SIDEBAR_ITEMS = [
  {
    name: "Add Product",
    icon: Plus,
    color: "#6366f1",
    action: "add",
    href: "/addproduct",
  },
  {
    name: "Product List",
    icon: Package,
    color: "#8B5CF6",
    action: "list",
    href: "/products",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "#F59E0B",
    action: "orders",
    href: "/orders",
  },
  {
    name: "Shop Owner Profile",
    icon: User,
    color: "#EC4899",
    action: "profile",
    href: "/profile",
  },
];

const SidebarComponent = ({ setActivePage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("shopOwnerToken");

  const handleLogout = () => {
    localStorage.removeItem("shopOwnerToken");
    navigate("/login");
  };

  return (
    <>
      {/* Spacer div to prevent content from being hidden behind fixed sidebar */}
      <div className={`flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`} />

      <motion.div
        className={`fixed left-0 top-0 z-10 h-full transition-all duration-300 ease-in-out`}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
      >
        <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              className={`text-xl font-bold text-white ${
                !isSidebarOpen && "hidden"
              }`}
            >
              Car Parts Admin
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Menu size={24} className="text-white" />
            </motion.button>
          </div>

          <nav className="flex-grow">
            {SIDEBAR_ITEMS.map((item) => (
              <Link
                key={item.action}
                to={item.href}
                className="block text-white no-underline"
                onClick={() => setActivePage(item.action)}
              >
                <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer">
                  <item.icon
                    size={20}
                    style={{ color: item.color, minWidth: "20px" }}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap text-white"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}

            {isLoggedIn && (
              <motion.div
                className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer mt-auto"
                onClick={handleLogout}
              >
                <LogOut
                  size={20}
                  style={{ color: "#6EE7B7", minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap text-white"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      Logout
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default SidebarComponent;
