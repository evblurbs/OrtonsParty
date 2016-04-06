'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class Footer extends Component {
  render () {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2016 Ortonistic View of Society</Text>
        <Text style={styles.footerText}>Proceed at your own risk</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  footerText: {
    color: '#333',
    fontSize: 12
  }
});

module.exports = Footer;
