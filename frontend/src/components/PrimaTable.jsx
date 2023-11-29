import './PrimaTable.css'
import { useEffect, useState } from 'react';

function PrimaTable({ estado, agente, tipo }) {

    const [cobrosList, setData] = useState(null);

    var url = estado || agente || tipo ?
        `http://localhost:3000/cobros/search?estado=${estado}&agente=${agente}&tipo=${tipo}` :
        `http://localhost:3000/cobros`;

    console.log("Url :" + url + " Estado > " + JSON.stringify(estado) + " Agente > " + JSON.stringify(agente) + " Tipo > " + JSON.stringify(tipo))

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);
            const newData = await response.json();
            console.log("url fetch")
            console.log(url);
            console.log(JSON.stringify(newData));
            setData(newData);
        };

        getData();
        console.log(cobrosList);

    }, [estado, agente, tipo]);

    return (
        <>
            <div>

                <table>

                    <thead>
                        <tr>
                            <th>ESTADO</th>
                            <th>FIANZA</th>
                            <th>MOVIMIENTO</th>
                            <th>FIADO</th>
                            <th>ANTIGUEDAD</th>
                            <th>DIAS VENCIMIENTO</th>
                            <th>IMPORTE</th>
                            <th>AGENTE</th>
                            <th>TIPO</th>
                        </tr>
                    </thead>
                    {cobrosList &&
                        <tbody>
                            {cobrosList.map((cobro, i) => {
                                //Pinta el color del fondo del table row dependiendo del residuo de la division de i entre 2
                                const cl = (i % 2 === 0) ? "#fff" : "#eee";
                                const className =
                                    cobro.diasVencimiento > 0 && cobro.diasVencimiento <= 60 ? 'peligro'
                                        : cobro.diasVencimiento > 60 ? 'vencido'
                                            : 'valido';


                                return (< tr style={{ backgroundColor: cl }} key={i}>
                                    <td>{cobro.estado}</td>
                                    <td>{cobro.fianza}</td>
                                    <td>{cobro.movimiento}</td>
                                    <td>{cobro.clienteFiado}</td>
                                    <td className={className}>{cobro.antiguedad}</td>
                                    <td className={className}>{cobro.diasVencimiento}</td>
                                    <td>{`${cobro.divisa} ${cobro.importe}`}</td>
                                    <td>{cobro.agente}</td>
                                    <td>{cobro.tipo}</td>
                                </tr>)
                            })
                            }

                        </tbody>
                    }
                    {cobrosList && cobrosList.length == 0 &&
                        
                        <tbody>
                            <tr><td><span style={{ color: "white" }}>No se encontraron coincidencias</span></td></tr>
                        </tbody>
                    }
                </table>
            </div>
        </>
    )
}

export default PrimaTable