import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RNIcon, RNStyles, RNText, RNScrollView, RNImage } from './index';
import { useInset } from '../Hooks';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images } from '../Constants';

const RNHeader = ({
  title,
  scrollProps,
  containerStyle,
  titleStyle,
  children,
  style,
  footer,
  noScroll,
  back = true,
  onBack,
  right,
  isHome,
}) => {
  const navigation = useNavigation();
  const styles = useStyles();

  const onBackPress = async () => {
    back ? navigation.goBack() : navigation.openDrawer();
  };

  const onProfilePress = () => {};

  const Profile = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onProfilePress}
        style={styles.profileContainer}>
        <RNImage source={Images.dummyUser} resizeMode={'cover'} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={RNStyles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={[styles.container, containerStyle]}>
        <RNIcon
          icon={back ? Images.back : Images.drawer}
          onPress={onBack ? onBack : onBackPress}
          containerStyle={styles.icon}
          iconStyle={{ tintColor: Colors.white }}
        />
        <RNText style={[styles.title, titleStyle]}>{title}</RNText>
        {right || isHome ? (
          isHome ? (
            <Profile />
          ) : (
            right
          )
        ) : (
          <View
            style={[styles.icon, { backgroundColor: Colors.transparent }]}
          />
        )}
      </View>
      {noScroll ? (
        children
      ) : (
        <RNScrollView style={style} scrollProps={scrollProps}>
          {children}
        </RNScrollView>
      )}
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      ...RNStyles.flexRowBetween,
      paddingHorizontal: wp(4),
      paddingTop: inset.top + hp(2),
      paddingVertical: hp(2),
      backgroundColor: Colors.primary,
    },
    icon: {
      ...RNStyles.center,
      width: size.icon,
      height: size.icon,
      borderRadius: wp(2),
      backgroundColor: Colors.white + '20',
    },
    title: {
      flex: 1,
      paddingHorizontal: hp(1),
      marginHorizontal: hp(1),
      fontSize: FontSize.font18,
      fontFamily: FontFamily.SemiBold,
      textAlign: 'center',
      color: Colors.white,
    },
    footer: {
      paddingBottom: inset.bottom,
    },
    profileContainer: {
      width: size.icon * 1,
      height: size.icon * 1,
      borderRadius: 100,
      overflow: 'hidden',
      borderWidth: wp(0.1),
      borderColor: Colors.white,
      backgroundColor: Colors.white + '20',
    },
  });
};

const size = { icon: wp(8) };

export default RNHeader;
