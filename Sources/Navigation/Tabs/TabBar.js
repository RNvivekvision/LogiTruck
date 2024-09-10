import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNText, RNStyles } from '../../Common';
import { Images } from '../../Constants';
import { useInset } from '../../Hooks';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const output = [wp(4), wp(29), wp(54), wp(79)];
export default function TabBar({ state, descriptors, navigation }) {
  const styles = useStyles();
  const currentIndex = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = state.routes.map((v, i) => i);
    const outputRange = state.routes.map((v, i) => output[i]);

    const left = interpolate(currentIndex.value, inputRange, outputRange);

    return {
      left: left,
    };
  }, []);

  return (
    <View style={styles.container}>
      <Reanimated.View style={[styles.overlay, animatedStyle]} />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          currentIndex.value = withTiming(index);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const data = [
          { img: Images.tab_0, title: 'Home' },
          { img: Images.tab_1, title: 'Bid' },
          { img: Images.tab_2, title: 'Orders' },
          { img: Images.tab_3, title: 'Setting' },
        ];

        return (
          <View key={index} style={[styles.renderContainer]}>
            <TouchableOpacity
              accessibilityRole={'button'}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              activeOpacity={0.6}
              onLongPress={onLongPress}
              style={RNStyles.center}>
              <Image
                source={data[index].img}
                resizeMode={'contain'}
                style={[
                  styles.icons,
                  {
                    tintColor: isFocused ? Colors.white : Colors.white + '75',
                  },
                ]}
              />
              <RNText
                style={styles.text}
                color={isFocused ? Colors.white : Colors.white + '75'}>
                {data[index].title}
              </RNText>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const size = { icon: wp(7) };
const useStyles = () => {
  const inset = useInset();
  const bottom = inset.bottom > 0 ? inset.bottom : hp(1);
  return StyleSheet.create({
    overlay: {
      backgroundColor: Colors.white + '30',
      position: 'absolute',
      width: size.icon * 2.4,
      height: size.icon * 2.5,
      zIndex: 1,
      bottom: bottom + hp(0),
      borderRadius: wp(2),
    },
    container: {
      ...RNStyles.flexRowBetween,
      backgroundColor: Colors.primary,
      paddingVertical: hp(1),
      paddingBottom: bottom,
    },
    renderContainer: {
      flex: 1,
      marginHorizontal: wp(4),
      paddingVertical: hp(1),
    },
    icons: {
      width: size.icon,
      height: size.icon,
    },
    text: {
      fontSize: FontSize.font14,
      fontFamily: FontFamily.SemiBold,
      paddingTop: hp(0.5),
    },
  });
};
