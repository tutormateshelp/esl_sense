import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCharacters } from "../features/planYourDay/planYourDaySlice";
import getLocationForCharacter from "../helper/getLocationForCharacter";
import toast, { Toaster } from "react-hot-toast";

const Page13 = () => {
  const characters = useSelector(selectCharacters);
  const [scenarios, setScenarios] = useState([]);
  const [LocationForCharacter, setLocationForCharacter] = useState("");
  const [selectedSceneID, setSelectedSceneID] = useState(null);
  const characterId = 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationApiLink = `https://plan-your-day-api-v3.vercel.app/getLocation/${characters[characterId].Name}`;
        const response = await fetch(locationApiLink);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setLocationForCharacter(data.location);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = getLocationForCharacter(
          characters[characterId].Name
        ).replace(" ", "");

        const api_link = `https://plan-your-day-api-v3.vercel.app/getConversation/location/${location}`;

        const response = await fetch(api_link);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setScenarios(data.scenes);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, []);

  const handleRadioChange = (event) => {
    setSelectedSceneID(event.target.value);
  };

  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        {/* <div className="text-2xl"> {characterId}</div> */}
        <div className="text-2xl"> Past Tense </div>
        <div className="text-2xl">Present Tense</div>
        <div className="text-2xl">Future Tense</div>
        <div className="text-lg">Perfect</div>
        <Link
          to="future-perfect/tenses"
          target="_blank"
          className="flex flex-row items-center"
        >
          Plan-Your-Day tense template
          <FaArrowUpRightFromSquare className="ml-1" />
        </Link>
      </div>

      <div className="flex flex-col justify-center h-[100vh] -mt-20">
        <h2>During Your Day: Pick Your Task</h2>
        <p>
          You will be required to pick a task you intend to complete at the{" "}
          <span className="location">
            {getLocationForCharacter(characters[characterId].Name)}{" "}
          </span>
          with the
          <span className="profession"> {characters[characterId].Name} </span>
          this
          <span className="time-period"> MORNING</span>.
        </p>
        <ul>
          {scenarios.map((scene, index) => (
            <div className="flex flex-row gap-2" key={index}>
              <input
                type="radio"
                id={`${scene.title}`}
                name="scenes"
                value={scene.id}
                checked={selectedSceneID === scene.id}
                onChange={handleRadioChange}
              />
              <label htmlFor={`${scene.title}`}>{`${scene.title}`}</label>
            </div>
          ))}
        </ul>

        <p>
          By the end of the <span className="time-period">day</span>, I will
          have met with the{" "}
          <span className="profession">{characters[characterId].Name}</span> at
          the
          <span className="location">{LocationForCharacter}</span>.
        </p>
      </div>
      {selectedSceneID ? (
        <Link
          // to={`/sentence-structure/planYourDay/${sceneId}/present-SimpleAndProgressive`}
          // state={{ selectedSceneID: selectedSceneID }}
          to={`/14`}
          state={{ selectedSceneID: selectedSceneID }}
        >
          Let's prepare now to meet the {characters[characterId].Name}.
        </Link>
      ) : (
        <button
          onClick={() => {
            toast.error(`Please select a task first`);
          }}
        >
          Let's prepare now to meet the {characters[characterId].Name}.
        </button>
      )}

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Page13;
