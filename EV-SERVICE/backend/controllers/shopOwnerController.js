// const ShopOwner = require("../models/shopOwner");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.registerShopOwner = async (req, res) => {
//   try {
//     const { ownerName, shopPhone, shopLocation, email, password } = req.body;
//     const licenseCertificate = req.file ? req.file.path : null;

//     if (!licenseCertificate) {
//       return res
//         .status(400)
//         .json({ message: "License certificate is required" });
//     }

//     // Check if email already exists
//     const existingOwner = await ShopOwner.findOne({ email });
//     if (existingOwner) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new shop owner
//     const newShopOwner = new ShopOwner({
//       ownerName,
//       shopPhone,
//       shopLocation,
//       email,
//       password: hashedPassword,
//       licenseCertificate,
//     });

//     await newShopOwner.save();

//     res.status(201).json({
//       message: "Shop owner registered successfully. Awaiting approval.",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
// exports.loginShopOwner = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if shop owner exists
//     const shopOwner = await ShopOwner.findOne({ email });
//     if (!shopOwner) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, shopOwner.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Check if the account is approved
//     if (!shopOwner.isApproved) {
//       return res.status(403).json({
//         message:
//           "Your account is not yet approved. Please wait for admin approval.",
//       });
//     }

//     // Create and sign a token
//     const token = jwt.sign(
//       { id: shopOwner._id, isShopOwner: true },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.json({
//       token,
//       shopOwner: {
//         id: shopOwner._id,
//         ownerName: shopOwner.ownerName,
//         email: shopOwner.email,
//         isApproved: shopOwner.isApproved,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
// /////////////////
// const ShopOwner = require("../models/shopOwner");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.registerShopOwner = async (req, res) => {
//   try {
//     const { ownerName, shopPhone, shopLocation, email, password } = req.body;
//     const licenseCertificate = req.file ? req.file.path : null;

//     if (!licenseCertificate) {
//       return res
//         .status(400)
//         .json({ message: "License certificate is required" });
//     }

//     // Check if email already exists
//     const existingOwner = await ShopOwner.findOne({ email });
//     if (existingOwner) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new shop owner
//     const newShopOwner = new ShopOwner({
//       ownerName,
//       shopPhone,
//       shopLocation,
//       email,
//       password: hashedPassword,
//       licenseCertificate,
//       isApproved: false, // Ensure this is set to false by default
//     });

//     await newShopOwner.save();

//     res.status(201).json({
//       message: "Shop owner registered successfully. Awaiting approval.",
//     });
//   } catch (error) {
//     console.error("Registration error:", error);
//     res.status(500).json({ message: "Server error", error: error.toString() });
//   }
// };

// exports.loginShopOwner = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if shop owner exists
//     const shopOwner = await ShopOwner.findOne({ email });
//     if (!shopOwner) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     console.log("Shop Owner found:", JSON.stringify(shopOwner, null, 2));
//     console.log("isApproved value:", shopOwner.isApproved);
//     console.log("isApproved type:", typeof shopOwner.isApproved);

//     // Check password
//     const isMatch = await bcrypt.compare(password, shopOwner.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Check if the account is approved
//     if (shopOwner.isApproved === false) {
//       return res.status(403).json({
//         message:
//           "Your account is not yet approved. Please wait for admin approval.",
//         debug: {
//           isApproved: shopOwner.isApproved,
//           isApprovedType: typeof shopOwner.isApproved,
//         },
//       });
//     }

//     // Create and sign a token
//     const token = jwt.sign(
//       { id: shopOwner._id, isShopOwner: true },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.json({
//       token,
//       shopOwner: {
//         id: shopOwner._id,
//         ownerName: shopOwner.ownerName,
//         email: shopOwner.email,
//         isApproved: shopOwner.isApproved,
//       },
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error", error: error.toString() });
//   }
// };
// ///////////////
// const ShopOwner = require("../models/shopOwner");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.registerShopOwner = async (req, res) => {
//   try {
//     const { ownerName, shopPhone, shopLocation, email, password } = req.body;
//     const licenseCertificate = req.file ? req.file.path : null;

//     if (!licenseCertificate) {
//       return res
//         .status(400)
//         .json({ message: "License certificate is required" });
//     }

