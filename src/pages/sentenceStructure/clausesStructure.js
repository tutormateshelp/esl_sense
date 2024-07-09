import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../features/planYourDay/planYourDaySlice";
import getLocationForCharacter from "../../helper/getLocationForCharacter";

const Clause = () => {
  const character = useSelector(selectCharacters);

  return (
    <div className="p-10 flex justify-between flex-col min-h-screen">
      <div className="flex flex-col space-y-5 ">
        <div className="flex justify-end items-end flex-col space-y-2">
          <div className="text-3xl font-bold">Clauses</div>
          <div className="flex items-center space-x-2">
            <Link to="examples" target="_blank">
              Plan-Your-Day sentence structure template
            </Link>
            <FaArrowUpRightFromSquare />
          </div>
        </div>

        <div>
          Sentence Structure:
          <span className="font-bold">Independent Clauses</span>
        </div>
        <h2>Planning Your Day</h2>

        <table className="table-auto max-w-fit">
          <thead className="border"></thead>
          <tbody className="border-[1px]">
            {character.map((character, index) => (
              <tr className="border-b-2" key={index}>
                <td className="px-4 py-2 text-center border-r-2 font-bold">
                  I will meet the
                </td>
                <td className="px-4 py-2 border-r-2">{character.Name}</td>
                <td className="px-4 py-2 border-r-2 font-bold">at the</td>
                <td className="px-4 py-2 border-r-2">
                  {getLocationForCharacter(character.Name)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/sentence-structure/dependentClause">
        Let's look at dependent clauses now
      </Link>
    </div>
  );
};

export default Clause;
