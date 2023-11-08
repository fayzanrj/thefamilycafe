import prisma from "@/app/db";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export const GET = async (req, { params }) => {
  try {
    // GETTING HEADERS
    const headersList = headers();
    const referer = headersList.get("api_key");

    // // CHECKING IF API KEY MATCHES
    if (referer !== process.env.API_KEY) {
      return NextResponse.json(
        {
          msg: "Not authorized",
        },
        { status: 401 }
      );
    }
    
    // SEARCHING PRODUCTS BY CATEGORY AS GIVEN IN PARAMS
    const products = await prisma.product.findMany({
      where: { category: params.category },
    });

    // IF NO PRODUCT FOUND
    if (!products) {
      return NextResponse.json(
        {
          message: "No Products found",
        },
        { status: 404 }
      );
    }

    // SENDING BACK PRODUCTS
    return NextResponse.json({ products }, { status: 200 });
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
