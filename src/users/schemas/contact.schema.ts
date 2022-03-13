import mongoose from 'mongoose';
const { Schema } = mongoose;

export const Contact = new Schema(
  {
    id: String,
    name: String,
    surname: String,
    isBlocked: Boolean,
  },
  {
    id: false,
    _id: false,
  }
);