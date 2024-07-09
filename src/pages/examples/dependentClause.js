import React, { useState } from "react";

function DependentClauseStructure() {
  const [selectedSubject, setSelectedSubject] = useState("I");
  const [selectedPronoun, setSelectedPronoun] = useState("I");
  const [selectedPlace, setSelectedPlace] = useState("place");
  const [selectedPerson, setSelectedPerson] = useState("person");

  return (
    <div className="p-10 flex flex-col w-screen h-screen">
      <div className=" text-2xl font-bold">
        Pick a person. Then fill in the blanks.  
      </div>
      <table className="table-auto mb-20 flex">
        <tbody className="border-[1px]">
          <tr className="border-b-[1px]">
            <td className="px-4 py-2 text-center">As</td>
            <td className="px-4 py-2 relative">
              <select
                id="day"
                name="day"
                className="text-center w-24 rounded-md border"
              >
                <option value="">Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </td>
            <td className="px-4 py-2" colSpan={2}>
              passes,
            </td>
            <td className="px-4 py-2 text-center">who will</td>
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
            <td className="px-4 py-2 text-center align-middle">
              <span className="mr-2">meet ?</span>
            </td>
          </tr>

          <tr className="border-b-[1px]">
            <td className="px-4 py-2 text-center">After</td>
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
            <td className="px-4 py-2">meet(s) the</td>
            <td className="px-4 py-2 relative">
              <select className=" text-left rounded-md border">
                <option value="">Person 1</option>
                <option value="Bank Teller">Bank Teller</option>
                <option value="Doctor">Doctor</option>
                <option value="Landlord">Landlord</option>
                <option value="Postman">Postman</option>
                <option value="Firefighter">Firefighter</option>
                <option value="Manager">Manager</option>
              </select>
            </td>

            <td className="px-4 py-2 text-center">who will</td>
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
            <td className="px-4 py-2 text-center align-middle">
              <span className="mr-2">meet ?</span>
            </td>
          </tr>

          <tr className="border-b-[1px]">
            <td className="px-4 py-2 text-center">Before</td>
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
            <td className="px-4 py-2">meet(s) the</td>
            <td className="px-4 py-2 relative">
              <select className=" text-left rounded-md border">
                <option value="">Person 1</option>
                <option value="Bank Teller">Bank Teller</option>
                <option value="Doctor">Doctor</option>
                <option value="Landlord">Landlord</option>
                <option value="Postman">Postman</option>
                <option value="Firefighter">Firefighter</option>
                <option value="Manager">Manager</option>
              </select>
            </td>

            <td className="px-4 py-2 text-center">who will</td>
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
            <td className="px-4 py-2 text-center align-middle">
              <span className="mr-2">meet ?</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex space-x-5">
        <table className="table-auto">
          <thead className="border">
            <tr>
              <th colSpan={3} className="px-4 py-2 border-r-2 border-b-[1px]">
                Dependent Clause
              </th>
              <th colSpan={3} className="px-4 py-2 border-r-2 border-b-[1px]">
                Independent Clause
              </th>
            </tr>

            <tr>
              <th className="px-4 py-2 border-r-2">Sub Conj.</th>
              <th className="px-4 py-2 border-r-2">Subject</th>
              <th className="px-4 py-2 border-r-2">Verb</th>
              <th className="px-4 py-2 border-r-2">Subject</th>
              <th className="px-4 py-2 border-r-2">Verb</th>
              <th className="px-4 py-2">Phrase</th>
            </tr>
          </thead>
          <tbody className="border-[1px]">
            <tr>
              <td className="px-4 py-2 border-r-2 border-b-2">As</td>
              <td className="px-4 py-2 relative border-r-2  border-b-2">
                <select
                  id="day"
                  name="day"
                  className="text-center w-24 rounded-md border"
                >
                  <option value="">Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </td>
              <td className="px-4 py-2 border-r-2 border-b-2">passes, </td>
              <td className="px-4 py-2 text-center border-r-2 border-b-2">
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
              <td className="px-4 py-2 border-r-2 border-b-2">will meet</td>
              <td className="px-4 py-2 relative border-r-2 border-b-2">
                <span className="mr-2">the</span>
                <select className=" text-left rounded-md border">
                  <option value="">Person 1</option>
                  <option value="Bank Teller">Bank Teller</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Landlord">Landlord</option>
                  <option value="Postman">Postman</option>
                  <option value="Firefighter">Firefighter</option>
                  <option value="Manager">Manager</option>
                </select>
                <span className="ml-2">.</span>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 border-r-2 border-b-2">As</td>
              <td className="px-4 py-2 relative border-r-2  border-b-2">
                <select
                  id="day"
                  name="day"
                  className="text-center w-24 rounded-md border"
                >
                  <option value="">Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </td>
              <td className="px-4 py-2 border-r-2 border-b-2">passes, </td>
              <td className="px-4 py-2 text-center border-r-2 border-b-2">
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
              <td className="px-4 py-2 border-r-2 border-b-2">will meet</td>
              <td className="px-4 py-2 relative border-r-2 border-b-2">
                <span className="mr-2">the</span>
                <select className=" text-left rounded-md border">
                  <option value="">Person 1</option>
                  <option value="Bank Teller">Bank Teller</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Landlord">Landlord</option>
                  <option value="Postman">Postman</option>
                  <option value="Firefighter">Firefighter</option>
                  <option value="Manager">Manager</option>
                </select>
                <span className="ml-2">.</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r-2 border-b-2">As</td>
              <td className="px-4 py-2 relative border-r-2  border-b-2">
                <select
                  id="day"
                  name="day"
                  className="text-center w-24 rounded-md border"
                >
                  <option value="">Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </td>
              <td className="px-4 py-2 border-r-2 border-b-2">passes, </td>
              <td className="px-4 py-2 text-center border-r-2 border-b-2">
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
              <td className="px-4 py-2 border-r-2 border-b-2">will meet</td>
              <td className="px-4 py-2 relative border-r-2 border-b-2">
                <span className="mr-2">the</span>
                <select className=" text-left rounded-md border">
                  <option value="">Person 1</option>
                  <option value="Bank Teller">Bank Teller</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Landlord">Landlord</option>
                  <option value="Postman">Postman</option>
                  <option value="Firefighter">Firefighter</option>
                  <option value="Manager">Manager</option>
                </select>
                <span className="ml-2">.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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

export default DependentClauseStructure;
