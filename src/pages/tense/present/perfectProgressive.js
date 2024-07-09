import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import getLocationForCharacter from "../../../helper/getLocationForCharacter";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../../features/planYourDay/planYourDaySlice";
import scenes from "../../../data";

const PresentPerfectProgressive = () => {
  const [scenarios, setScenarios] = useState([]);

  let { sceneId } = useParams();
  let characterId = sceneId - 1;

  const characters = useSelector(selectCharacters);

  console.log(characters[sceneId].Name);

  console.log(scenes.manager);
  console.log(characters[sceneId].Name.toLowerCase().replace(" ", ""));
  console.log(scenarios);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(sceneId);
        const location = getLocationForCharacter(
          characters[characterId].Name
        ).replace(" ", "");

        const api_link = `https://plan-your-day-api-v3.vercel.app/getConversation/location/${location}`;
        console.log(api_link);

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

  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        <div className="text-2xl"> {characterId}</div>
        <div className="text-2xl"> Past Tense</div>
        <div className="text-2xl">Present Tense</div>
        <div className="text-lg">Perfect-Progressive</div>
        <div className="text-2xl">Future Tense</div>
        <Link
          to="tenses"
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
            {getLocationForCharacter(characters[sceneId].Name)}
            {console.log(sceneId)}
          </span>
          with the
          <span className="profession"> {characters[sceneId].Name} </span>
          this
          <span className="time-period"> MORNING</span>.
        </p>
        <ul>
          {scenarios.map((scenes, index) => {
            console.log(scenes);
            return <li key={index}>{scenes.title}</li>;
          })}
        </ul>

        <p>
          By the end of the <span className="time-period">day</span>, I will
          have met with the{" "}
          <span className="profession">{characters[sceneId].Name}</span> at the
          <span className="location">
            {getLocationForCharacter(characters[sceneId].Name)}
          </span>
          .
        </p>
      </div>

      <Link to={`/sentence-structure/planYourDay/${sceneId}/future-perfect`}>
        Let's prepare now to meet the {characters[sceneId].Name}.
      </Link>
    </div>
  );
};

export default PresentPerfectProgressive;
