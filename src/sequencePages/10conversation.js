import React from "react";
import { Link, useParams } from "react-router-dom";

const ConversationTemplate_Page10 = () => {
  return (
    <div className="flex flex-col jhustify-evenly items-center text-3xl min-w-screen min-h-screen p-16">
      <div> ---conversationTemplate goes here---</div>
      <Link className="mb-0 mt-auto" to={`/11`}>Let's begin now with your task</Link>
    </div>
  );
};

export default ConversationTemplate_Page10;
