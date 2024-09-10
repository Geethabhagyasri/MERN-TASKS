const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/merncrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true, default: 1 }
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  total: { type: Number, default: 0 }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  cart: { type: cartSchema, default: {} }
});

const Product = mongoose.model('Product', productSchema);
const CartItem = mongoose.model('CartItem', cartItemSchema);
const Cart = mongoose.model('Cart', cartSchema);
const User = mongoose.model('User', userSchema);

app.post('/login', [
  body('name').matches(/^[A-Z].*/).withMessage('Name must start with a capital letter'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').isLength({ min: 10, max: 10 }).withMessage('Phone number must be exactly 10 digits')
               .isNumeric().withMessage('Phone number must contain only digits')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, phone } = req.body;
  const user = new User({
    name,
    email,
    phone,
    cart: new Cart() // create a new cart for the user
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    if (err.code === 11000) {
      if (err.keyPattern.email) {
        return res.status(400).json({ message: 'Email already exists' });
      } else if (err.keyPattern.name) {
        return res.status(400).json({ message: 'Name already exists' });
      } else if (err.keyPattern.phone) {
        return res.status(400).json({ message: 'Phone number already exists' });
      }
    }
    res.status(500).json({ message: err.message });
  }
});

app.post('/add-to-cart', [
  body('productId').isMongoId().withMessage('Invalid product ID'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be a positive integer')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { productId, quantity } = req.body;
  const user = req.user; // assume user is authenticated and stored in req.user
  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const cartItem = new CartItem({
    product: product,
    quantity: quantity
  });
  user.cart.items.push(cartItem);
  user.cart.total += product.price * quantity;
  try {
    await user.save();
    res.status(201).json(user.cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});