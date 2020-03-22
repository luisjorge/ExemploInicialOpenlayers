import "./styles.css";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import Stamen from "ol/source/Stamen";
import GeoJSON from "ol/format/GeoJSON";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Fill, Stroke, Icon, Style } from "ol/style";

var clubesSource = new VectorSource({
  url: "dados/clubes.geojson",
  projection: "EPSG:4326",
  format: new GeoJSON()
});

/*
var estiloVetor = new Style({
  image: new Icon({
    size: [95, 95],
    anchor: [0.35, 0.7],
    src: "./images/gym.png",
    scale: 0.2
  }),
  stroke: new Stroke({
    color: [0, 0, 255],
    width: 1
  }),
  fill: new Fill({
    color: [0, 0, 255, 0.3]
  })
});
*/

var clubesLayer = new VectorLayer({
  source: clubesSource,
  name: "Clubes"
  //style: estiloVetor
});

var map = new Map({
  layers: [
    new TileLayer({
      source: new Stamen({
        layer: "watercolor"
      })
    }),
    new TileLayer({
      source: new Stamen({
        layer: "terrain-labels"
      })
    })
  ],
  target: "map",
  view: new View({
    center: fromLonLat([-8.716667, 40.583333]),
    zoom: 11
  })
});
map.addLayer(clubesLayer);
