import { IWeather } from "~/components/WeatherViewport";

export const ViewController = ({ props }: { props: IWeather }) => {
    var time = parseInt(new Date().toLocaleTimeString("en-GB", { timeZone: props.timezone, hour: '2-digit' }));
    
    if(time >= 18 && time <= 23 || time >= 0 && time <= 7) {
        return 'bg-gradient-to-t from-slate-800 to-gray-900';
    } 

    if(props.currentConditions.conditions === 'Overcast') {
        return 'bg-gradient-to-t from-slate-700 to-slate-600';
    }

    if(time >= 8 && time <= 17) {
        return 'bg-gradient-to-t from-sky-500 to-blue-500'
    }

    return 'bg-gradient-to-t from-sky-500 to-blue-500';
}
