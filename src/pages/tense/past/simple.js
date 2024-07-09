import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Simple = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col float-end">
        <div className="text-2xl"> Past Tense</div>
        <div className="text-lg">-Simple</div>
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
        <div className="text-2xl pb-2">Grammar: Verb Tense</div>

        <div className="text-xl pb-2">End of Your Day: Review Your Day</div>

        <div className="pb-2">
          <p className="text-xl">Q: List who you met with today:</p>
          <ul>
            <li className="text-lg">I met with the DOCTOR today</li>
            <li className="text-lg">I met with the BANK TELLER today</li>
            <li className="text-lg">I met with the LANDLORD today</li>
          </ul>
        </div>
      </div>

      <Link to="/sentence-structure/End-Of-Day">Proceed to the next day.</Link>
    </div>
  );
};

export default Simple;
