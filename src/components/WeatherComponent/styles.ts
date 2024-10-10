import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1e213a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Navbar = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 15px;
    flex-direction: column;

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }
`;

export const SearchArea = styled.div`
    display: flex;
    gap: 25px;
`;

export const SearchInput = styled.input`
    width: 150px;
    height: 35px;
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
    height: 35px;
    border-radius: 5px;
    background-color: #6e707a;
    border: none;
    color: white;
`;

export const TemperatureToggle = styled.div`
    display: flex;
    gap: 20px;
`;

interface ButtonProps {
    active: boolean;
}

export const TemperatureButton = styled.button<ButtonProps>`
    width: 35px;
    height: 35px;
    border-radius: 20px;
    background-color: ${({ active }) => (active ? "#1E333B" : "#6e707a")};
    border: none;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ active }) => (active ? "#FF9F43" : "#868794")};
    }
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

export const Temperature = styled.span`
    font-size: 70px;
    color: white;
`;

export const TemperatureType = styled.span`
    font-size: 25px;
    color: #999aa2;
`;

export const WeatherType = styled.span`
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

export const Date = styled.span`
    color: #999aa2;
    font-size: 15px;
`;

export const Location = styled.span`
    color: #999aa2;
    font-size: 15px;
`;
