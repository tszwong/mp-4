// app/[city]/page.tsx

"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "@/components/weatherCard";
import styled from "styled-components";
import { Weather } from "@/interfaces/weather";

const WeatherContentWrapper = styled.main`
    width: 93vw;
    margin: 0 auto;
    background-color: lightgrey;
    padding: 30px;
`;

const CityName = styled.h1`
    text-align: center;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
`;

const WeatherCardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    border: gray 4px solid;
    border-radius: 5px;
`;

export default function CityPage() {
    const params = useParams();

    const { data, error } = useSWR(`/api/getWeatherData?city=${params.city}`, (url: string) => 
        fetch(url).then((res) => res.json())
    );

    if (error) return <div>Failed to load data</div>;
    if (!data) return <div>Loading...</div>;

    const days = data?.days || [];
    
    return (
        <WeatherContentWrapper>
            <CityName>{params.city}</CityName>
            <WeatherCardContainer>
                {days.map((weather: Weather, i: number) => (
                    <WeatherCard 
                        key={i}
                        datetime={weather.datetime}
                        conditions={weather.conditions}
                        description={weather.description}
                        tempmin={weather.tempmin}
                        tempmax={weather.tempmax}
                    />
                ))}
            </WeatherCardContainer>
        </WeatherContentWrapper>
    );
}