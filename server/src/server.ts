import express, { Request, Response } from "express";
import cors from 'cors';
import { schedule } from "node-cron";
import { myRequest } from ".";
import { prisma } from "./prisma";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:5173" }));

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

  return res.json(atividades)
})

schedule("0 50 11 * * *", async () => {
  await prisma.atividade.deleteMany({});
  myRequest().then((e) => console.log("terminou"));
})

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})