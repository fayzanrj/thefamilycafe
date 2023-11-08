import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export const GET = async (req, { params }) => {
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
    const searchQuery = await params.query;

    // SEARCHING PRODUCTS BY SEARCH QUERY
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { productId: { contains: searchQuery, mode: "insensitive" } },
          { title: { contains: searchQuery, mode: "insensitive" } },
        ],
      },
    });

    // SENDING BACK PRODUCTS ARRAY
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
