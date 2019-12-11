import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  time -= minutes * 60;

  var seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return;
}

class Timer extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.interval);
    }
    return true;
  };

  // componentWillReceiveProps(nextProps) {
  //   const currentProps = this.props;
  //   if (!currentProps.isPlaying && nextProps.isPlaying) {
  //     const timerInterval = setInterval(() => {
  //       currentProps.addSecond();
  //     }, 1000);
  //     this.setState({
  //       interval: timerInterval
  //     });
  //   } else if (currentProps.isPlaying && !nextProps.isPlaying) {
  //     clearInterval(this.state.interval);
  //   }
  // }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      stopTimer
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.upArea}>
          <Text style={styles.txt}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>

        <View style={styles.downArea}>
          {isPlaying ? (
            <Button iconNAme="stop-circle" action={stopTimer} />
          ) : (
            <Button iconNAme="play-circle" action={startTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  upArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  downArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  txt: {
    fontSize: 110,
    fontWeight: "100"
  }
});

export default Timer;
