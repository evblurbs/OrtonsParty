'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'

let ExScreen = require('../../../ExScreen');

class BeerPong extends Component {
  _goBack () {
    this.props.navigator.pop()
  }
  render () {
    return (
      <ExScreen
        title="Beer Pong"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={styles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p206x206/1923391_507878969740_3160_n.jpg?oh=531a444f97346a65cc532a6a189fa91a&oe=57B9C24A'}}
          style={styles.image}>

        </Image>
        <View style={styles.innerWrapper}>
          <Text style={styles.title}>Beer Pong</Text>
          <Text style={styles.description}>A double elimination tournament with teams of two. Each player in the winning team will receive the awarded points.</Text>
          <Text style={styles.subTitle}>Teams</Text>
          <Text style={styles.description}>Teams were choosen randomly. Since we have an odd number of players - Jon is on two teams.</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Travis / Evan </Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Brad / Michael </Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Jon / Amit </Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Paul / Kevin </Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>David / Jon </Text>
          </View>
        </View>
        <View style={styles.innerWrapper}>
          <Text style={styles.subTitle}>Prizes</Text>
          <Text style={styles.description}>Below are the prizes for 1st, 2nd, and 3rd.</Text>
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

module.exports = BeerPong;
