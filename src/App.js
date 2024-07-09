import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import {
  selectCount,
  setCharacter,
} from "./features/planYourDay/planYourDaySlice";

import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const [chosenPerson1, setChosenPerson1] = useState("Person1");
  const [chosenPerson2, setChosenPerson2] = useState("Person2");
  const [chosenPerson3, setChosenPerson3] = useState("Person3");
  const [chosenPlace1, setChosenPlace1] = useState("");
  const [chosenPlace2, setChosenPlace2] = useState("");
  const [chosenPlace3, setChosenPlace3] = useState("");
  const [chosenDay, setChosenDay] = useState("");

  const handleDayChange = (event) => {
    setChosenDay(event.target.value);
  };

  const correctOptionChoosed = (chosenPerson, chosenPlace) => {
    if (chosenPerson === "Bank Teller" && chosenPlace === "bank") {
      return true;
    } else if (chosenPerson === "Doctor" && chosenPlace === "hospital") {
      return true;
    } else if (chosenPerson === "Landlord" && chosenPlace === "apartment") {
      return true;
    } else if (chosenPerson === "Postman" && chosenPlace === "post office") {
      return true;
    } else if (
      chosenPerson === "Firefighter" &&
      chosenPlace === "fire station"
    ) {
      return true;
    } else if (chosenPerson === "Manager" && chosenPlace === "workplace") {
      return true;
    } else {
      return false;
    }
  };

  const checkDupliacte = (value) => {
    if (
      value === chosenPerson1 ||
      value === chosenPerson2 ||
      value === chosenPerson3
    ) {
      toast.error(`${value} is already taken . Choose some other character.`);

      console.log(
        value,
        " duplicate detected:",

        " :",
        chosenPerson1,
        chosenPerson2,
        chosenPerson3
      );

      return false;
    } else {
      return true;
    }
  };

  const isStateChanged = () => {
    return (
      chosenPerson1 !== "Person1" &&
      chosenPerson2 !== "Person2" &&
      chosenPerson3 !== "Person3" &&
      chosenPlace1 !== "" &&
      chosenPlace2 !== "" &&
      chosenPlace3 !== ""
    );
  };

  function SaveData() {
    const dispatch = useDispatch();

    const updatedCharacters = [
      { name: chosenPerson1, isValid: true },
      { name: chosenPerson2, isValid: true },
      { name: chosenPerson3, isValid: true },
    ];

    dispatch(setCharacter(updatedCharacters));
  }

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center p-10 m-10 gap-8 h-full">
      <h1 className="text-3xl font-bold ">
        Before we begin: Planning your day
      </h1>
      <div>
        <img
          className="w-1/12"
          src="https://media.istockphoto.com/id/1262025969/vector/calendar-with-selected-date-vector-illustration.jpg?s=612x612&w=0&k=20&c=cPBxy8JXs_rJsFwcYI408dLU-KoGOWEPHo-FDjsr98s="
          alt="Calendar with selected date"
        />
        <label htmlFor="days">It is: </label>
        <select id="days" name="days" onChange={handleDayChange}>
          <option value="">Select a day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>

      <div>
        <span className="font-bold">Question:</span>
        <span>Who will you meet today?</span>
      </div>
      <div className="space-x-10">
        <span className="font-bold">Answer: I will meet</span>
        {/* Dropdown to choose P1 */}
        <label>
          <select
            value={chosenPerson1}
            onChange={(e) => {
              checkDupliacte(e.target.value) &&
                setChosenPerson1(e.target.value);
            }}
          >
            <option value="">Person 1</option>
            <option value="Bank Teller">Bank Teller</option>
            <option value="Doctor">Doctor</option>
            <option value="Landlord">Landlord</option>
            <option value="Postman">Postman</option>
            <option value="Firefighter">Firefighter</option>
            <option value="Manager">Manager</option>
          </select>
        </label>
        {/* Dropdown to choose P2 */}
        <span>,</span>
        <label>
          <select
            value={chosenPerson2}
            onChange={(e) => {
              checkDupliacte(e.target.value) &&
                setChosenPerson2(e.target.value);
            }}
          >
            <option value="">Person 2</option>
            <option value="Bank Teller">Bank Teller</option>
            <option value="Doctor">Doctor</option>
            <option value="Landlord">Landlord</option>
            <option value="Postman">Postman</option>
            <option value="Firefighter">Firefighter</option>
            <option value="Manager">Manager</option>
          </select>
        </label>
        {/* Dropdown to choose P3 */}
        <span>and</span>
        <label>
          <select
            value={chosenPerson3}
            onChange={(e) => {
              checkDupliacte(e.target.value) &&
                setChosenPerson3(e.target.value);
            }}
          >
            <option value="">Person 3</option>
            <option value="Bank Teller">Bank Teller</option>
            <option value="Doctor">Doctor</option>
            <option value="Landlord">Landlord</option>
            <option value="Postman">Postman</option>
            <option value="Firefighter">Firefighter</option>
            <option value="Manager">Manager</option>
          </select>
        </label>
        {/* Display checkmark or cross based on conditions */}
      </div>
      <div className="flex flex-col space-y-8 mt-14">
        <span className="font-bold">
          Okay, let's get started with your day now.
        </span>
        <span className="gap-5 flex flex-row">
          Let's prepare to meet the
          <span className="underline">{"  " + chosenPerson1 + "  "}</span>
          at
          <label>
            <select
              value={chosenPlace1}
              onChange={(e) => {
                setChosenPlace1(e.target.value);
              }}
            >
              <option value="">Select Place</option>
              <option value="bank">Bank</option>
              <option value="hospital">Hospital</option>
              <option value="apartment">Apartment</option>
              <option value="fire station">Fire Station</option>
              <option value="post office">Post Office</option>
              <option value="workplace">Workplace</option>
            </select>
          </label>
          <span>
            {chosenPerson1 && chosenPlace1
              ? correctOptionChoosed(chosenPerson1, chosenPlace1, 1)
                ? "✅"
                : "❌"
              : ""}
          </span>
        </span>

        <span className="gap-5 flex flex-row">
          Let's prepare to meet the
          <span className="underline">{"  " + chosenPerson2 + "  "}</span>
          at
          <label>
            <select
              value={chosenPlace2}
              onChange={(e) => {
                setChosenPlace2(e.target.value);
              }}
            >
              <option value="">Select Place</option>
              <option value="bank">Bank</option>
              <option value="hospital">Hospital</option>
              <option value="apartment">Apartment</option>
              <option value="fire station">Fire Station</option>
              <option value="post office">Post Office</option>
              <option value="workplace">Workplace</option>
            </select>
          </label>
          <span>
            {chosenPerson2 && chosenPlace2
              ? correctOptionChoosed(chosenPerson2, chosenPlace2, 2)
                ? "✅"
                : "❌"
              : ""}
          </span>
        </span>

        <span className="gap-5 flex flex-row">
          Let's prepare to meet the
          <span className="underline">{"  " + chosenPerson3 + "  "}</span>
          at
          <label>
            <select
              value={chosenPlace3}
              onChange={(e) => {
                setChosenPlace3(e.target.value);
              }}
            >
              <option value="">Select Place</option>
              <option value="bank">Bank</option>
              <option value="hospital">Hospital</option>
              <option value="apartment">Apartment</option>
              <option value="fire station">Fire Station</option>
              <option value="post office">Post Office</option>
              <option value="workplace">Workplace</option>
            </select>
          </label>
          <span>
            {chosenPerson3 && chosenPlace3
              ? correctOptionChoosed(chosenPerson3, chosenPlace3, 3)
                ? "✅"
                : "❌"
              : ""}
          </span>
        </span>
      </div>

      {isStateChanged() ? (
        <Link
          className="mt-16"
          to="sentence-structure/subjectPredicate"
          onClick={() => {
            console.log("Can move ahead");
            const updatedCharacters = [
              { name: chosenPerson1, isValid: true },
              { name: chosenPerson2, isValid: true },
              { name: chosenPerson3, isValid: true },
            ];

            dispatch(setCharacter(updatedCharacters));
          }}
        >
          Let's begin to play your day now T
        </Link>
      ) : (
        <button
          className="self-start mt-16"
          onClick={() => {
            toast.error(`Please fill all options`);
          }}
        >
          Let's begin to play your day now
        </button>
      )}

      <Link
        to="sentence-structure/subjectPredicate"
        onClick={() => {
          console.log("Can move ahead");
          const updatedCharacters = [
            { name: "Postman", isValid: true },
            { name: "Manager", isValid: true },
            { name: "Landlord", isValid: true },
          ];

          dispatch(setCharacter(updatedCharacters));
        }}
        className="self-start mt-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go with default values (For TESTING ONLY)
      </Link>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
