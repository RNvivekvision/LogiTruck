import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { Functions } from '../../Utils';

export default function LOUpload({ title, img, onPhoto }) {
  const onPress = async () => {
    await Functions.ALERT({
      title: 'Upload Image',
      text: 'Upload image from gallery or camera',
      buttons: [
        { text: 'Cancel', style: 'destructive' },
        { text: 'Gallery', onPress: onGalleryPress },
        { text: 'Camera', onPress: onCameraPress },
      ],
    });
  };

  const onGalleryPress = async () => {
    try {
      const photo = await Functions.openGallery();
      console.log('photo -> ', JSON.stringify(photo, null, 2));
      onPhoto?.(photo);
    } catch (e) {
      console.error('Error onGalleryPress -> ', e);
    }
  };

  const onCameraPress = async () => {
    try {
      const photo = await Functions.openCamera();
      console.log('photo -> ', JSON.stringify(photo, null, 2));
      onPhoto?.(photo);
    } catch (e) {
      console.error('Error onCameraPress -> ', e);
    }
  };

  return (
    <View style={styles.container}>
      <RNText size={FontSize.font14}>{title}</RNText>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.imageContainer}>
        <RNImage
          source={img?.path ? { uri: img?.path } : Images.upload}
          resizeMode={'cover'}
          style={img?.path ? { borderRadius: wp(3) } : styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  imageContainer: {
    ...RNStyles.center,
    marginVertical: hp(1),
    height: hp(25),
    borderRadius: wp(3),
    backgroundColor: Colors.primary + '20',
  },
  icon: {
    width: wp(8),
    height: wp(8),
    tintColor: Colors.black + '80',
  },
});
