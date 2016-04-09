'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class Countdown extends Component {
  constructor () {
    super()
    this.timer = null;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  componentDidMount () {
    this.start()
  }
  componentWillUnmount () {
    if(this.timer) {
      clearInterval(this.timer)
    }
  }
  start () {
    const compareDate = new Date(this.props.toDate)
    this.timer = setInterval(function() {
      timeBetweenDates(compareDate)
    }, 1000)

    var me = this

    function timeBetweenDates(toDate) {
      const dateEntered = toDate
      const now = new Date()
      const diff = dateEntered.getTime() - now.getTime()

      if (diff <= 0) {
        clearInterval(this.timer)
      } else {
        const seconds = Math.floor(diff/1000)
        const minutes = Math.floor(seconds/60)
        const hours = Math.floor(minutes/60)
        const days = Math.floor(hours/24)

        hours %= 24
        minutes %= 60
        seconds %= 60

        me.setState({
          days,
          hours,
          minutes,
          seconds
        })
      }
    }
  }
  render() {
    return (
      <View style={styles.countdown}>
        <Text style={styles.headerText}>{this.props.title}</Text>
        <View style={styles.countdownWrapper}>
          <Text style={styles.time}>{this.state.hours}</Text>
          <Text style={styles.timeLabel}>hours</Text>
          <Text style={styles.time}>{this.state.minutes}</Text>
          <Text style={styles.timeLabel}>minutes</Text>
          <Text style={styles.time}>{this.state.seconds}</Text>
          <Text style={styles.timeLabel}>seconds</Text>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  countdown: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFE0B2',
    backgroundColor: '#FFF'
  },
  headerText: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '500',
    color: '#F57C00',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center'
  },
  countdownWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center'
  },
  time: {
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
    width: 40,
    textAlign: 'center'
  },
  timeLabel: {
    fontSize: 12,
    color: '#F57C00',
    marginTop: 12
  }
});

module.exports = Countdown;
