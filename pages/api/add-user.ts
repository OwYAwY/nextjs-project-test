// pages/api/add-user.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { tgId, tgNick, name, isAdmin } = req.body;

  if (!tgId) {
    return res.status(400).json({ error: "tgId обязателен" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        tgId: BigInt(tgId),
        tgNick: tgNick || null,
        name: name || null,
        isAdmin: isAdmin ?? false,
      },
    });

    res.status(200).json({
      ...user,
      tgId: user.tgId.toString(),
    });
  } catch (error) {
    console.error(error);

    if (
      error instanceof Error &&
      error.message.includes("Unique constraint failed")
    ) {
      return res
        .status(409)
        .json({ error: "Пользователь уже существует (tgId)" });
    }

    res.status(500).json({ error: "Не удалось создать пользователя" });
  }
}
