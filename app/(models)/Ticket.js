import mongoose, { Schema } from "mongoose";
import { global } from "styled-jsx/css";
import PriorityDisplay from "../(components)/PriorityDisplay";

mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
