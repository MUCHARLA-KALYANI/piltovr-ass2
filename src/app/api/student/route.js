import connectDB from "@/app/lib/mongodb";
import Student from "@/app/models/student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, phone, address, birth, course, additional } = await req.json();

  try {
    await connectDB();
    await Student.create({ name, email, phone, address, birth, course, additional });
    return NextResponse.json({ msg: ["details send successfully"], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      
      return NextResponse.json({ msg: [error.message] });
    }
  }
}

export async function GET(){
  await connectDB();
  const students=await Student.find();
  return NextResponse.json({students});

}