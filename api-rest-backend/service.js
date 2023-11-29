import { CobroPrima } from './models/CobroPrima.js'
import { CatalogoCobroPrimas } from './models/CatálogoCobroPrimas.js';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

var cobro1 = new CobroPrima("SINALOA", "1954-0000", "Expedición", "AGROGREN S.A DE C.V.", 200, 92, 200000, "MX", "PEREZ", "EJECUTIVO");
var cobro2 = new CobroPrima("SINALOA", "8524-0000", "Expedición", "DOMANI S.A DE C.V.", 150, 61, 150000, "MX", "BARRIOS", "BASICO");
var cobro3 = new CobroPrima("JALISCO", "1584-0000", "Ampliación", "AUTO SERVICIO COAHUILA S.A DE C.V.", 98, 31, 20000, "MX", "BARRIOS", "BASICO");
var cobro4 = new CobroPrima("JALISCO", "1845-0000", "Prorroga", "BARCO QUIREZA FRANCISCO", 63,33, 980000, "MX", "PEREZ", "BASICO");
var cobro5 = new CobroPrima("JALISCO", "9711-0457", "Ampliación", "CASA GALLARDO S.A DE C.V.", 20, 0, 1000000, "MX", "PEREZ", "EJECUTIVO");
var cobro6 = new CobroPrima("SINALOA", "6587-0457", "Prorroga", "AGROGREN S.A DE C.V.", 15, 0, 80000, "MX", "PEREZ", "EJECUTIVO");

const cobrosList = [cobro1, cobro2, cobro3, cobro4, cobro5, cobro6];
var catalogoCobros = new CatalogoCobroPrimas(cobrosList);

app.use(cors());

//Listo
app.get('/cobros', (req, res) => {
    res.send(catalogoCobros.getCobrosList());
    console.log("Cliente Cobros  " + JSON.stringify(cobrosList));
    console.log();
    console.log();
})

//Listo
app.get('/cobros/search', (req, res) => {

    var criteria = {
        "estado": req.query.estado,
        "agente": req.query.agente,
        "tipo": req.query.tipo
    };

    let cobrosCriteria = catalogoCobros.getCobrosListByCriteria(criteria)

    res.send(cobrosCriteria.getCobrosList())
    console.log();
    console.log();
});

//Listo
app.get('/cobros/detailEuros', (req, res) => {
    
    let totalAmount = catalogoCobros.totalAmountEuros;
    let defeatedPercentage = catalogoCobros.defeatedPercentage;
    let defeatedAmount = (defeatedPercentage * totalAmount).toFixed(0);
    let validPercentage = catalogoCobros.validPercentage;
    let validAmount = (validPercentage * totalAmount).toFixed(0);
    let detail = {
        "totalAmount": totalAmount,
        "defeatedPercentage": defeatedPercentage,
        "defeatedAmount": defeatedAmount,
        "validPercentage": validPercentage,
        "validAmount": validAmount
    }
    console.log("Detalle en Euros " + JSON.stringify(detail));
    res.send(detail);
    console.log();
    console.log();
})

