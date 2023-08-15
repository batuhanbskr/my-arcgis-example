import { Component } from '@angular/core';
import { loadModules, setDefaultOptions } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  ngOnInit() {
    this.initMap();
  }

  async initMap() {
    // setDefaultOptions({ version: '4.27', css: true });

    const [Map, MapView, config] = await loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/config',
    ]);

    config.apiKey =
      'AAPK3060822838bf45628a48f04e5f645cdcwzw9jps2MGZCEn6hNbnjOwy_sCqVttL_j0w5T4CLz7y781bvmUEhd59ghJ-141KY';
    const map = new Map({
      basemap: 'arcgis-topographic', // Basemap layer service
    });

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: 'viewDiv', // Div element
    });
  }
}
