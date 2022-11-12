const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const fs = require('fs');

const Hostel = require('../../models/hostelModel');
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

const hostels = JSON.parse(
  fs.readFileSync(`${__dirname}/hostel.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Hostel.create(hostels);
    console.log('Data successfully loaded!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Hostel.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
} else {
  console.log(
    `Flag is missing!!!
\tinclude --import to load data
\tinclude --delete to empty data`
  );

  process.exit();
}
