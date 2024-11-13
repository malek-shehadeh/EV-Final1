// // const CarCenter = require("../models/carCenter");

// // exports.getNearestCarCenters = async (req, res) => {
// //   try {
// //     const { latitude, longitude } = req.query;

// //     if (!latitude || !longitude) {
// //       return res
// //         .status(400)
// //         .json({ message: "Latitude and longitude are required" });
// //     }

// //     const nearestCarCenters = await CarCenter.aggregate([
// //       {
// //         $geoNear: {
// //           near: {
// //             type: "Point",
// //             coordinates: [parseFloat(longitude), parseFloat(latitude)],
// //           },
// //           distanceField: "distance",
// //           spherical: true,
// //           maxDistance: 50000, // 50km radius
// //         },
// //       },
// //       { $limit: 5 }, // Return the 5 nearest centers
// //     ]);

// //     res.json(nearestCarCenters);
// //   } catch (error) {
// //     res.status(500).json({
// //       message: "Error finding nearest car centers",
// //       error: error.message,
// //     });
// //   }
// // };

// // exports.addCarCenter = async (req, res) => {
// //   try {
// //     const { name, address, latitude, longitude, phone, website } = req.body;

// //     const newCarCenter = new CarCenter({
// //       name,
// //       address,
// //       location: {
// //         type: "Point",
// //         coordinates: [longitude, latitude],
// //       },
// //       phone,
// //       website,
// //     });

// //     await newCarCenter.save();
// //     res.status(201).json(newCarCenter);
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Error adding car center", error: error.message });
// //   }
// // };
// // //////////////////////////////////////////////////////////////

// const MaintenanceCenter = require("../models/CarCenter");

// // ... (previous controller functions)

// exports.addMaintenanceCenter = async (req, res) => {
//   try {
//     const {
//       name,
//       address,
//       latitude,
//       longitude,
//       phone,
//       website,
//       services,
//       specializations,
//       openingHours,
//     } = req.body;

//     const newMaintenanceCenter = new MaintenanceCenter({
//       name,
//       address,
//       location: {
//         type: "Point",
//         coordinates: [longitude, latitude],
//       },
//       phone,
//       website,
//       services,
//       specializations,
//       openingHours,
//     });

//     await newMaintenanceCenter.save();
//     res.status(201).json(newMaintenanceCenter);
//   } catch (error) {
//     res.status(500).json({
//       message: "Error adding maintenance center",
//       error: error.message,
//     });
//   }
// };

// exports.getNearestMaintenanceCenters = async (req, res) => {
//   try {
//     const { latitude, longitude } = req.query;

//     if (!latitude || !longitude) {
//       return res
//         .status(400)
//         .json({ message: "Latitude and longitude are required" });
//     }

//     const nearestMaintenanceCenters = await MaintenanceCenter.aggregate([
//       {
//         $geoNear: {
//           near: {
//             type: "Point",
//             coordinates: [parseFloat(longitude), parseFloat(latitude)],
//           },
//           distanceField: "distance",
//           spherical: true,
//           maxDistance: 50000, // 50km radius
//         },
//       },
//       { $limit: 5 }, // Return the 5 nearest centers
//     ]);

//     res.json(nearestMaintenanceCenters);
//   } catch (error) {
//     res.status(500).json({
//       message: "Error finding nearest maintenance centers",
//       error: error.message,
//     });
//   }
// };
// //////////

// exports.getNearestCarCenters = async (req, res) => {
//   try {
//     const { latitude, longitude } = req.query;

//     if (!latitude || !longitude) {
//       return res
//         .status(400)
//         .json({ message: "Latitude and longitude are required" });
//     }

//     const nearestCarCenters = await CarCenter.aggregate([
//       {
//         $geoNear: {
//           near: {
//             type: "Point",
//             coordinates: [parseFloat(longitude), parseFloat(latitude)],
//           },
//           distanceField: "distance",
//           spherical: true,
//           maxDistance: 50000, // 50km radius
//         },
//       },
//       { $limit: 5 }, // Return the 5 nearest centers
//     ]);

//     res.json(nearestCarCenters);
//   } catch (error) {
//     res.status(500).json({
//       message: "Error finding nearest car centers",
//       error: error.message,
//     });
//   }
// };

// exports.addCarCenter = async (req, res) => {
//   try {
//     const { name, address, latitude, longitude, phone, website } = req.body;

//     const newCarCenter = new CarCenter({
//       name,
//       address,
//       location: {
//         type: "Point",
//         coordinates: [longitude, latitude],
//       },
//       phone,
//       website,
//     });

//     await newCarCenter.save();
//     res.status(201).json(newCarCenter);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error adding car center", error: error.message });
//   }
// };
// ////////////////////////////////
const CarCenter = require("../models/shopOwner");

exports.getNearestCarCenters = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ message: "Latitude and longitude are required" });
    }

    console.log(
      `Searching for centers near latitude: ${latitude}, longitude: ${longitude}`
    );

    const nearestCarCenters = await CarCenter.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          distanceField: "distance",
          spherical: true,
          maxDistance: 50000, // 50km radius
        },
      },
      { $limit: 5 }, // Return the 5 nearest centers
    ]);

    console.log(`Found ${nearestCarCenters.length} centers`);

    res.json(nearestCarCenters);
  } catch (error) {
    console.error("Error in getNearestCarCenters:", error);
    next(error);
  }
};

exports.addCarCenter = async (req, res, next) => {
  try {
    const { name, address, latitude, longitude, phone, website } = req.body;

    const newCarCenter = new CarCenter({
      name,
      address,
      location: {
        type: "Point",
        coordinates: [parseFloat(longitude), parseFloat(latitude)],
      },
      phone,
      website,
    });

    await newCarCenter.save();
    res.status(201).json(newCarCenter);
  } catch (error) {
    console.error("Error in addCarCenter:", error);
    next(error);
  }
};

///

exports.addMaintenanceCenter = async (req, res) => {
  try {
    const {
      name,
      address,
      latitude,
      longitude,
      phone,
      website,
      services,
      specializations,
      openingHours,
    } = req.body;

    const newMaintenanceCenter = new MaintenanceCenter({
      name,
      address,
      location: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
      phone,
      website,
      services,
      specializations,
      openingHours,
    });

    await newMaintenanceCenter.save();
    res.status(201).json(newMaintenanceCenter);
  } catch (error) {
    res.status(500).json({
      message: "Error adding maintenance center",
      error: error.message,
    });
  }
};
