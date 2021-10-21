import prismaClient from "../prisma";

class GetLast3MessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: true,
      },
    });

    //Realizar um select de todas as mensagens e retornado um limite das 3 últimas de forma decrescente
    return messages;
  }
}

export { GetLast3MessagesService };