//     // Check if email already exists
//     const existingOwner = await ShopOwner.findOne({ email });
//     if (existingOwner) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new shop owner
//     const newShopOwner = new ShopOwner({
//       ownerName,
//       shopPhone,
//       shopLocation,
//       email,
//       password: hashedPassword,
//       licenseCertificate,
//       isApproved: false, // Ensure this is set to false by default
//     });

//     await newShopOwner.save();

//     res.status(201).json({
//       message: "Shop owner registered successfully. Awaiting approval.",
//     });
//   } catch (error) {
//     console.error("Registration error:", error);
//     res.status(500).json({ message: "Server error", error: error.toString() });
//   }
// };

// exports.loginShopOwner = async (req, res) => {
//   try {
//     console.log("Login attempt for:", req.body.email);
//     const { email, password } = req.body;

//     // Check if shop owner exists
//     const shopOwner = await ShopOwner.findOne({ email });
//     if (!shopOwner) {
//       console.log("Shop owner not found:", email);
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     console.log("Shop Owner found:", JSON.stringify(shopOwner, null, 2));

//     // Check password
//     const isMatch = await bcrypt.compare(password, shopOwner.password);
//     console.log("Password match:", isMatch);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Check if the account is approved
//     console.log("isApproved value:", shopOwner.isApproved);
//     console.log("isApproved type:", typeof shopOwner.isApproved);
//     if (shopOwner.isApproved !== true) {
//       console.log("Account not approved");
//       return res.status(403).json({
//         message:
//           "Your account is not yet approved. Please wait for admin approval.",
//         debug: {
//           isApproved: shopOwner.isApproved,
//           isApprovedType: typeof shopOwner.isApproved,
//         },
//       });
//     }

//     console.log("Account is approved. Proceeding with login.");

//     // Create and sign a token
//     const token = jwt.sign(
//       { id: shopOwner._id, isShopOwner: true },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     console.log("Token created successfully");

//     const response = {
//       token,
//       shopOwner: {
//         id: shopOwner._id,
//         ownerName: shopOwner.ownerName,
//         email: shopOwner.email,
//         isApproved: shopOwner.isApproved,
//       },
//     };

//     console.log("Sending response:", JSON.stringify(response, null, 2));

//     res.json(response);
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error", error: error.toString() });
//   }
// };
// ////////////////////
// const ShopOwner = require("../models/shopOwner");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.registerShopOwner = async (req, res) => {
//   try {
//     const { ownerName, shopPhone, shopLocation, email, password } = req.body;
//     const licenseCertificate = req.file ? req.file.path : null;

//     if (!licenseCertificate) {
//       return res
//         .status(400)
//         .json({ message: "License certificate is required" });
//     }

//     // Check if email already exists
//     const existingOwner = await ShopOwner.findOne({ email });
//     if (existingOwner) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new shop owner
//     const newShopOwner = new ShopOwner({
//       ownerName,
//       shopPhone,
//       shopLocation,
//       email,
//       password: hashedPassword,
//       licenseCertificate,
//       isApproved: false, // Ensure this is set to false by default
//     });

//     await newShopOwner.save();

//     res.status(201).json({
//       message: "Shop owner registered successfully. Awaiting approval.",
//     });
//   } catch (error) {
//     console.error("Registration error:", error);
//     res.status(500).json({ message: "Server error", error: error.toString() });
//   }
// };

// exports.loginShopOwner = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if shop owner exists
//     const shopOwner = await ShopOwner.findOne({ email });
//     if (!shopOwner) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     console.log("Shop Owner found:", JSON.stringify(shopOwner, null, 2));

//     // Check password
//     const isMatch = await bcrypt.compare(password, shopOwner.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Check if the account is approved
//     if (shopOwner.isApproved !== true) {
//       console.log(
//         "Account not approved. isApproved value:",
//         shopOwner.isApproved
//       );
//       return res.status(403).json({
//         message:
//           "Your account is not yet approved. Please wait for admin approval.",
//         debug: {
//           isApproved: shopOwner.isApproved,
//           isApprovedType: typeof shopOwner.isApproved,
//         },
//       });
//     }

//     console.log("Account is approved. Proceeding with login.");

//     // Create and sign a token
//     const token = jwt.sign(
//       { id: shopOwner._id, isShopOwner: true },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.json({
//       token,
//       shopOwner: {
//         id: shopOwner._id,
//         ownerName: shopOwner.ownerName,
//         email: shopOwner.email,
//         isApproved: shopOwner.isApproved,
//       },
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error", error: error.toString() });
//   }
// };
// ////////////////
// const ShopOwner = require("../models/shopOwner");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.registerShopOwner = async (req, res) => {
//   try {
//     const { ownerName, shopPhone, shopLocation, email, password } = req.body;
//     const licenseCertificate = req.file ? req.file.path : null;

