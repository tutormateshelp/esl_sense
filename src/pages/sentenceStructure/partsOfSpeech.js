import React from "react";
import { Link } from "react-router-dom";

const PartsOfSpeech = () => {
  return (
    <div className="p-10">
      <div className="flex flex-row float-end">
        <span className="noun">Nouns.</span>
        <span className="adjective">Adjectives.</span>
        <span className="verb">Verbs.</span>
        <span className="modal-verb">Modal Verbs.</span>
        <span className="auxiliary-verb">Auxiliary Verbs.</span>
        <span className="adverb">Adverbs.</span>
        <span className="preposition">Prepositions.</span>
        <span className="pronoun">Pronouns.</span>
        <span className="conjunction">Conjunctions.</span>
        <span className="article">Articles.</span>
      </div>

      <div className="flex flex-col justify-center h-[100vh] -mt-20">
        <div className="text-xl pb-2 font-semibold">
          Grammar: Parts of Speech - Phrases
        </div>
        <div className="text-xl pb-2">
          During Your Task: Reporting Flu Symptoms
        </div>
        <div className="pb-2">
          <p className="font-semibold">
            DOCTOR: Hello, how can I help you today?
          </p>
          <p>ME: Hello, I have not been feeling well lately.</p>
          <p>DOCTOR: That is unfortunate. What are your symptoms?</p>
          <p>
            ME: I have been coughing a lot, I have a runny nose, and I have
            headaches.
          </p>
          <p>
            DOCTOR: Oh my, that does not sound good. It sounds like the flu to
            me. Let me perform a check-up on you.
          </p>
          <p>
            (Doctor gets up and starts to perform a routine check-up on me. He
            reaches for his stethoscope to listen to my heartrate. He presses
            his fingers against my neck to listen to my pulse rate).
          </p>
          <p>
            ME: Do you have anything you can prescribe to me in order to take
            care of this?
          </p>
          <p>
            DOCTOR: I will prescribe you this flu medication right here. Flus
            usually last a week, but if you take this regularly, it should go
            away in a few days to a week.
          </p>
          <p>ME: Okay, thank you.</p>
          <p>
            DOCTOR: Please come back in a week, and I will see how you are doing
            then.
          </p>
          <p>ME: Okay, I will come back in a week.</p>
        </div>
      </div>
      <Link to="/sentence-structure/startYourDay">
        *End of conversation. This leads to Plan-Your-Day: Review Your Task
      </Link>
    </div>
  );
};

export default PartsOfSpeech;
