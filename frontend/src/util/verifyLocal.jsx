import { ToastHeader} from "reactstrap";

export const verifyLocal = (area,inicio, fim) => {

  if (area === "BACKHAND") {
    return  <ToastHeader className="bg-warning text-body">{area} {inicio} - {fim}</ToastHeader>
  }

  if (area === "SMASH") {
    return  <ToastHeader className="bg-success text-body">{area} {inicio} - {fim}</ToastHeader>
  }

  if (area === "FOREHAND") {
    return  <ToastHeader className="bg-info text-body">{area} {inicio} - {fim}</ToastHeader>
  }
}