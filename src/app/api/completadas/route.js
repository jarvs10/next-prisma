import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const completadas = await prisma.cita.findMany({
      where: {
        estado: true
      }
    });

    return NextResponse.json(completadas);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
};