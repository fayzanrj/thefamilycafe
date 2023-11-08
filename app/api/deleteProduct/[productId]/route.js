import prisma from "@/app/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    // GETTING HEADERS
    const headersList = headers();
    const referer = headersList.get("api_key");

    // CHECKING IF API KEY MATCHES
    if (referer !== process.env.API_KEY) {
      return NextResponse.json(
        {
          msg: "Not authorized",
        },
        { status: 401 }
      );
    }

    const { productId } = params;

    // CHECKING IF PRODUCT EXISTS
    const productExists = await prisma.product.findUnique({
      where: { productId: productId },
    });

    // IF PRODUCT DOES NOT EXIST
    if (!productExists) {
      return NextResponse.json(
        { msg: "No product found with this product ID" },
        { status: 400 }
      );
    }

    // DELETING PRODUCT
    const product = await prisma.product.delete({
      where: { productId: productId },
    });
    
    // SENDING BACK SUCCESS RESPONSE AND MESSAGE
    return NextResponse.json(
      { msg: `${productExists.title} has been deleted` },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        msg: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
