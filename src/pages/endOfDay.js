import React from "react";
import { Link } from "react-router-dom";

// const EndOfDay = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen scale-150">
//       <div className="mb-8">End Of Day</div>
//       <Link to="/" className="text-blue-500 hover:text-blue-700">
//         Go back to home
//       </Link>
//     </div>
//   );
// };

// export default EndOfDay;

import { useRef } from "react";
import { Fireworks } from "@fireworks-js/react";

const EndOfDay = () => {
  return (
    <>
      <div className="flex gap-1   flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center h-screen scale-150">
          <div className="mb-8 text-white">End Of Day</div>
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Go back to home
          </Link>
        </div>
        <Fireworks options={{sound:"true"}} className=" fixed  top-0 left-0 w-full h-full -z-10 bg-black" />
      </div>
    </>
  );
};

export default EndOfDay;
