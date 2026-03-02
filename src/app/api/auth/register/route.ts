import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/Data/user";


export async function POST(request: Request) {
  const { email, password } = await request.json();

   try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const userCreated = await db.user.create({
        data: {
            email: email,
            password: hashedPassword,
        },
    });
    
    return NextResponse.json(userCreated);
  } catch (error) {
   
    console.log("Error registering user:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });            
  }
}