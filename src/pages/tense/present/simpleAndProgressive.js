import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../../features/planYourDay/planYourDaySlice";
import getLocationForCharacter from "../../../helper/getLocationForCharacter";
import getScenesForLocation from "../../../helper/getScenesForCharacter";

const SimpleAndProgressive = () => {
  const location = useLocation();

  const selectedSceneID = location.state && location.state.selectedSceneID;
  console.log(selectedSceneID);

  const [scenesForLocation, setScenesForLocation] = useState([]);

  useEffect(() => {
    const fetchScenes = async () => {
      try {
        console.log(
          getLocationForCharacter(characters[characterId].Name).replace(" ", "")
        );
        const scenesForLocation = await getScenesForLocation(
          getLocationForCharacter(characters[characterId].Name).replace(" ", "")
        );

        console.log(getLocationForCharacter(characters[characterId].Name));
        setScenesForLocation(scenesForLocation.scenes);
        console.log(scenesForLocation.scenes);
      } catch (error) {
        console.error("Error fetching scenes:", error);
      }
    };

    fetchScenes();
  }, []);

  let { sceneId } = useParams();

  let characterId = sceneId - 1;

  let conversationID = "e9a5d";

  const characters = useSelector(selectCharacters);
  // let scenarios =
  //   scenes[characters[characterId].Name.toLowerCase().replace(" ", "")];

  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        <div className="text-2xl"> {selectedSceneID}</div>
        <div className="text-2xl"> {characterId}</div>
        <div className="text-2xl"> Past Tense</div>
        <div className="text-2xl">Present Tense</div>
        <div className="text-lg">-Simple</div>
        <div className="text-lg">-Progressive</div>
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
        <div className="text-2xl pb-2">Grammar: Verb Tense</div>

        <div className="text-xl pb-2">
          During Your Day: Completing Your Task
        </div>

        <div className="text-xl pb-2">Begin Your Task</div>

        <div className="text-xl pb-2">It is 9:00 a.m in the MORNING.</div>

        <div className="text-xl pb-2">
          Scenario: I meet the {characters[characterId].Name} at the{" "}
          {getLocationForCharacter(characters[characterId].Name)}
        </div>

        <div className="pb-2">
          <p className="text-xl">Pick a task you would like to complete:</p>
          <ul>
            {scenesForLocation.map((scene, index) => {
              return (
                <li className="text-lg space-x-3" key={index}>
                  <input
                    type="radio"
                    id={`${scene.id}`}
                    name="scene"
                    value={scene.title}
                  />
                  <label htmlFor={`scene${index}`}>{scene.title}</label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-xl">
          I am meeting with the {characters[characterId].Name} to report
          symptoms of the flu
        </div>
      </div>

      <Link
        to={`/sentence-structure/planYourDay/${sceneId}/present-simpleAndProgressive/${selectedSceneID}`}
      >
        Let's begin now with your task
      </Link>
    </div>
  );
};

export default SimpleAndProgressive;
