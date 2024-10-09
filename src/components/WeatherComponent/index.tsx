import { useEffect, useState } from "react";
import * as Styled from "./styles";
import { getWeather } from "../../services/weatherService";
import { weatherIcons } from "../utils/weatherIcons";

interface WeatherData {
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

export const WeatherComponent = () => {
    const [inputValue, setInputValue] = useState("");
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [unit, setUnit] = useState<"metric" | "imperial">("metric");
    const [currentCity, setCurrentCity] = useState<string>("belo horizonte");

    const getWeatherByCity = async (
        city: string,
        unit: "metric" | "imperial"
    ) => {
        try {
            const data = await getWeather(city, unit);
            setWeatherData(data);
            setCurrentCity(city);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherByCity(currentCity, unit);
    }, [currentCity, unit]);

    const handleSearch = () => {
        if (inputValue) {
            getWeatherByCity(inputValue, unit);
            setInputValue("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <Styled.Container>
            <Styled.SearchArea>
                <Styled.SearchInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search for places..."
                    onKeyDown={handleKeyDown}
                />
                <Styled.SearchButton onClick={handleSearch}>
                    Search
                </Styled.SearchButton>
            </Styled.SearchArea>

            {/* <Styled.TemperatureToggle> */}
            <Styled.SearchButton
                onClick={() => setUnit("metric")}
                // active={unit === "metric"}
            >
                °C
            </Styled.SearchButton>
            <Styled.SearchButton
                onClick={() => setUnit("imperial")}
                // active={unit === "imperial"}
            >
                °F
            </Styled.SearchButton>
            {/* </Styled.TemperatureToggle> */}

            <Styled.WeatherIcon>
                {weatherData ? weatherIcons[weatherData.weather[0].main] : "🌍"}
            </Styled.WeatherIcon>

            <Styled.TemperatureArea>
                <Styled.Temperature>
                    {Math.floor(weatherData?.main.temp ?? 0)}
                    <Styled.TemperatureType>
                        {unit === "metric" ? "°C" : "°F"}
                    </Styled.TemperatureType>
                </Styled.Temperature>
                <Styled.WeatherType>
                    {weatherData?.weather[0].main}
                </Styled.WeatherType>
            </Styled.TemperatureArea>

            <Styled.DateArea>
                <Styled.Date>
                    {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        day: "numeric",
                        month: "short",
                    })}
                </Styled.Date>
                <Styled.Location>
                    {weatherData
                        ? `${weatherData.name} - ${weatherData.sys.country}`
                        : ""}
                </Styled.Location>
            </Styled.DateArea>
        </Styled.Container>
    );
};
