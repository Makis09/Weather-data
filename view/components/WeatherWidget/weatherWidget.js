import Utils from '../../../services/utils.js';

const WeatherWidget = {
  render(dayInfo, units) {
    console.log(dayInfo.windDirection);
    let view = `
          <div class="WeatherWidget">
            <h4 class="date">${dayInfo.day.date}</h4>
            <h2  class="day">${dayInfo.day.day}</h2>
            <div class="temperature">
                <img src='http://openweathermap.org/img/w/${dayInfo.icon}.png'>
                <span>${dayInfo.temp}&#xb0 ${units.tempUnit}</span>
            </div>
            <h3>${dayInfo.type}</h3>
            <div class="wind">
                <div>Wind Speed: <br/>${dayInfo.windSpeed}${units.windSpeedUnit}</div>
                <div>Wind Direction: 
                    <br/> 
                    <div>${Utils.convertDegreeToText(dayInfo.windDirection)}</div> 
                    <div class="arrow" style="transform: rotate(-${dayInfo.windDirection}deg)">&#x2191;</div>
                </div>
            </div>
          </div>
        `;
    return view;
  },
};

export default WeatherWidget;
