'use strict';

let React = require('react-native');
let {
  Image,
  ScrollView,
  StyleSheet,
  View,
} = React;

let PHOTO_SPACING = 40;

let IMAGE_SOURCES = [
  // hedgehog
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/1.jpg'},
  // kittens
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/2.jpg'},
  // flower hamsters
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/3.jpg'},
  // puppy
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/4.jpg'},
  // duckling
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/5.jpg'},
  // hedgehog
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/6.jpg'},
  // kittens
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/7.jpg'},
  // flower hamsters
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/8.jpg'},
  // puppy
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/9.jpg'},
  // duckling
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/10.jpg'},
  // hedgehog
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/11.jpg'},
  // kittens
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/12.jpg'},
  // flower hamsters
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/13.jpg'},
  // puppy
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/14.jpg'},
  // duckling
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/15.jpg'},
  // hedgehog
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/16.jpg'},
  // kittens
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/17.jpg'},
  // flower hamsters
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/18.jpg'},
  // puppy
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/19.jpg'},
  // duckling
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/20.jpg'},
  // hedgehog
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/22.jpg'},
  // kittens
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/23.jpg'},
  // flower hamsters
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/24.jpg'},
  // puppy
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/25.jpg'},
  // duckling
  {uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/29.jpg'}
];

class ExPhotoGallery extends React.Component {
  render() {
    return (
      <ScrollView
        horizontal
        scrollsToTop={false}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={[styles.container, this.props.style]}>
        {IMAGE_SOURCES.map(source =>
          this._renderPhoto(source, { width: 320, height: 240 })
        )}
      </ScrollView>
    );
  }

  _renderPhoto(source, size) {
    return (
      <View key={source.uri} style={styles.photoContainer}>
        <Image source={source} style={[styles.photo, size]} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 0,
    width: 320 + PHOTO_SPACING,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 12,
    overflow: 'visible',
  },
  photoContainer: {
    marginHorizontal: PHOTO_SPACING / 2,
    overflow: 'visible',
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
  },
  photo: {
    overflow: 'visible',
  },
});

module.exports = ExPhotoGallery;
