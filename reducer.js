// ❗️❗️❗️❗️❗️❗️1. import❗️❗️❗️❗️❗️❗️

// ❗️❗️❗️❗️❗️❗️ 2. Action ❗️❗️❗️❗️❗️❗️
const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";
const ADD_SECOND = "ADD_SECOND";

// ❗️❗️❗️❗️❗️❗️ 3. Action Creator ❗️❗️❗️❗️❗️❗️
const startTimer = () => {
  return {
    type: START_TIMER
  };
};

const stopTiemr = () => {
  return {
    type: STOP_TIMER
  };
};

const addSecond = () => {
  return {
    type: ADD_SECOND
  };
};

// ❗️❗️❗️❗️❗️❗️ 4. Reducer ❗️❗️❗️❗️❗️❗️
const TIMER_DURATION = 1500;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case STOP_TIMER:
      return applyStopTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
};

// ❗️❗️❗️❗️❗️❗️ 5. Reducer Function ❗️❗️❗️❗️❗️❗️
const applyStartTimer = state => {
  return {
    ...state,
    isPlaying: true
  };
};

const applyStopTimer = state => {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
};
const applyAddSecond = state => {
  if (state.elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
};

// ❗️❗️❗️❗️❗️❗️ 6. Export Action Creator ❗️❗️❗️❗️❗️❗️
const actionCreator = {
  startTimer,
  stopTiemr,
  addSecond
};

export { actionCreator };

// ❗️❗️❗️❗️❗️❗️ 7. Export Reducer ❗️❗️❗️❗️❗️❗️
export default reducer;
