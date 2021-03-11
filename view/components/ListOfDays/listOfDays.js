import SingleDayInfo from "./SingleDayInfo/singleDayInfo.js";

const ListOfDays = {
  render(data, clickHandler) {
    document.querySelector(".ListOfDays-container").innerHTML = ''
    data.days
      .map((day) => {
        const DayInfo = new SingleDayInfo(day, data.units, clickHandler);
         DayInfo.render();
      })
  },
};

export default ListOfDays;
