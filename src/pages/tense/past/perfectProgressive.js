import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import getLocationForCharacter from "../../../helper/getLocationForCharacter";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../../features/planYourDay/planYourDaySlice";
import scenes from "../../../data";
const PastPerfectProgressive = () => {
  let { sceneId } = useParams();
  const characters = useSelector(selectCharacters);

  let scenarios =
    scenes[characters[sceneId - 1].Name.toLowerCase().replace(" ", "")];

  console.log(characters[sceneId - 1]);
  console.log(scenes["doctor"]);
  console.log(scenarios);

  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        <div className="text-2xl"> {sceneId - 1}</div>
        <div className="text-2xl"> Past Tense</div>
        <div className="text-lg">Perfect-Progressive</div>
        <div className="text-2xl">Present Tense</div>
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
            {getLocationForCharacter(characters[sceneId - 1].Name)}{" "}
          </span>
          with the
          <span className="profession"> {characters[sceneId - 1].Name} </span>
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
          {scenarios.scene.map((scene, index) => (
            <div className="flex flex-row gap-2" key={index}>
              {index + 1 + ". " + `${scene}`}
            </div>
          ))}
        </ul>

        <p>
          By the end of the <span className="time-period">day</span>, I will
          have met with the{" "}
          <span className="profession">{characters[sceneId - 1].Name}</span> at
          the
          <span className="location">
            {getLocationForCharacter(characters[sceneId - 1].Name)}
          </span>
          .
        </p>
      </div>
      <Link
        to={`/sentence-structure/planYourDay/${
          parseInt(sceneId) + 1
        }/future-perfect`}
      >
        Let's prepare now to meet the {characters[sceneId].Name}
      </Link>
    </div>
  );
};

export default PastPerfectProgressive;
