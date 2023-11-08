import prisma from "@/app/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req) => {
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

    const {
      productId,
      title,
      price,
      category,
      desc,
      weight,
      img,
      isAvailable,
      canPickIn,
    } = await req.json();


    // CHECKING IF PRODUCT WITH SAME ID EXISTS
    const productExists = await prisma.product.findUnique({
      where: { productId: productId },
    });

    // IF PRODUCT ALREADY EXISTS
    if (productExists) {
      return NextResponse.json(
        {
          msg: "Product with this ID already exists",
        },
        { status: 400 }
      );
    }

    // CREATING NEW PRODUCT
    const product = await prisma.product.create({
      data: {
        productId: productId,
        title: title,
        price: price,
        category: category,
        desc: desc,
        weight: weight,
        img: img,
        isAvailable: isAvailable,
        canPickIn: canPickIn,
      },
    });

    // IF PRODUCT CREATION FAILS
    if (!product) {
      return NextResponse.json(
        {
          msg: "Internal Server Error",
        },
        { status: 500 }
      );
    }

    // SENDING BACK SUCCESS RESPONSE AND MESSAGE
    return NextResponse.json(
      {
        msg: `${product.title} has been added to ${product.category} category. List will be updated in a few minutes`,
        product: product,
      },
      { status: 201 }
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
