import { IWeather } from "~/components/WeatherViewport";

const Header = ({props, loading}: {props: IWeather, loading: boolean}) => {
    var loadingDefault = loading ? 'bg-white bg-opacity-10 rounded-lg' : 'bg-transparent';
    return(
        <div className="w-full grid place-items-center mb-10">
            <div className={`grid place-items-center text-white gap-4 drop-shadow-lg ${loading ? 'text-transparent' : 'text-white'}`}>
                <h2 className={`text-5xl ${loadingDefault}`}>{props.resolvedAddress}</h2>
                <h3 className={`text-8xl ${loadingDefault}`}>{Math.round(props.currentConditions.temp)}<span className="absolute">°</span></h3>
                <h3 className={`text-4xl ${loadingDefault}`}>{props.currentConditions.conditions}</h3>
                <h3 className={`text-4xl ${loadingDefault}`}>L: {Math.round(props.days[0].tempmin)}<span className="absolute">°</span> &nbsp;&nbsp;H: {Math.round(props.days[0].tempmax)}<span className="absolute">°</span></h3>
            </div>
        </div>
    );
}

export default Header;