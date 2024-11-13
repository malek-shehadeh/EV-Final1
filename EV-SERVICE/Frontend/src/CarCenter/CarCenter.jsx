import { useState, useEffect } from "react";
import axios from "axios";
import { MapPin, Phone, Globe, ArrowUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CarCenterFinder() {
  const [carCenters, setCarCenters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [sortByDistance, setSortByDistance] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user's location
    if ("geolocation" in navigator) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          fetchAllCarCenters(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setError(
            "Error getting your location. Please enable location services."
          );
          // Still fetch centers even if location access is denied
          fetchAllCarCenters();
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      // Still fetch centers even if geolocation is not supported
      fetchAllCarCenters();
    }
  }, []);

  const fetchAllCarCenters = async (latitude = null, longitude = null) => {
    try {
      let url = "http://localhost:5000/api/carcenters/all";
      if (latitude && longitude) {
        url = `http://localhost:5000/api/carcenters/nearest?latitude=${latitude}&longitude=${longitude}`;
      }
      const response = await axios.get(url);
      setCarCenters(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching car centers. Please try again later.");
      setLoading(false);
    }
  };

  const calculateDistance = (centerLat, centerLng) => {
    if (!userLocation) return null;

    const R = 6371; // Earth's radius in km
    const dLat = ((centerLat - userLocation.latitude) * Math.PI) / 180;
    const dLon = ((centerLng - userLocation.longitude) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((userLocation.latitude * Math.PI) / 180) *
        Math.cos((centerLat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toggleSort = () => {
    const newSortByDistance = !sortByDistance;
    setSortByDistance(newSortByDistance);

    if (!newSortByDistance) {
      // Sort by name with null check
      setCarCenters(
        [...carCenters].sort((a, b) => {
          // Handle cases where name might be undefined or null
          const nameA = a.name || "";
          const nameB = b.name || "";
          return nameA.localeCompare(nameB);
        })
      );
    } else {
      // Sort by distance
      setCarCenters(
        [...carCenters].sort((a, b) => {
          const distA =
            calculateDistance(
              a.location?.coordinates[1],
              a.location?.coordinates[0]
            ) || Infinity;
          const distB =
            calculateDistance(
              b.location?.coordinates[1],
              b.location?.coordinates[0]
            ) || Infinity;
          return distA - distB;
        })
      );
    }
  };

  const handleShopOwnerClick = (ownerName) => {
    // Navigate to catalog with shop owner filter
    navigate(`/catalog?shopOwner=${encodeURIComponent(ownerName)}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-sans">
          Find Car Centers Near You
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the best automotive service centers in your area. Click on
          any center to view their available parts and services.
        </p>
      </div>

      <div className="flex justify-end mb-6">
        <button
          onClick={toggleSort}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
        >
          <ArrowUpDown className="w-4 h-4" />
          {sortByDistance ? "Sort by Name" : "Sort by Distance"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {carCenters.map((center, index) => {
          const distance = center.location
            ? calculateDistance(
                center.location.coordinates[1],
                center.location.coordinates[0]
              )
            : null;

          return (
            <div
              key={center._id || index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h3
                  className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleShopOwnerClick(center.name)}
                >
                  {center.name}
                </h3>
                {distance && (
                  <span className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
                    {distance.toFixed(1)} km away
                  </span>
                )}
              </div>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">{center.address}</span>
                </div>

                {center.phone && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone className="w-5 h-5 text-green-600" />
                    <a
                      href={`tel:${center.phone}`}
                      className="font-medium hover:text-green-600 transition-colors"
                    >
                      {center.phone}
                    </a>
                  </div>
                )}

                {center.website && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <a
                      href={center.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {carCenters.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-xl">
            No car centers found in your area
          </div>
        </div>
      )}
    </div>
  );
}
