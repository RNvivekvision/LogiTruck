import { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import RNText from './RNText';

const RNDropDown = (
  {
    title,
    data,
    value,
    placeholder,
    maxHeight,
    onChange,
    position,
    containerStyle,
    dropdownStyle,
    dropdownPlaceholderStyle,
    dropDownSelectedTextStyle,
    dropDownIconStyle,
    dropDownItemTextStyle,
    search,
    searchPlaceholder,
    renderInputSearch,
    inputSearchStyle,
    renderLeftIcon,
    itemContainerStyle,
    dropDownContainerStyle,
    error,
    errorMsg,
    disable,
    ...rest
  },
  ref,
) => {
  const DISABLE = disable || data?.every(v => v === null);
  const styles = useStyles({
    error,
    disable: DISABLE,
  });
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <RNText style={styles.title}>{title}</RNText>}
      {data?.length > 0 && (
        <Dropdown
          ref={ref}
          style={[styles.dropdownStyle, dropdownStyle]}
          disable={DISABLE}
          placeholderStyle={[styles.placeholderStyle, dropdownPlaceholderStyle]}
          selectedTextStyle={[styles.selectedText, dropDownSelectedTextStyle]}
          iconStyle={[styles.iconStyle, dropDownIconStyle]}
          itemContainerStyle={[styles.itemContainerStyle, itemContainerStyle]}
          containerStyle={[styles.containerStyle, dropDownContainerStyle]}
          itemTextStyle={[styles.itemTextStyle, dropDownItemTextStyle]}
          activeColor={Colors.primary + '80'}
          data={data}
          maxHeight={maxHeight ?? hp(25)}
          labelField="label"
          valueField="value"
          placeholder={placeholder ?? ''}
          value={value}
          onChange={onChange}
          dropdownPosition={position ?? 'auto'}
          search={search}
          searchPlaceholder={searchPlaceholder}
          renderInputSearch={
            renderInputSearch ? v => renderInputSearch?.(v) : null
          }
          inputSearchStyle={[styles.inputSearchStyle, inputSearchStyle]}
          renderLeftIcon={renderLeftIcon}
          {...rest}
        />
      )}
      {error && <RNText style={styles.errorMsg}>{errorMsg}</RNText>}
    </View>
  );
};

const useStyles = ({ error, disable }) => {
  return StyleSheet.create({
    container: {
      paddingTop: hp(2),
      marginHorizontal: wp(4),
    },
    title: {
      fontSize: FontSize.font14,
      color: disable ? Colors.black + '50' : Colors.black,
    },
    dropdownStyle: {
      backgroundColor: Colors.primary + '10',
      borderRadius: wp(3),
      paddingHorizontal: wp(4),
      paddingVertical: hp(0.5),
      marginTop: hp(1.5),
      borderWidth: wp(0.3),
      borderColor: error ? Colors.error : Colors.transparent,
    },
    placeholderStyle: {
      color: Colors.placeholder,
      fontSize: FontSize.font12,
      fontFamily: FontFamily.Regular,
    },
    selectedText: {
      fontSize: FontSize.font12,
      fontFamily: FontFamily.Regular,
      color: Colors.black,
      color: disable ? Colors.black + '50' : Colors.black,
    },
    itemTextStyle: {
      fontSize: FontSize.font14,
      fontFamily: FontFamily.Regular,
      color: Colors.black,
    },
    iconStyle: {
      width: wp(7),
      height: wp(7),
      tintColor: disable ? Colors.black + '50' : Colors.black,
    },
    inputSearchStyle: {},
    itemContainerStyle: {
      backgroundColor: Colors.black + '15',
    },
    containerStyle: {
      backgroundColor: Colors.white,
      borderWidth: wp(0.5),
      borderColor: Colors.primary,
      borderRadius: wp(3),
      overflow: 'hidden',
    },
    errorMsg: {
      fontSize: FontSize.font12,
      paddingTop: hp(1),
      color: Colors.error,
    },
  });
};

export default forwardRef(RNDropDown);
