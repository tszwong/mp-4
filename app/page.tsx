// app/page.tsx

"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    padding: 50px;
    height: 100vh;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 5px 15px;
    margin-top: 20px;
    font-size: 20px;
`;

const InnerDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;
`;

const StyledInput = styled.input`
    align-self: center;
    height: 20px;
    margin-left: 10px;
`;

export default function Home() {
    const [city, setCity] = useState("");

    return (
        <StyledDiv>
            <h1>Weather App: Find Weather in Any City</h1>
            <InnerDiv>
                <p>Enter a city: </p>
                <StyledInput type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </InnerDiv>
            
            <StyledLink href={`/${city}`}>
                Get Weather
            </StyledLink>
        </StyledDiv>
    )
}