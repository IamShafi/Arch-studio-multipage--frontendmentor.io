"use server"

import * as z from "zod";
import { RegisterSchema } from "../../lib/validators";
// import bcrypt from "bcryptjs";
import bcrypt from "bcryptjs";
import { db } from "../../lib/database/db";
import { getUserByEmail } from "../../utils/user";
// zod validation

export const Registration = async (value: z.infer<typeof RegisterSchema>) => {
    console.log(value)
    console.log(RegisterSchema.parse(value))
    const validatedFields = RegisterSchema.parse(value);
    // if backend zod validation fails
    if(!validatedFields){
        return {
            error: "Invalid fields"
        }    
    }

    const {email, password} = value
    const hadshedPassword = await bcrypt.hash(password, 10)

    const existingUser = await getUserByEmail(email)

    
    if(existingUser){
        return {
            error: "User already exists"
        }
    }

    await db.user.create({
        data: {
            email,
            password: hadshedPassword
        }
    })
    // verificatin token email ?
    return {
        success: "User Created!"
    }

    

}