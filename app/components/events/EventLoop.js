'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native'

import Countdown from '../Countdown'
import constants from '../../constants/constants'

class EventLoop extends Component {
  render () {
    var sortedEvents = constants.events.sort(function(a, b) {
      return a.start - b.start;
    });
    var eventTime = null;
    for (var i = 0; i < sortedEvents.length; i++) {
      if(sortedEvents[i].start > this.props.currentTime) {
        eventTime = sortedEvents[i].start;
        break;
      }
    }
    if(eventTime !== null) {
      return (
        <Countdown toDate={eventTime} title="Countdown until the next event. May the odds be in your favor." />
      )
    } else {
      return (
        <View style={styles.countdown}>
          <Text style={styles.headerText}>All events are done! Thanks for celebrating Jon!</Text>
        </View>
      )
    }

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
    marginBottom: 10,
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

module.exports = EventLoop;
