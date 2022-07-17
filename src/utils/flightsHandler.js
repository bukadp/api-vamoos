import {vamoosAPI} from "../api/api";

export const flightsHandler = async (flightsIds) => {
    let result;
    if (flightsIds.length) {
        result = await fetchMyAPI(flightsIds);
    } else {
        result = ['There was no flight']
    }
    return result
}


async function fetchMyAPI(flightsIds) {
    let result = [];
    let foundFlightAlertsIds = [];
    const response = await vamoosAPI.getData()
    //.then(data => data.flightAlerts)
    let flightAlerts = response.flightAlerts
    for (let i = 0; i < flightAlerts.length; i++) {
        if (flightsIds.includes(flightAlerts[i].id)) {
            console.log('flightsHandler', [i], flightAlerts[i].id)
            //foundFlightAlertsIds.push(flightAlerts[i].id)

            result.push(`
        Departure city: ${flightAlerts[i].flights[0]?.departure?.cityName}
        Departure time: ${flightAlerts[i].flights[0]?.departure?.scheduled}
        Arrival city: ${flightAlerts[i].flights[0]?.arrival?.cityName}
        Arrival time: ${flightAlerts[i].flights[0]?.arrival?.scheduled}`)
        } else
            console.log('end')
    }


    return result

}


/*            const findId = (item) => {
                if (item.id === flightsId) {
                    return (`Departure city: ${item.flights[0].departure.cityName}
                Departure time: ${item.flights[0].departure.scheduled}
                Arrival city: ${item.flights[0].arrival.cityName}
                Arrival time: ${item.flights[0].arrival.scheduled}
                `)
                } else
                    return;
            }*/
