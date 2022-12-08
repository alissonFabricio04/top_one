import Quadras from "../components/Quadras"

export const verifyAct = (Quadra) => {
  for (let index = 0; index <= 3; index++) {
    if (Quadra[0] === "backhand") {
      return <Quadras atividade={backhand} nome="BACKHAND" corFundo="#6B8E23" />
    } else if (Quadra[1] === "smash") {
      return <Quadras atividade={smash} nome="SMASH" corFundo="#C86800" />
    } else if (Quadra[2] === "forehand") {
      return <Quadras atividade={forehand} nome="FOREHAND" corFundo="#4D24003" />
    }
  }
}