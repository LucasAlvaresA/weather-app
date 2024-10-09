import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1e213a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Navbar = styled.div``;

export const SearchArea = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 150px;
    height: 25px;
    border-radius: 5px;
    background-color: #6e707a;
    border: none;
    color: white;

    &::placeholder {
        color: #999aa2;
    }
`;

export const SearchButton = styled.button`
    width: 90px;
    height: 25px;
    border-radius: 5px;
    background-color: #6e707a;
    border: none;
    color: white;
`;

export const WeatherIcon = styled.div`
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
`;

export const TemperatureArea = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Temperature = styled.text`
    font-size: 70px;
    color: white;
`;

export const TemperatureType = styled.text`
    font-size: 25px;
    color: #999aa2;
`;

export const WeatherType = styled.text`
    color: #999aa2;
    font-size: 25px;
`;

export const DateArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

export const Date = styled.text`
    color: #999aa2;
    font-size: 15px;
`;

export const Location = styled.text`
    color: #999aa2;
    font-size: 15px;
`;
