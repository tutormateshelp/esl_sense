import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { selectCharacters } from "../features/planYourDay/planYourDaySlice";
import { useSelector } from "react-redux";
import getLocationForCharacter from "../helper/getLocationForCharacter";

const Page7 = () => {
  const characters = useSelector(selectCharacters);

  let characterId = 1;
  const sceneId = 2;

  const TotalScenes = 3;

  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        {/* <div className="text-2xl"> {characterId}</div> */}
        <div className="text-2xl"> Past Tense</div>
        <div className="text-2xl">Present Tense</div>
        <div className="text-lg">-Perfect</div>
        <div className="text-2xl">Future Tense</div>
        <Link
          to="present-perfect/tenses"
          target="_blank"
          className="flex flex-row items-center"
        >
          Plan-Your-Day tense template
          <FaArrowUpRightFromSquare className="ml-1" />
        </Link>
      </div>
      <div className="flex flex-col justify-center h-[100vh] -mt-20">
        <div className="text-2xl pb-2">Grammar: Verb Tense</div>
        <div className="text-xl pb-2">During Your Day: Review Your Task</div>
        <div className="text-xl pb-2">End of Your Task: Review Your Task</div>
        <div className="text-xl pb-2">It is 10:00 a.m in the MORNING.</div>
        <div className="pb-2">
          <p className="text-xl">Q: Who have you met with?</p>
          <p className="text-lg">
            A: I have met with the{" "}
            {characters[0].Name.replace(" ", "").toUpperCase()}.
          </p>
        </div>
        <div className="pb-2">
          <p className="text-xl">Checklist</p>
          <p className="text-xl">Q: Who do you still need to meet with?</p>
          <p className="text-lg">A: I still need to:</p>
          <ul>
            <li className="text-lg">
              Meet the {characters[1].Name.replace(" ", "").toUpperCase()}
            </li>

            <li className="text-lg">
              Meet the {characters[2].Name.replace(" ", "").toUpperCase()}
            </li>
          </ul>
        </div>
      </div>

      {/* {sceneId == 1 ? (
        <Link
          to={`/sentence-structure/planYourDay/${parseInt(
            sceneId
          )}/present-perfect-progressive`}
        >
          Okay, let's prepare to meet your {characters[sceneId].Name}.
        </Link>
      ) : sceneId == 2 ? (
        <Link
          to={`/sentence-structure/planYourDay/${link_serial}/past-perfect-progressive`}
        >
          Okay, let's prepare to meet your {characters[sceneId].Name}.
        </Link>
      ) : (
        <Link to={`/sentence-structure/planYourDay/${sceneId}/past-simple`}>
          Okay, let's prepare to meet your {characters[sceneId].Name}.
        </Link>
      )} */}

      <Link to={`/8`}>
        Okay, let's prepare to meet your {characters[1].Name}.
      </Link>
    </div>
  );
};

export default Page7;
