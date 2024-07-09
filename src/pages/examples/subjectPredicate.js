import React, { useState } from "react";

function SubjectPredicate() {
  const [selectedSubject, setSelectedSubject] = useState("I");
  const [selectedPronoun, setSelectedPronoun] = useState("I");
  const [selectedPlace, setSelectedPlace] = useState("place");
  const [selectedPerson, setSelectedPerson] = useState("person");

  return (
    <div className="p-10 flex flex-col w-fit h-screen">
      <table className="table-auto mb-20 flex">
        <thead className="border  border-r-0">
          <tr className="flex flex-col">
            <th className="px-4 py-2 border-b-[1px]">Question</th>
            <th className="px-4 py-2  ">Answer</th>
          </tr>
        </thead>
        <tbody className="border-[1px]">
          <tr className="border-b-[1px] ">
            <td className="px-4 py-2 text-center">Who</td>
            <td className="px-4 py-2">will </td>
            <td className="px-4 py-2 relative">
              <select
                id="pronoun"
                name="pronoun"
                className="text-center w-24 rounded-md border"
              >
                <option value="">Pronoun</option>
                <option value="I">I</option>
                <option value="We">We</option>
                <option value="You">You</option>
                <option value="He">He</option>
                <option value="She">She</option>
                <option value="It">It</option>
                <option value="They">They</option>
              </select>
            </td>

            <td className="px-4 py-2 text-center align-middle">
              <span className="mr-2">meet ?</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <select
                id="pronoun"
                name="pronoun"
                className="text-center w-24 rounded-md border"
              >
                <option value="">Pronoun</option>
                <option value="I">I</option>
                <option value="We">We</option>
                <option value="You">You</option>
                <option value="He">He</option>
                <option value="She">She</option>
                <option value="It">It</option>
                <option value="They">They</option>
              </select>
            </td>
            <td className="px-4 py-2">will </td>

            <td className="px-4 py-2 text-center align-middle">
              <span className="mr-2">meet</span>
            </td>
            <td className="px-4 py-2 relative text-center align-middle">
              <span className="mr-2">the</span>
              <select className="text-center rounded-md border">
                <option value="">Person 1</option>
                <option value="Bank Teller">Bank Teller</option>
                <option value="Doctor">Doctor</option>
                <option value="Landlord">Landlord</option>
                <option value="Postman">Postman</option>
                <option value="Firefighter">Firefighter</option>
                <option value="Manager">Manager</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto">
        <thead className="border">
          <tr>
            <th className="px-4 py-2 border-r-2">Subject</th>
            <th colSpan="3" className="px-4 py-2 border-r-2 border-b-[1px] ">
              Predicate
            </th>
          </tr>

          <tr>
            <th className="px-4 py-2 border-r-2"> </th>
            <th className="px-4 py-2 border-r-2">Verb</th>
            <th className="px-4 py-2 border-r-2">Person</th>
            <th className="px-4 py-2">Place</th>
          </tr>
        </thead>
        <tbody className="border-[1px]">
          <tr>
            <td className="px-4 py-2 text-center border-r-2">
              <select
                id="pronoun"
                name="pronoun"
                className="text-center w-24 rounded-md border"
              >
                <option value="">Pronoun</option>
                <option value="I">I</option>
                <option value="We">We</option>
                <option value="You">You</option>
                <option value="He">He</option>
                <option value="She">She</option>
                <option value="It">It</option>
                <option value="They">They</option>
              </select>
            </td>
            <td className="px-4 py-2 border-r-2">will meet</td>
            <td className="px-4 py-2 relative border-r-2">
              <span className="mr-2">the</span>
              <select className="text-leftrounded-md border">
                <option value="">Person 1</option>
                <option value="Bank Teller">Bank Teller</option>
                <option value="Doctor">Doctor</option>
                <option value="Landlord">Landlord</option>
                <option value="Postman">Postman</option>
                <option value="Firefighter">Firefighter</option>
                <option value="Manager">Manager</option>
              </select>
            </td>

            <td className="px-4 py-2 relative">
              <span className="mr-2">at the</span>
              <select className="text-centerrounded-md border">
                <option value="">Select Place</option>
                <option value="bank">Bank</option>
                <option value="hospital">Hospital</option>
                <option value="apartment">Apartment</option>
                <option value="fire station">Fire Station</option>
                <option value="post office">Post Office</option>
                <option value="workplace">Workplace</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={() => {
          window.close();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-48"
      >
        DONE
      </button>
    </div>
  );
}

export default SubjectPredicate;
