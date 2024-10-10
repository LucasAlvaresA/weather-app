import { useEffect, useState } from "react";
import * as Styled from "./styles";
import { getWeather } from "../../services/weatherService";
import { weatherIcons } from "../utils/weatherIcons";
import { WeatherData } from "../../types/weatherData";
import { toast } from "react-toastify";

export const WeatherComponent = () => {
    const [inputValue, setInputValue] = useState("");
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [unit, setUnit] = useState<"metric" | "imperial">("metric");
    const [currentCity, setCurrentCity] = useState<string>("belo horizonte");
    const [loading, setLoading] = useState(false);

    const getWeatherByCity = async (
        city: string,
        unit: "metric" | "imperial"
    ) => {
        setLoading(true);
        try {
            const data = await getWeather(city, unit);
            setWeatherData(data);
            setCurrentCity(city);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
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
            <Styled.Navbar>
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
                <Styled.TemperatureToggle>
                    <Styled.TemperatureButton
                        onClick={() => setUnit("metric")}
                        $active={unit === "metric"}
                    >
                        °C
                    </Styled.TemperatureButton>
                    <Styled.TemperatureButton
                        onClick={() => setUnit("imperial")}
                        $active={unit === "imperial"}
                    >
                        °F
                    </Styled.TemperatureButton>
                </Styled.TemperatureToggle>
            </Styled.Navbar>

            {loading ? (
                <Styled.LoadingIndicator />
            ) : (
                <Styled.WeatherCard>
                    <Styled.MainArea>
                        <Styled.WeatherIcon>
                            {weatherData
                                ? weatherIcons[weatherData.weather[0].main]
                                : "🌍"}
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
                    </Styled.MainArea>

                    <Styled.HighlightArea>
                        <Styled.HighlightCard>
                            <Styled.HighlightTitle>
                                Max Temp
                            </Styled.HighlightTitle>
                            <Styled.HighlightInfo>
                                {weatherData
                                    ? Math.floor(weatherData?.main.temp_max)
                                    : 0}
                                {unit === "metric" ? "°C" : "°F"}
                            </Styled.HighlightInfo>
                        </Styled.HighlightCard>
                        <Styled.HighlightCard>
                            <Styled.HighlightTitle>
                                Min Temp
                            </Styled.HighlightTitle>
                            <Styled.HighlightInfo>
                                {weatherData
                                    ? Math.floor(weatherData?.main.temp_min)
                                    : 0}
                                {unit === "metric" ? "°C" : "°F"}
                            </Styled.HighlightInfo>
                        </Styled.HighlightCard>
                        <Styled.HighlightCard>
                            <Styled.HighlightTitle>
                                Humidity
                            </Styled.HighlightTitle>
                            <Styled.HighlightInfo>
                                {weatherData ? weatherData.main.humidity : 0}%
                            </Styled.HighlightInfo>
                        </Styled.HighlightCard>
                        <Styled.HighlightCard>
                            <Styled.HighlightTitle>
                                Wind Speed
                            </Styled.HighlightTitle>
                            <Styled.HighlightInfo>
                                {weatherData ? weatherData.wind.speed : 0}
                            </Styled.HighlightInfo>
                        </Styled.HighlightCard>
                    </Styled.HighlightArea>
                </Styled.WeatherCard>
            )}

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
