'use strict'

import React, {
  StyleSheet
} from 'react-native'

import constants from '../constants/constants'

const styles = StyleSheet.create({
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 50
  },
  button: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20
  },
  submitButton: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    width: 60,
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE0B2'
  },
  buttonTextActive: {
    width: 60,
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FB8C00'
  },
  submitButtonText: {
    width: 150,
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE0B2'
  },
  submitButtonTextActive: {
    width: 150,
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FB8C00'
  },
  text: {
    color: '#FFF'
  },
  description: {
    color: '#333',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center'
  },
  descriptionWrapper: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  headerImage: {
    flex: 1,
    height: 100,
    resizeMode: 'cover'
  },
  textInput: {
    fontSize: 14,
    height: 50,
    lineHeight: 50,
    marginTop: 0,
    color: '#E65100',
  },
  savedWrapper: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  savedText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#FF9800',
    fontWeight: '500'
  }
})

module.exports = styles;
