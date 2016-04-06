'use strict';

import React, {
  Component,
  Navigator,
  View,
  StyleSheet
} from 'react-native'

import Home from '../components/Home'
import Location from '../components/Location'
import Prefunk from '../components/Prefunk'
import Carpool from '../components/Carpool'
import Events from '../components/Events'
import Leaderboard from '../components/Leaderboard'

class Nav extends Component {
  renderScene (route, nav) {
    switch (route.id) {
      case 'leaderboard':
        return (
          <Leaderboard navigator={nav} />
        )
      case 'events':
        return (
          <Events navigator={nav} />
        )
      case 'carpool':
        return (
          <Carpool navigator={nav} />
        )
      case 'prefunk':
        return (
          <Prefunk navigator={nav} />
        )
      case 'location':
        return (
          <Location navigator={nav} />
        )
      default:
        return (
          <Home navigator={nav} />
        )
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Navigator
          ref={(navigator) => {
            this._navigator = navigator
          }}
          initialRoute={{name: 'Home', index: 0}}
          renderScene={this.renderScene}
        />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
})

module.exports = Nav;
