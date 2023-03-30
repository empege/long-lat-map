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
const cities = [
  {
    name: 'Belgrade',
    longitude: '20.457273',
    latitude: '44.787197'
  },
  {
    name: 'New York',
    longitude: '-73.935242',
    latitude: '40.730610'
  }
]

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
  city.dataset.latitude = latitude
  city.dataset.longitude = longitude
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
  console.log(mapWidth, ' / 360 * (180 + ', longitude, '))')
  console.log(mapWidth, ' / 180 * (90 - ', latitude, '))')
  const x = (mapWidth / 360 * (180 + longitude));
  const y = (mapHeight / 180 * (90 - latitude));
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
