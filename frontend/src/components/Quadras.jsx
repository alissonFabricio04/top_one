import { Toast,  ToastBody } from "reactstrap";
import { verifyLocal } from "../util/verifyLocal";
import { verifyName } from "../util/verifyName";
import { verifyHour } from "../util/verifyHour";
// import "../index.css"



export default function Quadras({ atividade }) {
  return (
    <div style={{ marginTop: "3rem" }}>
      {verifyHour(atividade.date) ?
        <Toast style={{ border: "1px solid #f1f1f1" }} className="mb-2 ms-5 me-3" id={atividade.idActivitySession}>
          {verifyLocal(atividade.area, atividade.startTime, atividade.endTime)}
          <ToastBody>
            <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Atividade: {atividade.name}</p>
            <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Cliente: {atividade.client ? <strong>{verifyName(atividade.client)}</strong> : <span style={{ color: "red" }}>Cliente não cadastrado</span>}</p>
            <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Instrutor: {verifyName(atividade.instructor)}</p>
          </ToastBody>
        </Toast> : null}
    </div>
  )
}

