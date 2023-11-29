import './PrimaTotalCard.css'
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

import { useState, useEffect } from "react";

function PrimaTotalCard({ divisa, estado, agente, tipo }) {
    const [divisaCard, setDivisaCard] = useState(divisa)
    const [totalAmount, setTotalAmount] = useState(0)
    const [validPercentage, setValidPercentage] = useState(0)
    const [validAmount, setValidAmount] = useState(0)
    const [defeatedPercentage, setDefeatedPercentage] = useState(0)
    const [defeatedAmount, setDefeatedAmount] = useState(0)


    var url = divisaCard && (estado || agente || tipo) ?
        `http://localhost:3000/cobros/detail${divisaCard}/search?estado=${estado}&agente=${agente}&tipo=${tipo}` :
        `http://localhost:3000/cobros/detail${divisaCard}`;

    console.log("Url :" + url + " Estado > " + JSON.stringify(estado) + " Agente > " + JSON.stringify(agente) + " Tipo > " + JSON.stringify(tipo))

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);
            const detail = await response.json();
            console.log("url fetch")
            console.log(url);
            console.log(JSON.stringify(detail));
            setTotalAmount(detail.totalAmount);
            setValidPercentage(detail.validPercentage);
            setValidAmount(Number.parseInt(detail.validAmount));
            setDefeatedPercentage(detail.defeatedPercentage);
            setDefeatedAmount(Number.parseInt(detail.defeatedAmount));
        };

        getData();

    }, [estado, agente, tipo]);

    var formatAmount = (coin, number) => {
        if (!Number.isNaN(number)) {
            if (coin == "Pesos") {
                let val = (number).toLocaleString('es-MX', {
                    style: 'currency',
                    currency: 'MXN',
                    maximumFractionDigits: 2,
                });

                return val;
            } else if (coin == "Dolares") {
                let val = (number).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 2,
                });

                return val;
            } else if (coin == "Euros") {
                let val = (number).toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'EUR',
                    maximumFractionDigits: 2,
                });
                return val;
            }
        }
        return 0;
    }

    var formatPercentage = (percentage) => {
        if (percentage => 0){
            return (percentage * 100).toFixed(0)
        }
        return 0
    }

    return (
        <>
            <div className="column">
                <div className='divisa'><span>{divisaCard}</span></div>

                <div><span className='totalAmount'>{formatAmount(divisaCard,totalAmount)}</span></div>
                <div className='row-percentage'>
                    <div className='column-row'>
                        <div className='validPercentage'><BsCheckCircleFill color='green' /> {formatPercentage(validPercentage)}%</div>
                        <div className='validAmount'><span>{formatAmount(divisaCard, validAmount)}</span></div>
                    </div>
                    <div className='column-row'>
                        <div className='defeatedPercentage'><BsXCircleFill color='red' /> {formatPercentage(defeatedPercentage)}%</div>
                        <div className='defeatedAmount'><span>{formatAmount(divisaCard, defeatedAmount)}</span></div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PrimaTotalCard