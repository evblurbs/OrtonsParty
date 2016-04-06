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
import styles from '../styles/carpool'
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
        scrollEnabled={false}
        style={styles.container}
        back={() => {this._goBack()}}>
        <Image
          source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p206x206/200361_504193585280_9351_n.jpg?oh=8038b92bc656e75e5421fd83670a3ff7&oe=57BE04E2'}}
          style={styles.headerImage}>
        </Image>
        {screen}
      </ExScreen>
    )
  }
}

module.exports = Carpool;
