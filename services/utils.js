const Utils = {
  fetchData: async (url) => {
    const options = {
      method: "GET",
      mode: "cors",
    };
    try {
      const data = await fetch(url, options);
      const response = await data.json();
      return response;
    } catch (err) {
      console.log("Error getting cards", err);
    }
  },
  convertDegreeToText(angle) {
        const directions = ['North', 'North-West', 'West', 'South-West', 'South', 'South-East', 'East', 'North-East'];
        return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
  },
};

export default Utils;
