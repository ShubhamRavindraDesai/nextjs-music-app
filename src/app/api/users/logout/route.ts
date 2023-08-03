import { NextResponse } from "next/server";

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
