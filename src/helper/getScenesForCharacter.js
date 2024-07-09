// const BACKEND_API_URL = env.process.BACKEND_API_URL;

const getScenesForLocation = async (location) => {
  try {
    // let scenes = fetch(BACKEND_API_URL);
    const url = `http://localhost:2002/getConverstion/location/${location}`;
    console.log(url);

    let scenes = await fetch(url);

    return scenes.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getScenesForLocation;
