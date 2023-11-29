import { CobroPrima } from '../models/CobroPrima.js'
import { CatalogoCobroPrimas } from '../models/CatálogoCobroPrimas.js';

//Prueba de pesos a euros
var cobro1 = new CobroPrima("SINALOA","1954-0000", "Expedición", "AGROGREN S.A DE C.V.", 300, 73, 700000, "MX");
var cobro2 = new CobroPrima("SINALOA", "1954-0000", "Expedición", "AGROGREN S.A DE C.V.", 300, 73, 360000, "MX");

var cobrosList = [cobro1, cobro2];
var catalogoCobros = new CatalogoCobroPrimas(cobrosList);

console.log("Total en Euros > "+catalogoCobros.totalAmountEuros);
console.log("Valor esperado > "+56180);
console.log();

//Prueba de pesos y dolares a euros
var cobro3 = new CobroPrima("JALISCO", "1954-0000", "Expedición", "AGROGREN S.A DE C.V.", 300, 73, 700000, "MX");
var cobro4 = new CobroPrima("SINALOA", "1954-0000", "Expedición", "AGROGREN S.A DE C.V.", 300, 73, 36000, "US");

cobrosList = [cobro3, cobro4];
catalogoCobros = new CatalogoCobroPrimas(cobrosList);

console.log("Total en Euros > " + catalogoCobros.totalAmountEuros);
console.log("Valor esperado > " + 69860);
console.log();

//Prueba de pesos, dolares y euros a euros
var cobro5 = new CobroPrima("SINALOA", "1954-0000", "Expedición", "AGROGREN S.A DE C.V.", 300, 73, 700000, "MX","BARRIOS","EJECUTIVO");
var cobro6 = new CobroPrima("SINALOA", "1954-0000", "Expedición", "AGROGREN S.A DE C.V.", 300, 73, 36000, "US", "LOPEZ", "EJECUTIVO");
var cobro7 = new CobroPrima("JALISCO", "1954-0000", "Expedición", "AGROGREN S.A DE C.V.", 300, 0, 23000, "EU", "BARRIOS", "BASICO");
var cobro8 = new CobroPrima("SINALOA", "1954-0000", "Expedición", "AGROGREN S.A DE C.V.", 300, 0, 3300, "EU", "BARRIOS", "EJECUTIVO");

cobrosList = [cobro5, cobro6, cobro7, cobro8];
catalogoCobros = new CatalogoCobroPrimas(cobrosList);

console.log("Total en Pesos > " + catalogoCobros.totalAmountPesos);
console.log("Valor esperado > " + 1807936);
console.log();

//Calculo de porcentaje vencido
console.log("Porcentage Total Vencido > " + catalogoCobros.defeatedPercentage);
console.log("Valor esperado > " + 0.727);
console.log();

//Calculo de porcentaje vigente
console.log("Procentaje Total Vigente > " + catalogoCobros.validPercentage);
console.log("Valor esperado > " + 0.272);
console.log();

//Obtener Catalogo de cobros por estado
var crit= {"tipo":"BASICO","estado":"SINALOA"}
console.log("Catalogo de cobros ejecutivos > "+JSON.stringify(catalogoCobros.getCobrosListByCriteria(crit).getCobrosList()));
console.log();
var criteria = {"estado":"SINALOA","agente":"BARRIOS","tipo":"EJECUTIVO"}
console.log("Catalogo de cobros en SINALOA de BARRIOS de tipo EJECUTIVO> " + JSON.stringify(catalogoCobros.getCobrosListByCriteria(criteria).getCobrosList()));