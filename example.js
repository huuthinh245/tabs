import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  PermissionsAndroid,
  Linking,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { Svg, Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import HighlightText from '../../components/HighlightText';
import { insertScanData, removeScanData, clearScanData } from '../../reducers/Scan/actions';
import CustomModal from '../../components/CustomModal';
import { Images, Styles } from './../../mPDS';

const { width, height } = Dimensions.get('window');

class TabBar extends React.PureComponent {

  renderIcons = (focused, active, inactive) => {
    return (
      <Image source={focused ? active : inactive} />
    )
  }

  renderTitle = (focused, title) => {
    return (
      <Text
        style={focused ? styles.labelFocused : styles.labelLostFocused}>
        {title}
      </Text>
    )
  }

  goToScan = () => {
  }




  render() {
    const {
      renderIcon,
      getLabelText,
      activeTintColor,
      inactiveTintColor,
      onTabPress,
      onTabLongPress,
      getAccessibilityLabel,
      navigation,
      showLabel,
      layout
    } = this.props;
    let { routes, index } = navigation.state;
    const theme = 'light'
    return (
      <View>
        <View style={styles.tabBar1}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.tab}
          >
            {this.renderIcons(true, Images.Tab_Home_Active, Images.Tab_Home)}
            {this.renderTitle(true, 'Trang chủ')}
          </TouchableOpacity>
        </View>
        <View style={styles.tabBar2}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.scanTab}
            onPress={this.goToScan}
          >
            <Image source={Images.Tab_Scan} />
          </TouchableOpacity>
        </View>
        <View style={styles.tabBar3}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.tab}
            onPress={this.gotoListOrder}
          >
            <Image source={theme === 'light' ? Images.Tab_Trip : Images.Tab_Trip_Dark} />
            {this.renderTitle(false, 'Chuyến đi')}
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default TabBar;
const styles = StyleSheet.create({
  tabBar1: {
    flexDirection: 'row',
    height: 50,
    elevation: 2,
    backgroundColor: 'transparent',
    width: width / 3,
    left: 0
  },
  tabBar2: {
    flexDirection: 'row',
    top: - 30,
    elevation: 2,
    width: 56,
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 0,
    alignSelf: 'center'

  },
  tabBar3: {
    flexDirection: 'row',
    width: width / 3,
    height: 50,
    elevation: 2,
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanTab: {
    flex: 1,
    alignItems: 'flex-start',
  },
  svgStyle: {
    position: 'absolute',
    left: 0,
  },
  labelFocused: {
    fontSize: 12,
    color: '#FF7951',
    ...Styles.Fonts.fontRegular
  },
  labelLostFocused: {
    fontSize: 12,
    color: '#9198A1',
    ...Styles.Fonts.fontRegular
  },
})
