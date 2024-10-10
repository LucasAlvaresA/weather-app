export interface WeatherData {
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
        humidity: number;
    };
    weather: {
        main: string;
    }[];
    name: string;
    sys: {
        country: string;
    };
    wind: {
        speed: number;
    };
}
