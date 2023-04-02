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
const reviews = document.querySelector('.map__reviews')

regions.forEach(region => {
  const regionData = region.dataset.region
  region.addEventListener('click', () => {
    mapEl.dataset.activeRegion = regionData
  })
})

// Draggable reviews
const handleReviewsMouseDown = (e) => {
  pos = {
    left: reviews.scrollLeft,
    x: e.clientX
  }

  document.addEventListener('mousemove', handleReviewsMouseMove);
  document.addEventListener('mouseup', handleReviewsMouseUp);
}

const handleReviewsMouseMove = (e) => {
  const dx = e.clientX - pos.x;
  reviews.scrollLeft = pos.left - dx;
}

const handleReviewsMouseUp = (e) => {
  document.removeEventListener('mousemove', handleReviewsMouseMove);
  document.removeEventListener('mouseup', handleReviewsMouseUp);
}

const updateMapContainerSize = () => {
    mapRoot.style.height = `${mapRoot.clientWidth / 2}px`
}

updateMapContainerSize()

reviews.addEventListener('mousedown', handleReviewsMouseDown)
window.addEventListener('resize', updateMapContainerSize)
