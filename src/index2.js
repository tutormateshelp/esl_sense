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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: `/sentence-structure/:sceneNumber/Future-Progressive`,
    element: <App />,
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
