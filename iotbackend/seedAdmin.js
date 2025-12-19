const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');
const bcrypt = require('bcryptjs');

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    const adminExists = await Admin.findOne({ username: 'admin' });
    if (adminExists) {
      await Admin.deleteOne({ username: 'admin' });
      console.log('Existing admin removed');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const admin = new Admin({
      username: 'admin',
      password: hashedPassword
    });

    await admin.save();
    console.log('Admin user created successfully');
    console.log('Username: admin');
    console.log('Password: password123');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
