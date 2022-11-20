const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review canot be empty'],
    },
    rating: {
      type: Number,
      required: [true, 'Review must have a rating'],
      min: [1, 'Review rating must above 1.0'],
      max: [5, 'Review rating must below 5.0 '],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    hostel: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hostel',
      required: [true, 'Review must belong to a hostel'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  //   this.populate({
  //     path: 'hostel',
  //     select: 'name',
  //   }).populate({
  //     path: 'user',
  //     select: 'name image',
  //   });
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