//     if (!licenseCertificate) {
//       return res
//         .status(400)
//         .json({ message: "License certificate is required" });
//     }

//     // Check if email already exists
//     const existingOwner = await ShopOwner.findOne({ email });
//     if (existingOwner) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new shop owner
//     const newShopOwner = new ShopOwner({
//       ownerName,
//       shopPhone,
//       shopLocation,
//       email,
//       password: hashedPassword,
//       licenseCertificate,
//       isApproved: false, // Ensure this is set to false by default
//     });

//     await newShopOwner.save();

//     res.status(201).json({
//       message: "Shop owner registered successfully. Awaiting approval.",
//     });
//   } catch (error) {
//     console.error("Registration error:", error);
//     res.status(500).json({ message: "Server error", error: error.toString() });
//   }
// };

// exports.loginShopOwner = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if shop owner exists
//     const shopOwner = await ShopOwner.findOne({ email });
//     if (!shopOwner) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }
//     console.log("Shop Owner found:", JSON.stringify(shopOwner, null, 2));

//     // Check password
//     const isMatch = await bcrypt.compare(password, shopOwner.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Check if the account is approved
//     if (!shopOwner.isApproved) {
//       console.log(
//         "Account not approved. isApproved value:",
//         shopOwner.isApproved
//       );
//       return res.status(403).json({
//         message:
//           "Your account is not yet approved. Please wait for admin approval.",
//       });
//     }

//     console.log("Account is approved. Proceeding with login.");

//     // Create and sign a token
//     const token = jwt.sign(
//       { id: shopOwner._id, isShopOwner: true },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     // Send the response with isApproved status
//     res.json({
//       token,
//       shopOwner: {
//         id: shopOwner._id,
//         ownerName: shopOwner.ownerName,
//         email: shopOwner.email,
//         isApproved: shopOwner.isApproved,
//       },
//       message: "Login successful",
//       isApproved: true,
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error", error: error.toString() });
//   }
// };
/////////////بالاعلى صحيح /////
const MaintenanceShop = require("../models/shopOwner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerMaintenanceShop = async (req, res) => {
  try {
    const {
      ownerName,
      shopPhone,
      email,
      password,
      name,
      address,
      latitude,
      longitude,
      website,
      services,
      specializations,
      openingHours,
    } = req.body;

    // Check if email already exists
    const existingShop = await MaintenanceShop.findOne({ email });
    if (existingShop) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new maintenance shop
    const newShop = new MaintenanceShop({
      ownerName,
      shopPhone,
      email,
      password: hashedPassword,
      licenseCertificate: req.file ? req.file.path : "",
      name,
      address,
      location: {
        type: "Point",
        coordinates: [parseFloat(longitude), parseFloat(latitude)],
      },
      website,
      services: services.split(",").map((service) => service.trim()),
      specializations: specializations.split(",").map((spec) => spec.trim()),
      openingHours,
    });

    // Save the new shop
    await newShop.save();

    res.status(201).json({
      message: "Maintenance shop registered successfully",
      shopId: newShop._id,
    });
  } catch (error) {
    console.error("Error in registerMaintenanceShop:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
///////////////////

exports.loginShopOwner = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if shop owner exists
    const shopOwner = await MaintenanceShop.findOne({ email });
    if (!shopOwner) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log("Shop Owner found:", JSON.stringify(shopOwner, null, 2));

    // Check password
    const isMatch = await bcrypt.compare(password, shopOwner.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if the account is approved
    if (!shopOwner.isApproved) {
      console.log(
        "Account not approved. isApproved value:",
        shopOwner.isApproved
      );
      return res.status(403).json({
        message:
          "Your account is not yet approved. Please wait for admin approval.",
      });
    }

    console.log("Account is approved. Proceeding with login.");

    // Create and sign a token
    const token = jwt.sign(
      { id: shopOwner._id, isShopOwner: true },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send the response with isApproved status
    res.json({
      token,
      shopOwner: {
        id: shopOwner._id,
        ownerName: shopOwner.ownerName,
        email: shopOwner.email,
        isApproved: shopOwner.isApproved,
      },
      message: "Login successful",
      isApproved: true,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.toString() });
  }
};
