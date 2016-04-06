import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';

import SubmitButton from './SubmitButton'
import styles from '../../styles/carpool'
import jonStyle from '../../styles/styles'
import firebase from 'firebase'

class CarpoolForm extends Component {
  constructor () {
    super()
    this.state = {
      isAbleToDrive: null,
      restrictions: '',
      saved: false
    }
    this.timer = null;
  }
  componentDidMount () {
    this.firebaseRef = new Firebase("https://ortons-party.firebaseio.com/carpool")
    this.firebaseDate = new Firebase("https://ortons-party.firebaseio.com/carpool/" + this.props.name)
    this.firebaseDate.on("value", function(snapshot) {
      var data = snapshot.val()
      this.setState({
        isAbleToDrive: data.isAbleToDrive,
        restrictions: data.restrictions
      })
    }.bind(this), function (errorObject) {
      console.log('This read failed: ' + errorObject.code);
    });
  }
  componentWillUnmount () {
    this.firebaseRef.off()
    this.firebaseDate.off()
  }
  handleSubmit () {
    if(this.state.isAbleToDrive !== null) {
      var userRef = this.firebaseRef.child(this.props.name)
      userRef.set({
        isAbleToDrive: this.state.isAbleToDrive,
        restrictions: this.state.restrictions,
      })
      this.setState({
        saved: true
      })
    }
  }
  renderSaved () {
    return (
      <View style={styles.savedWrapper}>
        <Text style={styles.savedText}>Thanks! Your carpool info has been updated. Return to this screen to update if your travel plans change.</Text>
      </View>
    )
  }
  render () {
    console.log(this.state.saved)
    var submitActive = this.state.isAbleToDrive !== null ? true: false
    var success = this.state.saved ? this.renderSaved() : null
    return (
      <View>
        <View>
          {success}
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Are you able to drive?</Text>
          </View>
          <View style={styles.buttonRow}>
            <TouchableHighlight
              style={styles.button}
              underlayColor='#ECEFF1'
              onPress={() => this.setState({isAbleToDrive: true})}>
              <View style={this.state.isAbleToDrive === true ? styles.buttonTextActive : styles.buttonText}><Text style={styles.text}>Yes</Text></View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              underlayColor='#ECEFF1'
              onPress={() => this.setState({isAbleToDrive: false})}>
              <View style={this.state.isAbleToDrive === false ? styles.buttonTextActive : styles.buttonText}><Text style={styles.text}>No</Text></View>
            </TouchableHighlight>
          </View>
        </View>
        <View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Do you need to arrive at or leave by a certain time? (i.e. leave at 6am Monday, leave Friday from Seattle)</Text>
          </View>
          <View style={jonStyle.textWrapper}>
            <TextInput
              underlineColorAndroid={'#FFF'}
              value={this.state.restrictions}
              style={styles.textInput}
              onChangeText={(text) => this.setState({restrictions: text})}
              />
          </View>
        </View>
        <SubmitButton
          cb={this.handleSubmit.bind(this)}
          submitActive={submitActive} />
      </View>
    )
  }
}

module.exports = CarpoolForm;
