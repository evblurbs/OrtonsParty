'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'

let ExScreen = require('../../ExScreen');

class Prefunk extends Component {
  _goBack () {
    this.props.navigator.pop()
  }
  render () {
    return (
      <ExScreen
        title="Prefunk"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={styles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10400267_507817557810_5270_n.jpg?oh=945d8aef67afbb843f87b1373fd8dda8&oe=57B9DAF8'}}
          style={styles.image}>

        </Image>
        <View style={styles.innerWrapper}>
          <Text style={styles.title}>Prefunk</Text>
          <Text style={styles.description}>Jon arrives Thursday, April 8th in the afternoon. <Text style={styles.bold}>Nate will be able to hangout with us on Thursday!</Text> He will most likely hangout earlier on in the day, and won{'\''}t be staying too late. We will be hanging out at Evan{'\''}s place, which is located in Capitol Hill - near 12th Ave. and E Olive St.</Text>
          <Text style={styles.subTitle}>Parking</Text>
          <Text style={styles.description}>Parking west of 12th Ave. is paid until 6pm or 8pm. There are a lot of spots near Cal Anderson Park. If that is full, there is a paid parking lot at the church near 11th Ave. and E Olive St. East of 12th Ave is free parking (I believe - don{'\''}t quote me).</Text>
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
  }
})

module.exports = Prefunk;
