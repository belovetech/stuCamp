const dotenv = require('dotenv');
dotenv.config({ path: './.config.env' });
const fs = require('fs');

const Hostel = require('../../models/hostelModel');
const User = require('../../models/userModel');
const Review = require('../../models/reviewModel');
const mongoose = require('mongoose');

// Connect Database
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

let data;
if (process.argv[2] === '--import' && process.argv.length === 5) {
  if (process.argv[4].endsWith('.json')) {
    data = JSON.parse(
      fs.readFileSync(`${__dirname}/${process.argv[4]}`, 'utf-8')
    );
  } else {
    console.log('Filename missing!!! please provide a json file.');
    process.exit(1);
  }
}

const importData = async () => {
  try {
    if (process.argv[3].toLowerCase() === 'hostel') await Hostel.create(data);
    if (process.argv[3].toLowerCase() === 'user')
      await User.create(data, { validateBeforeSave: false });
    if (process.argv[3].toLowerCase() === 'review') await Review.create(data);
    console.log('Data successfully loaded!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    if (process.argv[3].toLowerCase() === 'hostel') await Hostel.deleteMany();
    if (process.argv[3].toLowerCase() === 'user') await User.deleteMany();
    if (process.argv[3].toLowerCase() === 'review') await Review.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import' && process.argv.length === 5) {
  importData();
} else if (process.argv[2] === '--delete' && process.argv.length === 4) {
  deleteData();
} else {
  console.log(
    `Usage: node dev-data/data/importData.js --import Model filename\nUsage: node dev-data/data/importData.js --delete Model`
  );
  process.exit();
}
