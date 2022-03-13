import mongoose from 'mongoose';
const { Schema } = mongoose;

const Contact = new Schema(
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

export const User = new Schema(
  {
    name: String,
    surname: String,
    username: String,
    email: { type: String, unique: true, required: true, sparse: true },
    phone: { type: Number, unique: true, required: true, sparse: true },
    contacts: [Contact],
    password: String,
    date_of_birth: Date,
    created_at: Date,
    updated_at: Date,
  },
  {
    collection: 'users',
    versionKey: false,
    _id: false,
    id: true,
  },
);
