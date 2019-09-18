export const createProject = (project) => {
  return (dispatch, getState) => {
    //make db call
    dispatch({type: 'CREATE_PROJECT', project});
  }
}
