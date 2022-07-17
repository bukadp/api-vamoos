import React, {useEffect, useState} from "react";
import {vamoosAPI} from "../api/api";
import Brief from "./Brief";
import MainPage from "./MainPage";

function MainPageContainer  () {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await vamoosAPI.getData()
            setData(response)
        }
        fetchMyAPI()
    }, [])

    console.log(data)
    return (
        <div>
            {data?.brief.map((brief) =>
                            <MainPage
                                key={brief.id}
                                id={brief.id}
                                day={brief.day}
                                dailyPhoto={brief.dailyPhoto}
                                headline={brief.headline}
                                shortInformation={brief.shortInformation}
                                location={brief.location.location}
                                flightIds={brief.flightIds[0]}
                                brief={brief}
                            />
                        )}
        </div>
    )
}

export default MainPageContainer;

