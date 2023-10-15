import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const id = params.id;

    const tasks = await prisma.user.findUnique({
      where: {
        id: Number(id)
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const id = params.id;

    const tasks = await prisma.user.delete({
      where: {
        id: Number(id)
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
};

export const PUT = async (req, { params }) => {
  try {
    const id = params.id;

    const { name, email } = await req.json();

    const tasks = await prisma.user.update({
      where: {
        id: Number(id)
      },
      data: {
        name,
        email
      }
    });

    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
};