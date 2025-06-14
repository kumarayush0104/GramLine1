const helpCenters = [
  // Delhi
  {
    id: 1,
    name: "Delhi Legal Aid Clinic",
    address: "Connaught Place, New Delhi, Delhi",
    phone: "011-23456789",
    whatsapp: "911123456789",
    lat: 28.6328,
    lng: 77.2197,
    helpType: 1,
    rating: 4.2
  },
  {
    id: 2,
    name: "NGO Support Center Delhi",
    address: "Karol Bagh, New Delhi, Delhi",
    phone: "011-98765432",
    whatsapp: "911198765432",
    lat: 28.6517,
    lng: 77.1880,
    helpType: 2,
    rating: 4.0
  },

  // Mumbai
  {
    id: 3,
    name: "Mumbai Legal Aid Clinic",
    address: "Fort, Mumbai, Maharashtra",
    phone: "022-23456789",
    whatsapp: "912223456789",
    lat: 18.9333,
    lng: 72.8333,
    helpType: 1,
    rating: 4.3
  },
  {
    id: 4,
    name: "NGO Support Center Mumbai",
    address: "Andheri West, Mumbai, Maharashtra",
    phone: "022-98765432",
    whatsapp: "912298765432",
    lat: 19.1190,
    lng: 72.8460,
    helpType: 2,
    rating: 4.1
  },

  // Bangalore
  {
    id: 5,
    name: "Bangalore Legal Aid Clinic",
    address: "MG Road, Bangalore, Karnataka",
    phone: "080-23456789",
    whatsapp: "918023456789",
    lat: 12.9716,
    lng: 77.5946,
    helpType: 1,
    rating: 4.4
  },
  {
    id: 6,
    name: "NGO Support Center Bangalore",
    address: "Koramangala, Bangalore, Karnataka",
    phone: "080-98765432",
    whatsapp: "918098765432",
    lat: 12.9352,
    lng: 77.6245,
    helpType: 2,
    rating: 4.2
  },

  // Chennai
  {
    id: 7,
    name: "Chennai Legal Aid Clinic",
    address: "T Nagar, Chennai, Tamil Nadu",
    phone: "044-23456789",
    whatsapp: "914423456789",
    lat: 13.0827,
    lng: 80.2707,
    helpType: 1,
    rating: 4.3
  },
  {
    id: 8,
    name: "NGO Support Center Chennai",
    address: "Adyar, Chennai, Tamil Nadu",
    phone: "044-98765432",
    whatsapp: "914498765432",
    lat: 13.0100,
    lng: 80.2500,
    helpType: 2,
    rating: 4.1
  },

  // Kolkata
  {
    id: 9,
    name: "Kolkata Legal Aid Clinic",
    address: "Salt Lake, Kolkata, West Bengal",
    phone: "033-23456789",
    whatsapp: "913323456789",
    lat: 22.5726,
    lng: 88.3639,
    helpType: 1,
    rating: 4.2
  },
  {
    id: 10,
    name: "NGO Support Center Kolkata",
    address: "Park Street, Kolkata, West Bengal",
    phone: "033-98765432",
    whatsapp: "913398765432",
    lat: 22.5600,
    lng: 88.3600,
    helpType: 2,
    rating: 4.0
  },

  // Hyderabad
  {
    id: 11,
    name: "Hyderabad Legal Aid Clinic",
    address: "Banjara Hills, Hyderabad, Telangana",
    phone: "040-23456789",
    whatsapp: "914023456789",
    lat: 17.3850,
    lng: 78.4867,
    helpType: 1,
    rating: 4.3
  },
  {
    id: 12,
    name: "NGO Support Center Hyderabad",
    address: "Hitech City, Hyderabad, Telangana",
    phone: "040-98765432",
    whatsapp: "914098765432",
    lat: 17.4470,
    lng: 78.3762,
    helpType: 2,
    rating: 4.1
  },

  // Pune
  {
    id: 13,
    name: "Pune Legal Aid Clinic",
    address: "Shivaji Nagar, Pune, Maharashtra",
    phone: "020-23456789",
    whatsapp: "912023456789",
    lat: 18.5204,
    lng: 73.8567,
    helpType: 1,
    rating: 4.2
  },
  {
    id: 14,
    name: "NGO Support Center Pune",
    address: "Kothrud, Pune, Maharashtra",
    phone: "020-98765432",
    whatsapp: "912098765432",
    lat: 18.5075,
    lng: 73.8100,
    helpType: 2,
    rating: 4.0
  },

  // Jaipur
  {
    id: 15,
    name: "Jaipur Legal Aid Clinic",
    address: "Civil Lines, Jaipur, Rajasthan",
    phone: "0141-2345678",
    whatsapp: "919141234567",
    lat: 26.9124,
    lng: 75.7873,
    helpType: 1,
    rating: 4.1
  },
  {
    id: 16,
    name: "NGO Support Center Jaipur",
    address: "Malviya Nagar, Jaipur, Rajasthan",
    phone: "0141-9876543",
    whatsapp: "919198765432",
    lat: 26.8858,
    lng: 75.7870,
    helpType: 2,
    rating: 4.0
  },

  // Lucknow
  {
    id: 17,
    name: "Lucknow Legal Aid Clinic",
    address: "Hazratganj, Lucknow, Uttar Pradesh",
    phone: "0522-2345678",
    whatsapp: "915222345678",
    lat: 26.8467,
    lng: 80.9462,
    helpType: 1,
    rating: 4.3
  },
  {
    id: 18,
    name: "NGO Support Center Lucknow",
    address: "Aliganj, Lucknow, Uttar Pradesh",
    phone: "0522-9876543",
    whatsapp: "915229876543",
    lat: 26.8570,
    lng: 80.9490,
    helpType: 2,
    rating: 4.1
  },

  // Chandigarh
  {
    id: 19,
    name: "Chandigarh Legal Aid Clinic",
    address: "Sector 17, Chandigarh",
    phone: "0172-2345678",
    whatsapp: "91722345678",
    lat: 30.7333,
    lng: 76.7794,
    helpType: 1,
    rating: 4.2
  },
  {
    id: 20,
    name: "NGO Support Center Chandigarh",
    address: "Sector 22, Chandigarh",
    phone: "0172-9876543",
    whatsapp: "91729876543",
    lat: 30.7410,
    lng: 76.7680,
    helpType: 2,
    rating: 4.0
  },

  // Ahmedabad
  {
    id: 21,
    name: "Ahmedabad Legal Aid Clinic",
    address: "Navrangpura, Ahmedabad, Gujarat",
    phone: "079-2345678",
    whatsapp: "91792345678",
    lat: 23.0225,
    lng: 72.5714,
    helpType: 1,
    rating: 4.3
  },
  {
    id: 22,
    name: "NGO Support Center Ahmedabad",
    address: "Vastrapur, Ahmedabad, Gujarat",
    phone: "079-9876543",
    whatsapp: "91799876543",
    lat: 23.0360,
    lng: 72.5340,
    helpType: 2,
    rating: 4.1
  },

  // Surat
  {
    id: 23,
    name: "Surat Legal Aid Clinic",
    address: "Adajan, Surat, Gujarat",
    phone: "0261-2345678",
    whatsapp: "912612345678",
    lat: 21.1702,
    lng: 72.8311,
    helpType: 1,
    rating: 4.2
  },
  {
    id: 24,
    name: "NGO Support Center Surat",
    address: "Varachha, Surat, Gujarat",
    phone: "0261-9876543",
    whatsapp: "91269876543",
    lat: 21.1900,
    lng: 72.8200,
    helpType: 2,
    rating: 4.0
  },

  // Bhopal
  {
    id: 25,
    name: "Bhopal Legal Aid Clinic",
    address: "MP Nagar, Bhopal, Madhya Pradesh",
    phone: "0755-2345678",
    whatsapp: "917552345678",
    lat: 23.2599,
    lng: 77.4126,
    helpType: 1,
    rating: 4.3
  },
  {
    id: 26,
    name: "NGO Support Center Bhopal",
    address: "Arera Colony, Bhopal, Madhya Pradesh",
    phone: "0755-9876543",
    whatsapp: "91759876543",
    lat: 23.2410,
    lng: 77.4120,
    helpType: 2,
    rating: 4.1
  },

  // Kochi
  {
    id: 27,
    name: "Kochi Legal Aid Clinic",
    address: "Marine Drive, Kochi, Kerala",
    phone: "0484-2345678",
    whatsapp: "914842345678",
    lat: 9.9312,
    lng: 76.2673,
    helpType: 1,
    rating: 4.2
  },
  {
    id: 28,
    name: "NGO Support Center Kochi",
    address: "Fort Kochi, Kochi, Kerala",
    phone: "0484-9876543",
    whatsapp: "91489876543",
    lat: 9.9650,
    lng: 76.2410,
    helpType: 2,
    rating: 4.0
  },

  // Lucknow (additional)
  {
    id: 29,
    name: "Lucknow Women Helpline",
    address: "Gomti Nagar, Lucknow, Uttar Pradesh",
    phone: "0522-1090",
    whatsapp: "91522109000",
    lat: 26.8467,
    lng: 80.9462,
    helpType: 1,
    rating: 4.4
  },

  // Daltonganj, Jharkhand
  {
    id: 30,
    name: "Daltonganj Legal Aid Clinic",
    address: "Main Road, Daltonganj, Jharkhand",
    phone: "06544-234567",
    whatsapp: "916544234567",
    lat: 23.8886,
    lng: 84.0414,
    helpType: 1,
    rating: 4.1
  },
  {
    id: 31,
    name: "NGO Support Center Daltonganj",
    address: "Near Bus Stand, Daltonganj, Jharkhand",
    phone: "06544-987654",
    whatsapp: "91654987654",
    lat: 23.8900,
    lng: 84.0400,
    helpType: 2,
    rating: 4.0
  },
  // Additional NGOs from provided dataset - Delhi
  {
    id: 1001,
    name: "Goonj",
    address: "Connaught Place, New Delhi, Delhi",
    phone: "011-23456789",
    whatsapp: "911123456789",
    lat: 28.6328,
    lng: 77.2197,
    helpType: 2,
    rating: 4.1
  },
  {
    id: 1002,
    name: "Center For Social Security Action & Research (CSSAR)",
    address: "Karol Bagh, New Delhi, Delhi",
    phone: "011-98765432",
    whatsapp: "911198765432",
    lat: 28.6517,
    lng: 77.1880,
    helpType: 2,
    rating: 4.0
  },
  {
    id: 1003,
    name: "Etasha Society",
    address: "Lajpat Nagar, New Delhi, Delhi",
    phone: "011-22334455",
    whatsapp: "911122334455",
    lat: 28.5678,
    lng: 77.2300,
    helpType: 2,
    rating: 4.2
  },
  {
    id: 1004,
    name: "Mobile Creches for Working Mothers' Children",
    address: "Saket, New Delhi, Delhi",
    phone: "011-33445566",
    whatsapp: "911133445566",
    lat: 28.5245,
    lng: 77.2100,
    helpType: 2,
    rating: 4.3
  },
  {
    id: 1005,
    name: "Navjyoti India Foundation",
    address: "Dwarka, New Delhi, Delhi",
    phone: "011-44556677",
    whatsapp: "911144556677",
    lat: 28.5900,
    lng: 77.0500,
    helpType: 2,
    rating: 4.0
  },
  // Additional NGOs from provided dataset - Maharashtra
  {
    id: 1006,
    name: "Mazi Sainik Shikshan Ani Swasthya Kalyan Sanstha",
    address: "Pune, Maharashtra",
    phone: "020-23456789",
    whatsapp: "912023456789",
    lat: 18.5204,
    lng: 73.8567,
    helpType: 2,
    rating: 4.1
  },
  {
    id: 1007,
    name: "Annamrita Foundation",
    address: "Mumbai, Maharashtra",
    phone: "022-23456789",
    whatsapp: "912223456789",
    lat: 19.0760,
    lng: 72.8777,
    helpType: 2,
    rating: 4.2
  },
  {
    id: 1008,
    name: "National Society for Equal Opportunities for the Handicapped",
    address: "Nagpur, Maharashtra",
    phone: "0712-2345678",
    whatsapp: "917122345678",
    lat: 21.1458,
    lng: 79.0882,
    helpType: 2,
    rating: 4.0
  },
  {
    id: 1009,
    name: "Salaam Bombay Foundation",
    address: "Mumbai, Maharashtra",
    phone: "022-98765432",
    whatsapp: "912298765432",
    lat: 19.0760,
    lng: 72.8777,
    helpType: 2,
    rating: 4.3
  },
  {
    id: 1010,
    name: "ALERT-INDIA Association for Leprosy education, Rehabilitation & Treatment India",
    address: "Pune, Maharashtra",
    phone: "020-98765432",
    whatsapp: "912098765432",
    lat: 18.5204,
    lng: 73.8567,
    helpType: 2,
    rating: 4.1
  }
];

export default helpCenters;
