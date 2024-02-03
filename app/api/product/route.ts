import  {getCurrentUser}  from "@/actions/GetCurrentUser";
import prisma from "@/libs/prismadb"
import { NextRequest, NextResponse } from "next/server"

// 8:40;
export async function POST(request : Request) {
    const currentUser = await getCurrentUser()
    const body = await request.json();
    const {name, description, price, brand, category, inStock, images} = body


    const product = await prisma.product.create({
        data : {
            name, 
            description, 
            brand,
             category, 
             inStock,
              images,
            price: parseFloat(price)
        }
    })

      return  NextResponse.json(product);
}
