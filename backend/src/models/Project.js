import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
    },
    tags: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      default: "",
    },
    imageId: {
      type: String,
      default: "",
    },
    liveUrl: {
      type: String,
      default: "",
      trim: true,
    },
    githubUrl: {
      type: String,
      default: "",
      trim: true,
    },
    featured: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Virtual for compatibility if frontend references `id`
projectSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
projectSchema.set("toJSON", { virtuals: true });
projectSchema.set("toObject", { virtuals: true });

export const Project = mongoose.model("Project", projectSchema);
