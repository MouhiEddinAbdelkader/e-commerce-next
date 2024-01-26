import bcrypt from "bcrypt"
import prisma from "@/libs/prismadb"
import { NextRequest } from "next/server"


export async function POST(request : Request) {
    const body = await request.json();
    const {name, email, password} = body

    
}
