import mongoose from 'mongoose';
import { Contact } from './contact.schema';
const { Schema } = mongoose;

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
