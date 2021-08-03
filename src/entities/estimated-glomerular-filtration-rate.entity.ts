class EstimatedGlomerularFiltrationRate {
  eGFR: number;
  atDate: string;

  static mapCsv(arr: any[]): EstimatedGlomerularFiltrationRate[] {
    return arr.map(x => {
      return {
        eGFR: parseInt(x.a),
        atDate: x.b
      }
    });
  }
}

export default EstimatedGlomerularFiltrationRate;