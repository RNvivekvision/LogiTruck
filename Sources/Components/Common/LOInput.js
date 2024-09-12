import React, { forwardRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNInput, RNStyles, RNText, RNIcon, RNImage } from '../../Common';
import { Colors, FontSize, hp, wp } from '../../Theme';
import DatePicker from 'react-native-date-picker';
import { Functions } from '../../Utils';
import { Images } from '../../Constants';

const LOInput = (
  {
    title,
    titleStyle,
    icon,
    text,
    textStyle,
    onIconPress,
    onPress,
    error,
    errorMsg,
    containerStyle,
    disable,
    country,
    date,
    open,
    onDateChange,
    toggleDatePicker,
    ...rest
  },
  ref,
) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <RNText style={[styles.title, titleStyle]}>{title}</RNText>}
      {text ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={styles.inputContainer}>
          <RNText style={[styles.text, textStyle]}>{text}</RNText>
        </TouchableOpacity>
      ) : (
        <View style={styles.inputContainer}>
          {country}
          <RNInput
            ref={ref}
            style={styles.input}
            editable={!disable}
            {...rest}
          />
          {toggleDatePicker && (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={toggleDatePicker}
              style={styles.datePicker}>
              <RNText style={styles.date}>
                {Functions.formatDate({ date: date })}
              </RNText>
              <RNImage source={Images.calendar} style={styles.icon} />
            </TouchableOpacity>
          )}
          {icon && (
            <RNIcon
              icon={icon}
              iconStyle={styles.icon}
              onPress={onIconPress}
              containerStyle={styles.IconContainer}
            />
          )}
        </View>
      )}
      {toggleDatePicker && (
        <DatePicker
          modal
          open={open}
          date={date || new Date()}
          mode={'date'}
          onConfirm={d => {
            onDateChange?.(d);
            toggleDatePicker();
          }}
          onCancel={toggleDatePicker}
        />
      )}
      {error && <RNText style={styles.errorMsg}>{errorMsg}</RNText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(2),
    marginHorizontal: wp(4),
  },
  title: {
    fontSize: FontSize.font14,
    color: Colors.black,
  },
  text: {
    paddingVertical: hp(1),
    fontSize: FontSize.font12,
    color: Colors.placeholder,
  },
  inputContainer: {
    ...RNStyles.flexRow,
    paddingHorizontal: wp(4),
    // paddingVertical: hp(0.7),
    borderRadius: wp(3),
    paddingVertical: hp(0.5),
    marginTop: hp(1),
    backgroundColor: Colors.primary + '10',
  },
  input: {
    flex: 1,
    marginVertical: 0,
    paddingHorizontal: 0,
    color: Colors.black,
  },
  IconContainer: {
    ...RNStyles.center,
    width: wp(8),
    height: wp(8),
    marginLeft: wp(1),
    backgroundColor: Colors.transparent,
  },
  icon: {
    ...RNStyles.image70,
    tintColor: Colors.black,
  },
  errorMsg: {
    fontSize: FontSize.font12,
    paddingTop: hp(1),
    color: Colors.error,
  },
  datePicker: {
    width: '52%',
    height: '100%',
    borderLeftWidth: 1,
    borderLeftColor: Colors.black + '20',
    ...RNStyles.flexRowBetween,
    paddingLeft: wp(4),
  },
  date: {
    fontSize: FontSize.font12,
  },
  icon: {
    width: wp(5),
    height: wp(5),
  },
});

export default forwardRef(LOInput);
