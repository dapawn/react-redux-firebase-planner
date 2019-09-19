
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

const ProjectDetails = (props) => {
  const { project} = props;
  if (project) { 
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> {project.title}</span>	
            <p>{ project.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>20190912 20:54</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <p>Loading project...</p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null;
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);
