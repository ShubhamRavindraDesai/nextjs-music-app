import { type NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest): Promise<
  | NextResponse<{
      message: string;
      success: boolean;
      newUser: unknown;
    }>
  | NextResponse<{
      error: unknown;
    }>
> {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // check if user already exists
    const prisma = new PrismaClient();
    const user = await prisma.user.findMany({
      where: {
        email,
      },
    });

    if (user?.length) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        newUser,
      },
      { status: 201 }
    );
  } catch (err) {
    const error = err as { message: string; status: number };
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
