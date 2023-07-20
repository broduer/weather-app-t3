import { IWeather } from "~/components/WeatherViewport";

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Week = ({props, loading}: {props: IWeather, loading: boolean}) => {
    var loadingDefault = loading ? 'bg-white bg-opacity-10 rounded-lg' : 'bg-transparent';
    return(
        <div className={`rounded-2xl bg-opacity-5 bg-black max-w-xl w-full px-8 py-8 grid grid-flow-row  gap-6 text-center overflow-hidden select-none drop-shadow-sm ${loading ? 'text-transparent' : 'text-white'}`}>
            {[...Array(7)].map((val, index) => {
                return(
                    <div className="grid grid-flow-col place-content-between gap-2 drop-shadow-sm">
                        <p className={`text-xl ${loadingDefault}`}>{(index == 0) ? 'Today' : weekdays[new Date(props.days[index].datetime).getDay()]}</p>
                        <div className={`absolute place-self-center mr-48 w-8 h-8 object-contain ${loadingDefault} ${loading ? 'block' : 'none'}`}/>
                        <img src={`/images/${props.days[index].icon}.png`} className={`absolute place-self-center mr-48 w-8 ${loading ? 'opacity-0' : 'opacity-100'}`}/>
                        <div className="grid grid-flow-col text-lg gap-2 ">
                            <p className={`text-opacity-60 ${loadingDefault}`}>{Math.round(props.days[index].tempmin)}°</p>
                            <div className="w-40 bg-black bg-opacity-10 h-1 rounded-full mt-3 mr-2 ml-2 relative">
                                {/* <span className="absolute h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-300 to-yellow-200 w-20 right-10"></span> */}
                            </div>
                            <p className={`${loadingDefault}`}>{Math.round(props.days[index].tempmax)}°</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Week;