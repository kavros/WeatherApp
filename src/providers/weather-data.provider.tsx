import React from "react"
import { WeatherDataService } from "../services/Weather-data.service"

const WeatherDataContext = 
    React.createContext< {service: WeatherDataService | null} >({service: null});
const WeatherProvider: React.FunctionComponent<{service: WeatherDataService}> = (props) => {
    return (
        <WeatherDataContext.Provider value={{service: props.service}} >
            {props.children}
        </WeatherDataContext.Provider>
    );
}

export { WeatherProvider, WeatherDataContext};