//Listo
app.get('/cobros/detailEuros/search', (req, res) => {

    var criteria = {
        "estado": req.query.estado,
        "agente": req.query.agente,
        "tipo": req.query.tipo
    };
    let catalogoCriteria = catalogoCobros.getCobrosListByCriteria(criteria)
    let totalAmount = catalogoCriteria.totalAmountEuros;
    let defeatedPercentage = catalogoCriteria.defeatedPercentage;
    let defeatedAmount = (defeatedPercentage * totalAmount).toFixed(0);
    let validPercentage = catalogoCriteria.validPercentage;
    let validAmount = (validPercentage * totalAmount).toFixed(0);
    let detail = {
        "totalAmount": totalAmount,
        "defeatedPercentage": defeatedPercentage,
        "defeatedAmount": defeatedAmount,
        "validPercentage": validPercentage,
        "validAmount": validAmount
    }
    console.log("Detalle en Euros " + JSON.stringify(detail));
    res.send(detail);
    console.log();
    console.log();

})
//Listo
app.get('/cobros/detailPesos', (req, res) => {

    let totalAmount = catalogoCobros.totalAmountPesos;
    let defeatedPercentage = catalogoCobros.defeatedPercentage;
    let defeatedAmount = (defeatedPercentage * totalAmount).toFixed(0);
    let validPercentage = catalogoCobros.validPercentage;
    let validAmount = (validPercentage * totalAmount).toFixed(0);
    let detail = {
        "totalAmount": totalAmount,
        "defeatedPercentage": defeatedPercentage,
        "defeatedAmount": defeatedAmount,
        "validPercentage": validPercentage,
        "validAmount": validAmount
    }
    console.log("Detalle en Pesos " + JSON.stringify(detail));
    res.send(detail);
    console.log();
    console.log();
})

//Listo
app.get('/cobros/detailPesos/search', (req, res) => {

    var criteria = {
        "estado": req.query.estado,
        "agente": req.query.agente,
        "tipo": req.query.tipo
    };
    let catalogoCriteria = catalogoCobros.getCobrosListByCriteria(criteria)
    let totalAmount = catalogoCriteria.totalAmountPesos;
    let defeatedPercentage = catalogoCriteria.defeatedPercentage;
    let defeatedAmount = (defeatedPercentage * totalAmount).toFixed(0);
    let validPercentage = catalogoCriteria.validPercentage;
    let validAmount = (validPercentage * totalAmount).toFixed(0);
    let detail = {
        "totalAmount": totalAmount,
        "defeatedPercentage": defeatedPercentage,
        "defeatedAmount": defeatedAmount,
        "validPercentage": validPercentage,
        "validAmount": validAmount
    }
    console.log("Detalle en Pesos " + JSON.stringify(detail));
    res.send(detail);
    console.log();
    console.log();


})

//Listo
app.get('/cobros/detailDolares', (req, res) => {
    let totalAmount = catalogoCobros.totalAmountDolares;
    let defeatedPercentage = catalogoCobros.defeatedPercentage;
    let defeatedAmount = (defeatedPercentage * totalAmount).toFixed(0);
    let validPercentage = catalogoCobros.validPercentage;
    let validAmount = (validPercentage * totalAmount).toFixed(0);
    let detail = {
        "totalAmount": totalAmount,
        "defeatedPercentage": defeatedPercentage,
        "defeatedAmount": defeatedAmount,
        "validPercentage": validPercentage,
        "validAmount": validAmount
    }
    console.log("Detalle en Dolares " + JSON.stringify(detail));
    res.send(detail);
    console.log();
    console.log();
})

//Listo
app.get('/cobros/detailDolares/search', (req, res) => {

    var criteria = {
        "estado": req.query.estado,
        "agente": req.query.agente,
        "tipo": req.query.tipo
    };
    let catalogoCriteria = catalogoCobros.getCobrosListByCriteria(criteria)
    let totalAmount = catalogoCriteria.totalAmountDolares;
    let defeatedPercentage = catalogoCriteria.defeatedPercentage;
    let defeatedAmount = (defeatedPercentage * totalAmount).toFixed(0);
    let validPercentage = catalogoCriteria.validPercentage;
    let validAmount = (validPercentage * totalAmount).toFixed(0);
    let detail = {
        "totalAmount": totalAmount,
        "defeatedPercentage": defeatedPercentage,
        "defeatedAmount": defeatedAmount,
        "validPercentage": validPercentage,
        "validAmount": validAmount
    }
    console.log("Detalle en Dolares " + JSON.stringify(detail));
    res.send(detail);
    console.log();
    console.log();
})

app.listen(port, () => {
    console.log(`Cobro Primas Rest service listenning on port ${port}`)
    console.log();
    console.log();
});