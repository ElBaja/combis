const initialState = {
  name:null,
  surname:null,
  age:null
}

const userDataReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGGED_IN' || action.type === 'USER_UPDATED')
  {
    console.log(state);
    return Object.assign({}, state, {
      name: action.payload
    })
  }

  if (action.type === 'USER_SURNAME_UPDATED')
  {
    return Object.assign({}, state, {
      surname: action.payload
    })
  }
  if (action.type === 'USER_UPDATED_AGE')
  {
    return Object.assign({}, state, {
      age: action.payload
    })
  }
  return state
}

export default userDataReducer