// // Frontend - Orders.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // تكوين الـ axios لاستخدام URL الأساسي
// axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem('shopOwnerToken');
//       if (!token) {
//         setError('Authentication token not found');
//         setLoading(false);
//         return;
//       }

//       console.log('Attempting to fetch orders...');

//       // تعديل URL للتأكد من استخدام المسار الصحيح
//       const response = await axios.get(`${axios.defaults.baseURL}/api/orders/shop-orders`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//           // إضافة CORS headers
//           'Access-Control-Allow-Origin': '*'
//         }
//       });

//       console.log('Raw API Response:', response);

//       if (response.data) {
//         setOrders(Array.isArray(response.data) ? response.data : []);
//         console.log('Processed Orders:', orders);
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error('Fetch Error:', error);
//       setError(error?.response?.data?.message || 'Failed to fetch orders');
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (orderId) => {
//     try {
//       const token = localStorage.getItem('shopOwnerToken');
//       if (!token) {
//         setError('Authentication token not found');
//         return;
//       }

//       const response = await axios.patch(
//         `${axios.defaults.baseURL}/api/orders/${orderId}/update-status`,
//         { status: 'completed' },
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       if (response.data && response.data.success) {
//         setOrders(prevOrders =>
//           prevOrders.map(order =>
//             order._id === orderId
//               ? { ...order, status: 'completed' }
//               : order
//           )
//         );
//         alert('Order status updated successfully');
//       }
//     } catch (error) {
//       console.error('Update Error:', error);
//       alert(error?.response?.data?.message || 'Failed to update order status');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen flex-col gap-4">
//         <div className="text-xl text-red-600">{error}</div>
//         <button
//           onClick={fetchOrders}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">Orders Management</h2>
//         <button
//           onClick={fetchOrders}
//           className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//         >
//           Refresh Orders
//         </button>
//       </div>

//       {orders.length === 0 ? (
//         <div className="text-center py-12 bg-white rounded-lg shadow">
//           <p className="text-gray-500 text-lg">No orders found</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto bg-white rounded-lg shadow">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Order ID
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Customer
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Items
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Amount
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {orders.map((order) => (
//                 <tr key={order._id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {order._id}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">
//                       {order.deliveryInfo?.fullName || 'N/A'}
//                     </div>
//                     <div className="text-sm text-gray-500">
//                       {order.deliveryInfo?.email || 'N/A'}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="space-y-1">
//                       {order.cartItems?.map((item, index) => (
//                         <div key={item._id || index} className="text-sm text-gray-900">
//                           {item.name} x {item.quantity} (${item.price})
//                         </div>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     ${order.amount}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                       order.status === 'pending'
//                         ? 'bg-yellow-100 text-yellow-800'
//                         : order.status === 'completed'
//                         ? 'bg-green-100 text-green-800'
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     {order.status === 'pending' && (
//                       <button
//                         onClick={() => handleStatusUpdate(order._id)}
//                         className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       >
//                         Mark as Completed
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;
////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "../component/ui/card";
// import { Button } from "../component/ui/button";
// import { Badge } from "../component/ui/Badge";

// axios.defaults.baseURL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       if (!token) {
//         setError("Authentication token not found");
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(`/api/orders/shop-orders`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//       });

//       setOrders(Array.isArray(response.data) ? response.data : []);
//       setLoading(false);
//     } catch (error) {
//       setError(error?.response?.data?.message || "Failed to fetch orders");
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (orderId) => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       if (!token) {
//         setError("Authentication token not found");
//         return;
//       }

//       const response = await axios.patch(
//         `/api/orders/${orderId}/update-status`,
//         { status: "completed" },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.data && response.data.success) {
//         setOrders((prevOrders) =>
//           prevOrders.map((order) =>
//             order._id === orderId ? { ...order, status: "completed" } : order
//           )
//         );
//         alert("Order status updated successfully");
//       }
//     } catch (error) {
//       alert(error?.response?.data?.message || "Failed to update order status");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen flex-col gap-4">
//         <div className="text-xl text-red-600">{error}</div>
//         <Button onClick={fetchOrders}>Retry</Button>
//       </div>
//     );
//   }

//   return (
//     <Card className="p-6 max-w-7xl mx-auto">
//       <CardHeader>
//         <CardTitle>Orders Management</CardTitle>
//         <Button onClick={fetchOrders}>Refresh Orders</Button>
//       </CardHeader>
//       <CardContent>
//         {orders.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No orders found</p>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {orders.map((order) => (
//               <Card key={order._id} className="p-4">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-gray-500">Order ID</p>
//                     <p className="text-lg font-medium">{order._id}</p>
//                   </div>
//                   <Badge
//                     variant={
//                       order.status === "pending"
//                         ? "yellow"
//                         : order.status === "completed"
//                         ? "green"
//                         : "red"
//                     }
//                   >
//                     {order.status}
//                   </Badge>
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-sm text-gray-500">Customer</p>
//                   <p className="text-gray-900">
//                     {order.deliveryInfo?.fullName || "N/A"}
//                   </p>
//                   <p className="text-gray-500 text-sm">
//                     {order.deliveryInfo?.email || "N/A"}
//                   </p>
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-sm text-gray-500">Items</p>
//                   <div className="space-y-1">
//                     {order.cartItems?.map((item, index) => (
//                       <p key={item._id || index} className="text-gray-900">
//                         {item.name} x {item.quantity} (${item.price})
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="mt-4 flex justify-between items-end">
//                   <p className="text-lg font-medium text-gray-900">
//                     Total: ${order.amount}
//                   </p>
//                   {order.status === "pending" && (
//                     <Button
//                       onClick={() => handleStatusUpdate(order._id)}
//                       variant="primary"
//                       size="sm"
//                     >
//                       Mark as Completed
//                     </Button>
//                   )}
//                 </div>
//               </Card>
//             ))}
//           </div>
//         )}
//       </CardContent>
//       <CardFooter className="flex justify-end">
//         <Button onClick={fetchOrders}>Refresh Orders</Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default Orders;
// ////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
//   DialogActions,
// } from "../component/ui/card";
// import { Button } from "../component/ui/button";
// import { Badge } from "../component/ui/Badge";
// import { Eye } from "lucide-react";

// axios.defaults.baseURL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showOrderDetails, setShowOrderDetails] = useState(false);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       if (!token) {
//         setError("Authentication token not found");
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(`/api/orders/shop-orders`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//       });

//       setOrders(Array.isArray(response.data) ? response.data : []);
//       setLoading(false);
//     } catch (error) {
//       setError(error?.response?.data?.message || "Failed to fetch orders");
//       setLoading(false);
//     }
//   };

//   const handleUpdateStatus = async (orderId, status) => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       if (!token) {
//         setError("Authentication token not found");
//         return;
//       }

//       const response = await axios.patch(
//         `/api/orders/${orderId}/update-status`,
//         { status },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.data && response.data.success) {
//         setOrders((prevOrders) =>
//           prevOrders.map((order) =>
//             order._id === orderId ? { ...order, status } : order
//           )
//         );
//         alert(`Order status updated to "${status}"`);
//       }
//     } catch (error) {
//       alert(error?.response?.data?.message || "Failed to update order status");
//     }
//   };

//   const handleShowOrderDetails = (order) => {
//     setSelectedOrder(order);
//     setShowOrderDetails(true);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen flex-col gap-4">
//         <div className="text-xl text-red-600">{error}</div>
//         <Button onClick={fetchOrders}>Retry</Button>
//       </div>
//     );
//   }

//   return (
//     <Card className="p-6 max-w-7xl mx-auto">
//       <CardHeader>
//         <CardTitle>Orders Management</CardTitle>
//         <Button onClick={fetchOrders}>Refresh Orders</Button>
//       </CardHeader>
//       <CardContent>
//         {orders.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No orders found</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {orders.map((order) => (
//               <Card
//                 key={order._id}
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleShowOrderDetails(order)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-gray-500">Order ID</p>
//                     <p className="text-lg font-medium">{order._id}</p>
//                   </div>
//                   <Badge
//                     variant={
//                       order.status === "pending"
//                         ? "yellow"
//                         : order.status === "completed"
//                         ? "green"
//                         : "red"
//                     }
//                   >
//                     {order.status}
//                   </Badge>
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-sm text-gray-500">Customer</p>
//                   <p className="text-gray-900">
//                     {order.deliveryInfo?.fullName || "N/A"}
//                   </p>
//                   <p className="text-gray-500 text-sm">
//                     {order.deliveryInfo?.email || "N/A"}
//                   </p>
//                 </div>
//                 <div className="mt-4 flex justify-between items-end">
//                   <p className="text-lg font-medium text-gray-900">
//                     Total: ${order.amount}
//                   </p>
//                   {order.status !== "completed" && (
//                     <button
//                       className="text-indigo-400 hover:text-indigo-300 mr-2"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleUpdateStatus(order._id, "completed");
//                       }}
//                     >
//                       <Eye size={18} />
//                     </button>
//                   )}
//                 </div>
//               </Card>
//             ))}
//           </div>
//         )}
//       </CardContent>
//       <CardFooter className="flex justify-end">
//         <Button onClick={fetchOrders}>Refresh Orders</Button>
//       </CardFooter>

//       {selectedOrder && (
//         <Dialog open={showOrderDetails} onOpenChange={setShowOrderDetails}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Order Details</DialogTitle>
//               <DialogClose />
//             </DialogHeader>
//             <DialogDescription>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-gray-500">Order ID</p>
//                     <p className="text-lg font-medium">{selectedOrder._id}</p>
//                   </div>
//                   <Badge
//                     variant={
//                       selectedOrder.status === "pending"
//                         ? "yellow"
//                         : selectedOrder.status === "completed"
//                         ? "green"
//                         : "red"
//                     }
//                   >
//                     {selectedOrder.status}
//                   </Badge>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Customer</p>
//                   <p className="text-gray-900">
//                     {selectedOrder.deliveryInfo?.fullName || "N/A"}
//                   </p>
//                   <p className="text-gray-500 text-sm">
//                     {selectedOrder.deliveryInfo?.email || "N/A"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Items</p>
//                   <div className="space-y-1">
//                     {selectedOrder.cartItems?.map((item, index) => (
//                       <div
//                         key={item._id || index}
//                         className="flex items-center"
//                       >
//                         <img
//                           src={item.image || "/api/placeholder/100/80"}
//                           alt={item.name}
//                           className="w-16 h-12 object-cover rounded mr-4"
//                         />
//                         <div>
//                           <p className="text-gray-900">{item.name}</p>
//                           <p className="text-gray-500 text-sm">
//                             {item.quantity} x ${item.price}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-end">
//                   <p className="text-lg font-medium text-gray-900">
//                     Total: ${selectedOrder.amount}
//                   </p>
//                   {selectedOrder.status !== "completed" && (
//                     <Button
//                       onClick={() =>
//                         handleUpdateStatus(selectedOrder._id, "completed")
//                       }
//                       variant="primary"
//                       size="sm"
//                     >
//                       Mark as Completed
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </DialogDescription>
//           </DialogContent>
//         </Dialog>
//       )}
//     </Card>
//   );
// };

// export default Orders;
///////////////in the top 100%///

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogActions,
} from "../component/ui/card";
import { Button } from "../component/ui/button";
import { Badge } from "../component/ui/Badge";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("shopOwnerToken");
      if (!token) {
        setError("Authentication token not found");
        setLoading(false);
        return;
      }

      const response = await axios.get(`/api/orders/shop-orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      setOrders(Array.isArray(response.data) ? response.data : []);
      setLoading(false);
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to fetch orders");
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (orderId, status) => {
    try {
      const token = localStorage.getItem("shopOwnerToken");
      if (!token) {
        setError("Authentication token not found");
        return;
      }

      const response = await axios.patch(
        `/api/orders/${orderId}/update-status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status } : order
          )
        );
        alert(`Order status updated to "${status}"`);
      }
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to update order status");
    }
  };

  const handleShowOrderDetails = (order) => {
    setSelectedOrder(order);
    setSelectedImageIndex(0);
    setShowOrderDetails(true);
  };

  const handleNextImage = (item) => {
    if (item.images && item.images.length > 0) {
      setSelectedImageIndex((prev) =>
        prev === item.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = (item) => {
    if (item.images && item.images.length > 0) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? item.images.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <div className="text-xl text-red-600">{error}</div>
        <Button onClick={fetchOrders}>Retry</Button>
      </div>
    );
  }

  return (
    <Card className="p-6 max-w-7xl mx-auto">
      <CardHeader>
        <CardTitle>Orders Management</CardTitle>
        <Button onClick={fetchOrders}>Refresh Orders</Button>
      </CardHeader>
      <CardContent>
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No orders found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orders.map((order) => (
              <Card
                key={order._id}
                className="p-4 cursor-pointer"
                onClick={() => handleShowOrderDetails(order)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="text-lg font-medium">{order._id}</p>
                  </div>
                  <Badge
                    variant={
                      order.status === "pending"
                        ? "yellow"
                        : order.status === "completed"
                        ? "green"
                        : "red"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="text-gray-900">
                    {order.deliveryInfo?.fullName || "N/A"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {order.deliveryInfo?.email || "N/A"}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <p className="text-lg font-medium text-gray-900">
                    Total: ${order.amount}
                  </p>
                  {order.status !== "completed" && (
                    <button
                      className="text-indigo-400 hover:text-indigo-300 mr-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdateStatus(order._id, "completed");
                      }}
                    >
                      <Eye size={18} />
                    </button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={fetchOrders}>Refresh Orders</Button>
      </CardFooter>

      {selectedOrder && (
        <Dialog open={showOrderDetails} onOpenChange={setShowOrderDetails}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Order Details</DialogTitle>
              <DialogClose />
            </DialogHeader>
            <DialogDescription>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="text-lg font-medium">{selectedOrder._id}</p>
                  </div>
                  <Badge
                    variant={
                      selectedOrder.status === "pending"
                        ? "yellow"
                        : selectedOrder.status === "completed"
                        ? "green"
                        : "red"
                    }
                  >
                    {selectedOrder.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="text-gray-900">
                    {selectedOrder.deliveryInfo?.fullName || "N/A"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {selectedOrder.deliveryInfo?.email || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-4">Items</p>
                  <div className="space-y-6">
                    {selectedOrder.cartItems?.map((item, index) => (
                      <div
                        key={item._id || index}
                        className="border rounded-lg p-4"
                      >
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="relative w-full md:w-1/3">
                            {item.images && item.images.length > 0 ? (
                              <>
                                <img
                                  src={item.images[selectedImageIndex]}
                                  alt={item.name}
                                  className="w-full h-48 object-cover rounded"
                                />
                                {item.images.length > 1 && (
                                  <div className="absolute inset-0 flex items-center justify-between">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevImage(item);
                                      }}
                                      className="p-1 bg-black/50 text-white rounded-full ml-2"
                                    >
                                      <ChevronLeft size={20} />
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleNextImage(item);
                                      }}
                                      className="p-1 bg-black/50 text-white rounded-full mr-2"
                                    >
                                      <ChevronRight size={20} />
                                    </button>
                                  </div>
                                )}
                                <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                                  {selectedImageIndex + 1} /{" "}
                                  {item.images.length}
                                </div>
                              </>
                            ) : (
                              <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                                <p className="text-gray-500">
                                  No image available
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-lg font-semibold text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-gray-500">
                              Quantity: {item.quantity}
                            </p>
                            <p className="text-gray-500">
                              Price: ${item.price} each
                            </p>
                            <p className="text-gray-500">
                              Subtotal: $
                              {(item.quantity * item.price).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-end pt-4 border-t">
                  <p className="text-xl font-medium text-gray-900">
                    Total: ${selectedOrder.amount}
                  </p>
                  {selectedOrder.status !== "completed" && (
                    <Button
                      onClick={() =>
                        handleUpdateStatus(selectedOrder._id, "completed")
                      }
                      variant="primary"
                      size="sm"
                    >
                      Mark as Completed
                    </Button>
                  )}
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
};

export default Orders;
