import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import getLocationForCharacter from "../helper/getLocationForCharacter";
import { useSelector } from "react-redux";
import { selectCharacters } from "../features/planYourDay/planYourDaySlice";
import { ThreeDots } from "react-loader-spinner";

const Page12 = () => {
  let characterId = 2;
  const characters = useSelector(selectCharacters);
  const [scenarios, setScenarios] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    scenarios.length > 0 && setIsLoading(false);
  }, [scenarios]);

  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        {/* <div className="text-2xl"> {characterId}</div> */}
        <div className="text-2xl"> Past Tense</div>
        <div className="text-lg">Perfect-Progressive</div>
        <div className="text-2xl">Present Tense</div>
        <div className="text-2xl">Future Tense</div>
        <Link
          to="past-perfectProgressive/tenses"
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
        {/* <ul>
          {scenarios.scene.map((scenes, index) => {
            console.log(scenes);
            return <li key={index}>{scenes}</li>;
          })}
        </ul> */}

        <ul className="p-2">
          {scenarios.map((scene, index) => (
            <div className="flex flex-row gap-2" key={index}>
              {`${index + 1 + ". " + scene.title}`}
            </div>
          ))}
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
          // to={`/sentence-structure/planYourDay/${
          //   parseInt(characterId) + 1
          // }/future-perfect`}
          to={`/13`}
        >
          Let's prepare now to meet the {characters[characterId].Name}
        </Link>
      )}
    </div>
  );
};

export default Page12;
