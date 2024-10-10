export interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        main: string;
    }[];
    name: string;
    sys: {
        country: string;
    };
}
