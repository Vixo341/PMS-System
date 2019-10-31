import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectTask extends Component {
  render() {
    const { project_task } = this.props;
    let priorityString;
    let priorityClass;

    if (project_task.priority === 1) {
      priorityClass = "bg-danger text-light";
      priorityString = "Ważny";
    }

    if (project_task.priority === 2) {
      priorityClass = "bg-warning text-light";
      priorityString = "Średni";
    }

    if (project_task.priority === 3) {
      priorityClass = "bg-info text-light";
      priorityString = "Niski";
    }

    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${priorityClass}`}>
          ID: {project_task.projectSequence} -- Piorytet: {priorityString}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{project_task.summary}</h5>
          <p className="card-text text-truncate ">
            {project_task.acceptanceCriteria}
          </p>
          <Link
            to={`/updateProjectTask/${project_task.projectIdentifier}/${
              project_task.projectSequence
            }`}
            className="btn btn-primary"
          >
            Podgląd / aktualizacja
          </Link>

          <button className="btn btn-danger ml-4">Usuń</button>
        </div>
      </div>
    );
  }
}
export default ProjectTask;