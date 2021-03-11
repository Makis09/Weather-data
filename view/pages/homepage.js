import ListOfDays from "../components/ListOfDays/listOfDays.js";
import WeatherWidget from "../components/WeatherWidget/weatherWidget.js";
import Utils from "../../services/utils.js";

const HomePage = {
  state: {
    isLoading: false,
    city: "Skopje",
    daysToShow: 15,
    units: {
      windSpeedUnit: "m/s",
      tempUnit: "C",
    },
    weatherData: null,
  },

  async render() {
    let view = `
        <div class="homepage">
            <div> </div>
            <div class="ListOfDays-container">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
            <div class="WeatherWidget-container">
            
            </div>
        </div>
        `;
    return view;
  },
  async after_render() {
    const data = await Utils.fetchData(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&units=metric&cnt=${this.state.daysToShow}&APPID=c10bb3bd22f90d636baa008b1529ee25`
    );

    const daysInfo = data.list.map((day, index) => {
      const result = new Date();
      result.setDate(result.getDate() + index);

      return {
        day: {
          day: result.toLocaleString("en-us", { weekday: "long" }),
          date: `${result.getDate()}.${result.getMonth() + 1}.${result.getFullYear()}`,
        },
        temp: Math.round(day.temp.day),
        windDirection: day.deg,
        windSpeed: day.speed,
        type: day.weather[0].description,
        icon: day.weather[0].icon,
        details: day,
      };
    });
    const weatherData = {
      units: this.state.units,
      windSpeedUnit: this.state.windSpeedUnit,
      days: daysInfo,
    };
    this.state.weatherData = weatherData;

    ListOfDays.render(weatherData, this.updateWidget.bind(this));
    const date = new Date();
    this.updateWidget(`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);
  },
  renderWidget(dayInfo) {
    document.querySelector(
      ".WeatherWidget-container"
    ).innerHTML = WeatherWidget.render(dayInfo, this.state.units);
  },
  updateWidget(date) {
    const selectedDay = this.state.weatherData.days.filter((day) => {
      return day.day.date === date;
    });
    this.renderWidget(selectedDay[0]);
  },
};

export default HomePage;
