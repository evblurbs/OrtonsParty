'use strict';

import React, {
  Component,
  View,
  Image,
  TextInput,
  Text,
  TouchableHighlight,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import jonStyle from '../styles/styles'
import exStyles from '../styles/carpool'
import SubmitButton from './carpool/SubmitButton'
import EnterName from './carpool/EnterName'
import CarpoolForm from './carpool/CarpoolForm'
import constants from '../constants/constants'

let ExScreen = require('../../ExScreen');
let DataStore = require('../storage/data');

class Carpool extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      isAbleToDrive: null,
      restrictions: ''
    }
  }
  componentDidMount () {
    this._loadName().done()
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
  async handleSubmitName (name) {
    try {
      await AsyncStorage.setItem(constants.storage_key, name)
      this.setState({
        name: name
      })
    } catch (error) {
      console.warn('AsyncStorage error: ' + error.message)
    }
  }
  _goBack () {
    this.props.navigator.pop()
  }
  render () {
    var submitActive = this.state.name.length && this.state.isAbleToDrive !== null ? true : false;
    var screen = this.state.name.length ? <CarpoolForm name={this.state.name} /> : <EnterName callback={this.handleSubmitName.bind(this)} />;
    return (
      <ExScreen
        title="Carpool"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={exStyles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p206x206/200361_504193585280_9351_n.jpg?oh=8038b92bc656e75e5421fd83670a3ff7&oe=57BE04E2'}}
          style={exStyles.headerImage}>
        </Image>
        <View style={styles.innerWrapper}>
          <Text style={styles.title}>Carpooling</Text>
          <Text style={styles.description}>Below are the groups of carpoolers.</Text>
          <Text style={styles.subTitle}>Group 1</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Jon</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Amit</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>David</Text>
          </View>
        </View>
        <View style={styles.innerWrapper}>
          <Text style={styles.subTitle}>Group 2</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Paul</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Kevin</Text>
          </View>
        </View>
        <View style={styles.innerWrapper}>
          <Text style={styles.subTitle}>Group 3</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Evan</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Travis</Text>
          </View>
        </View>
        <View style={styles.innerWrapper}>
          <Text style={styles.subTitle}>Group 4</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Brad</Text>
          </View>
          <View style={styles.teamRow}>
            <Text style={styles.team}>Michael</Text>
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
    marginBottom: 0
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

module.exports = Carpool;
