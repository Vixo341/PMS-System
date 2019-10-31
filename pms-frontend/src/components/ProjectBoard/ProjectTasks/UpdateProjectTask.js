import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { getProjectTask } from "../../../actions/BacklogActions";
import PropTypes from "prop-types";

class UpdateProjectTask extends Component {
  componentDidMount() {
    const { backlog_id, pt_id } = this.props.match.params;
    this.props.getProjectTask(backlog_id, pt_id, this.props.history);
  }

  render() {
    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="#" className="btn btn-light">
                cofnij do listy zadań
              </a>
              <h4 className="display-4 text-center">Aktualizacja zadania</h4>
              <p className="lead text-center">Tu będzie nazwa projektu</p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="summary"
                    placeholder="Nazwa zadania"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Opis zadania do wykonania"
                    name="acceptanceCriteria"
                  />
                </div>
                <h6>Data</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="dueDate"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="priority"
                  >
                    <option value={0}>Piorytet zadania</option>
                    <option value={1}>Wysoki</option>
                    <option value={2}>Średni</option>
                    <option value={3}>niski</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="status"
                  >
                    <option value="">Status zadania</option>
                    <option value="TO_DO">Do zrobienia</option>
                    <option value="IN_PROGRESS">W trakcie wykonywania</option>
                    <option value="DONE">Wykonane</option>
                  </select>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProjectTask.propTypes = {
  getProjectTask: PropTypes.func.isRequired,
  project_task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project_task: state.backlog.project_task
});

export default connect(
  mapStateToProps,
  { getProjectTask }
)(UpdateProjectTask);