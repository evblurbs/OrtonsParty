'use strict'

import React, {
  Component,
  AsyncStorage
} from 'react-native'

const STORAGE_KEY = '@OrtonsParty:name'

var data = {
  getName: async function() {
    try {
      var name = await AsyncStorage.getItem(STORAGE_KEY)
      if(name !== null) {
        return name;
      }
    } catch (error) {
      console.warn('Error with getName', error)
    }
  },
  setName: async function(name) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name)
    } catch (error) {
      console.warn('Error with setName', error)
    }
  }
}

module.exports = data;
