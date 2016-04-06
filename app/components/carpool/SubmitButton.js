import React, {
  View,
  TouchableHighlight,
  Text
} from 'react-native'

import styles from '../../styles/carpool'

function SubmitButton (props) {
  return (
    <View style={styles.buttonRow}>
      <TouchableHighlight
        style={styles.submitButton}
        underlayColor='#ECEFF1'
        onPress={props.cb}>
        <View style={props.submitActive ? styles.submitButtonTextActive : styles.submitButtonText}><Text style={styles.text}>Submit</Text></View>
      </TouchableHighlight>
    </View>
  )
}

module.exports = SubmitButton;
