export default class MarkerManager {

  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.forEach( bench => {
      if (!this.markers[bench.id]) {
        this.markers[bench.id] = this.createMarkerFromBench(bench);
      }
    })
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });
  }

}
