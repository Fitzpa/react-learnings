export default function location(state = "Seattle, WA", action) {
  // action is an object coming into redux
  // Here we are telling redux to only respond in this reducer if the action.type is equal to "CHANGE_LOCATION"
  // otherwise don't do anything, just pass the object  on.
  if (action.type === "CHANGE_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}

// SIDE NOTE: This is an example of a pure function
