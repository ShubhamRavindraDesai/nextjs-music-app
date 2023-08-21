import { type NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/src/app/lib/prisma";

/**
 * @swagger
 * /api/users/signin:
 *   post:
 *     summary: Authenticate user with credentials
 *     description: Authenticates a user based on their email and password. If the credentials are valid, it returns a JWT token in the response for further authentication.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successful login. Returns a JWT token in the response for further authentication.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message indicating that the login was successful.
 *                 success:
 *                   type: boolean
 *                   description: A boolean indicating the success of the login operation.
 *       400:
 *         description: Bad Request. Returns an error message if the provided credentials are invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message indicating the reason for the bad request.
 *       500:
 *         description: Internal Server Error. Returns an error message if something went wrong during the login process.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message indicating the reason for the server error.
 */

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
