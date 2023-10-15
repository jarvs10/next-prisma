import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const tasks = await prisma.user.findMany();

    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
};

export const POST = async (req) => {
  try {
    const { name, email } = await req.json();

    const crateTasks = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return NextResponse.json(crateTasks);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
};
