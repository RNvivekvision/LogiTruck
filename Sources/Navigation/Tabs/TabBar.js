import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNText, RNStyles } from '../../Common';
import { Images } from '../../Constants';
import { useInset } from '../../Hooks';

export default function TabBar({ state, descriptors, navigation }) {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
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
          <View
            key={index}
            style={[
              styles.renderContainer,
              {
                backgroundColor: isFocused
                  ? Colors.white + '20'
                  : Colors.primary,
              },
            ]}>
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
                  { tintColor: isFocused ? Colors.white : Colors.black },
                ]}
              />
              <RNText
                style={styles.text}
                color={isFocused ? Colors.white : Colors.black}>
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
  return StyleSheet.create({
    container: {
      ...RNStyles.flexRowBetween,
      backgroundColor: Colors.primary,
      paddingVertical: hp(1),
      paddingBottom: inset.bottom > 0 ? inset.bottom : hp(1),
    },
    renderContainer: {
      flex: 1,
      marginHorizontal: wp(4),
      paddingVertical: hp(1),
      borderRadius: wp(2),
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
