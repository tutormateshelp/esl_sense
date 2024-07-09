import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCharacters } from "../features/planYourDay/planYourDaySlice";
import getLocationForCharacter from "../helper/getLocationForCharacter";

const Page4 = () => {
  let { sceneId } = useParams();
  let characterId = 1;

  const characters = useSelector(selectCharacters);
  console.log(characters);
  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        {/* <div className="text-2xl"> {characterId}</div> */}
        <div className="text-2xl"> Past Tense</div>
        <div className="text-2xl">Present Tense</div>
        <div className="text-2xl">Future Tense</div>
        <div className="text-lg">Progressive</div>
        <Link
          to="future-progressive/tenses"
          target="_blank"
          className="flex flex-row items-center"
        >
          Plan-Your-Day tense template
          <FaArrowUpRightFromSquare className="ml-1" />
        </Link>
      </div>
      <div className="day-planner flex flex-col justify-center h-[100vh] -mt-20">
        <h2>Begin Your Day: Plan Your Day</h2>
        <p>
          It is <span className="time">8:00</span> in the
          <span className="time-period">MORNING</span>.
        </p>
        <h3>Q: Who will you be meeting today?</h3>
        <p>
          A: I will be meeting{" "}
          {characters.map((character, index) => (
            <span key={index}>
              {index === characters.length - 1 ? "and " : ""}
              the {character.Name}
              {index !== characters.length - 1 ? " ," : ""}
            </span>
          ))}
        </p>
        <h3>Q: What places will you be traveling to today?</h3>
        <p>
          A: I will be traveling to{" "}
          {characters.map((character, index) => (
            <span key={index}>
              {index === characters.length - 1 ? "and " : ""}
              the {getLocationForCharacter(character.Name)}
              {index !== characters.length - 1 ? " ," : ""}
            </span>
          ))}
        </p>
      </div>

      <Link
        // to={`/sentence-structure/planYourDay/${sceneId}/future-perfect`}>
        to={`/5`}
      >
        Let's go on with the day now
      </Link>
    </div>
  );
};

export default Page4;
