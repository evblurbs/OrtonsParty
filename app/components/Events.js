'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight
} from 'react-native'

let ExScreen = require('../../ExScreen');
let Countdown = require('./Countdown');
let EventLoop = require('./events/EventLoop');
let constants = require('../constants/constants');

function renderIntro() {
  return (
    <View style={styles.innerWrapper}>
      <Text style={styles.title}>Events</Text>
      <Text style={styles.description}>Check back here for events. Each event will be scored. You will be competing for the most coveted prize in the <Text style={styles.bold}>Ortinistic Society</Text>.</Text>
    </View>
  )
}

class Events extends Component {
  constructor () {
    super()
    this.currentTime = new Date().getTime()
  }
  _goBack () {
    this.props.navigator.pop()
  }
  _handleLink (routeId) {
    this.props.navigator.push({
      id: routeId
    })
  }
  renderLinks () {
    var sortedEvents = constants.events.sort(function(a, b) {
      return b.start - a.start;
    });
    var links = sortedEvents.map(function(link, index) {
      if(this.currentTime > link.start) {
        var timeDiff = this.currentTime - link.start
        return (
          <TouchableHighlight
            style={timeDiff < 10800000 ? styles.link1 : styles.link2}
            underlayColor='#E65100'
            onPress={() => {this._handleLink(link.nav)}}
            key={index}>
            <View style={styles.linkRow}>
              <Text style={styles.linkText}>{link.name}</Text>
              <Image
                source={{uri: 'https://s3.amazonaws.com/coachcheetah/ios/forward-arrow.png'}}
                style={styles.linkArrow}>
              </Image>
            </View>
          </TouchableHighlight>
        )
      }
    }.bind(this));
    return (
      <View style={styles.links}>
        {links}
      </View>
    )
  }
  render () {
    var screen = this.currentTime > 1460185200000 ? this.renderLinks() : renderIntro()
    return (
      <ExScreen
        title="Events"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={styles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/200713_504193680090_839_n.jpg?oh=9017baa31f37fdc47de6dc449dadfa0f&oe=57787D86'}}
          style={styles.image}>
        </Image>
        <EventLoop currentTime={this.currentTime} />
        {screen}
      </ExScreen>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    flex: 1,
    height: 200,
    resizeMode: 'cover'
  },
  innerWrapper: {
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 16
  },
  description: {
    color: '#333',
    textAlign: 'left',
    fontSize: 13,
    lineHeight: 18
  },
  bold: {
    fontWeight: '700'
  },
  link: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  link1: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EF6C00'
  },
  link2: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF9800',
    borderBottomWidth: 1,
    borderBottomColor: '#EF6C00'
  },
  linkText: {
    color: '#FFF',
    fontWeight: '700'
  },
  linkRow: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative'
  },
  linkArrow: {
    width: 10,
    height: 19,
    position: 'absolute',
    right: 20
  },
})

module.exports = Events;
