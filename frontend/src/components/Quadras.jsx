import { Toast, ToastBody } from "reactstrap";
import { verifyName } from "../util/verifyName";
import { verifyHour } from "../util/verifyHour";
import moment from "moment";
import "../index.css"

export default function Quadras({ atividade, nome, corFundo }) {

    const hora = moment().format('HH:mm');

    return (
        // <div style={{ marginTop: "3rem" }}>
        //   {verifyHour(atividade.date) ?
        //     <Toast style={{ border: "1px solid #f1f1f1" }} className="mb-2 ms-5 me-3" id={atividade.idActivitySession}>
        //       {verifyLocal(atividade.area, atividade.startTime, atividade.endTime)}
        //       <ToastBody>
        //         <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Atividade: {atividade.name}</p>
        //         <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Cliente: {atividade.client ? <strong>{verifyName(atividade.client)}</strong> : <span style={{ color: "red" }}>Cliente não cadastrado</span>}</p>
        //         <p style={{ fontSize: "1rem", fontStyle: "italic" }}>Instrutor: {verifyName(atividade.instructor)}</p>
        //       </ToastBody>
        //     </Toast> : null}
        // </div>


        <div class="container-fluid" style={{ backgroundColor: `${corFundo}`, color: "#fff", height: "100%" }}>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <h1>{nome}</h1>
                        </div>
                        <div class="col text-right">
                            <h1>{hora}</h1>
                        </div>
                    </div>
                    <h3 class="subtitulo">Agenda</h3>
                    <div class="divider py-0 bg-light">
                        <hr />
                    </div>
                    <table class='table borderless' style={{ color: "#fff" }}>
                        <thead>
                            <tr style={{ fontSize: "2rem" }}>
                                <th>Hora</th>
                                <th>Aluno</th>
                                <th>Instrutor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {atividade.map((item) => {
                                return (
                                    verifyHour(item.date) ?
                                        <tr>
                                            <th scope="row" style={{ fontSize: "2rem" }}>{item.startTime} -<br />
                                                {item.endTime}</th>
                                            <td style={{ fontSize: "2rem" }}>{item.client ? <strong>{verifyName(item.client)}</strong> : <span style={{ color: "black" }}>Cliente não cadastrado</span>}</td>
                                            <td style={{ fontSize: "2rem" }}>{verifyName(item.instructor)}</td>
                                        </tr> : null
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

