import React, {useEffect, useState} from "react";
import {vamoosAPI} from "../api/api";
import Brief from "./Brief";
import {useParams, useNavigate} from "react-router-dom";

function BriefContainer() {
    const [dataBrief, setDataBrief] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const {briefId} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await vamoosAPI.getData()
            setDataBrief(response.brief)
        }
        fetchMyAPI()
    }, [])

    useEffect(() => {
        if (dataBrief.length !== 0) {
            setIsLoading(false);

        }
    }, [dataBrief]);

    console.log('dataBrief', dataBrief)
    console.log('isLoading', isLoading)
    console.log('briefId', briefId, typeof briefId)
    /*console.log('dataBriefITEM', dataBrief[briefId].id)*/
    return (
        <div>
            {isLoading ? (
                    <h1>Loading...</h1>
                ) :

                <Brief
                    dataBrief={dataBrief}
                    briefId={briefId}
                />}

        </div>
    )
}

export default BriefContainer;
