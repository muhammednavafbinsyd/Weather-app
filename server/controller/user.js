const asyncHandler = require("express-async-handler");
const userModel = require("../model/usermode");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecretKey = "your-secret-key";
const jwtExpiration = "90d";


exports.createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user with the provided email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ invalid: true, message: "Email already exists" });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user with hashed password
    const newUser = await userModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Send response
    res.json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
});


exports.login = asyncHandler(async (req, res) => {
  const { input1, input2 } = req.body;

  try {
    // Retrieve user from the database
    const userlogin = await userModel.findOne({ email: input1 });
    if (!userlogin) {

      return res.status(404).json({ error: "User not found" });
    }

    // Compare passwords
    const passwordMatch = bcrypt.compare(input2, userlogin.password);
   
    if (passwordMatch) {
      // Generate JWT token
      const payload = {
        userId: userlogin._id,
        email: userlogin.email,
      };
      
     
      const token = jwt.sign(payload, jwtSecretKey, {
        expiresIn: jwtExpiration,
      });

     

      
      const userProfile = {
        id: userlogin._id,
        username: userlogin.name,
        email: userlogin.email,
      };
      
     
      res.status(200).json({
        usertoken: token,
        user: userProfile,
      });
    } else {
      console.log("Invalid password");
      res.status(401).json({ invalid: true, message: "Invalid details" });
    }
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});