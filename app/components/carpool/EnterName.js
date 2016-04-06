import React, {
  Component,
  View,
  TextInput,
  Text
} from 'react-native'

import SubmitButton from './SubmitButton'
import styles from '../../styles/carpool'
import jonStyle from '../../styles/styles'

class EnterName extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }
  handleSubmit () {
    this.props.callback(this.state.name)
  }
  render () {
    var submitActive = this.state.name.length ? true : false
    return (
      <View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Enter your <Text style={jonStyle.bold}>first name</Text> below, and then select the carpool options that work best for you.</Text>
        </View>
        <View style={jonStyle.textWrapper}>
          <TextInput
            underlineColorAndroid={'#FFF'}
            value={this.state.name}
            style={jonStyle.textInput}
            onChangeText={(text) => this.setState({name: text})}
            />
        </View>
        <SubmitButton
          cb={this.handleSubmit.bind(this)}
          submitActive={submitActive} />
      </View>
    )
  }
}

module.exports = EnterName;
