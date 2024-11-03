// components/weatherCard.tsx

import styled from "styled-components";
import { Weather } from "@/interfaces/weather";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    width: 220px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;

    #condition {
        background-color: skyblue;
        padding: 7px 10px;
        border-radius: 5px;
        font-weight: bold;
    }

    h2 {
        font-weight: bold;
    }

    #temp {
        font-weight: bold;
    }

    #desc {
        font-style: italic;
        width: 60%
    }
`;

export default function WeatherCard(props: Weather) {
    return(
        <WeatherCardWrapper className="weather-card">
            <h2>{ props.datetime }</h2>
            <p id="condition">{ props.conditions }</p>
            <p id="desc">{ props.description }</p>
            <p id="temp">Temp: { props.tempmin }° - { props.tempmax }°</p>
        </WeatherCardWrapper>
    )
}