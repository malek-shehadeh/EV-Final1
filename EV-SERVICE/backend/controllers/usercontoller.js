// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/users"); // User model
// const Chef = require("../models/chefs"); // Chef model

// exports.register = async (req, res) => {
//   try {
//     const { username, email, password, userType } = req.body;
//     let user;

//     // Check if user exists based on userType
//     if (userType === "customer") {
//       user = await User.findOne({ email });
//     } else if (userType === "chef") {
//       user = await Chef.findOne({ email });
//     } else {
//       return res.status(400).json({ msg: "Invalid user type" });
//     }

//     // If user exists, return an error
//     if (user) {
//       return res.status(400).json({ msg: "User already exists" });
//     }

//     // Create a new user based on userType
//     const newUser =
//       userType === "customer"
//         ? new User({ username, email, password })
//         : new Chef({ username, email, password });

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     newUser.password = await bcrypt.hash(password, salt);

//     // Save the new user
//     await newUser.save();
//     res.status(201).json({ msg: "User registered successfully" });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// // Login function
// exports.login = async (req, res) => {
//   try {
//     const { username, email, password, userType } = req.body;
//     let user;

//     // Find user based on userType and email
//     if (userType === "customer") {
//       user = await User.findOne({ email });
//     } else if (userType === "chef") {
//       user = await Chef.findOne({ email });
//     } else {
//       return res.status(400).json({ msg: "Invalid user type" });
//     }

//     // If user not found, return an error
//     if (!user) {
//       return res.status(400).json({ msg: "Invalid credentials" });
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Invalid credentials" });
//     }

//     // Generate JWT token
//     const payload = { user: { id: user.id } };
//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token, userId: user.id });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.json(users);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// exports.getCurrentUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     if (!user) {
//       return res.status(404).json({ msg: "User not found" });
//     }
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };
// //////////////////ok top old////////////
// const User = require("../models/User");
// const path = require("path");
// const fs = require("fs");

// // Update user profile with image upload
// exports.updateProfile = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = await User.findById(req.user._id);

//     // If a new profile image is uploaded
//     if (req.file) {
//       // Remove old image if exists
//       if (user.profileImage) {
//         fs.unlinkSync(path.join(__dirname, '../uploads', user.profileImage));
//       }

//       user.profileImage = req.file.filename;
//     }

//     if (username) user.username = username;
//     if (email) user.email = email;
//     if (password) user.password = password;

//     await user.save();

//     res.json({ user });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get user profile
// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     res.json({ user });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };
// /////////////ok ok /////
// const User = require("../models/User");
// const path = require("path");
// const fs = require("fs");

// // Update user profile with image upload
// exports.updateProfile = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = await User.findById(req.user._id);

//     // If a new profile image is uploaded
//     if (req.file) {
//       // Remove old image if exists
//       if (user.profileImage) {
//         fs.unlinkSync(path.join(__dirname, "../uploads", user.profileImage));
//       }

//       user.profileImage = req.file.filename;
//     }

//     if (username) user.username = username;
//     if (email) user.email = email;
//     if (password) user.password = password;

//     await user.save();

//     res.json({ user });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get user profile
// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     res.json({ user });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };
// //////////
// const User = require("../models/User");
// const path = require("path");
// const fs = require("fs");

// exports.updateProfile = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = await User.findById(req.user._id);

//     if (req.file) {
//       if (user.profileImage) {
//         const oldImagePath = path.join(
//           __dirname,
//           "../uploads",
//           user.profileImage
//         );
//         if (fs.existsSync(oldImagePath)) {
//           fs.unlinkSync(oldImagePath);
//         }
//       }
//       user.profileImage = req.file.filename;
//     }

//     if (username) user.username = username;
//     if (email) user.email = email;
//     if (password) user.password = password;

//     await user.save();

//     res.json({
//       user: {
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         profileImage: user.profileImage
//           ? `/uploads/${user.profileImage}`
//           : null,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     res.json({
//       user: {
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         profileImage: user.profileImage
//           ? `/uploads/${user.profileImage}`
//           : null,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
// /////////////
// const User = require("../models/User");
// const path = require("path");
// const fs = require("fs");

// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json({
//       user: {
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         profileImage: user.profileImage
//           ? `/uploads/${user.profileImage}`
//           : null,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = await User.findById(req.user._id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (req.file) {
//       if (user.profileImage) {
//         const oldImagePath = path.join(
//           __dirname,
//           "../uploads",
//           user.profileImage
//         );
//         if (fs.existsSync(oldImagePath)) {
//           fs.unlinkSync(oldImagePath);
//         }
//       }
//       user.profileImage = req.file.filename;
//     }

//     if (username) user.username = username;
//     if (email) user.email = email;
//     if (password) user.password = password;

//     await user.save();

//     res.json({
//       user: {
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         profileImage: user.profileImage
//           ? `/uploads/${user.profileImage}`
//           : null,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
//////////////////////////////okok//
const User = require("../models/User");
const path = require("path");
const fs = require("fs");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage
          ? `/uploads/${user.profileImage}`
          : null,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (req.file) {
      if (user.profileImage) {
        const oldImagePath = path.join(
          __dirname,
          "../uploads/",
          user.profileImage
        );
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      user.profileImage = req.file.filename;
    }
    if (username) user.username = username;
    if (email) user.email = email;
    if (password) user.password = password;
    await user.save();
    res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage
          ? `/uploads/${user.profileImage}`
          : null,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
