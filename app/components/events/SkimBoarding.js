'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'

let ExScreen = require('../../../ExScreen');

class Skimboard extends Component {
  _goBack () {
    this.props.navigator.pop()
  }
  render () {
    return (
      <ExScreen
        title="Skimboarding"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={styles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/189967_504193645160_590_n.jpg?oh=9a361b38ac7c5f7f3e1c4eb6084aa309&oe=57808202'}}
          style={styles.image}>

        </Image>
        <View style={styles.innerWrapper}>
          <Text style={styles.title}>Skimboarding</Text>
          <Text style={styles.description}>The longest skimboard will win! You get upto 5 attempts, but after each attempt you must take 1 drink.</Text>
          <Text style={styles.subTitle}>Order</Text>
          <Text style={styles.description}>Below is the random order of each skim.</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Amit</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Kevin</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>David</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Jon</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Evan</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Brad</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Travis</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Paul</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Michael</Text>
          </View>
        </View>
        <View style={styles.innerWrapper}>
          <Text style={styles.subTitle}>Prizes</Text>
          <Text style={styles.description}>Prizes goto who has the longest skim. Below are the prizes for 1st, 2nd, 3rd, and 4th.</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.teamRow}>
            <Text style={styles.team}>1st: 4 points</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>2nd: 3 points</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>3rd: 2 points</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>4th: 1 points</Text>
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

module.exports = Skimboard;
