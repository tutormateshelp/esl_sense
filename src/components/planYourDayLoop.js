import React, { useState } from "react";
import Progressive from "../pages/tense/future/progressive";

const planYourDayLoop = (props) => {
  const [currentScene, setCurrentScene] = useState(0);

  const maxScene = 3;

  const doneScene = () => {
    setCurrentScene(currentScene + 1);
  };

  return <Progressive doneScene={doneScene} sceneNumber={currentScene} />;
};

export default planYourDayLoop;
