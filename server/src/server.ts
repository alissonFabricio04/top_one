import express, { Request, Response } from "express";
import cors from 'cors';
import { schedule } from "node-cron";
import { myRequest } from ".";
import { prisma } from "./prisma";
import { Atividade } from "@prisma/client";
import { config } from "dotenv";
config();




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: process.env.API_FRONTEND }));

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

  const Backhand: Atividade[] = [];
  const Smash: Atividade[] = [];
  const Forehand: Atividade[] = [];

  const response = atividades.map((item) => {
    function setHours(dt: Date, h: string) {
      let s = /(\d+):(\d+)(.+)/.exec(h);
      dt.setHours(s![3] == " PM" ? 12 + parseInt(s![1], 10) : parseInt(s![1], 10));
      dt.setMinutes(parseInt(s![2], 10));
      // console.log(s![1], s![2], s![3])
      // console.log(s![3] == " PM")
      // console.log(dt)
      // console.log()
      return dt
      
    }

    if (item.area == "BACKHAND") {
      Backhand.push(item)
    }
    else if (item.area == "SMASH") {
      Smash.push(item)
    }
    else {
      Forehand.push(item)
    }    


    const dateOld = item.endTime
    item.date = setHours(new Date(item.date), item.startTime);

    return { ...item, date: item.date }
  })
  
  const quadras = {
    backhand: Backhand,
    smash: Smash,
    forehand: Forehand
  }
   
  
    
  

  return res.json(quadras)
})

schedule("0 22 08 * * *", async () => {
  await prisma.atividade.deleteMany({});
  myRequest().then((e) => console.log("terminou"));
})

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})