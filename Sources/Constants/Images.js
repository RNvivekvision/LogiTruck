const imagePath = '../Assets/Images/';
const png = '.png';

const Images = {
  login: require(imagePath + 'login' + png),
  otp: require(imagePath + 'otp' + png),
  registrationType: require(imagePath + 'registrationType' + png),
  tab_0: require(imagePath + 'tab_0' + png),
  tab_1: require(imagePath + 'tab_1' + png),
  tab_2: require(imagePath + 'tab_2' + png),
  tab_3: require(imagePath + 'tab_3' + png),
  location: require(imagePath + 'location' + png),
  back: require(imagePath + 'back' + png),
  drawer: require(imagePath + 'drawer' + png),
  appIcon: require(imagePath + 'appIcon' + png),

  // Dummy images should be deleted....
  dummyTruck: require(imagePath + 'dummyTruck' + png),
};

export default Images;
