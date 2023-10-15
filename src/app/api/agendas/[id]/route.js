import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {

  try {
    const id = params.id;

    const citaId = await prisma.cita.findUnique({
      where: {
        id: parseInt(id)
      }
    })

    return NextResponse.json(citaId)

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404
    })
  }
}

export const DELETE = async (req, {params}) => {

  try {
    const id = params.id;

    await prisma.cita.delete({
      where: {
        id: parseInt(id)
      }
    })

    return NextResponse.json({message: 'deleted successfully'})

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404
    })
  }
}

export const PUT = async (req, { params }) => {
  try {
    const id = params.id;

    const { name, fecha, hora } = await req.json();

    const citas = await prisma.cita.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name,
        fecha,
        hora,
      }
    });

    return NextResponse.json(citas);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
};