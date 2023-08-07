import { type NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user with the provided email and password. If the user with the given email already exists, it returns a 400 Bad Request response.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the new user.
 *               password:
 *                 type: string
 *                 description: The password of the new user.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully. Returns a success message in the response.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message indicating that the user was created successfully.
 *                 success:
 *                   type: boolean
 *                   description: A boolean indicating the success of the user creation operation.
 *       400:
 *         description: Bad Request. Returns an error message if the user with the provided email already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message indicating the reason for the bad request.
 *       500:
 *         description: Internal Server Error. Returns an error message if something went wrong during the user creation process.
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

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
      },
      { status: 201 }
    );
  } catch (err) {
    const error = err as { message: string; status: number };
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
