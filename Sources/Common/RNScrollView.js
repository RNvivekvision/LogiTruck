import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RNKeyboardAvoid, RNStyles } from './index';
import { useInset } from '../Hooks';
import { hp } from '../Theme';

const RNScrollView = ({
  style,
  safeArea = 'bottom',
  scrollProps,
  onScroll,
  children,
}) => {
  const styles = useStyles();
  const scrollStyles = {
    both: styles.both,
    top: styles.top,
    bottom: styles.bottom,
  };
  const contentContainerStyle = useMemo(
    () => scrollStyles[safeArea],
    [safeArea],
  );

  return (
    <RNKeyboardAvoid>
      <ScrollView
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        onScroll={onScroll}
        {...scrollProps}>
        <View style={[RNStyles.container, style]}>{children}</View>
      </ScrollView>
    </RNKeyboardAvoid>
  );
};

const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
    bottom: {
      paddingBottom: inset.bottom + hp(2),
    },
    top: {
      paddingTop: inset.top + hp(2),
    },
    both: {
      paddingTop: inset.top + hp(2),
      paddingBottom: inset.bottom + hp(2),
    },
  });
};

export default RNScrollView;
