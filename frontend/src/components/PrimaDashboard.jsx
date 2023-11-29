import PrimaTotalCard from "./PrimaTotalCard";
import './PrimaDashboard.css'
import PrimaTable from "./PrimaTable";
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";




function PrimaDashboard() {
    const [buttonOficina, setButtonOficina] = useState({ "title": "Oficina", "name": "oficinas", "id": "oficinas", "options": [{ "value": "", "text": "--Seleccione--" }, { "value": "JALISCO", "text": "Jalisco" }, { "value": "SINALOA", "text": "Sinaloa" }]})
    const [buttonAgente, setButtonAgente] = useState({ "title": "Agente", "name": "agentes", "id": "agentes", "options": [{ "value": "", "text": "--Seleccione--" },{ "value": "BARRIOS", "text": "Barrios" }, { "value": "PEREZ", "text": "Perez" }]})
    const [buttonTipo, setButtonTipo] = useState({ "title": "Tipo", "name": "tipos", "id": "tipos", "options": [{ "value": "", "text": "--Seleccione--" }, { "value": "EJECUTIVO", "text": "Ejecutivo" }, { "value": "BASICO", "text": "Basico" }] })
     
    //Data
    //const [cobrosList, setCobrosList] = useState([{ "estado": "SINALOA", "fianza": "1954-0000", "movimiento": "Expedición", "clienteFiado": "AGROGREN S.A DE C.V.", "antiguedad": 300, "diasVencimiento": 33, "importe": 700000, "divisa": "MX", "agente": "PEREZ", "tipo": "EJECUTIVO" }, { "estado": "SINALOA", "fianza": "1944-0000", "movimiento": "Expedición", "clienteFiado": "AGROGREN S.A DE C.V.", "antiguedad": 300, "diasVencimiento": 73, "importe": 36000, "divisa": "US", "agente": "BARRIOS", "tipo": "EJECUTIVO" }, { "estado": "JALISCO", "fianza": "5533-0000", "movimiento": "Expedición", "clienteFiado": "AGROGREN S.A DE C.V.", "antiguedad": 300, "diasVencimiento": 0, "importe": 700000, "divisa": "US", "agente": "BARRIOS", "tipo": "BASICO" }, { "estado": "JALISCO", "fianza": "2345-0000", "movimiento": "Expedición", "clienteFiado": "AGROGREN S.A DE C.V.", "antiguedad": 300, "diasVencimiento": 73, "importe": 700000, "divisa": "EU", "agente": "PEREZ", "tipo": "BASICO" }, { "estado": "SINALOA", "fianza": "6290-0000", "movimiento": "Expedición", "clienteFiado": "AGROGREN S.A DE C.V.", "antiguedad": 300, "diasVencimiento": 0, "importe": 700000, "divisa": "MX", "agente": "PEREZ", "tipo": "EJECUTIVO" }])
    const [estado,setEstado] = useState("")
    const [agente, setAgente] = useState("")
    const [tipo, setTipo] = useState("")

    var handleSelectChangeEstado = (e) => {
        setEstado(e.target.value);
        console.log(estado);
    };

    var handleSelectChangeAgente = (e) => {
        setAgente(e.target.value);
        console.log("Handle event > "+agente);
    };

    var handleSelectChangeTipo = (e) => {
        setTipo(e.target.value);
        console.log(tipo);
    };
    var handleLimpiarFiltros = () => {
        setEstado("");
        setAgente("");
        setTipo("");
    };


    return (
        <>
            <div className="container">
                <h1>Prima por cobrar</h1>
                <div className="row">
                    <div className="column-button">
                        <span className='title'>{buttonOficina.title}</span>
                        <select onChange={handleSelectChangeEstado} name={buttonOficina.name} id={buttonOficina.id} value={estado}>
                            {buttonOficina.options.map((op, i) => (
                                <option key={i} value={op.value}>
                                    {op.text}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="column-button">
                        <span className='title'>{buttonAgente.title}</span>
                        <select onChange={handleSelectChangeAgente} name={buttonAgente.name} id={buttonAgente.id} value={agente}>
                            {buttonAgente.options.map((op, i) => (
                                <option key={i} value={op.value}>
                                    {op.text}
                                </option>

                            ))}
                        </select>
                    </div>

                    <div className="column-button">
                        <span className='title'>{buttonTipo.title}</span>
                        <select onChange={handleSelectChangeTipo} name={buttonTipo.name} id={buttonTipo.id} value={tipo}>
                            {buttonTipo.options.map((op, i) => (
                                <option key={i} value={op.value}>
                                    {op.text}
                                </option>

                            ))}
                        </select>
                    </div>

                    <div className="column-button">
                        <button hidden={estado == "" && agente == "" && tipo == ""} style={{background:"red",color:"white"}} onClick={handleLimpiarFiltros}><FaTrash /> Filtros </button>
                    </div>
                </div>
                <div className="row-card">
                    <PrimaTotalCard divisa={'Pesos'} estado={estado} agente={agente} tipo={tipo}/>
                    <PrimaTotalCard divisa={'Dolares'} estado={estado} agente={agente} tipo={tipo} />
                    <PrimaTotalCard divisa={'Euros'} estado={estado} agente={agente} tipo={tipo} />
                </div>

                <div className="row">
                    <PrimaTable estado={estado} agente={agente} tipo={tipo} />
                </div>
         
            </div>
        </>
    )
}


export default PrimaDashboard