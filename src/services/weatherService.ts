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
        const query = `${city}${state ? `,${state}` : ""}${
            country ? `,${country}` : ""
        }`;
        const { data } = await api.get(
            `geo/1.0/direct?q=${query}&limit=${limit}&appid=${API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.error("Error fetching geolocation:", error.message);
        return null;
    }
};

const getWeatherByUnits = async (
    lat: number,
    lon: number,
    units: "metric" | "imperial"
) => {
    try {
        const { data } = await api.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
        );
        return data;
    } catch (error: any) {
        if (error.response) {
            console.error("API Response Error:", error.response.data);
        } else {
            console.error("Error:", error.message);
        }
        return null;
    }
};

export const getWeather = async (
    city: string,
    units: "metric" | "imperial"
) => {
    const geoData = await getGeolocation(city);

    if (geoData && geoData.length > 0) {
        const { lat, lon } = geoData[0];
        return await getWeatherByUnits(lat, lon, units);
    } else {
        console.error("Geolocation data not found for city:", city);
        return null;
    }
};
