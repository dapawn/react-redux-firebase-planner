
import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>	
          <p>Here is some text giving the details of the project that we want to accomplish. Maybe this is like a gofundme site or something. Or maybe it just details of what has to be done for the people who need to know. We will find out shortly though, so stay tuned.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Dapawn</div>
          <div>20190912 20:54</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
