'use strict';

let React = require('react-native');
let {
  Animated,
  Easing,
  StyleSheet,
  View,
  TouchableHighlight
} = React;

let BODY_HEIGHT = 44;
let TITLE_MARGIN_TOP = 12;
let STATUS_BAR_HEIGHT = 20;

class ExHeader extends React.Component {
  renderBack (cb) {
    if (cb) {
      return (
        <TouchableHighlight style={styles.backLink} underlayColor='#FFA726' onPress={() => cb()}>
          <Animated.Image
            source={{ uri: 'https://s3-us-west-2.amazonaws.com/ortonsparty/back-arrow.png' }}
            style={styles.iconBackArrow} />
        </TouchableHighlight>
      )
    }
  }
  render() {
    let {
      title,
      scrollDistance,
      back,
      ...props,
    } = this.props;

    let bodyStyle = {
      opacity: scrollDistance.interpolate({
        inputRange: [0, BODY_HEIGHT],
        outputRange: [1, 0],
        easing: Easing.in(Easing.linear),
        extrapolate: 'clamp',
      }),
      height: scrollDistance.interpolate({
        inputRange: [0, BODY_HEIGHT],
        outputRange: [BODY_HEIGHT, 0],
        extrapolate: 'clamp',
      }),
    };

    let titleStyle = {
      transform: [{
        scale: scrollDistance.interpolate({
          inputRange: [0, BODY_HEIGHT],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }],
      marginTop: scrollDistance.interpolate({
        inputRange: [0, BODY_HEIGHT],
        outputRange: [TITLE_MARGIN_TOP, -STATUS_BAR_HEIGHT],
        extrapolate: 'clamp',
      }),
    };
    return (
      <View {...props} style={[styles.container, props.style]}>
        <View style={styles.statusBarStrut} />
        <Animated.View style={[styles.body, bodyStyle]}>
          {this.renderBack(back)}
          <Animated.Text style={[styles.titleText, titleStyle]}>
            {title}
          </Animated.Text>
        </Animated.View>
      </View>
    );
  }
}

ExHeader.HEIGHT = BODY_HEIGHT;

let styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  statusBarStrut: {
    height: STATUS_BAR_HEIGHT,
  },
  body: {
    height: BODY_HEIGHT,
    position: 'relative'
  },
  titleText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: -60,
    alignSelf: 'center',
    flex: 1
  },
  iconBackArrow: {
    width: 30,
    height: 43,
    top: 0,
    left: 0,
    position: 'absolute'
  },
  backLink: {
    width: 30,
    height: 43,
    position: 'absolute',
    top: 0,
    left: 0
  }
});

module.exports = ExHeader;
