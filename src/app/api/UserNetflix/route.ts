import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export async function POST(req: Request) {

  const user = await currentUser()

  const { profileName, avatarUrl } = await req.json()

  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (!profileName || !avatarUrl) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

 const userCreated = await db.userNetflix.create({
    data: { 
        profileName,
        avatarUrl,
        userId: user.id
    }
  })
 return NextResponse.json(userCreated)
}


export async function DELETE(req: Request) {
  const user = await currentUser();

  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { userIdNetflix } = await req.json();

  if (!userIdNetflix) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  const userDeleted = await db.userNetflix.delete({
    where: {
      id: userIdNetflix, // 🔥 AQUÍ ESTÁ EL FIX
    },
  });

  return NextResponse.json(userDeleted);
}