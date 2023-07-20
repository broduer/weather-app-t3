import { number } from "zod";
import Header from "./viewport/weather/Header";
import Day from "./viewport/weather/forecast/Day";
import Week from "./viewport/weather/forecast/Week";

export interface IWeather {
    resolvedAddress: string,
    currentConditions: any,
    days: any,
    timezone: string,
}

const WeatherViewport = ({props, loading}: {props: IWeather, loading: boolean}) => {
    return(
        <div className="grid place-items-center gap-12 py-12">
            <Header props={props} loading={loading}/>
            <Day props={props} loading={loading}/>
            <Week props={props} loading={loading}/>
        </div>
    );
};

export default WeatherViewport;