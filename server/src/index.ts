import axios from "axios";
import { prisma } from "./prisma";
import { config } from "dotenv";
config();

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let atividades: { idConfiguration: number, activityDate: string }[] = [];
export async function myRequest() {
  try {
    const response = await axios.get("https://evo-integracao.w12app.com.br/api/v1/activities/schedule?take=100&onlyAvailables=false", {
      auth: { username: `${process.env.EVO_TOP_USERNAME}`, password: `${process.env.EVO_TOP_PASSWORD}` }
    })

    atividades = response.data
  } catch (error) {
    console.log((error as Error).message)
  }

  const maxRequestPerSecond = 1;

  for (let i = 0, requestCount = 1; i < atividades.length; i++, requestCount++) {
    axios.get(`https://evo-integracao.w12app.com.br/api/v1/activities/schedule/detail?idConfiguration=${atividades[i].idConfiguration}&activityDate=${atividades[i].activityDate}`, {
      auth: { username: `${process.env.EVO_TOP_USERNAME}`, password: `${process.env.EVO_TOP_PASSWORD}` }
    })
    .then(async (response) => {     
      await prisma.atividade.create({
        data: {
          idActivitySession: response.data.idActivitySession,
          startTime: response.data.startTime,
          endTime: response.data.endTime,
          date: new Date(response.data.date),
          area: response.data.area,
          instructor: response.data.instructor,
          name: response.data.name,
          client: response.data.enrollments[0]?.name
        }
      })

      console.log({
        idActivitySession: response.data.idActivitySession,
        startTime: response.data.startTime,
        endTime: response.data.endTime,
        date: new Date(response.data.date),
        area: response.data.area,
        instructor: response.data.instructor,
        name: response.data.name,
        client: response.data.enrollments[0]?.name
      })
    })
    .catch((error) => console.log(i, (error as Error).message))
    
    if (requestCount === maxRequestPerSecond) {
      requestCount = 0;
      await sleep(2000);
    }
  }
}

// myRequest().then((e) => console.log("terminou"));