import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import getLocationForCharacter from "../helper/getLocationForCharacter";
import { useSelector } from "react-redux";
import { selectCharacters } from "../features/planYourDay/planYourDaySlice";
import scenes from "../data";
import { ThreeDots } from "react-loader-spinner";

const Page8 = () => {
  const [scenarios, setScenarios] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  // let characterId = 2;
  let characterId = 1;

  const characters = useSelector(selectCharacters);

  console.log(characters[characterId].Name);

  console.log(scenes.manager);
  console.log(characters[characterId].Name.toLowerCase().replace(" ", ""));
  console.log(scenarios);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(characterId);
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

  useEffect(() => {
    scenarios.length > 0 && setIsLoading(false);
  }, [scenarios]);

  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        {/* <div className="text-2xl"> {characterId}</div> */}
        <div className="text-2xl"> Past Tense</div>
        <div className="text-2xl">Present Tense</div>
        <div className="text-lg">Perfect-Progressive</div>
        <div className="text-2xl">Future Tense</div>
        <Link
          to="present-perfect-progressive/tenses"
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
            {getLocationForCharacter(characters[characterId].Name)}
            {console.log(characterId)}
          </span>
          with the
          <span className="profession"> {characters[characterId].Name} </span>
          this
          <span className="time-period"> MORNING</span>.
        </p>
        <ul>
          {scenarios.map((scenes, index) => {
            console.log(scenes);
            return <li key={index}>{scenes.title}</li>;
          })}
        </ul>

        <ThreeDots
          visible={isLoading}
          height="20"
          width="60"
          color="#4fa94d"
          radius="20"
          ariaLabel="three-dots-loading"
        />

        <p>
          By the end of the <span className="time-period">day</span>, I will
          have met with the{" "}
          <span className="profession">{characters[characterId].Name}</span> at
          the
          <span className="location">
            {getLocationForCharacter(characters[characterId].Name)}
          </span>
          .
        </p>
      </div>

      {isLoading ? (
        <button style={{ cursor: "wait" }} className="disabled text-gray-600">
          Let's prepare now to meet the {characters[characterId].Name}.
        </button>
      ) : (
        <Link
          // to={`/sentence-structure/planYourDay/${characterId}/future-perfect`}>
          to={`/9`}
        >
          Let's prepare now to meet the {characters[characterId].Name}.
        </Link>
      )}
    </div>
  );
};

export default Page8;
