const cities = [
  {
    name: 'Belgrade',
    coords: [44.787197, 20.457273],
    // style: {
    //   fill: '#5c5cff'
    // }
  },
  {
    name: 'Vancouver, British Columbia',
    coords: [49.246292, -123.116226]
  },
  {
    name: 'Seattle, Washington',
    coords: [47.6062, -122.3321]
  },
  {
    name: 'Portland, Oregon',
    coords: [45.5155, -122.6793]
  },
  {
    name: 'Stockholm',
    coords: [59.3293, 18.0686]
  },
  {
    name: 'Dublin',
    coords: [53.3498, -6.2603]
  },
  {
    name: 'London',
    coords: [51.5074, -0.1278]
  },
  {
    name: 'Amsterdam',
    coords: [52.3667, 4.8945]
  },
  {
    name: 'Frankfurt',
    coords: [50.1109, 8.6821]
  },
  {
    name: 'Berlin',
    coords: [52.5200, 13.4050]
  },
  {
    name: 'Warsaw',
    coords: [52.2297, 21.0122]
  },
  {
    name: 'Vienna',
    coords: [48.2082, 16.3738]
  },
  {
    name: 'Paris',
    coords: [48.8566, 2.3522]
  },
  {
    name: 'Milan',
    coords: [45.4642, 9.1900]
  },
  {
    name: 'Barcelona',
    coords: [41.3851, 2.1734]
  },
  {
    name: 'Madrid',
    coords: [40.4168, -3.7038]
  },
  {
    name: 'Lisbon',
    coords: [38.7223, -9.1393]
  },
  {
    name: 'San Jose, California',
    coords: [37.3382, -121.8863]
  },
  {
    name: 'Los Angeles, California',
    coords: [34.0522, -118.2437]
  },
  {
    name: 'Las Vegas, Nevada',
    coords: [36.1699, -115.1398]
  },
  {
    name: 'Phoenix, Arizona',
    coords: [33.4484, -112.0740]
  },
  {
    name: 'Denver, Colorado',
    coords: [39.7392, -104.9903]
  },
  {
    name: 'Dallas, Texas',
    coords: [32.7767, -96.7970]
  },
  {
    name: 'Austin, Texas',
    coords: [30.2672, -97.7431]
  },
  {
    name: 'Houston, Texas',
    coords: [29.7604, -95.3698]
  },
  {
    name: 'Chicago, Illinois',
    coords: [41.8781, -87.6298]
  },
  {
    name: 'Detroit, Michigan',
    coords: [42.3314, -83.0458]
  },
  {
    name: 'Atlanta, Georgia',
    coords: [33.7490, -84.3880]
  },
  {
    name: 'Miami, Florida',
    coords: [25.7617, -80.1918]
  },
  {
    name: 'Washington, D.C.',
    coords: [38.9072, -77.0369]
  },
  {
    name: 'Philadelphia, Pennsylvania',
    coords: [39.9526, -75.1652]
  },
  {
    name: 'New York City, New York',
    coords: [40.7128, -74.0060]
  },
  {
    name: 'Boston, Massachusetts',
    coords: [42.3601, -71.0589]
  },
  {
    name: 'Mexico City',
    coords: [19.4326, -99.1332]
  },
  {
    name: 'Willemstad',
    coords: [12.1085, -68.9335]
  },
  {
    name: 'Bogota',
    coords: [4.7109, -74.0721]
  },
  {
    name: 'Lima',
    coords: [-12.0464, -77.0428]
  },
  {
    name: 'Santiago',
    coords: [-33.4489, -70.6693]
  },
  {
    name: 'Buenos Aires',
    coords: [-34.6037, -58.3816]
  },
  {
    name: 'Sao Paulo',
    coords: [-23.5505, -46.6333]
  },
  {
    name: 'Rio de Janeiro',
    coords: [-22.9068, -43.1729]
  },
  {
    name: 'Cape Town',
    coords: [-33.9249, 18.4241]
  },
  {
    name: 'Johannesburg',
    coords: [-26.2041, 28.0473]
  },
  {
    name: 'Durban',
    coords: [-29.8587, 31.0218]
  },
  {
    name: 'Hyderabad',
    coords: [17.3850, 78.4867]
  },
  {
    name: 'Bangkok',
    coords: [13.7563, 100.5018]
  },
  {
    name: 'Ho Chi Minh City',
    coords: [10.8231, 106.6297]
  },
  {
    name: 'Penang',
    coords: [5.4164, 100.3327]
  },
  {
    name: 'Kuala Lumpur',
    coords: [3.1390, 101.6869]
  },
  {
    name: 'Singapore',
    coords: [1.3521, 103.8198]
  },
  {
    name: 'Perth',
    coords: [-31.9505, 115.8605]
  },
  {
    name: 'Adelaide',
    coords: [-34.9285, 138.6007]
  },
  {
    name: 'Melbourne',
    coords: [-37.8136, 144.9631]
  },
  {
    name: 'Canberra',
    coords: [-35.2809, 149.1300]
  },
  {
    name: 'Sydney',
    coords: [-33.8688, 151.2093]
  },
  {
    name: 'Brisbane',
    coords: [-27.4698, 153.0251]
  },
  {
    name: 'Auckland',
    coords: [-36.8485, 174.7633]
  },
  {
    name: 'Manila',
    coords: [14.5995, 120.9842]
  },
  {
    name: 'Taipei',
    coords: [25.0330, 121.5654]
  },
  {
    name: 'Hong Kong',
    coords: [22.3193, 114.1694]
  },
  {
    name: 'Guangzhou',
    coords: [23.1291, 113.2644]
  },
  {
    name: 'Shanghai',
    coords: [31.2304, 121.4737]
  },
  {
    name: 'Beijing',
    coords: [39.9042, 116.4074]
  },
  {
    name: 'Seoul',
    coords: [37.5665, 126.9780]
  },
  {
    name: 'Busan',
    coords: [35.1796, 129.0756]
  },
  {
    name: 'Osaka',
    coords: [34.6937, 135.5023]
  },
  {
    name: 'Tokyo',
    coords: [35.6895, 139.6917]
  }
];