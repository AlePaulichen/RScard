import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri; // Esri TypeScript Types

@Component({
    selector: 'rsc-esri-map',
    templateUrl: './esri-map.component.html',
})
export class EsriMapComponent implements OnInit {
    @HostBinding('class.rsc-esri-map') hostClass = true;

    // Reference for the <div> where will place the map
    @ViewChild('mapViewNode', {static: true}) private mapViewEl: ElementRef;

    @Output() mapLoadedEvent = new EventEmitter<boolean>();

    private _zoom = 10;
    private _center: Array<number> = [0.1278, 51.5074];
    private _basemap = 'streets';
    private _loaded = false;

    get mapLoaded(): boolean {
        return this._loaded;
    }

    @Input()
    set zoom(zoom: number) {
        this._zoom = zoom;
    }

    get zoom(): number {
        return this._zoom;
    }

    @Input()
    set center(center: Array<number>) {
        this._center = center;
    }

    get center() {
        return this._center;
    }

    @Input()
    set basemap(basemap: string) {
        this._basemap = basemap;
    }

    get basemap() {
        return this._basemap;
    }

    constructor() { }

    async initializeMap() {
        try {
            // Load the modules for the arcGIS API for Javascript
            const [EsriMap, EsriMapView] = await loadModules([
                'esri/Map',
                'esri/views/MapView'
            ]);

            // Configure the map
            const mapProperties: esri.MapProperties = {
                basemap: this._basemap
            };

            const map: esri.Map = new EsriMap(mapProperties);

            // Initialize the MapView
            const mapViewProperties: esri.MapViewProperties = {
                container: this.mapViewEl.nativeElement,
                center: this._center,
                zoom: this._zoom,
                map,
            };

            return new EsriMapView(mapViewProperties);
        } catch (error) {
            console.log('EsriLoader: ', error);
        }
    }

    // Set properties after the MapView has been loaded
    houseKeeping(mapView) {
        mapView.when(() => {
            this._loaded = mapView.ready;
            this.mapLoadedEvent.emit(true);
        });
    }

    ngOnInit(): void {
        // Initialize MapView and return an instance
        this.initializeMap().then((mapView) => {
            this.houseKeeping(mapView);
        });
    }
}
