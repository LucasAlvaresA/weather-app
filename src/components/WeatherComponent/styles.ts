import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1e213a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Navbar = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px auto;
    gap: 15px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        margin-top: 20px;
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

export const TemperatureButton = styled.button<{ $active: boolean }>`
    width: 35px;
    height: 35px;
    border-radius: 20px;
    background-color: ${({ $active }) => ($active ? "#141630" : "#303463")};
    border: none;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const WeatherCard = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        margin-top: 20px;
        background-color: transparent;
    }
`;

export const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WeatherIcon = styled.div`
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

export const HighlightArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const HighlightCard = styled.div`
    background-color: #2c315c;
    height: 150px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
`;

export const HighlightTitle = styled.span`
    font-size: 20px;
    color: white;
`;
export const HighlightInfo = styled.span`
    font-size: 20px;
    color: #999aa2;
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
