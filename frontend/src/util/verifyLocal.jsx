import { ToastHeader} from "reactstrap";

export const verifyLocal = (area,inicio, fim) => {

  if (area === "BACKHAND") {
    return  <ToastHeader style={{ background: "#6B8E23" }} className="text-body"><span style={{ color: "white" }}>{area} {inicio} - {fim}</span></ToastHeader>
  }

  if (area === "SMASH") {
    return  <ToastHeader style={{ background: "#C86800" }} className="text-body"><span style={{ color: "white" }}>{area} {inicio} - {fim}</span></ToastHeader>
  }

  if (area === "FOREHAND") {
    return  <ToastHeader style={{ background: "#4D2400" }} className="text-body"><span style={{ color: "white" }}>{area} {inicio} - {fim}</span></ToastHeader>
  }
}