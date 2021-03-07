import React from "react";
import "./App.css";
import Student from "./Components/Student";
import Teacher from "./Components/Teacher";
import Home from "./Components/Home";
import CreateQuiz from "./Components/CreateQuiz";
import AssignQuiz from "./Components/AssignQuiz";
import AssignToStudents from "./Components/AssignToStudents";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import StudentList from "./Components/StudentList";
import Quiz from "./Components/Quiz";
import Header from "./Components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/student" component={Student} />
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/createquiz" component={CreateQuiz} />
          <Route exact path="/assignquiz" component={AssignQuiz} />
          <Route exact path="/assigntostudents" component={AssignToStudents} />
          <Route exact path="/studentlist" component={StudentList} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
