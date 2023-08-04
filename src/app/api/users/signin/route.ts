import { type NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest): Promise<
  | NextResponse<{
      message: string;
      success: boolean;
    }>
  | NextResponse<{
      error: unknown;
    }>
> {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const tokenData = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET as string, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (err) {
    const error = err as { message: string; status: number };
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
