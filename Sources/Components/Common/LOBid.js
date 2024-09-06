import { StyleSheet, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { Functions } from '../../Utils';

export default function LOBid({ item, children }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <RNImage source={Images.dummyTruck} style={styles.img} />
        <View style={styles.content}>
          <RNText style={styles.bold} pTop={hp(0.5)} color={Colors.primary}>
            {item.name}
          </RNText>
          <RNText pVertical={hp(1)} size={FontSize.font12}>
            {item.number}
          </RNText>
          <RNText size={FontSize.font12}>{item.type}</RNText>
        </View>
      </View>

      <View style={styles.locationContainer}>
        <View style={RNStyles.flexRow}>
          <RNImage source={Images.location} style={styles.icon} />
          <RNText pLeft={wp(2)} size={FontSize.font12}>
            {'Current location'}
          </RNText>
        </View>

        <View style={styles.priceContainer}>
          <RNText style={styles.bold}>{item.location}</RNText>
          <RNText style={styles.bold}>
            {Functions.formatNumber(item.price)}
          </RNText>
        </View>
      </View>

      {children && <View style={styles.childrenContainer}>{children}</View>}
    </View>
  );
}

const size = { img: wp(25), icon: wp(5) };
const styles = StyleSheet.create({
  container: {
    ...RNStyles.shadow,
    marginHorizontal: wp(4),
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
    borderWidth: wp(0.1),
    borderColor: Colors.border,
    borderRadius: wp(3),
    backgroundColor: Colors.white,
  },
  img: {
    width: size.img,
    height: size.img,
  },
  icon: {
    width: size.icon,
    height: size.icon,
  },
  contentContainer: {
    ...RNStyles.flexRowBetween,
    borderBottomWidth: wp(0.1),
    borderBlockColor: Colors.border,
    paddingVertical: hp(1),
  },
  content: {
    flex: 1,
    height: '80%',
    paddingLeft: wp(4),
  },
  locationContainer: {
    paddingVertical: hp(1),
  },
  priceContainer: {
    ...RNStyles.flexRowBetween,
    paddingVertical: hp(1),
  },
  childrenContainer: {
    paddingBottom: hp(2),
  },
  bold: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
  },
});
