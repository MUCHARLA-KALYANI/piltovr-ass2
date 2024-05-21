import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be larger than 2 characters"],
    maxlength: [50, "Name must be lesser than 50 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  birth: {
    type: String,
    required: [true, "Birth date is required"]
  },
  course: {
    type: String,
    required: [true, "Course is required"]
  },
  additional: {
    type: String,
    required: [true, "Info is required"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
export default Student;