import moment from 'moment';
import { Alert, Linking, Platform, Share } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toast } from '@backpackapp-io/react-native-toast';
import { Colors } from '../Theme';
import Rate, { AndroidMarket } from 'react-native-rate';
import ImageCropPicker from 'react-native-image-crop-picker';

const requestTimeout = 30000;

const ALERT = ({ title, text, buttons }) => Alert.alert(title, text, buttons);

const wait = ms => new Promise(r => setTimeout(r, ms));

const OpenUrl = url => Linking.openURL(url);
const androidPackage = 'com.logitruck';
const iosAppId = '6505100117';
const appLink = Platform.select({
  android: `https://play.google.com/store/apps/details?id=${androidPackage}`,
  ios: `https://apps.apple.com/in/app/id${iosAppId}`,
});
const splited = appLink.split('/');
const AppleAppID = splited[splited.length - 1].substring(2);

const setAppData = async data => {
  const previousValue = await getAppData();
  if (previousValue) {
    await AsyncStorage.setItem(
      'appdata',
      JSON.stringify({ ...previousValue, ...data }),
    );
  } else {
    await AsyncStorage.setItem('appdata', JSON.stringify(data));
  }
};

const getAppData = async () => {
  const value = await AsyncStorage.getItem('appdata');
  return JSON.parse(value);
};

const formatDate = ({ date, format = 'DD/MM/YYYY' }) => {
  if (!date) return null;
  const d = moment(date).format(format);
  return d;
};

const handleResponse = response => {
  // console.log('response -> ', JSON.stringify(response, null, 2));
  if (response?.status === 401) {
    return {
      status: 401,
      message: 'Unauthorized. Please login again.',
      data: null,
    };
  }
  if (response?.status !== 200) {
    Toast.error(response?.message ?? 'Something went wrong. Please try again.');
  }
  return response;
};

const Toast = {
  success: m =>
    toast.success(m, {
      id: 'success',
      styles: { indicator: { backgroundColor: Colors.primary } },
    }),
  error: e => toast.error(e, { id: 'error' }),
  message: m => toast(m, { id: 'message' }),
};

const formatNumber = num => {
  if (!num) return null;
  const [integerPart, decimalPart] = num.toString().split('.');
  let formatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas for thousands
  if (decimalPart) {
    formatted += '.' + decimalPart;
  }
  return formatted;
};

const RateUs = ({ onSuccess, onError } = {}) => {
  const options = {
    AppleAppID: AppleAppID,
    GooglePackageName: androidPackage,
    AmazonPackageName: androidPackage,
    preferredAndroidMarket: AndroidMarket.Google,
    preferInApp: true,
    openAppStoreIfInAppFails: true,
    fallbackPlatformURL: appLink,
    inAppDelay: 1000,
  };
  Rate.rate(options, (success, error) => {
    if (error) return onError?.(error);
    return onSuccess?.(success);
  });
};

const ShareApp = async () => {
  const Title = 'LogiTruck';
  const Message = `Share ${Title} app to your friends. by clicking the following url`;
  await Share.share({ title: Title, message: Message, url: appLink });
};

const size = 800;
const imageOptions = {
  width: size,
  height: size,
  cropping: true,
  mediaType: 'photo',
  freeStyleCropEnabled: true,
};
const openGallery = async p => {
  const img = await ImageCropPicker.openPicker({ ...imageOptions, ...p });
  return img;
};
const openCamera = async p => {
  const img = await ImageCropPicker.openCamera({ ...imageOptions, ...p });
  return img;
};

const Functions = {
  requestTimeout,
  ALERT,
  OpenUrl,
  setAppData,
  getAppData,
  wait,
  formatDate,
  formatNumber,
  handleResponse,
  Toast,
  RateUs,
  ShareApp,
  openGallery,
  openCamera,
};
export default Functions;
