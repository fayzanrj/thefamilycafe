import prisma from "@/app/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
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

    const { data } = await req.json();

    // CHECKING IF PRODUCT EXISTS
    const productExists = await prisma.product.findUnique({
      where: { productId: data.productId },
    });

    // IF PRODUCT DOES NOT EXIST
    if (!productExists) {
      return NextResponse.json(
        { msg: "No product found with this product ID" },
        { status: 400 }
      );
    }

    // UPDATING PRODUCT
    const product = await prisma.product.update({
      where: { productId: data.productId },
      data: data,
    });

    // SENDING BACK SUCCESS RESPONSE AND MESSAGE
    return NextResponse.json(
      { msg: `${productExists.title} has been updated` },
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
