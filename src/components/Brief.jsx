import React, {useEffect, useState} from "react";
import {flightsHandler} from "../utils/flightsHandler";
import {useNavigate} from "react-router-dom";

function Brief(props) {
    const currentBrief = props.dataBrief.find(x => x.id == props.briefId)
    const [flights, setFlights] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function getFlights() {
            const response = await flightsHandler(currentBrief?.flightIds)
            setFlights(response)
        }
        getFlights()
    }, [navigate])

    const prevBrief = (id) => {
        const index = props.dataBrief.findIndex((element) => element.id === (Number(id)))
        index === 0
            ? navigate("/")
            : navigate('/brief/' + (props.dataBrief[index - 1].id))
    }

    const nextBrief = (id) => {
        const index = props.dataBrief.findIndex((element) => element.id === (Number(id)))
        index === (props.dataBrief.length-1)
            ? navigate("/")
            : navigate('/brief/' + (props.dataBrief[index + 1].id))
    }

    return (
        <div>
            <div className="container flex justify-center">
                <svg className="w-50 h-50 flex-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     onClick={() => {
                         prevBrief(props.briefId)
                     }}
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19l-7-7 7-7"></path>
                </svg>
                <div className="max-w-2xl py-3">
                    <div className="bg-white relative shadow-lg transition duration-500 rounded-lg">
                        <img className="rounded-t-lg"
                             src={currentBrief?.dailyPhoto}
                             alt=""/>
                        <div className="py-6 px-8 rounded-lg bg-white">
                            <h1 className="text-gray-700 font-bold text-2xl mb-3">
                                {currentBrief?.headline}
                            </h1>
                            <p className="text-gray-700 tracking-wide">
                                {currentBrief?.shortInformation}
                            </p>
                            {
                                flights?.map(flight => (
                                    <div className="text-gray-300 tracking-wide">{flight}</div>
                                ))                            }
                            <button
                                onClick={() => navigate("/")}
                                className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                            >
                                Back to main menu
                            </button>
                        </div>
                        <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                            <span className="text-md">{currentBrief?.location.location}</span>
                        </div>
                    </div>
                </div>
                <svg className="w-50 h-50 flex-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     onClick={() => {
                         nextBrief(props.briefId)
                     }}
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
    )
}

export default Brief;
