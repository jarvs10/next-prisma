import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const agendas = await prisma.cita.findMany({
      where: {
        estado: false
      }
    });

    return NextResponse.json(agendas);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
};

export const POST = async (req) => {
  try {

    const { cita, fecha, hora, author } = await req.json();

    const createCita = await prisma.cita.create({
      data: {
        cita,
        fecha,
        hora,
        author
      },
    });

    return NextResponse.json(createCita);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
};