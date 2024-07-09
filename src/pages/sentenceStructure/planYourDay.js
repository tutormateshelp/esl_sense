import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import getLocationForCharacter from "../../helper/getLocationForCharacter";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../features/planYourDay/planYourDaySlice";

const PlanYourDay = () => {
  //Future Simple Page

  let { sceneId } = useParams();

  let characterId = sceneId - 1;

  const character = useSelector(selectCharacters);

  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        <div className="text-2xl"> {characterId}</div>
        <div className="text-2xl"> Past Tense</div>
        <div className="text-2xl">Present Tense</div>
        <div className="text-2xl">Future Tense</div>
        <div className="text-lg">Simple</div>
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
        <div className="text-2xl pb-2">Grammar: Verb Tense</div>

        <div className="text-xl pb-2">Start Your Day: Plan Your Day</div>

        {character.map((character, index) => (
          <div className="text-xl" key={index}>
            I will meet the {character.Name} at the
            {getLocationForCharacter(character.Name)}
          </div>
        ))}
      </div>
      <Link
        to={`/sentence-structure/planYourDay/${sceneId}/future-perfect-progressive`}
      >
        Let's Begin Your Day now
      </Link>
    </div>
  );
};
export default PlanYourDay;
