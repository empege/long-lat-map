// new svgMap({
//   targetElementID: 'svgMap',
//   data: {
//     data: {
//       // gdp: {
//       //   name: 'GDP per capita',
//       //   format: '{0} USD',
//       //   thousandSeparator: ',',
//       //   thresholdMax: 50000,
//       //   thresholdMin: 1000
//       // },
//       // change: {
//       //   name: 'Change to year before',
//       //   format: '{0} %'
//       // }
//     },
//     // applyData: 'gdp',
//     values: {
//       AF: {gdp: 587, change: 4.73, color: 'red'},
//       AL: {gdp: 4583, change: 11.09},
//       DZ: {gdp: 4293, change: 10.01},
//       US: {gdp: 1, change: 5, color: 'blue'}
//     }
//   },
//   hideFlag: true,
//   noDataText: 'Default text when no data - can\'t remove',
//   minZoom: 1.06,
//   maxZoom: 1.06
// });


// Cities array - data to be imported by php
// const cities = [
//   // {
//   //   name: 'Belgrade',
//   //   longitude: '20.457273',
//   //   latitude: '44.787197'
//   // },
//   // {
//   //   name: 'New York',
//   //   longitude: '-73.935242',
//   //   latitude: '40.730610'
//   // },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-90"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-89"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-88"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-87"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-86"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-85"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-84"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-83"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-82"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-81"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-80"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-79"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-78"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-77"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-76"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-75"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-74"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-73"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-72"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-71"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-70"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-69"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-68"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-67"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-66"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-65"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-64"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-63"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-62"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-61"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-60"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-59"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-58"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-57"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-56"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-55"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-54"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-53"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-52"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-51"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-50"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-49"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-48"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-47"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-46"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-45"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-44"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-43"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-42"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-41"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-40"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-39"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-38"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-37"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-36"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-35"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-34"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-33"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-32"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-31"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-30"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-29"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-28"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-27"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-26"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-25"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-24"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-23"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-22"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-21"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-20"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-19"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-18"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-17"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-16"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-15"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-14"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-13"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-12"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-11"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-10"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-9"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-8"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-7"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-6"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-5"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-4"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-3"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-2"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "-1"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "0"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "1"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "2"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "3"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "4"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "5"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "6"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "7"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "8"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "9"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "10"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "11"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "12"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "13"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "14"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "15"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "16"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "17"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "18"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "19"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "20"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "21"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "22"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "23"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "24"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "25"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "26"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "27"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "28"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "29"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "30"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "31"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "32"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "33"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "34"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "35"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "36"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "37"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "38"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "39"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "40"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "41"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "42"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "43"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "44"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "45"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "46"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "47"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "48"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "49"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "50"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "51"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "52"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "53"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "54"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "55"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "56"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "57"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "58"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "59"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "60"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "61"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "62"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "63"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "64"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "65"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "66"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "67"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "68"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "69"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "70"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "71"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "72"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "73"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "74"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "75"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "76"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "77"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "78"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "79"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "80"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "81"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "82"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "83"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "84"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "85"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "86"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "87"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "88"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "89"
//     },
//     {
//         name: "Equator",
//         longitude: "-180",
//         latitude: "90"
//     }
// ]
const cities = [ {
  name: "Equator",
  longitude: "-180",
  latitude: "0"
},{
      name: 'Belgrade',
      longitude: '20.457273',
      latitude: '44.787197'
    },{
      name: 'Sydney',
      longitude: '151.209900',
      latitude: '-33.865143'
    },{
      name: 'Rio',
      longitude: '-43.196388',
      latitude: '-22.908333'
    }]

const map = document.querySelector('.map')
let mapWidth;
let mapHeight;
let markers = null

const createMarkers = () => {
  cities.forEach(city => createMarker(city))
  markers = document.querySelectorAll('.map__city-marker')
}

const createMarker = ({name, latitude, longitude}) => {
  const city = document.createElement('div')
  city.classList.add('map__city-marker')
  city.dataset.name = name
  city.dataset.latitude = Number(latitude)
  city.dataset.longitude = Number(longitude)
  map.appendChild(city)
}

const positionMarkers = () => {
  setMapSize()
  markers.forEach(marker => {
    setMarkerPosition(marker)
  })
}

const setMarkerPosition = (marker) => {
  const latitude = Number(marker.dataset.latitude)
  const longitude = Number(marker.dataset.longitude)
  const xScore = mapWidth / 360
  const yScore = mapHeight / 180
  const x = (xScore * (180 + longitude) - xScore * 12);
  const y = (yScore * (90 - latitude) + yScore * 21.5);
  console.log(x, y)
  marker.style.left = `${x}px`
  marker.style.top = `${y}px`
}

const setMapSize = () => {
  mapWidth = map.clientWidth
  mapHeight = map.clientHeight
}

const init = () => {
  createMarkers()
  positionMarkers()
}

window.addEventListener('load', init)
window.addEventListener('resize', positionMarkers)
