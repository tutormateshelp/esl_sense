import React from "react";
import "./index.css";
import App from "./App";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import SubjectPredicate from "./pages/examples/subjectPredicate";
import Clause from "./pages/examples/clauses";
import SubjectPredicateStructure from "./pages/sentenceStructure/subjectPredicateStructure";
import ClauseStructure from "./pages/sentenceStructure/clausesStructure";
import DependentClause from "./pages/examples/dependentClause";
import DependentClauseStructure from "./pages/sentenceStructure/dependentClauseStructure";
import PlanYourDay from "./pages/sentenceStructure/planYourDay";
import FuturePerfect from "./pages/tense/future/perfect";
import PresentPerfect from "./pages/tense/present/perfect";
import PartsOfSpeech from "./pages/sentenceStructure/partsOfSpeech";
import Progressive from "./pages/tense/future/progressive";
import SimpleAndProgressive from "./pages/tense/present/simpleAndProgressive";
import Simple from "./pages/tense/past/simple";
import EndOfDay from "./pages/endOfDay";
import PerfectProgressive from "./pages/tense/present/perfectProgressive";
import PresentPerfectProgressive from "./pages/tense/present/perfectProgressive";
import PastPerfectProgressive from "./pages/tense/past/perfectProgressive";
import FuturePerfectProgressive from "./pages/tense/future/perfectProgressive";
import TenseTemplate from "./pages/examples/tenseTemplate";
import ConversationTemplate from "./pages/examples/conversationTemplate";
import Page2 from "./sequencePages/2";
import Page3 from "./sequencePages/3";
import Page4 from "./sequencePages/4";
import Page5 from "./sequencePages/5";
import Page6 from "./sequencePages/6";
import ConversationTemplate_Page6 from "./sequencePages/6conversation_template";
import Page7 from "./sequencePages/7";
import Page8 from "./sequencePages/8";
import Page9 from "./sequencePages/9";
import Page10 from "./sequencePages/10";
import ConversationTemplate_Page10 from "./sequencePages/10conversation";
import Page11 from "./sequencePages/11";
import Page12 from "./sequencePages/12";
import Page13 from "./sequencePages/13";
import Page14 from "./sequencePages/14";
import ConversationTemplate_Page14 from "./sequencePages/14conversation";
import Page15 from "./sequencePages/15";
import Page16 from "./sequencePages/16";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:sceneID/:currentTense/tenses",
    element: <TenseTemplate />,
  },
  {
    path: "/2",
    element: <Page2 />,
  },
  {
    path: "/3",
    element: <Page3 />,
  },
  {
    path: "/4",
    element: <Page4 />,
  },
  {
    path: "/5",
    element: <Page5 />,
  },
  {
    path: "/6",
    element: <Page6 />,
  },

  {
    path: "/6/Conversation",
    element: <ConversationTemplate_Page6 />,
  },
  {
    path: "/7",
    element: <Page7 />,
  },
  {
    path: "/8",
    element: <Page8 />,
  },
  {
    path: "/9",
    element: <Page9 />,
  },
  {
    path: "/10",
    element: <Page10 />,
  },
  {
    path: "/10/Conversation",
    element: <ConversationTemplate_Page10 />,
  },
  {
    path: "/11",
    element: <Page11 />,
  },
  {
    path: "/12",
    element: <Page12 />,
  },
  {
    path: "/13",
    element: <Page13 />,
  },
  {
    path: "/14",
    element: <Page14 />,
  },
  {
    path: "/14/Conversation",
    element: <ConversationTemplate_Page14 />,
  },
  {
    path: "/15",
    element: <Page15 />,
  },
  {
    path: "/16",
    element: <Page16 />,
  },

  {
    path: "sentence-structure/subjectPredicate",
    element: <SubjectPredicateStructure />,
  },
  {
    path: "sentence-structure/clauses",
    element: <ClauseStructure />,
  },
  {
    path: "sentence-structure/planYourDay/:sceneId/future-simple",
    element: <PlanYourDay />,
  },
  {
    path: "sentence-structure/planYourDay/:sceneId/future-progressive",
    element: <Progressive />,
  },
  {
    path: "sentence-structure/planYourDay/:sceneId/future-perfect-progressive",
    element: <FuturePerfectProgressive />,
  },
  {
    path: "sentence-structure/planYourDay/:sceneId/future-perfect",
    element: <FuturePerfect />,
  },
  ,
  {
    path: "sentence-structure/planYourDay/:sceneId/present-SimpleAndProgressive",
    element: <SimpleAndProgressive />,
  },
  {
    path: "sentence-structure/planYourDay/:sceneId/present-simpleAndProgressive/:conversationID",
    element: <ConversationTemplate />,
  },
  {
    path: "sentence-structure/planYourDay/:sceneId/present-perfect",
    element: <PresentPerfect />,
  },
  {
    path: "sentence-structure/planYourDay/:sceneId/present-perfect-progressive",
    element: <PresentPerfectProgressive />,
  },
  {
    path: "sentence-structure/planYourDay/:sceneId/past-perfect-progressive",
    element: <PastPerfectProgressive />,
  },
  {
    path: "sentence-structure/planYourDay/:sceneId/past-simple",
    element: <Simple />,
  },
  {
    path: "sentence-structure/dependentClause",
    element: <DependentClauseStructure />,
  },
  {
    path: "sentence-structure/subjectPredicate/examples",
    element: <SubjectPredicate />,
  },
  {
    path: "sentence-structure/clauses/examples",
    element: <Clause />,
  },
  ,
  {
    path: "sentence-structure/End-Of-Day",
    element: <EndOfDay />,
  },
  {
    path: "sentence-structure/dependentClause/examples",
    element: <DependentClause />,
  },
  {
    path: "demo",
    element: <PartsOfSpeech />,
  },
  {
    path: "/sentence-structure/planYourDay/:sceneId/:currentTense/tenses",
    element: <TenseTemplate />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
