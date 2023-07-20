import React from "react";
import { IWeather } from "~/components/WeatherViewport";

const Day = ({ props, loading }: { props: IWeather, loading: boolean }) => {
  const currentTime = new Date().toLocaleTimeString("en-GB", { timeZone: props.timezone, hour: '2-digit' });
  const hoursInDay = 24;
  var loadingDefault = loading ? 'bg-white bg-opacity-10 rounded-lg' : 'bg-transparent';
  const generateForecast = () => {
    return Array.from({ length: hoursInDay }, (_, index) => {
      const hourIndex = (parseInt(currentTime) + index) % hoursInDay;
      const dayIndex = (hourIndex == 0 && index != 0) ? 1 : 0; 
      const isSunsetHour = props.days[dayIndex].sunset.substring(0, 2) === hourIndex.toString();
      const weatherIcon = isSunsetHour ? "sunset.png" : `${props.days[dayIndex].hours[hourIndex].icon}.png`;
      const temp = Math.round(props.days[dayIndex].hours[hourIndex].temp);

      return (
        <div className={`grid grid-flow-row gap-2 place-items-center relative w-[85px] ${loading ? 'text-transparent' : 'text-white'}`} key={hourIndex}>
          <p className={`relative ${loadingDefault}`}>
            <span className="text-lg">{formatTime(hourIndex).hour}</span>
            <span className="text-sm relative">{formatTime(hourIndex).meridiem}</span>
          </p>
          <div className={`absolute w-8 h-8 object-contain ${loadingDefault} ${loading ? 'block' : 'none'}`}/>
          <img src={`/images/${weatherIcon}`} className={`w-8 h-8 object-contain ${loading ? 'opacity-0' : 'opacity-100'}`} />
          <p className={`${loadingDefault}`}>{temp}<span className="text-2xl absolute -mt-[2px]">°</span></p>
        </div>
      );
    });
  };

  return (
    <div className="rounded-2xl bg-opacity-5 bg-black max-w-xl w-full text-white px-8 py-8 select-none drop-shadow-sm">
      <div className={`grid grid-flow-col place-content-start text-center ${loading ? 'overflow-x-hidden pb-[32px]' : 'overflow-x-scroll pb-6'} pb-6`}>
        {generateForecast()}
      </div>
    </div>
  );
};

function formatTime(time: number) {
  const hour = time % 12 || 12;
  const meridiem = time >= 12 ? "PM" : "AM";
  return { hour, meridiem };
}

export default Day;
