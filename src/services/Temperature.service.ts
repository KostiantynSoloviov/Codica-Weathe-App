export class TemperatureService {
  static getInCelsius = (kelvin: number) => {
    const celsius = kelvin - 273.15;
    return Number(celsius.toFixed(1));
  };

  static getLabel = (temperature: number) =>
    temperature > 0 ? `+${temperature} ℃` : `${temperature} ℃`;
}

