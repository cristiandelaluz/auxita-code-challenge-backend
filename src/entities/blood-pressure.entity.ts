class BloodPressure {
  SysBP: number;
  DiaBP: number;
  atDate: string;

  static mapCsv(arr: any[]): BloodPressure[] {
    return arr.map(x => {
      return {
        SysBP: parseInt(x.a),
        DiaBP: parseInt(x.b),
        atDate: x.c
      }
    });
  }
};

export default BloodPressure;