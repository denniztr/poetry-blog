import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  try {
    const body = await request.json();
    const {
      access,
      authorship,
      characters,
      description,
      fandom,
      group,
      link,
      originalAuthor,
      notes,
      rating,
      relationships,
      tags,
      title,
      type,
    } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const publication = await prisma.publication.create({
      data: {
        title,
        authorship,
        user: {
          connect: {
            id: currentUser.id,
          },
        },
        link,
        originalAuthor,
        type,
        fandom,
        group,
        characters,
        rating,
        relationships,
        tags,
        description,
        notes,
        access,
      },
    });

    await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        publications: {
          connect: {
            id: publication.id,
          },
        },
      },
    });

    return NextResponse.json(publication, { status: 201 });
  } catch (error) {
    console.log(error + 'POSTFICTION_ERROR');
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
