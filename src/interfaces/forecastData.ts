export interface forecastData {
  forecastday: [
    {
      date: string;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        daily_chance_of_rain: number;
        daily_chance_of_snow: number;
        condition: {
          text: string;
          icon: string;
        };
      };
      astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
      };
      hour: [
        {
          time_epoch: number;
          temp_c: number;
          temp_f: number;
          condition: {
            text: string;
            icon: string;
          };
        }
      ];
    }
  ];
}
