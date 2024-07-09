import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TenseTemplate() {
  const [isSimplePresent, setIsSimplePresent] = useState(false);
  const [isSimplePast, setIsSimplePast] = useState(false);
  const [isSimpleFuture, setIsSimpleFuture] = useState(false);
  const [isPresentProgressive, setIsPresentProgressive] = useState(false);
  const [isPastProgressive, setIsPastProgressive] = useState(false);
  const [isFutureProgressive, setIsFutureProgressive] = useState(false);
  const [isPresentPerfect, setIsPresentPerfect] = useState(false);
  const [isPastPerfect, setIsPastPerfect] = useState(false);
  const [isFuturePerfect, setIsFuturePerfect] = useState(false);
  const [isPresentPerfectProgressive, setIsPresentPerfectProgressive] =
    useState(false);
  const [isPastPerfectProgressive, setIsPastPerfectProgressive] =
    useState(false);
  const [isFuturePerfectProgressive, setIsFuturePerfectProgressive] =
    useState(false);

  const functionStore = {
    setIsSimplePresent,
    setIsSimplePast,
    setIsSimpleFuture,
    setIsPresentProgressive,
    setIsPastProgressive,
    setIsFutureProgressive,
    setIsPresentPerfect,
    setIsPastPerfect,
    setIsFuturePerfect,
    setIsPresentPerfectProgressive,
    setIsPastPerfectProgressive,
    setIsFuturePerfectProgressive,
  };

  const { currentTense } = useParams();
  let tensesArray = currentTense.split("-");
  console.log(tensesArray);
  tensesArray = tensesArray.map((tense) => {
    return tense.split("And");
  });

  tensesArray = tensesArray.flat();

  tensesArray = tensesArray.map((tense) => {
    return tense.charAt(0).toUpperCase() + tense.slice(1);
  });

  console.log(tensesArray);

  function generateCombinations(tensesArray, prevIndex) {
    let combinedArray = tensesArray.map((tense, index) => {
      if (tensesArray[prevIndex] != tense) {
        return tensesArray[prevIndex] + tensesArray[index];
      }
    });
    console.log(combinedArray, prevIndex);
    return combinedArray;
  }

  tensesArray = tensesArray
    .map((tense, index) => {
      return generateCombinations(tensesArray, index);
    })
    .flat()
    .filter((item) => item !== undefined);

  console.log(tensesArray);

  console.log(tensesArray);

  tensesArray = tensesArray.map((tense) => {
    return "setIs" + tense;
  });
  console.log(tensesArray);

  useEffect(() => {
    Promise.all(
      tensesArray.map(async (tense) => {
        try {
          await functionStore[tense](true);
          console.log(tense);
        } catch (error) {
          //   console.error(error);
        }
      })
    );
  }, []);

  return (
    <div className="p-10 flex flex-col w-fit h-screen">
      <span className="mx-auto mb-10 text-2xl font-bold items-center justify-center">
        Tenses: Irregular Verbs
      </span>

      <table className="table-auto">
        <thead className="border">
          <tr>
            <th className="px-4 py-2 border">Tense</th>
            <th className="px-4 py-2 border">Form</th>
            <th className="px-4 py-2 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border"> Simple</td>
            <td className="px-4 py-2 border">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isSimplePresent
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Simple Present
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isSimplePast ? "font-bold" : "text-gray-700 font-normal"
                      }`}
                    >
                      Simple Past
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isSimpleFuture
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Simple Future
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="px-4 py-2 border">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isSimplePresent
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      meet
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isSimplePast ? "font-bold" : "text-gray-700 font-normal"
                      }`}
                    >
                      met
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isSimpleFuture
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      will meet
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Progressive</td>
            <td className="px-4 py-2 border">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPresentProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Present Progressive
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPastProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Past Progressive
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isFutureProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Future Progressive
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="px-4 py-2 border">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPresentProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      am meet-ing
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPastProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      was meet-ing
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isFutureProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      will be meet-ing
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Perfect</td>
            <td className="px-4 py-2 border">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPresentPerfect
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Present Perfect
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPastPerfect
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Past Perfect
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isFuturePerfect
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Future Perfect
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="px-4 py-2 border">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPresentPerfect
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      have met
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPastPerfect
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      had met
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isFuturePerfect
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      will have met
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Perfect Progressive</td>
            <td className="px-4 py-2 border">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPresentPerfectProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Present Perfect Progressive
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPastPerfectProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Past Perfect Progressive
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isFuturePerfectProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      Future Perfect Progressive
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="px-4 py-2 border">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPresentPerfectProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      have been meet-ing
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isPastPerfectProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      had been meet-ing
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`px-4 py-2   ${
                        isFuturePerfectProgressive
                          ? "font-bold"
                          : "text-gray-700 font-normal"
                      }`}
                    >
                      will have been meet-ing
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={() => {
          window.close();
        }}
        className="  hover:bg-blue-700    font-bold py-2 mt-48"
      >
        DONE
      </button>
    </div>
  );
}

export default TenseTemplate;
