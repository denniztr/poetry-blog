import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

const getFictionById = async (fictionId: string) => {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser) return null;

    const publication = await prisma.publication.findUnique({
      where: {
        id: fictionId,
      },
    });

    return publication;
  } catch (error: any) {
    return null;
  }
};

export default getFictionById;
