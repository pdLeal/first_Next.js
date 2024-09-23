import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const redBody = await request.json();
        const { email, password } = redBody;
        console.log(redBody)

        // checks if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User doed not exist" }, { status: 400 });
        }

        //checks if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({error: "Invalid password"}, {status: 400});
        }

        // creates token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // creates token
        // const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN, {expiresIn: "1h"})

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}