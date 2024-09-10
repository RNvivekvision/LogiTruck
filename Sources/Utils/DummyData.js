import { NavRoutes } from '../Navigation';

const DummyData = {
  bid: {
    dummyBid: {
      name: 'Open Body, LCV',
      number: 'GJ 05 CW 3455',
      type: 'Super Carry Std CNG',
      location: 'Surat, Gujarat',
      price: 35000,
      reofferPrice: 33000,
    },
  },
  drawer: [
    { title: 'Vehical', nav: NavRoutes.AddVehical },
    { title: 'License', nav: NavRoutes.AddLicense },
    { title: 'Service', nav: NavRoutes.AddService },
    { title: 'Bank details', nav: NavRoutes.AddBankDetails },
    { title: 'Share App', share: true },
    { title: 'Rate Us', rate: true },
    { title: 'About Us', nav: NavRoutes.AboutUs },
    { title: 'Contact Us', nav: NavRoutes.ContactUs },
    { title: 'Help & Feedback', nav: NavRoutes.HelpFeedback },
    { title: 'Privacy Policy', policy: 'https://www.youtube.com/' },
    { title: 'Logout', logout: true },
  ],
};

export default DummyData;
