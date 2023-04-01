const cities = [
  {
    name: 'Belgrade',
    coords: [44.787197, 20.457273],
    // style: {
    //   fill: '#5c5cff'
    // }
  },
  {
    name: 'Sydney',
    coords: [-33.865143, 151.209900],
  },
  {
    name: 'Rio',
    coords: [-22.908333, -43.196388],
  }
];

var map = new jsVectorMap({
  map: 'worldmerc',
  selector: '.map__root',
  zoomButtons : false,
  zoomOnScroll : false,
  markersSelectable: false,

  onRegionTooltipShow(event, tooltip, code) {
    // Hide for all
    event.preventDefault()
  },

  regionStyle: {
    initial: {
      fill: 'rgba(150, 209, 254, 0.2)',
      // stroke: 'rgba(150, 209, 254, 0.2)',
      // strokeWidth: 1
    },
    hover: {
      fillOpacity: 1
    }
  },

  markers: cities,
  markerStyle: {
    initial: {
      stroke: '#96D1FE',
      strokeWidth: 8,
      strokeOpacity: '0.4',
      fill: '#96D1FE',
      r: '4'
    },
    selected: {
      fill: '#ff525d'
    }
  },
  onLoaded(map) {
    window.addEventListener('resize', () => {
      map.updateSize()
  })
}
})


const mapEl = document.querySelector('.map')
const mapRoot = document.querySelector('.map__root')
const regions = document.querySelectorAll('.map__region')

regions.forEach(region => {
  const regionData = region.dataset.region
  region.addEventListener('click', () => {
    mapEl.dataset.activeRegion = regionData
  })
})

const updateMapContainerSize = () => {
  mapRoot.style.height = `${mapRoot.clientWidth / 2}px`
}

updateMapContainerSize()

window.addEventListener('resize', updateMapContainerSize)
