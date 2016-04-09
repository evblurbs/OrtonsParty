'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'

let ExScreen = require('../../../ExScreen');

class Tour extends Component {
  _goBack () {
    this.props.navigator.pop()
  }
  render () {
    return (
      <ExScreen
        title="Seabrook Tour"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={styles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'http://anthologydestination.com/wp-content/uploads/2012/02/IMG_79891.jpg'}}
          style={styles.image}>

        </Image>
        <View style={styles.innerWrapper}>
          <Text style={styles.title}>Seabrook Tour</Text>
          <Text style={styles.description}>Seabrook has invited us to go on a tour with one of the co-founders of Seabrook! Little do they know what they got into. We will follow the tour, adding our own commentary. Your challenge is to add commentary that relates to Jon. Think the Ortinistic View of Society, a story from college, or a story working with him. At the end, we will poll for which statement was the funniest (you cannot vote for your own).</Text>
        </View>
        <View style={styles.innerWrapper}>
          <Text style={styles.subTitle}>Prizes</Text>
          <Text style={styles.description}>Below are the prizes for 1st, 2nd, 3rd. Any discrepancies or ties will be decided by Jon.</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.teamRow}>
            <Text style={styles.team}>1st: 3 points</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>2nd: 2 points</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>3rd: 1 points</Text>
          </View>
        </View>
        <View style={styles.gap}></View>
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
    height: 150,
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
  teams: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    marginTop: 20
  },
  teamRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#333'
  },
  team: {
    color: '#333',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 20
  },
  gap: {
    height: 50
  }
})

module.exports = Tour;
