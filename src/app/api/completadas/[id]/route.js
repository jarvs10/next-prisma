import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server"

export const PUT = async (req, {params}) => {

  try {
    const id = params.id

    const update = await prisma.cita.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado: true
      }
    })

    return NextResponse.json(update);

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404
    });
  }  
}