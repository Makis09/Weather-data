
class SingleDayInfo {
  constructor(info, units, clickHandler) {
    this.info = info;
    this.tempUnit = units.tempUnit;
    this.clickHandler = clickHandler;
  }
  render() {
    const { day, temp, icon } = this.info;
    const element = document.createElement("div");
    element.className = "SingleDayInfo";
    element.innerHTML = `
        <span>${day.day.substring(0, 3)}</span>
        <img src='http://openweathermap.org/img/w/${icon}.png'>
        <span>${temp}&#xb0 ${this.tempUnit}</span>`;

    element.addEventListener("click", () => {
      this.clickHandler( day.date);
    });
    document.querySelector(".ListOfDays-container").append(element);
  }
}

export default SingleDayInfo;

