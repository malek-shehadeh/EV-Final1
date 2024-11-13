// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5000/api";

// const ShopOwnerProfile = () => {
//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({});
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const response = await axios.get(`${API_URL}/shop-owners/profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProfile(response.data);
//       setEditedProfile(response.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError(
//         error.response?.data?.message ||
//           "Failed to load profile. Please try again later."
//       );
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile({ ...editedProfile, [name]: value });
//   };

//   const handleArrayInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile({
//       ...editedProfile,
//       [name]: value.split(",").map((item) => item.trim()),
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Create a preview URL for immediate display
//       const previewUrl = URL.createObjectURL(file);
//       setProfilePicture(file);
//       setEditedProfile({
//         ...editedProfile,
//         profilePicture: previewUrl, // This is just for preview
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();

//     // Add all fields to formData
//     Object.keys(editedProfile).forEach((key) => {
//       if (key === "services" || key === "specializations") {
//         formData.append(key, editedProfile[key].join(","));
//       } else if (key === "location") {
//         formData.append("latitude", editedProfile.location.coordinates[1]);
//         formData.append("longitude", editedProfile.location.coordinates[0]);
//       } else if (key !== "profilePicture") {
//         formData.append(key, editedProfile[key]);
//       }
//     });

//     if (profilePicture) {
//       formData.append("profilePicture", profilePicture);
//     }

//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const response = await axios.put(
//         `${API_URL}/shop-owners/profile`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setProfile(response.data.shopOwner);
//       setIsEditing(false);
//       setError(null);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError(
//         error.response?.data?.message ||
//           error.response?.data?.error ||
//           error.message ||
//           "Failed to update profile. Please try again later."
//       );
//     }
//   };

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>Loading...</div>;

//   return (
//     <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Shop Owner Profile</h2>
//       {isEditing ? (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Basic Information */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Owner Name
//               </label>
//               <input
//                 type="text"
//                 name="ownerName"
//                 value={editedProfile.ownerName || ""}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Shop Phone
//               </label>
//               <input
//                 type="text"
//                 name="shopPhone"
//                 value={editedProfile.shopPhone || ""}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//           </div>

//           {/* Shop Details */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Shop Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={editedProfile.name || ""}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Website
//               </label>
//               <input
//                 type="text"
//                 name="website"
//                 value={editedProfile.website || ""}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Address
//             </label>
//             <input
//               type="text"
//               name="address"
//               value={editedProfile.address || ""}
//               onChange={handleInputChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3"
//             />
//           </div>

//           {/* Services & Specializations */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Services (comma-separated)
//               </label>
//               <input
//                 type="text"
//                 name="services"
//                 value={editedProfile.services?.join(", ") || ""}
//                 onChange={handleArrayInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Specializations (comma-separated)
//               </label>
//               <input
//                 type="text"
//                 name="specializations"
//                 value={editedProfile.specializations?.join(", ") || ""}
//                 onChange={handleArrayInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//           </div>

//           {/* Profile Picture */}
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Profile Picture
//             </label>
//             <div className="flex items-center space-x-4">
//               {(editedProfile.profilePicture || profile.profilePicture) && (
//                 <img
//                   src={
//                     editedProfile.profilePicture ||
//                     `${API_URL}${profile.profilePicture}`
//                   }
//                   alt="Profile Preview"
//                   className="w-32 h-32 object-cover rounded-full"
//                 />
//               )}
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 accept="image/*"
//                 className="shadow appearance-none border rounded py-2 px-3"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={() => setIsEditing(false)}
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h3 className="font-bold">Basic Information</h3>
//               <p>Owner Name: {profile.ownerName}</p>
//               <p>Shop Phone: {profile.shopPhone}</p>
//               <p>Email: {profile.email}</p>
//             </div>
//             <div>
//               <h3 className="font-bold">Shop Details</h3>
//               <p>Shop Name: {profile.name}</p>
//               <p>Website: {profile.website || "N/A"}</p>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold">Location</h3>
//             <p>Address: {profile.address}</p>
//           </div>

//           <div>
//             <h3 className="font-bold">Services & Specializations</h3>
//             <p>Services: {profile.services?.join(", ") || "None listed"}</p>
//             <p>
//               Specializations:{" "}
//               {profile.specializations?.join(", ") || "None listed"}
//             </p>
//           </div>

//           {!isEditing && profile.profilePicture && (
//             <div>
//               <h3 className="font-bold">Profile Picture</h3>
//               <img
//                 src={`${API_URL}${profile.profilePicture}`}
//                 alt="Profile"
//                 className="w-32 h-32 object-cover rounded-full"
//               />
//             </div>
//           )}

//           <button
//             onClick={() => setIsEditing(true)}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Edit Profile
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopOwnerProfile;
////////////////////

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Camera } from "lucide-react";

// const API_URL = "http://localhost:5000/api";

// const ShopOwnerProfile = () => {
//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({});
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const response = await axios.get(`${API_URL}/shop-owners/profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProfile(response.data);
//       setEditedProfile(response.data);
//       if (response.data.profilePicture) {
//         // Use the full backend URL for the image
//         setImageUrl(`http://localhost:5000${response.data.profilePicture}`);
//       }
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError(
//         error.response?.data?.message ||
//           "Failed to load profile. Please try again later."
//       );
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile({ ...editedProfile, [name]: value });
//   };

//   const handleArrayInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProfile({
//       ...editedProfile,
//       [name]: value.split(",").map((item) => item.trim()),
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfilePicture(file);
//       // Create a temporary URL for preview
//       setImageUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();

//     // Add all fields to formData
//     Object.keys(editedProfile).forEach((key) => {
//       if (key === "services" || key === "specializations") {
//         formData.append(key, editedProfile[key].join(","));
//       } else if (key === "location") {
//         formData.append("latitude", editedProfile.location.coordinates[1]);
//         formData.append("longitude", editedProfile.location.coordinates[0]);
//       } else if (key !== "profilePicture") {
//         formData.append(key, editedProfile[key]);
//       }
//     });

//     if (profilePicture) {
//       formData.append("profilePicture", profilePicture);
//     }

//     try {
//       const token = localStorage.getItem("shopOwnerToken");
//       const response = await axios.put(
//         `${API_URL}/shop-owners/profile`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setProfile(response.data.shopOwner);
//       if (response.data.shopOwner.profilePicture) {
//         // Update image URL with the full backend URL
//         setImageUrl(
//           `http://localhost:5000${response.data.shopOwner.profilePicture}`
//         );
//       }
//       setIsEditing(false);
//       setError(null);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError(
//         error.response?.data?.message ||
//           error.response?.data?.error ||
//           error.message ||
//           "Failed to update profile. Please try again later."
//       );
//     }
//   };

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>Loading...</div>;

//   return (
//     <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Shop Owner Profile</h2>
//       {isEditing ? (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Profile Picture */}
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
//                   onChange={handleFileChange}
//                   accept="image/*"
//                 />
//               </label>
//             </div>
//           </div>

//           {/* Basic Information */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Owner Name
//               </label>
//               <input
//                 type="text"
//                 name="ownerName"
//                 value={editedProfile.ownerName || ""}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Shop Phone
//               </label>
//               <input
//                 type="text"
//                 name="shopPhone"
//                 value={editedProfile.shopPhone || ""}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//           </div>

//           {/* Shop Details */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Shop Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={editedProfile.name || ""}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Website
//               </label>
//               <input
//                 type="text"
//                 name="website"
//                 value={editedProfile.website || ""}
//                 onChange={handleInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Address
//             </label>
//             <input
//               type="text"
//               name="address"
//               value={editedProfile.address || ""}
//               onChange={handleInputChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3"
//             />
//           </div>

//           {/* Services & Specializations */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Services (comma-separated)
//               </label>
//               <input
//                 type="text"
//                 name="services"
//                 value={editedProfile.services?.join(", ") || ""}
//                 onChange={handleArrayInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Specializations (comma-separated)
//               </label>
//               <input
//                 type="text"
//                 name="specializations"
//                 value={editedProfile.specializations?.join(", ") || ""}
//                 onChange={handleArrayInputChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={() => setIsEditing(false)}
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="space-y-4">
//           {/* Profile Picture Display */}
//           <div className="flex justify-center mb-6">
//             <img
//               src={imageUrl}
//               alt="Profile"
//               className="w-32 h-32 rounded-full object-cover"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h3 className="font-bold">Basic Information</h3>
//               <p>Owner Name: {profile.ownerName}</p>
//               <p>Shop Phone: {profile.shopPhone}</p>
//               <p>Email: {profile.email}</p>
//             </div>
//             <div>
//               <h3 className="font-bold">Shop Details</h3>
//               <p>Shop Name: {profile.name}</p>
//               <p>Website: {profile.website || "N/A"}</p>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold">Location</h3>
//             <p>Address: {profile.address}</p>
//           </div>

//           <div>
//             <h3 className="font-bold">Services & Specializations</h3>
//             <p>Services: {profile.services?.join(", ") || "None listed"}</p>
//             <p>
//               Specializations:{" "}
//               {profile.specializations?.join(", ") || "None listed"}
//             </p>
//           </div>

//           <button
//             onClick={() => setIsEditing(true)}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Edit Profile
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopOwnerProfile;
/////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../component/ui/card";
import { Input } from "../component/ui/input";
import Label from "../component/ui/Label";
import { Button } from "../component/ui/button";
import Alert from "../component/ui/Alert";
import AlertDescription from "../component/ui/AlertDescription";
import { Separator } from "../component/ui/separator";

const API_URL = "http://localhost:5000/api";

const ShopOwnerProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const [profilePicture, setProfilePicture] = useState(null);
  const [imageUrl, setImageUrl] = useState("/api/placeholder/150/150");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("shopOwnerToken");
      const response = await axios.get(`${API_URL}/shop-owners/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data);
      setEditedProfile(response.data);
      if (response.data.profilePicture) {
        setImageUrl(`http://localhost:5000${response.data.profilePicture}`);
      }
      setError(null);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError(
        error.response?.data?.message ||
          "Failed to load profile. Please try again later."
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleArrayInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({
      ...editedProfile,
      [name]: value.split(",").map((item) => item.trim()),
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(editedProfile).forEach((key) => {
      if (key === "services" || key === "specializations") {
        formData.append(key, editedProfile[key].join(","));
      } else if (key === "location") {
        formData.append("latitude", editedProfile.location.coordinates[1]);
        formData.append("longitude", editedProfile.location.coordinates[0]);
      } else if (key !== "profilePicture") {
        formData.append(key, editedProfile[key]);
      }
    });

    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const token = localStorage.getItem("shopOwnerToken");
      const response = await axios.put(
        `${API_URL}/shop-owners/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProfile(response.data.shopOwner);
      if (response.data.shopOwner.profilePicture) {
        setImageUrl(
          `http://localhost:5000${response.data.shopOwner.profilePicture}`
        );
      }
      setIsEditing(false);
      setError(null);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(
        error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Failed to update profile. Please try again later."
      );
    }
  };

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto mt-10">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const ProfileField = ({ label, value }) => (
    <div className="space-y-1">
      <Label className="text-sm text-gray-500">{label}</Label>
      <p className="text-sm font-medium">{value || "Not specified"}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Shop Owner Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                    <img
                      src={imageUrl}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <label
                    htmlFor="profile-picture"
                    className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer shadow-lg hover:bg-blue-600 transition-colors"
                  >
                    <Camera className="w-5 h-5 text-white" />
                    <input
                      type="file"
                      id="profile-picture"
                      className="hidden"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner Name</Label>
                  <Input
                    id="ownerName"
                    name="ownerName"
                    value={editedProfile.ownerName || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shopPhone">Shop Phone</Label>
                  <Input
                    id="shopPhone"
                    name="shopPhone"
                    value={editedProfile.shopPhone || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Shop Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={editedProfile.name || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    value={editedProfile.website || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={editedProfile.address || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="services">Services (comma-separated)</Label>
                  <Input
                    id="services"
                    name="services"
                    value={editedProfile.services?.join(", ") || ""}
                    onChange={handleArrayInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specializations">
                    Specializations (comma-separated)
                  </Label>
                  <Input
                    id="specializations"
                    name="specializations"
                    value={editedProfile.specializations?.join(", ") || ""}
                    onChange={handleArrayInputChange}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                  <img
                    src={imageUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Basic Information
                    </h3>
                    <div className="space-y-4">
                      <ProfileField
                        label="Owner Name"
                        value={profile.ownerName}
                      />
                      <ProfileField
                        label="Shop Phone"
                        value={profile.shopPhone}
                      />
                      <ProfileField label="Email" value={profile.email} />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Shop Details
                    </h3>
                    <div className="space-y-4">
                      <ProfileField label="Shop Name" value={profile.name} />
                      <ProfileField label="Website" value={profile.website} />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Location
                </h3>
                <ProfileField label="Address" value={profile.address} />
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Services & Specializations
                </h3>
                <div className="space-y-4">
                  <ProfileField
                    label="Services"
                    value={profile.services?.join(", ")}
                  />
                  <ProfileField
                    label="Specializations"
                    value={profile.specializations?.join(", ")}
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopOwnerProfile;
