const markers = [
  {
    name: 'Belgrade',
    coords: [44.787197, 20.457273],
    style: {
      fill: '#5c5cff'
    }
  },
  {
    name: 'Sydney',
    coords: [-33.865143, 151.209900],
    style: {
      fill: '#5c5cff'
    }
  },
  {
    name: 'Rio',
    coords: [-22.908333, -43.196388],
    style: {
      fill: '#5c5cff'
    }
  }
];

var map = new jsVectorMap({
  map: 'world',
  selector: '#map',
  zoomButtons : false,
  zoomOnScroll : false,
  markersSelectable: false,

  onRegionTooltipShow(event, tooltip, code) {
    // Hide for all
    event.preventDefault()
  },

  labels: {
    markers: {
      render: function(marker) {
        return marker.name
      },
    },
  },

  regionStyle: {
    initial: {
      fill: 'green'
    },
    hover: {
      fillOpacity: 1
    }
  },

  markers: markers,
  markerStyle: {
    hover: {
      stroke: "#DDD",
      strokeWidth: 3,
      fill: '#FFF'
    },
    selected: {
      fill: '#ff525d'
    }
  },
  markerLabelStyle: {
    initial: {
      display: 'none'
    },
  },
  onLoaded(map) {
    window.addEventListener('resize', () => {
      map.updateSize()
      updateMapContainerSize()
  })
}
})

const mapEl = document.getElementById('map')

const updateMapContainerSize = () => {
  mapEl.style.height = `${mapEl.clientWidth / 2}px`
}
updateMapContainerSize()
