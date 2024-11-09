import { NextRequest, NextResponse } from "next/server";
import { user } from "@/repository/user";
import bcrypt from "bcrypt";
export async function POST(request: NextRequest) {
  try {
    // Parse JSON body from the request
    const { username, password } = await request.json();

    const isMatch = await bcrypt.compare(password, user.password);
    if (
      username === user.username &&isMatch
      
    ) {
      return NextResponse.json(
        {
          message: "Username and Password ok !",
        },
        { status: 200 }
      );
    } else {
        console.log(bcrypt.hashSync(password,10),user.password)
        console.log(isMatch)
        return NextResponse.json(
            {
              message: "Username and Password not ok !",
            },
            { status: 401 }
          );
    }
  } catch (error:any) {
    // Handle any errors
    return NextResponse.json(
      { message: "Error submitting form", error: error.message },
      { status: 500 }
    );
  }
}
