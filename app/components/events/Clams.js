'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'

let ExScreen = require('../../../ExScreen');

class Clams extends Component {
  _goBack () {
    this.props.navigator.pop()
  }
  render () {
    return (
      <ExScreen
        title="Razor Clams"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={styles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'https://nwsportsmanmag.files.wordpress.com/2010/11/cas.jpg'}}
          style={styles.image}>

        </Image>
        <View style={styles.innerWrapper}>
          <Text style={styles.title}>Razor Clams</Text>
          <Text style={styles.description}>We will be hunting for lunch. Today, our prey is razor clams. Make sure to get your license, which allows you to get 15 clams.</Text>
        </View>
        <View style={styles.innerWrapper}>
          <Text style={styles.subTitle}>Prizes</Text>
          <Text style={styles.description}>Prizes goto who finds the most clams. Below are the prizes for 1st, 2nd, 3rd, and 4th.</Text>
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

module.exports = Clams;
