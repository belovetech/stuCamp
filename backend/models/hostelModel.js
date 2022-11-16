const mongoose = require('mongoose');
const slugify = require('slugify');

// Define hostel schema
const hostelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A hostel must have a name'],
    unique: true,
    trim: true,
    minlength: [10, 'A hostel name must be at leats 10 charcaters'],
    maxlength: [40, 'A hostel name must not be longer than 40 characters'],
  },
  type: {
    type: String,
    required: [true, 'A hostel must have a type'],
    trim: true,
    enum: {
      values: ['self-contain', 'single-room', 'apartment'],
      message:
        'A hostel type can either be: self-contain, single-room, or apartment',
    },
  },
  ratingsAverage: {
    type: Number,
    required: [true, 'A hostel must have a rating average'],
    min: [1, 'A hostel rating must above 1.0'],
    max: [5, 'A hostel rating must below 5.0 '],
  },
  price: {
    type: Number,
    required: [true, 'A hostel must have a price'],
  },
  roomsAvailable: {
    type: Number,
    required: [true, 'A hostel must have avaialable room for rent'],
  },
  closeBy: {
    type: Boolean,
    required: [true, 'A hostel must identify close by or not'],
  },
  summary: {
    type: String,
    required: [true, 'A hostel must have a summary'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'A hostel must have a description'],
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A hostel must have a cover images'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  slug: String,
});

hostelSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Define Hostel model
const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;
