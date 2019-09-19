

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async db call
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'dapawn',
      authorLastName: 'Kuru',
      createdAt: new Date()
    }).then( () => {
      dispatch({type: 'CREATE_PROJECT', project});
    }).catch( (err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err});
    })
  }
}
