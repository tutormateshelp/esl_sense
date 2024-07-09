import React from "react";
import { Link, useParams } from "react-router-dom";

const ConversationTemplate = () => {
  let { sceneId } = useParams();

  return (
    <div>
      <div>conversationTemplate</div>
      <Link to={`/sentence-structure/planYourDay/${sceneId}/present-perfect`}>
        Let's begin now with your task
      </Link>
    </div>
  );
};

export default ConversationTemplate;
