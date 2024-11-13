// const Cart = require("../models/cart");

// exports.addToCart = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
//     let cart = await Cart.findOne();

//     if (!cart) {
//       cart = new Cart({ items: [] });
//     }

//     const existingItem = cart.items.find(
//       (item) => item.productId.toString() === productId
//     );

//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       cart.items.push({ productId, quantity });
//     }

//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding item to cart", error });
//   }
// };

// exports.updateCartItem = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
//     const cart = await Cart.findOne();

//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     const item = cart.items.find(
//       (item) => item.productId.toString() === productId
//     );

//     if (!item) {
//       return res.status(404).json({ message: "Item not found in cart" });
//     }

//     item.quantity = quantity;
//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating cart item", error });
//   }
// };

// exports.removeFromCart = async (req, res) => {
//   try {
//     const { itemId } = req.params;
//     const cart = await Cart.findOne();

//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error removing item from cart", error });
//   }
// };

// exports.getCart = async (req, res) => {
//   try {
//     const cart = await Cart.findOne().populate("items.productId");
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching cart", error });
//   }
// };
// ////////////////////
/////////////////////////////////////////////////////

// const Cart = require("../models/cart");

// exports.addToCart = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
//     const userId = req.user._id; // Assuming you have user authentication middleware

//     let cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       cart = new Cart({ user: userId, items: [] });
//     }

//     const existingItem = cart.items.find(
//       (item) => item.productId.toString() === productId
//     );
//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       cart.items.push({ productId, quantity });
//     }

//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding item to cart", error });
//   }
// };

// exports.updateCartItem = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
//     const userId = req.user._id;

//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     const item = cart.items.find(
//       (item) => item.productId.toString() === productId
//     );
//     if (!item) {
//       return res.status(404).json({ message: "Item not found in cart" });
//     }

//     item.quantity = quantity;
//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating cart item", error });
//   }
// };

// exports.removeFromCart = async (req, res) => {
//   try {
//     const { itemId } = req.params;
//     const userId = req.user._id;

//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error removing item from cart", error });
//   }
// };

// exports.getCart = async (req, res) => {
//   try {
//     const userId = req.user._id;

//     const cart = await Cart.findOne({ user: userId }).populate(
//       "items.productId"
//     );
//     if (!cart) {
//       return res.status(200).json({ items: [] }); // Return an empty cart if not found
//     }
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching cart", error });
//   }
// };
// ///////////////////////////
// const Cart = require("../models/cart");

// exports.addToCart = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
//     const userId = req.user._id; // Assuming you have user authentication middleware

//     let cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       cart = new Cart({ user: userId, items: [] });
//     }

//     const existingItem = cart.items.find(
//       (item) => item.productId.toString() === productId
//     );
//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       cart.items.push({ productId, quantity });
//     }

//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding item to cart", error });
//   }
// };

// exports.updateCartItem = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
//     const userId = req.user._id;

//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     const item = cart.items.find(
//       (item) => item.productId.toString() === productId
//     );
//     if (!item) {
//       return res.status(404).json({ message: "Item not found in cart" });
//     }

//     item.quantity = quantity;
//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating cart item", error });
//   }
// };

// exports.removeFromCart = async (req, res) => {
//   try {
//     const { itemId } = req.params;
//     const userId = req.user._id;

//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error removing item from cart", error });
//   }
// };

// exports.getCart = async (req, res) => {
//   try {
//     const userId = req.user._id;

//     const cart = await Cart.findOne({ user: userId }).populate(
//       "items.productId"
//     );
//     if (!cart) {
//       return res.status(200).json({ items: [] }); // Return an empty cart if not found
//     }
//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching cart", error });
//   }
// };
/////////////////////جديييييد

const Cart = require("../models/cart");

const cartController = {
  addToCart: async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      const userId = req.user._id;

      let cart = await Cart.findOne({ user: userId });
      if (!cart) {
        cart = new Cart({ user: userId, items: [] });
      }

      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }

      await cart.save();
      const populatedCart = await cart.populate("items.productId");
      res.status(200).json(populatedCart);
    } catch (error) {
      console.error("Add to cart error:", error);
      res.status(500).json({ message: "Error adding item to cart" });
    }
  },

  updateCartItem: async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      const userId = req.user._id;

      const cart = await Cart.findOne({ user: userId });
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      const item = cart.items.find(
        (item) => item.productId.toString() === productId
      );
      if (!item) {
        return res.status(404).json({ message: "Item not found in cart" });
      }

      item.quantity = quantity;
      await cart.save();
      const populatedCart = await cart.populate("items.productId");
      res.status(200).json(populatedCart);
    } catch (error) {
      console.error("Update cart error:", error);
      res.status(500).json({ message: "Error updating cart item" });
    }
  },

  removeFromCart: async (req, res) => {
    try {
      const { itemId } = req.params;
      const userId = req.user._id;

      const cart = await Cart.findOne({ user: userId });
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
      await cart.save();
      const populatedCart = await cart.populate("items.productId");
      res.status(200).json(populatedCart);
    } catch (error) {
      console.error("Remove from cart error:", error);
      res.status(500).json({ message: "Error removing item from cart" });
    }
  },

  getCart: async (req, res) => {
    try {
      const userId = req.user._id;
      let cart = await Cart.findOne({ user: userId }).populate("items.productId");
      
      if (!cart) {
        cart = await Cart.create({ user: userId, items: [] });
      }
      
      res.status(200).json(cart);
    } catch (error) {
      console.error("Get cart error:", error);
      res.status(500).json({ message: "Error fetching cart" });
    }
  },

  clearCart: async (req, res) => {
    try {
      const userId = req.user._id;
      
      const cart = await Cart.findOne({ user: userId });
      if (!cart) {
        return res.status(200).json({ message: "Cart is already empty" });
      }

      cart.items = [];
      await cart.save();
      
      res.status(200).json({ message: "Cart cleared successfully", cart });
    } catch (error) {
      console.error("Clear cart error:", error);
      res.status(500).json({ message: "Error clearing cart" });
    }
  }
};

module.exports = cartController;