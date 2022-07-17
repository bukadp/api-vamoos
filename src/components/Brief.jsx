import React, {useEffect, useState} from "react";
import {flightsHandler} from "../utils/flightsHandler";
import {useNavigate} from "react-router-dom";
import {vamoosAPI} from "../api/api";


function Brief(props) {
    const currentBrief = props.dataBrief.find(x => x.id == props.briefId)
    const [flights, setFlights] = useState([])

    useEffect(() => {
        async function getFlights() {
            const response = await flightsHandler(currentBrief?.flightIds)
            setFlights(response)
        }

        getFlights()
    }, [])

    return (
        <div>
            <div>ЧИСТО ПРОВЕРИТЬ</div>
            <div>{currentBrief?.day}</div>
            <div>{currentBrief?.headline}</div>
            <div>{currentBrief?.shortInformation}</div>
            <div>{currentBrief?.dailyPhoto}</div>
            <div>{currentBrief?.location.location}</div>
            <div>{currentBrief?.flightIds}</div>
            {
                flights?.map(flight => (
                    <div>{flight}</div>
                ))

            }


            {/* <div>----{flightsHandler(currentBrief?.flightIds)}---</div>*/}


        </div>
    )
}

export default Brief;
