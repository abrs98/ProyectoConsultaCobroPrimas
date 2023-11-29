export class CatalogoCobroPrimas {

  constructor(listaCobros) {
    this.listaCobros = listaCobros;
  }

  get totalAmountDolares() {
    let total = 0;
    let valorEuro = 1.09;
    let valorPeso = 0.058;
    this.listaCobros.forEach(cobro => {
      if (cobro.divisa == "MX") {
        total += cobro.importe * valorPeso;
      }
      if (cobro.divisa == "US") {
        total += cobro.importe;
      }
      if (cobro.divisa == "EU") {
        total += cobro.importe * valorEuro;
      }
    });
    return total;
  }

  get totalAmountPesos() {
    let total = 0;
    let valorEuro = 18.72;
    let valorDolar = 17.1;
    this.listaCobros.forEach(cobro => {
      if (cobro.divisa == "MX") {
        total += cobro.importe;
      }
      if (cobro.divisa == "US") {
        total += cobro.importe * valorDolar;
      }
      if (cobro.divisa == "EU") {
        total += cobro.importe * valorEuro;
      }
    });
    return total;
  }

  get totalAmountEuros() {
    let total = 0;
    let valorPeso = 0.053;
    let valorDolar = 0.91;
    this.listaCobros.forEach(cobro => {
      if (cobro.divisa == "MX") {
        total += cobro.importe * valorPeso;
      }
      if (cobro.divisa == "US") {
        total += cobro.importe * valorDolar;
      }
      if (cobro.divisa == "EU") {
        total += cobro.importe;
      }
    });
    return total;
  }

  getCobrosListByCriteria(criteria) {

    var { estado, agente, tipo } = criteria

    const cobrosCriteria = this.listaCobros.filter(cobro => {

      //Filter estado
      if (estado && agente && tipo) {
        return cobro.estado === estado && cobro.agente === agente && cobro.tipo === tipo
      }

      if (estado && agente && !tipo) {
        return cobro.estado === estado && cobro.agente === agente
      }

      if (estado && !agente && tipo) {
        return cobro.estado === estado && cobro.tipo === tipo
      }

      if (estado && !agente && !tipo) {
        return cobro.estado === estado
      }

      //filter agente

      if (!estado && agente && tipo) {
        return cobro.agente === agente && cobro.tipo === tipo
      }

      if (!estado && agente && !tipo) {
        return cobro.agente === agente
      }

      //filter tipo

      if (!estado && !agente && tipo) {
        return cobro.tipo === tipo
      }

    })

    var catalogoByCriteria = new CatalogoCobroPrimas(cobrosCriteria)

    return catalogoByCriteria
  }

  get defeatedPercentage() {
    if (this.listaCobros.length > 0) {
      let percentage = 0;
      //total en pesos para calcular porcentaje
      let totalPesosVencido = 0;
      let valorEuro = 18.72;
      let valorDolar = 17.1;
      this.listaCobros.forEach(cobro => {
        if (cobro.diasVencimiento > 0) {
          if (cobro.divisa == "MX") {
            totalPesosVencido += cobro.importe;
          }
          if (cobro.divisa == "US") {
            totalPesosVencido += cobro.importe * valorDolar;
          }
          if (cobro.divisa == "EU") {
            totalPesosVencido += cobro.importe * valorEuro;
          }
        }
      });

      percentage = totalPesosVencido / this.totalAmountPesos

      return percentage.toFixed(20);
    }

    return 0;

  }

  get validPercentage() {
    if (this.listaCobros.length > 0) {
      let percentage = 1 - this.defeatedPercentage

      return percentage.toFixed(20);
    }

    return 0;

  }
  
  getCobrosList() {
    return this.listaCobros
  }
}