export default function theme(state = "darkblue", action) {
  // action is an object coming into redux
  // Here we are telling redux to only respond in this reducer if the action.type is equal to "CHANGE_THEME"
  // otherwise don't do anything, just pass the object  on.
  if (action.type === "CHANGE_THEME") {
    return action.payload;
  } else {
    return state;
  }
}

// SIDE NOTE: This is an example of a pure function
