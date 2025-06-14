const helpCenters = [
  // Agra District
  {
    id: 1,
    name: "Agra Police Control Room",
    address: "Agra, Uttar Pradesh",
    phone: "100",
    whatsapp: null,
    lat: 27.1767,
    lng: 78.0081,
    helpType: 3,  // Police/Emergency
    rating: 4.1
  },
  {
    id: 2,
    name: "Ambulance Service 108 – Agra",
    address: "Agra, Uttar Pradesh",
    phone: "108",
    whatsapp: null,
    lat: 27.1767,
    lng: 78.0081,
    helpType: 3,  // Medical Emergency
    rating: 4.0
  },
  {
    id: 3,
    name: "Childline 1098 – Agra",
    address: "Agra, Uttar Pradesh",
    phone: "1098",
    whatsapp: null,
    lat: 27.1767,
    lng: 78.0081,
    helpType: 2,  // Child Helpline
    rating: 4.2
  },
  {
    id: 4,
    name: "Women Helpline 1090 – Agra (UP Police)",
    address: "Agra, Uttar Pradesh",
    phone: "1090",
    whatsapp: null,
    lat: 27.1767,
    lng: 78.0081,
    helpType: 1,  // Women’s Helpline
    rating: 4.0
  },

  // Firozabad District
  {
    id: 5,
    name: "Firozabad Police Control Room",
    address: "Firozabad, Uttar Pradesh",
    phone: "100",
    whatsapp: null,
    lat: 27.1500,
    lng: 78.3936,
    helpType: 3,
    rating: 4.0
  },
  {
    id: 6,
    name: "Ambulance Service 108 – Firozabad",
    address: "Firozabad, Uttar Pradesh",
    phone: "108",
    whatsapp: null,
    lat: 27.1500,
    lng: 78.3936,
    helpType: 3,
    rating: 3.9
  },
  {
    id: 7,
    name: "Childline 1098 – Firozabad (Chiragh Society)",
    address: "Firozabad, Uttar Pradesh",
    phone: "1098",
    whatsapp: null,
    lat: 27.1500,
    lng: 78.3936,
    helpType: 2,
    rating: 4.1
  },

  // Mainpuri District
  {
    id: 8,
    name: "Mainpuri Police Control Room",
    address: "Mainpuri, Uttar Pradesh",
    phone: "100",
    whatsapp: null,
    lat: 27.2333,
    lng: 79.0193,
    helpType: 3,
    rating: 3.9
  },
  {
    id: 9,
    name: "Ambulance Service 108 – Mainpuri",
    address: "Mainpuri, Uttar Pradesh",
    phone: "108",
    whatsapp: null,
    lat: 27.2333,
    lng: 79.0193,
    helpType: 3,
    rating: 4.0
  },
  {
    id: 10,
    name: "Childline 1098 – Mainpuri",
    address: "Mainpuri, Uttar Pradesh",
    phone: "1098",
    whatsapp: null,
    lat: 27.2333,
    lng: 79.0193,
    helpType: 2,
    rating: 4.0
  },

  // Mathura District
  {
    id: 11,
    name: "Mathura Police Control Room",
    address: "Mathura, Uttar Pradesh",
    phone: "100",
    whatsapp: null,
    lat: 27.4924,
    lng: 77.6737,
    helpType: 3,
    rating: 4.0
  },
  {
    id: 12,
    name: "Ambulance Service 108 – Mathura",
    address: "Mathura, Uttar Pradesh",
    phone: "108",
    whatsapp: null,
    lat: 27.4924,
    lng: 77.6737,
    helpType: 3,
    rating: 4.1
  },
  {
    id: 13,
    name: "Childline 1098 – Mathura (Railway Childline)",
    address: "Mathura Junction, Uttar Pradesh",
    phone: "1098",
    whatsapp: null,
    lat: 27.4924,
    lng: 77.6737,
    helpType: 2,
    rating: 4.1
  },

  // ------------------ Moradabad District ------------------
  {
    id: 101,
    name: "Moradabad Police Control Room",
    address: "Moradabad, UP",
    phone: "100",
    whatsapp: null,
    lat: 28.8584,
    lng: 78.7835,
    helpType: 3,
    rating: 4.0
  },
  {
    id: 102,
    name: "Ambulance Service 108 – Moradabad",
    address: "Moradabad, UP",
    phone: "108",
    whatsapp: null,
    lat: 28.8584,
    lng: 78.7835,
    helpType: 3,
    rating: 4.1
  },
  {
    id: 103,
    name: "Childline 1098 – Moradabad",
    address: "Moradabad, UP",
    phone: "1098",
    whatsapp: null,
    lat: 28.8584,
    lng: 78.7835,
    helpType: 2,
    rating: 4.0
  },
  {
    id: 104,
    name: "Women Helpline 1091 – Moradabad",
    address: "Moradabad, UP",
    phone: "1091",
    whatsapp: null,
    lat: 28.8584,
    lng: 78.7835,
    helpType: 1,
    rating: 4.0
  },

  // ------------------ Amroha District ------------------
  {
    id: 105,
    name: "Amroha Police Control Room",
    address: "Amroha, UP",
    phone: "100",
    whatsapp: null,
    lat: 28.9183,
    lng: 78.4606,
    helpType: 3,
    rating: 4.0
  },
  {
    id: 106,
    name: "Ambulance Service 108 – Amroha",
    address: "Amroha, UP",
    phone: "108",
    whatsapp: null,
    lat: 28.9183,
    lng: 78.4606,
    helpType: 3,
    rating: 4.1
  },
  {
    id: 107,
    name: "Childline 1098 – Amroha",
    address: "Amroha, UP",
    phone: "1098",
    whatsapp: null,
    lat: 28.9183,
    lng: 78.4606,
    helpType: 2,
    rating: 4.0
  },

  // ------------------ Bijnor District ------------------
  {
    id: 108,
    name: "Bijnor Police Control Room",
    address: "Bijnor, UP",
    phone: "100",
    whatsapp: null,
    lat: 29.3720,
    lng: 78.1369,
    helpType: 3,
    rating: 4.0
  },
  {
    id: 109,
    name: "Ambulance Service 108 – Bijnor",
    address: "Bijnor, UP",
    phone: "108",
    whatsapp: null,
    lat: 29.3720,
    lng: 78.1369,
    helpType: 3,
    rating: 4.1
  },
  {
    id: 110,
    name: "Childline 1098 – Bijnor",
    address: "Bijnor, UP",
    phone: "1098",
    whatsapp: null,
    lat: 29.3720,
    lng: 78.1369,
    helpType: 2,
    rating: 4.0
  },

  // ------------------ Rampur District ------------------
  {
    id: 111,
    name: "Rampur Police Control Room",
    address: "Rampur, UP",
    phone: "100",
    whatsapp: null,
    lat: 28.8170,
    lng: 79.0258,
    helpType: 3,
    rating: 4.0
  },
  {
    id: 112,
    name: "Ambulance Service 108 – Rampur",
    address: "Rampur, UP",
    phone: "108",
    whatsapp: null,
    lat: 28.8170,
    lng: 79.0258,
    helpType: 3,
    rating: 4.1
  },
  {
    id: 113,
    name: "Childline 1098 – Rampur",
    address: "Rampur, UP",
    phone: "1098",
    whatsapp: null,
    lat: 28.8170,
    lng: 79.0258,
    helpType: 2,
    rating: 4.0
  },

  // ------------------ Sambhal District ------------------
  {
    id: 114,
    name: "Sambhal Police Control Room",
    address: "Sambhal, UP",
    phone: "100",
    whatsapp: null,
    lat: 28.5755,
    lng: 78.5665,
    helpType: 3,
    rating: 4.0
  },
  {
    id: 115,
    name: "Ambulance Service 108 – Sambhal",
    address: "Sambhal, UP",
    phone: "108",
    whatsapp: null,
    lat: 28.5755,
    lng: 78.5665,
    helpType: 3,
    rating: 4.1
  },
  {
    id: 116,
    name: "Childline 1098 – Sambhal",
    address: "Sambhal, UP",
    phone: "1098",
    whatsapp: null,
    lat: 28.5755,
    lng: 78.5665,
    helpType: 2,
    rating: 4.0
  },

  { id:1001, name:"Prayagraj Police Control Room", address:"Prayagraj, UP", phone:"100", lat:25.4358, lng:81.8463, helpType:3, rating:4.1 },
  { id:1002, name:"Ambulance 108 – Prayagraj", address:"Prayagraj, UP", phone:"108", lat:25.4358, lng:81.8463, helpType:3, rating:4.0 },
  { id:1003, name:"Childline 1098 – Prayagraj", address:"Prayagraj, UP", phone:"1098", lat:25.4358, lng:81.8463, helpType:2, rating:4.0 },
  // Fatehpur
  { id:1004, name:"Fatehpur Police Control Room", address:"Fatehpur, UP", phone:"100", lat:25.4499, lng:80.8090, helpType:3, rating:4.0 },
  { id:1005, name:"Ambulance 108 – Fatehpur", address:"Fatehpur, UP", phone:"108", lat:25.4499, lng:80.8090, helpType:3, rating:4.0 },
  { id:1006, name:"Childline 1098 – Fatehpur", address:"Fatehpur, UP", phone:"1098", lat:25.4499, lng:80.8090, helpType:2, rating:4.0 },
  // Kaushambi
  { id:1007, name:"Kaushambi Police Control Room", address:"Kaushambi, UP", phone:"100", lat:25.4080, lng:81.6530, helpType:3, rating:4.0 },
  { id:1008, name:"Ambulance 108 – Kaushambi", address:"Kaushambi, UP", phone:"108", lat:25.4080, lng:81.6530, helpType:3, rating:4.0 },
  { id:1009, name:"Childline 1098 – Kaushambi", address:"Kaushambi, UP", phone:"1098", lat:25.4080, lng:81.6530, helpType:2, rating:4.0 },
  // Pratapgarh
  { id:1010, name:"Pratapgarh Police Control Room", address:"Pratapgarh, UP", phone:"100", lat:25.9450, lng:81.0191, helpType:3, rating:4.0 },
  { id:1011, name:"Ambulance 108 – Pratapgarh", address:"Pratapgarh, UP", phone:"108", lat:25.9450, lng:81.0191, helpType:3, rating:4.0 },
  { id:1012, name:"Childline 1098 – Pratapgarh", address:"Pratapgarh, UP", phone:"1098", lat:25.9450, lng:81.0191, helpType:2, rating:4.0 },

  { id:901, name:"Basti Police Control Room", address:"Basti, UP", phone:"100", lat:26.8050, lng:82.7760, helpType:3, rating:4.0 },
  { id:902, name:"Ambulance 108 – Basti", address:"Basti, UP", phone:"108", lat:26.8050, lng:82.7760, helpType:3, rating:4.0 },
  { id:903, name:"Childline 1098 – Basti", address:"Basti, UP", phone:"1098", lat:26.8050, lng:82.7760, helpType:2, rating:4.0 },
  // Sant Kabir Nagar
  { id:904, name:"Sant Kabir Nagar Police Control Room", address:"Sant Kabir Nagar, UP", phone:"100", lat:26.7290, lng:82.7160, helpType:3, rating:4.0 },
  { id:905, name:"Ambulance 108 – Sant Kabir Nagar", address:"Sant Kabir Nagar, UP", phone:"108", lat:26.7290, lng:82.7160, helpType:3, rating:4.0 },
  { id:906, name:"Childline 1098 – Sant Kabir Nagar", address:"Sant Kabir Nagar, UP", phone:"1098", lat:26.7290, lng:82.7160, helpType:2, rating:4.0 },
  // Siddharthnagar
  { id:907, name:"Siddharthnagar Police Control Room", address:"Siddharthnagar, UP", phone:"100", lat:27.1910, lng:82.2760, helpType:3, rating:4.0 },
  { id:908, name:"Ambulance 108 – Siddharthnagar", address:"Siddharthnagar, UP", phone:"108", lat:27.1910, lng:82.2760, helpType:3, rating:4.0 },
  { id:909, name:"Childline 1098 – Siddharthnagar", address:"Siddharthnagar, UP", phone:"1098", lat:27.1910, lng:82.2760, helpType:2, rating:4.0 },
  { id:801, name:"Gorakhpur Police Control Room", address:"Gorakhpur, UP", phone:"100", lat:26.7606, lng:83.3732, helpType:3, rating:4.1 },
  { id:802, name:"Ambulance 108 – Gorakhpur", address:"Gorakhpur, UP", phone:"108", lat:26.7606, lng:83.3732, helpType:3, rating:4.0 },
  { id:803, name:"Childline 1098 – Gorakhpur", address:"Gorakhpur, UP", phone:"1098", lat:26.7606, lng:83.3732, helpType:2, rating:4.0 },
  // Deoria
  { id:804, name:"Deoria Police Control Room", address:"Deoria, UP", phone:"100", lat:26.5025, lng:83.7878, helpType:3, rating:4.0 },
  { id:805, name:"Ambulance 108 – Deoria", address:"Deoria, UP", phone:"108", lat:26.5025, lng:83.7878, helpType:3, rating:4.0 },
  { id:806, name:"Childline 1098 – Deoria", address:"Deoria, UP", phone:"1098", lat:26.5025, lng:83.7878, helpType:2, rating:4.0 },
  // Kushinagar
  { id:807, name:"Kushinagar Police Control Room", address:"Kushinagar, UP", phone:"100", lat:26.7439, lng:83.8894, helpType:3, rating:4.0 },
  { id:808, name:"Ambulance 108 – Kushinagar", address:"Kushinagar, UP", phone:"108", lat:26.7439, lng:83.8894, helpType:3, rating:4.0 },
  { id:809, name:"Childline 1098 – Kushinagar", address:"Kushinagar, UP", phone:"1098", lat:26.7439, lng:83.8894, helpType:2, rating:4.0 },
  // Maharajganj
  { id:810, name:"Maharajganj Police Control Room", address:"Maharajganj, UP", phone:"100", lat:27.1310, lng:83.0039, helpType:3, rating:4.0 },
  { id:811, name:"Ambulance 108 – Maharajganj", address:"Maharajganj, UP", phone:"108", lat:27.1310, lng:83.0039, helpType:3, rating:4.0 },
  { id:812, name:"Childline 1098 – Maharajganj", address:"Maharajganj, UP", phone:"1098", lat:27.1310, lng:83.0039, helpType:2, rating:4.0 },
  { id:701, name:"Azamgarh Police Control Room", address:"Azamgarh, UP", phone:"100", lat:26.0693, lng:83.1822, helpType:3, rating:4.0 },
  { id:702, name:"Ambulance 108 – Azamgarh", address:"Azamgarh, UP", phone:"108", lat:26.0693, lng:83.1822, helpType:3, rating:4.0 },
  { id:703, name:"Childline 1098 – Azamgarh", address:"Azamgarh, UP", phone:"1098", lat:26.0693, lng:83.1822, helpType:2, rating:4.0 },
  // Ballia
  { id:704, name:"Ballia Police Control Room", address:"Ballia, UP", phone:"100", lat:25.7599, lng:84.1499, helpType:3, rating:4.0 },
  { id:705, name:"Ambulance 108 – Ballia", address:"Ballia, UP", phone:"108", lat:25.7599, lng:84.1499, helpType:3, rating:4.0 },
  { id:706, name:"Childline 1098 – Ballia", address:"Ballia, UP", phone:"1098", lat:25.7599, lng:84.1499, helpType:2, rating:4.0 },
  // Mau
  { id:707, name:"Mau Police Control Room", address:"Mau, UP", phone:"100", lat:25.9367, lng:83.5560, helpType:3, rating:4.0 },
  { id:708, name:"Ambulance 108 – Mau", address:"Mau, UP", phone:"108", lat:25.9367, lng:83.5560, helpType:3, rating:4.0 },
  { id:709, name:"Childline 1098 – Mau", address:"Mau, UP", phone:"1098", lat:25.9367, lng:83.5560, helpType:2, rating:4.0 },
  { id:601, name:"Banda Police Control Room", address:"Banda, UP", phone:"100", lat:25.4776, lng:80.3426, helpType:3, rating:4.0 },
  { id:602, name:"Ambulance 108 – Banda", address:"Banda, UP", phone:"108", lat:25.4776, lng:80.3426, helpType:3, rating:4.0 },
  { id:603, name:"Childline 1098 – Banda", address:"Banda, UP", phone:"1098", lat:25.4776, lng:80.3426, helpType:2, rating:4.0 },
  { id:604, name:"Women Helpline 1090 – Banda", address:"Banda, UP", phone:"1090", lat:25.4776, lng:80.3426, helpType:1, rating:4.0 },
  // Chitrakoot
  { id:605, name:"Chitrakoot Police Control Room", address:"Chitrakoot, UP", phone:"100", lat:25.1998, lng:80.9310, helpType:3, rating:4.0 },
  { id:606, name:"Ambulance 108 – Chitrakoot", address:"Chitrakoot, UP", phone:"108", lat:25.1998, lng:80.9310, helpType:3, rating:4.0 },
  { id:607, name:"Childline 1098 – Chitrakoot", address:"Chitrakoot, UP", phone:"1098", lat:25.1998, lng:80.9310, helpType:2, rating:4.0 },
  // Hamirpur
  { id:608, name:"Hamirpur Police Control Room", address:"Hamirpur, UP", phone:"100", lat:25.5270, lng:80.1620, helpType:3, rating:3.9 },
  { id:609, name:"Ambulance 108 – Hamirpur", address:"Hamirpur, UP", phone:"108", lat:25.5270, lng:80.1620, helpType:3, rating:3.9 },
  { id:610, name:"Childline 1098 – Hamirpur", address:"Hamirpur, UP", phone:"1098", lat:25.5270, lng:80.1620, helpType:2, rating:4.0 },
  // Mahoba
  { id:611, name:"Mahoba Police Control Room", address:"Mahoba, UP", phone:"100", lat:25.2820, lng:79.8680, helpType:3, rating:3.9 },
  { id:612, name:"Ambulance 108 – Mahoba", address:"Mahoba, UP", phone:"108", lat:25.2820, lng:79.8680, helpType:3, rating:3.9 },
  { id:613, name:"Childline 1098 – Mahoba", address:"Mahoba, UP", phone:"1098", lat:25.2820, lng:79.8680, helpType:2, rating:4.0 },
  { id:501, name:"Mirzapur Police Control Room", address:"Mirzapur, UP", phone:"100", lat:25.1440, lng:82.5698, helpType:3, rating:4.0 },
  { id:502, name:"Ambulance 108 – Mirzapur", address:"Mirzapur, UP", phone:"108", lat:25.1440, lng:82.5698, helpType:3, rating:4.0 },
  { id:503, name:"Childline 1098 – Mirzapur", address:"Mirzapur, UP", phone:"1098", lat:25.1440, lng:82.5698, helpType:2, rating:4.0 },
  { id:504, name:"Women Helpline 1090 – Mirzapur", address:"Mirzapur, UP", phone:"1090", lat:25.1440, lng:82.5698, helpType:1, rating:4.0 },
  // Bhadohi
  { id:505, name:"Bhadohi Police Control Room", address:"Bhadohi, UP", phone:"100", lat:25.3900, lng:82.5500, helpType:3, rating:4.0 },
  { id:506, name:"Ambulance 108 – Bhadohi", address:"Bhadohi, UP", phone:"108", lat:25.3900, lng:82.5500, helpType:3, rating:4.0 },
  { id:507, name:"Childline 1098 – Bhadohi", address:"Bhadohi, UP", phone:"1098", lat:25.3900, lng:82.5500, helpType:2, rating:4.0 },
  // Sonbhadra
  { id:508, name:"Sonbhadra Police Control Room", address:"Sonbhadra, UP", phone:"100", lat:24.2120, lng:83.0317, helpType:3, rating:3.9 },
  { id:509, name:"Ambulance 108 – Sonbhadra", address:"Sonbhadra, UP", phone:"108", lat:24.2120, lng:83.0317, helpType:3, rating:3.9 },
  { id:510, name:"Childline 1098 – Sonbhadra", address:"Sonbhadra, UP", phone:"1098", lat:24.2120, lng:83.0317, helpType:2, rating:4.0 },
  { id: 401, name: "Bareilly Police Control Room", address: "Bareilly, UP", phone: "100", lat: 28.3670, lng: 79.4304, helpType:3, rating:4.0 },
  { id: 402, name: "Ambulance 108 – Bareilly", address: "Bareilly, UP", phone: "108", lat: 28.3670, lng: 79.4304, helpType:3, rating:4.0 },
  { id: 403, name: "Childline 1098 – Bareilly", address: "Bareilly, UP", phone: "1098", lat: 28.3670, lng: 79.4304, helpType:2, rating:4.0 },
  { id: 404, name: "Women Helpline 1090 – Bareilly", address: "Bareilly, UP", phone: "1090", lat: 28.3670, lng: 79.4304, helpType:1, rating:4.0 },
  // Badaun
  { id: 405, name: "Badaun Police Control Room", address: "Badaun, UP", phone: "100", lat: 28.0350, lng: 79.1263, helpType:3, rating:3.9 },
  { id: 406, name: "Ambulance 108 – Badaun", address: "Badaun, UP", phone: "108", lat: 28.0350, lng: 79.1263, helpType:3, rating:3.9 },
  { id: 407, name: "Childline 1098 – Badaun", address: "Badaun, UP", phone: "1098", lat: 28.0350, lng: 79.1263, helpType:2, rating:4.0 },
  // Pilibhit
  { id: 408, name: "Pilibhit Police Control Room", address: "Pilibhit, UP", phone: "100", lat: 28.6325, lng: 79.8056, helpType:3, rating:4.0 },
  { id: 409, name: "Ambulance 108 – Pilibhit", address: "Pilibhit, UP", phone: "108", lat: 28.6325, lng: 79.8056, helpType:3, rating:4.0 },
  { id: 410, name: "Childline 1098 – Pilibhit", address: "Pilibhit, UP", phone: "1098", lat: 28.6325, lng: 79.8056, helpType:2, rating:4.0 },
  // Shahjahanpur
  { id: 411, name: "Shahjahanpur Police Control Room", address: "Shahjahanpur, UP", phone: "100", lat: 27.8800, lng: 79.9050, helpType:3, rating:4.0 },
  { id: 412, name: "Ambulance 108 – Shahjahanpur", address: "Shahjahanpur, UP", phone: "108", lat: 27.8800, lng: 79.9050, helpType:3, rating:4.0 },
  { id: 413, name: "Childline 1098 – Shahjahanpur", address: "Shahjahanpur, UP", phone: "1098", lat: 27.8800, lng: 79.9050, helpType:2, rating:4.0 },
  // Meerut
  { id: 301, name: "Meerut Police Control Room", address: "Meerut, UP", phone: "100/112", whatsapp: null, lat:28.9845, lng:77.7064, helpType:3, rating:4.1 },
  { id: 302, name: "Ambulance 108 – Meerut",        address: "Meerut, UP", phone: "108", whatsapp: null, lat:28.9845, lng:77.7064, helpType:3, rating:4.1 },
  { id: 303, name: "Childline 1098 – Meerut",        address: "Meerut, UP", phone: "1098", whatsapp: null, lat:28.9845, lng:77.7064, helpType:2, rating:4.2 },
  { id: 304, name: "Women Helpline 1091 – Meerut",   address: "Meerut, UP", phone: "1091", whatsapp: null, lat:28.9845, lng:77.7064, helpType:1, rating:4.0 },

  // Baghpat
  { id: 305, name: "Baghpat Police Control Room", address: "Baghpat, UP", phone: "100", whatsapp: null, lat:29.0167, lng:77.3910, helpType:3, rating:4.0 },
  { id: 306, name: "Ambulance 108 – Baghpat",      address: "Baghpat, UP", phone: "108", whatsapp: null, lat:29.0167, lng:77.3910, helpType:3, rating:4.0 },
  { id: 307, name: "Childline 1098 – Baghpat",      address: "Baghpat, UP", phone: "1098", whatsapp: null, lat:29.0167, lng:77.3910, helpType:2, rating:4.0 },

  // Bulandshahr
  { id: 308, name: "Bulandshahr Police Control Room", address: "Bulandshahr, UP", phone: "100", whatsapp: null, lat:28.4026, lng:77.8480, helpType:3, rating:4.0 },
  { id: 309, name: "Ambulance 108 – Bulandshahr",      address: "Bulandshahr, UP", phone: "108", whatsapp: null, lat:28.4026, lng:77.8480, helpType:3, rating:4.0 },
  { id: 310, name: "Childline 1098 – Bulandshahr",      address: "Bulandshahr, UP", phone: "1098", whatsapp: null, lat:28.4026, lng:77.8480, helpType:2, rating:4.0 },

  // Ghaziabad
  { id: 311, name: "Ghaziabad Police Control Room", address: "Ghaziabad, UP", phone: "100", whatsapp: null, lat:28.6692, lng:77.4538, helpType:3, rating:4.1 },
  { id: 312, name: "Ambulance 108 – Ghaziabad",      address: "Ghaziabad, UP", phone: "102/108", whatsapp: null, lat:28.6692, lng:77.4538, helpType:3, rating:4.0 },
  { id: 313, name: "Childline 1098 – Ghaziabad",      address: "Ghaziabad, UP", phone: "1098", whatsapp: null, lat:28.6692, lng:77.4538, helpType:2, rating:4.0 },
  { id: 314, name: "Women Helpline 1091 – Ghaziabad",  address: "Ghaziabad, UP", phone: "1091", whatsapp: null, lat:28.6692, lng:77.4538, helpType:1, rating:4.0 },

  // Hapur
  { id: 315, name: "Hapur Police Control Room", address: "Hapur, UP", phone: "100", whatsapp: null, lat:28.7300, lng:78.6900, helpType:3, rating:4.0 },
  { id: 316, name: "Ambulance 108 – Hapur",      address: "Hapur, UP", phone: "108", whatsapp: null, lat:28.7300, lng:78.6900, helpType:3, rating:4.0 },
  { id: 317, name: "Childline 1098 – Hapur",      address: "Hapur, UP", phone: "1098", whatsapp: null, lat:28.7300, lng:78.6900, helpType:2, rating:4.0 },

  // Gautam Buddha Nagar (Noida)
  { id: 318, name: "Noida Police Control Room", address: "Gautam Buddha Nagar, UP", phone: "100", whatsapp: null, lat:28.5355, lng:77.3910, helpType:3, rating:4.1 },
  { id: 319, name: "Ambulance 108 – Noida",      address: "Gautam Buddha Nagar, UP", phone: "108", whatsapp: null, lat:28.5355, lng:77.3910, helpType:3, rating:4.1 },
  { id: 320, name: "Childline 1098 – Noida",      address: "Gautam Buddha Nagar, UP", phone: "1098", whatsapp: null, lat:28.5355, lng:77.3910, helpType:2, rating:4.1 },
  { id: 321, name: "Women Helpline 1091 – Noida",  address: "Gautam Buddha Nagar, UP", phone: "1091", whatsapp: null, lat:28.5355, lng:77.3910, helpType:1, rating:4.0 },
  // Lucknow
  { id: 201, name: "Lucknow Police Control Room", address: "Lucknow, UP", phone: "100", whatsapp: null, lat:26.8467, lng:80.9462, helpType:3, rating:4.1 },
  { id: 202, name: "Ambulance 108 – Lucknow",      address: "Lucknow, UP", phone: "108", whatsapp: null, lat:26.8467, lng:80.9462, helpType:3, rating:4.0 },
  { id: 203, name: "Childline 1098 – Lucknow",      address: "Lucknow, UP", phone: "1098", whatsapp: null, lat:26.8467, lng:80.9462, helpType:2, rating:4.2 },
  { id: 204, name: "Women Helpline 1090 – Lucknow", address: "Lucknow, UP", phone: "1090", whatsapp: null, lat:26.8467, lng:80.9462, helpType:1, rating:4.0 },

  // Hardoi
  { id: 205, name: "Hardoi Police Control Room",   address: "Hardoi, UP", phone: "100", whatsapp: null, lat:27.3910, lng:80.1315, helpType:3, rating:4.0 },
  { id: 206, name: "Ambulance 108 – Hardoi",       address: "Hardoi, UP", phone: "108", whatsapp: null, lat:27.3910, lng:80.1315, helpType:3, rating:4.0 },
  { id: 207, name: "Childline 1098 – Hardoi",       address: "Hardoi, UP", phone: "1098", whatsapp: null, lat:27.3910, lng:80.1315, helpType:2, rating:4.0 },

  // Lakhimpur Kheri
  { id: 208, name: "Lakhimpur Kheri Police Control Room", address: "Lakhimpur Kheri, UP", phone: "100", whatsapp: null, lat:27.9400, lng:80.8000, helpType:3, rating:4.0 },
  { id: 209, name: "Ambulance 108 – Lakhimpur Kheri",       address: "Lakhimpur Kheri, UP", phone: "108", whatsapp: null, lat:27.9400, lng:80.8000, helpType:3, rating:4.0 },
  { id: 210, name: "Childline 1098 – Lakhimpur Kheri",      address: "Lakhimpur Kheri, UP", phone: "1098", whatsapp: null, lat:27.9400, lng:80.8000, helpType:2, rating:4.0 },

  // Raebareli
  { id: 211, name: "Raebareli Police Control Room", address: "Raebareli, UP", phone: "100", whatsapp: null, lat:26.2300, lng:81.2500, helpType:3, rating:4.0 },
  { id: 212, name: "Ambulance 108 – Raebareli",     address: "Raebareli, UP", phone: "108", whatsapp: null, lat:26.2300, lng:81.2500, helpType:3, rating:4.0 },
  { id: 213, name: "Childline 1098 – Raebareli",     address: "Raebareli, UP", phone: "1098", whatsapp: null, lat:26.2300, lng:81.2500, helpType:2, rating:4.0 },

  // Sitapur
  { id: 214, name: "Sitapur Police Control Room", address: "Sitapur, UP", phone: "100", whatsapp: null, lat:27.5690, lng:80.6610, helpType:3, rating:4.0 },
  { id: 215, name: "Ambulance 108 – Sitapur",     address: "Sitapur, UP", phone: "108", whatsapp: null, lat:27.5690, lng:80.6610, helpType:3, rating:4.0 },
  { id: 216, name: "Childline 1098 – Sitapur",     address: "Sitapur, UP", phone: "1098", whatsapp: null, lat:27.5690, lng:80.6610, helpType:2, rating:4.0 },

  // Unnao
  { id: 217, name: "Unnao Police Control Room", address: "Unnao, UP", phone: "100", whatsapp: null, lat:26.5370, lng:80.4840, helpType:3, rating:4.0 },
  { id: 218, name: "Ambulance 108 – Unnao",     address: "Unnao, UP", phone: "108", whatsapp: null, lat:26.5370, lng:80.4840, helpType:3, rating:4.0 },
  { id: 219, name: "Childline 1098 – Unnao",     address: "Unnao, UP", phone: "1098", whatsapp: null, lat:26.5370, lng:80.4840, helpType:2, rating:4.0 }

];

export default helpCenters;
