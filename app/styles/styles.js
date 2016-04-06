'use strict'

import React, {
  StyleSheet
} from 'react-native'

import constants from '../constants/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerImage: {
    flex: 1,
    height: 150,
    resizeMode: 'cover'
  },
  descriptionWrapper: {
    marginLeft: 20,
    marginRight: 20
  },
  description: {
    color: '#333',
    textAlign: 'left',
    fontSize: 13,
    lineHeight: 18
  },
  textWrapper: {
    flex: 1,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#E65100',
    marginLeft: 50,
    marginRight: 50
  },
  textInput: {
    fontSize: 28,
    height: 50,
    lineHeight: 50,
    marginTop: 0,
    color: '#E65100',
  },
  bold: {
    fontWeight: '700'
  },
  button: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#FFE0B2',
    color: '#FFF'
  },
  buttonTextActive: {
    backgroundColor: '#FB8C00'
  }
})

module.exports = styles;
