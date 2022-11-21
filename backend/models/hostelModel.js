const mongoose = require('mongoose');
const slugify = require('slugify');

// Define hostel schema
const hostelSchema = new mongoose.Schema(
  {
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
      default: 4.5,
      required: [true, 'A hostel must have a rating average'],
      min: [1, 'A hostel rating must above 1.0'],
      max: [5, 'A hostel rating must below 5.0 '],
      set: val => Math.round(val * 10) / 10, // 4.666 -> 46.6666 -> 46.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
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
      // required: [true, 'A hostel must have a description'],
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
    tenants: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
    location: {
      type: String,
      trim: true,
      required: [true, 'A hostel must have a location'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// INDEX
hostelSchema.index({ price: 1, type: -1 });
hostelSchema.index({ slug: 1 });

// VIRTUAL POPULATE
hostelSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'hostel',
  localField: '_id',
});

// QUERY MIDDLEWARES
hostelSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// POPULATE
hostelSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'tenants',
    select: '-__v -passwordChangedAt',
  });
  next();
});

// Define Hostel model
const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;
