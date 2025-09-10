const coordinates = { lat: "40.71427", lon: "-74.00597" };
const apiKey = "d51c9630db852b05ae7a55771600ac3c";

const weatherConditionImages = {
  day: {
    default: {
      name: "default",
      image: new URL("../assets/day/default.png", import.meta.url).href,
    },
    clear: {
      name: "clear",
      image: new URL("../assets/day/clear.png", import.meta.url).href,
    },
    clouds: {
      name: "clouds",
      image: new URL("../assets/day/clouds.png", import.meta.url).href,
    },
    atmosphere: {
      name: "atmosphere",
      image: new URL("../assets/day/atmosphere.png", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/day/rain.png", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/day/snow.png", import.meta.url).href,
    },
    thunderstorm: {
      name: "thunderstorm",
      image: new URL("../assets/day/thunderstorm.png", import.meta.url).href,
    },
  },
  night: {
    default: {
      name: "default",
      image: new URL("../assets/night/default.png", import.meta.url).href,
    },
    clear: {
      name: "clear",
      image: new URL("../assets/night/clear.png", import.meta.url).href,
    },
    clouds: {
      name: "clouds",
      image: new URL("../assets/night/clouds.png", import.meta.url).href,
    },
    atmosphere: {
      name: "atmosphere",
      image: new URL("../assets/night/atmosphere.png", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/night/rain.png", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/night/snow.png", import.meta.url).href,
    },
    thunderstorm: {
      name: "thunderstorm",
      image: new URL("../assets/night/thunderstorm.png", import.meta.url).href,
    },
  },
};
export { coordinates, apiKey, weatherConditionImages };
