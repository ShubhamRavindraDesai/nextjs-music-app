import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/users/logout:
 *   get:
 *     summary: Logout user
 *     description: Logout the currently logged-in user by clearing the authentication token cookie.
 *     responses:
 *       200:
 *         description: Successful logout. The authentication token cookie is cleared.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message indicating that the logout was successful.
 *                 success:
 *                   type: boolean
 *                   description: A boolean indicating the success of the logout operation.
 *       500:
 *         description: Internal Server Error. Returns an error message if something went wrong during the logout process.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message indicating the reason for the server error.
 */

export async function GET(): Promise<
  | NextResponse<{
      message: string;
      success: boolean;
    }>
  | NextResponse<{
      error: unknown;
    }>
> {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (err) {
    const error = err as { message: string; status: number };
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
