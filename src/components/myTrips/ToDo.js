import React from "react";
import $ from "jquery";
import { renderComponent } from "recompose";
import { Card } from "reactstrap";
import { whiteBright } from "ansi-colors";
import ProfileNavbar from "../profile/ProfileNavbar";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {
        task: ""
      }
    };
  }

  componentDidMount = () => {
    this.displayList();
    $("#addBtn").on("click", this.addTask);
    $(".task").on("click", ".delete", this.deleteTask);
  };

  deleteTask = evt => {
    evt.preventDefault();
    $(this)
      .closest(".task")
      .remove();
    console.log(evt);
  };

  addTask = () => {
    var task = $("#addTask").val();
    this.setState({
      list: task
    });
    var index = this.state.list.length;
    $("#tasks").append(
      `<li className="task">${task} <button className="btn btn-danger col-sm-2 delete" id="${index}">x</button></li>`
    );
  };

  displayList = () => {
    $.each(this.state.list, function(i, task) {
      $("#tasks").append(
        `<li className="task">${task} <i className="delete btn-danger col-sm-2" id="${i +
          1}"></li>`
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <ProfileNavbar />
        <div
          style={{
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80)`,
            paddingTop: 100,
            paddingBottom: 200
          }}
        >
          <div
            className="col-sm-6 offset-3"
            style={{ backgroundColor: "white" }}
          >
            <h1 id="title">Trip List:</h1>
            <hr />
            <div>
              Tasks:
              <ul id="tasks" />
            </div>
            <hr />
            <input type="text" id="addTask" />{" "}
            <button type="button" id="addBtn" className="btn btn-primary">
              Add Task
            </button>
            <hr />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ToDo;
