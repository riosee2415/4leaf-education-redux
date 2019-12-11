import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Timer from "./timerPresenter";
import { actionCreator as tomatoActions } from "../../reducer";

mapStateProps = state => {
  const { isPlaying, elapsedTime, timerDuration } = state;

  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
};

mapDispatchToProps = dispatch => {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    stopTimer: bindActionCreators(tomatoActions.stopTiemr, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
};
export default connect(mapStateProps, mapDispatchToProps)(Timer);
