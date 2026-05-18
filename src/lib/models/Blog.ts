import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema(
  {
    title: String,
    slug:      { type: String, required: true, unique: true },
    cat: String,
    excerpt: String,
    body: String,
    emoji: String,
    readTime: Number,
    image: String,
    metaTitle: String,
    metaDesc: String,
    keywords: String,
    date: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);