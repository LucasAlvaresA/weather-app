/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./api";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getGeolocation = async (
    city: string,
    state?: string,
    country?: string,
    limit: number = 1
) => {
    try {
        const { data } = await api.get(
            `geo/1.0/direct?q=${city},${state ? state + "," : ""}${
                country ? country : ""
            }&limit=${limit}&appid=${API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.error("error", error);
        return null;
    }
};

export const getWeatherByGeolocation = async (lat: number, lon: number) => {
    try {
        const { data } = await api.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log(error.response);
        return null;
    }
};
export const getWeather = async (city: string) => {
    const geoData = await getGeolocation(city);

    if (geoData && geoData.length > 0) {
        const { lat, lon } = geoData[0];
        return await getWeatherByGeolocation(lat, lon);
    } else {
        console.error("error :(");
        return null;
    }
};
