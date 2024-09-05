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
import { Functions } from '../../Utils';

const minWidth = wp(10);
const maxWidth = wp(29);

const TabContent = ({ state, descriptors, navigation }) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const pressed = useSharedValue(0);
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          pressed.value = 0;
          Functions.wait(10).then(() => (pressed.value = withTiming(1)));
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
          { img: Images.tab_1, title: 'Wardrobe' },
          { img: Images.tab_2, title: 'OOTD' },
        ];

        const animatedStyle = useAnimatedStyle(() => {
          const width = interpolate(
            pressed.value,
            [0, 1],
            [minWidth, maxWidth],
          );
          return {
            width: width,
          };
        }, []);

        return (
          <Reanimated.View
            key={index}
            style={[
              styles.renderContainer,
              { backgroundColor: isFocused ? Colors.white : Colors.primary },
            ]}>
            <TouchableOpacity
              accessibilityRole={'button'}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              activeOpacity={0.6}
              onLongPress={onLongPress}
              style={[styles.button]}>
              <Image
                source={data[index].img}
                resizeMode={'contain'}
                style={[
                  styles.icons,
                  { tintColor: isFocused ? Colors.black : Colors.white + '99' },
                ]}
              />
              {isFocused && (
                <RNText style={styles.text}>{data[index].title}</RNText>
              )}
            </TouchableOpacity>
          </Reanimated.View>
        );
      })}
    </View>
  );
};

const size = { icon: wp(6) };
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      ...RNStyles.flexRowBetween,
      position: 'absolute',
      bottom: inset.bottom + hp(2),
      left: wp(4),
      right: wp(4),
      zIndex: 1,
      backgroundColor: Colors.primary,
      borderRadius: wp(10),
      paddingVertical: hp(0.8),
      paddingHorizontal: wp(1),
    },
    renderContainer: {
      // width: maxWidth,
      flex: 1,
      borderRadius: 100,
      marginHorizontal: wp(0.5),
    },
    button: {
      ...RNStyles.flexRowCenter,
      borderRadius: 100,
      paddingVertical: hp(1.2),
    },
    icons: {
      width: size.icon,
      height: size.icon,
    },
    text: {
      fontSize: FontSize.font14,
      fontFamily: FontFamily.SemiBold,
      paddingLeft: wp(1),
    },
  });
};

export default TabContent;
