'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  Text,
  AsyncStorage
} from 'react-native'

let ExScreen = require('../../ExScreen');
import constants from '../constants/constants'
import firebase from 'firebase'

class Leaderboard extends Component {
  constructor () {
    super()
    this.state = {
      players: [],
      name: ''
    }
  }
  componentDidMount () {
    this._loadName().done()
    this.firebaseRef = new Firebase("https://ortons-party.firebaseio.com/leaderboard");
    this.firebaseRef.on("value", function(snapshot) {
      this.setState({
        players: snapshot.val()
      })
    }.bind(this), function (errorObject) {
      console.log('This read failed: ' + errorObject.code);
    });

  }
  async _loadName() {
    try {
      var name = await AsyncStorage.getItem(constants.storage_key)
      if (name !== null && name.length) {
        this.setState({
          name: name
        })
      }
    } catch (error) {
      console.warn('AsyncStorage error: ' + error.message)
    }
  }
  componentWillUnmount () {
    this.firebaseRef.off()
  }
  _goBack () {
    this.props.navigator.pop()
  }
  render () {
    var sortedPlayers = this.state.players.sort(function(a, b) {
      return b.score - a.score;
    });
    var leaderBoardItems = sortedPlayers.map(function(player, index) {
      var active = this.state.name === player.name ? true : false
      return (
        <View style={styles.leaderboardItem} key={index}>
          <Text style={active ? styles.leaderboardNameActive : styles.leaderboardName}>{player.name}</Text>
          <Text style={active ? styles.leaderboardScoreActive : styles.leaderboardScore}>{player.score}</Text>
        </View>
      )
    }.bind(this));
    return (
      <ExScreen
        title="Leaderboard"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={styles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1910200_507639714210_8771_n.jpg?oh=54d796311ac31551d5a300a9a2860a19&oe=57890378'}}
          style={styles.image}>

        </Image>
        <View style={styles.innerWrapper}>
          <Text style={styles.title}>Leaderboard</Text>
          <Text style={styles.description}>Below is the leaderboard for the Ortinistic Games. The winner will win the most coveted prize in the <Text style={styles.bold}>Ortonistic Society</Text>.</Text>
          <Text style={styles.note}>Note: Jon gets a handicap of 5 points. He is, after all, the writer of the Ortonistic View of Society.</Text>
        </View>
        <View style={styles.leaderboardWrapper}>
          {leaderBoardItems}
        </View>
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
  note: {
    color: '#333',
    textAlign: 'left',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 10
  },
  bold: {
    fontWeight: '700'
  },
  leaderboardWrapper: {
    borderTopWidth: 1,
    marginTop: 30,
    marginBottom: 60,
    borderTopColor: constants.orange
  },
  leaderboardItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: constants.orange
  },
  leaderboardName: {
    color: '#333',
    fontWeight: '500'
  },
  leaderboardScore: {
    color: '#333',
    fontWeight: '500'
  },
  leaderboardNameActive: {
    color: '#E65100',
    fontWeight: '500'
  },
  leaderboardScoreActive: {
    color: '#E65100',
    fontWeight: '500'
  }
})

module.exports = Leaderboard;
