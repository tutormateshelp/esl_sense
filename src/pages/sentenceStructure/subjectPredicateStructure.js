import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { useSelector } from "react-redux";
import { selectCharacters } from "../../features/planYourDay/planYourDaySlice";
import getLocationForCharacter from "../../helper/getLocationForCharacter";

const SubjectPredicate = () => {
  const character = useSelector(selectCharacters);

  return (
    <div className="p-10 flex justify-between flex-col min-h-screen">
      <div className="flex flex-col space-y-5 ">
        <div className="flex justify-end items-end flex-col space-y-2">
          <div className="text-3xl font-bold">Subject and Predicate</div>
          <div className="flex items-center space-x-2">
            <Link to="examples" target="_blank">
              Plan-Your-Day sentence structure template
            </Link>
            <FaArrowUpRightFromSquare />
          </div>
        </div>

        <div>
          Sentence Structure: <span className="font-bold">Subject</span> and{" "}
          <span className="font-bold">Predicate</span>
        </div>

        <h2>Planning Your Day</h2>

        <table className="table-auto max-w-fit">
          <thead className="border">
            <tr>
              <th className="px-4 py-2 border-r-2">Subject</th>
              <th className="px-4 py-2 border-r-2 border-b-[1px] ">
                Predicate
              </th>
            </tr>
          </thead>
          <tbody className="border-[1px]">
            {character.map((character, index) => (
              <tr className="border-b-2" key={index}>
                <td className="px-4 py-2 text-center border-r-2">I</td>
                <td className="px-4 py-2 border-r-2">
                  will meet the {character.Name} at the{" "}
                  {getLocationForCharacter(character.Name)}
                </td>
              </tr>
            ))}

            {/* <tr className="border-b-2">
            <td className="px-4 py-2 text-center border-r-2">I</td>
            <td className="px-4 py-2 border-r-2">
              will meet the {character[0].Name} at the HOSPITAL
            </td>
          </tr>
          <tr className="border-b-2">
            <td className="px-4 py-2 text-center border-r-2">I</td>
            <td className="px-4 py-2 border-r-2">
              will meet the BANK TELLER at the HOSPITAL
            </td>
          </tr>
          <tr className="border-b-2">
            <td className="px-4 py-2 text-center border-r-2">I</td>
            <td className="px-4 py-2 border-r-2">
              will meet the LANDLORD at my APARTMENT
            </td>
          </tr> */}
          </tbody>
        </table>
      </div>
      <Link to="/sentence-structure/clauses"> Let's look at clauses now</Link>
    </div>
  );
};

export default SubjectPredicate;
