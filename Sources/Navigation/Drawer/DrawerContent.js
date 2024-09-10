import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { DummyData, Functions } from '../../Utils';
import { Images } from '../../Constants';
import { useInset } from '../../Hooks';

export default function DrawerContent({ navigation }) {
  const styles = useStyles();

  const onPress = async v => {
    navigation.closeDrawer();
    await Functions.wait(100);

    if (v?.nav) return navigation.navigate(v.nav);
    if (v?.share) return await Functions.ShareApp();
    if (v?.rate) return await Functions.RateUs();
    if (v?.policy) return await Functions.OpenUrl(v.policy);
    if (v?.logout)
      return await Functions.ALERT({
        title: 'Alert',
        text: 'Are you sure you want to logout?',
        buttons: [
          { text: 'Yes', onPress: onLogout },
          { text: 'No', style: 'destructive' },
        ],
      });
  };

  const onLogout = async () => {
    console.log('Logout Pressed...');
  };

  return (
    <View style={RNStyles.container}>
      <View style={styles.logoBg} />

      <View style={RNStyles.container}>
        <View style={styles.logo}>
          <RNImage source={Images.appIcon} style={{ borderRadius: wp(5) }} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listContainer}>
            {DummyData.drawer.map((v, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.6}
                onPress={() => onPress(v)}
                style={styles.renderDrawer}>
                <RNImage source={Images['drawer_' + i]} style={styles.icon} />
                <RNText
                  size={FontSize.font14}
                  family={FontFamily.SemiBold}
                  pLeft={wp(4)}>
                  {v.title}
                </RNText>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const size = { logo: wp(33), icon: wp(6) };
const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
    logoBg: {
      height: hp(18),
      paddingTop: inset.top + hp(2),
      backgroundColor: Colors.primary,
    },
    title: {
      fontSize: FontSize.font20,
      fontFamily: FontFamily.SemiBold,
      alignSelf: 'center',
      color: Colors.white,
    },
    logo: {
      ...RNStyles.shadow,
      alignSelf: 'center',
      position: 'absolute',
      top: -wp(20),
      zIndex: 1,
      width: size.logo,
      height: size.logo,
      borderRadius: wp(5),
      backgroundColor: Colors.white,
    },
    listContainer: {
      paddingTop: hp(10),
      paddingBottom: hp(4),
    },
    renderDrawer: {
      ...RNStyles.flexRow,
      paddingHorizontal: wp(6),
      paddingVertical: hp(1.5),
    },
    icon: {
      ...RNStyles.icon,
      width: size.icon,
      height: size.icon,
      tintColor: Colors.primary,
    },
  });
};
