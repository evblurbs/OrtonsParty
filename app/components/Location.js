'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native'

let ExScreen = require('../../ExScreen');
let ExPhotoGallery = require('../../ExPhotoGallery');

class Location extends Component {
  _goBack () {
    this.props.navigator.pop()
  }
  render () {
    return (
      <ExScreen
        title="Location"
        headerColor='#FFA726'
        scrollEnabled={true}
        style={styles.container}
        back={() => {this._goBack()}}>
        <ExPhotoGallery />
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>We will be staying at Seabrook, on the Pacific Coast of the Olympic Peninsula in Washington. Seabrook is 20 min. north of Ocean Schores, where Jon and a few friends took an infamous trip in college. It is roughly 2.5 hours from Seattle. The place we are staying at has a number of beds, a hut tub (bring a bathing suit), and is on the ocean. There is also a community center with a swimming pool, basketball court, restaurants, and bars.</Text>
        </View>
        <View style={styles.directionsWrapper}>
          <Text style={styles.title}>Directions</Text>
          <Text style={[styles.directions, styles.tldr]}>tldr; enter Seabrook, WA into Google Maps. You will need to call Evan/someone once you arrive, as we do not where the house is located in Seabrook.</Text>
          <Text style={styles.directions}>Drive south on I-5 to Olympia. From Olympia, travel west on US 101 N for 6 miles. At this point, please ensure you stay to the left and merge onto HWY 8 continuing toward Aberdeen & Hoquiam. HWY 8 becomes HWY 12 and takes you into Aberdeen (~40 mi).</Text>
          <Text style={styles.directions}>Once in Aberdeen, follow the signs to Highway 101 North.</Text>
          <Text style={styles.directions}>As you are leaving Aberdeen and entering Hoquiam, continue west on Sumner Avenue still following Highway 101 North.</Text>
          <Text style={styles.directions}>Once parallel to the water at the end of the street, merge into the middle lane prior to crossing the bridge and follow the sign to 101 North - Forks. Exit the bridge in the far right lane that takes a sharp right.</Text>
          <Text style={styles.directions}>Continue north on Highway 101 N through Hoquiam and toward Forks for 4.2 miles.</Text>
          <Text style={styles.directions}>At the sign for Ocean Beaches, turn left onto Ocean Beach Road towards Pacific Beach/Moclips. Stay on Ocean Beach Road for 20.3 miles. Note: when you get to Copalis Crossing, stay on Ocean Beach road, to the left at the fork - do not turn right towards Humptulips.</Text>
          <Text style={styles.directions}>At the end of Ocean Beach Road, take a left onto SR 109 at the 4-way stop sign at the entrance of Pacific Beach. In just half a mile, Seabrook will be on your left! Welcome!</Text>
        </View>
      </ExScreen>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  descriptionWrapper: {
    marginLeft: 20,
    marginRight: 20
  },
  directionsWrapper: {
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 40
  },
  description: {
    color: '#333',
    textAlign: 'left',
    fontSize: 13,
    lineHeight: 18
  },
  tldr: {
    fontWeight: '700'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 20
  },
  directions: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10
  }
})

module.exports = Location;
