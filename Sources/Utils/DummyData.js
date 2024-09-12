import { Images } from '../Constants';
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
    cities: [
      { value: 'Surat', label: 'Surat' },
      { value: 'Ahmedabad', label: 'Ahmedabad' },
      { value: 'Vadodara', label: 'Vadodara' },
      { value: 'Rajkot', label: 'Rajkot' },
      { value: 'Mumbai', label: 'Mumbai' },
      { value: 'Delhi', label: 'Delhi' },
    ],
  },
  drawer: [
    { title: 'Vehical', nav: NavRoutes.AddVehical },
    { title: 'License', nav: NavRoutes.AddLicense },
    { title: 'Service', nav: NavRoutes.AddService },
    { title: 'Bank details', nav: NavRoutes.AddBankDetails },
    { title: 'Share App', share: true },
    { title: 'Rate Us', rate: true },
    { title: 'Contact Us', nav: NavRoutes.ContactUs },
    { title: 'Help & Feedback', nav: NavRoutes.HelpFeedback },
    { title: 'About Us', policy: 'https://www.youtube.com/' },
    { title: 'Privacy Policy', policy: 'https://www.youtube.com/' },
    { title: 'Logout', logout: true },
  ],
  addVehical: {
    typeOfVehical: [
      { label: 'Pickup Truck', value: 'Pickup Truck' },
      { label: 'Box Truck (Cube Van)', value: 'Box Truck (Cube Van)' },
      { label: 'Flatbed Truck', value: 'Flatbed Truck' },
      { label: 'Dump Truck', value: 'Dump Truck' },
      { label: 'Tow Truck', value: 'Tow Truck' },
      { label: 'Refrigerator Truck', value: 'Refrigerator Truck' },
      { label: 'Tanker Truck', value: 'Tanker Truck' },
      { label: 'Garbage Truck', value: 'Garbage Truck' },
      { label: 'Heavy-Duty Truck', value: 'Heavy-Duty Truck' },
      { label: 'Semi-Trailer Truck', value: 'Semi-Trailer Truck' },
    ],
  },
  order: {
    status: [
      {
        image: Images.status_0,
        title: 'Order Booked',
        text: 'Order #234445562 from abc.',
      },
      {
        image: Images.status_1,
        title: 'Order Picked Up',
        text: 'Order #234445562 from abc.',
      },
      {
        image: Images.status_2,
        title: 'Order In Transit',
        text: 'Order #234445562 from abc.',
      },
      {
        image: Images.status_3,
        title: 'Order Delivered ',
        text: 'Order #234445562 from abc.',
      },
    ],
  },
};

export default DummyData;
