import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../features/planYourDay/planYourDaySlice";

const generateData = (props) => {
  const { characters, day } = props;
  console.log(characters);
  const statements = [];

  characters.forEach((character, index) => {
    let firstColumn = `Error ${index}`;
    let secondColumn = `Error ${index}`;

    if (index == 1) {
      firstColumn = `Before I meet the ${characters[1].Name},`;
      secondColumn = `I will meet the ${characters[0].Name}.`;
    } else if (index == 0) {
      firstColumn = `After I meet the ${character.Name},`;
      secondColumn = `I will meet the ${characters[1].Name}.`;
    }

    index != characters.length - 1
      ? statements.push({
          firstColumn,
          secondColumn,
        })
      : statements.push({
          firstColumn: `As ${day} approaches,`,
          secondColumn: `I will meet the ${character.Name}.`,
        });
  });

  return statements;
};

const DependentClauseStructure = () => {
  // Example array of characters
  const characters = useSelector(selectCharacters);
  console.log(characters);
  const day = "Monday";

  // Call generateData to get the generated statements
  const data = generateData({ characters, day });

  console.log(data);

  return (
    <div className="p-10 flex justify-between flex-col min-h-screen">
      <div className="flex flex-col space-y-5 ">
        <div className="flex justify-end items-end flex-col space-y-2">
          <div className="text-3xl font-bold">
            Dependent & Independent Clause
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to="examples"
              target="_blank"
              className="flex flex-row items-center"
            >
              Plan-Your-Day sentence structure template
              <FaArrowUpRightFromSquare className="ml-1" />
            </Link>
          </div>
        </div>
        <div>
          Sentence Structure:
          <span className="font-bold">Dependent Clauses</span>
        </div>
        <h2>Planning Your Day</h2>
        <table className="table-auto max-w-fit">
          <thead className="border"></thead>
          <tbody className="border-[1px]  ">
            {/* Render the generated data */}
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 border-r-2 border-b-[1px]">
                  {item.firstColumn}
                </td>
                <td className="border px-4 py-2 border-r-2 border-b-[1px]">
                  {item.secondColumn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <Link to={`/sentence-structure/planYourDay/1/future-simple`}> */}
      <Link to={`/2`}>Okay, let's begin. Let's start your day.</Link>
    </div>
  );
};

export default DependentClauseStructure;
