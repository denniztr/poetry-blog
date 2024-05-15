import prisma from '@/app/libs/prismadb';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      access,
      author,
      authorship,
      characters,
      description,
      fandom,
      group,
      link,
      notes,
      rating,
      relationships,
      tags,
      title,
      type
    } = body;

    const publication = await prisma.publication.create({
      data: {
        title,
        authorship,
        author,
        link,
        type,
        fandom,
        group,
        characters,
        rating,
        relationships,
        tags,
        description,
        notes,
        access
      }
    });


    return NextResponse.json(publication, { status: 201 });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }

}