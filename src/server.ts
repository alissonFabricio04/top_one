import express, { Request, Response } from "express";
import { schedule } from "node-cron";
import { prisma } from "./prisma";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/list/today", async (req: Request, res: Response) => {
  const now = new Date()
  const yesterday = new Date()
  yesterday.setDate(now.getDate() - 1)

  const atividades = await prisma.atividade.findMany({
    where: { 
      date: { 
        lte: now,
        gte: yesterday,
      }
    }
  })

  // const atividades = await prisma.atividade.count()

  return res.json(atividades)
})

schedule("0 0 5 * * *", () => {
  console.log("executou a cron job")
})

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})