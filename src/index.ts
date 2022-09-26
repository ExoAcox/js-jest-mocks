/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { LatLng, LatLngBounds } from "./maps/coordinates/latlng";

import { Autocomplete } from "./places/autocomplete";
import { Circle } from "./drawing/polygons/circle";
import { Data } from "./drawing/data/data";
import { Feature } from "./drawing/data/data.feature";
import { MVCArray } from "./maps/event/mvcarray";
import { MVCObject } from "./maps/event/mvcobject";
import { MapCanvasProjection } from "./drawing/DOM/mapcanvasprojection";
import { MapPanes } from "./drawing/DOM/mappanes";
import { Map_ } from "./maps/maps/map";
import { Marker } from "./drawing/marker/marker";
import { OverlayView } from "./drawing/DOM/overlayview";
import { KmlLayer } from "./drawing/kml/kmllayer";
import { Point } from "./maps/coordinates/point";
import { Polygon } from "./drawing/polygons/polygon";
import { Polyline } from "./drawing/polygons/polyline";
import { SearchBox } from "./places/searchbox";
import { AutocompleteService } from "./places/autocompleteservice";
import { PlacesService } from "./places/placesservice";
import { Size } from "./maps/coordinates/size";
import { VisibleRegion } from "./maps/maps/visibleregion";
import { DirectionsService } from "./drawing/directions/service";
import { DirectionsRenderer } from "./drawing/directions/renderer";
import { StreetViewCoverageLayer } from "./street-view/rendering/coverage";
import { StreetViewPanorama } from "./street-view/rendering/panorama";
import { StreetViewPreference, StreetViewSource, StreetViewStatus } from "./street-view/service/constants";
import { StreetViewService } from "./street-view/service/service";
import { ControlPosition } from "./maps/controls/controlposition";
import { MapTypeId } from "./maps/maps/constants";
import { InfoWindow_ } from "./maps/infowindow/infowindow";
import { event } from "./maps/event/event";
import { spherical } from "./maps/geometry/spherical";
import { mockInstances } from "./registry";

const initialize = function (): void {
    mockInstances.clearAll();
    (global as any).google = {
        maps: {
            ImageMapType: jest.fn(),
            Marker: Marker,
            Map: Map_,
            Data: Data,
            Point: Point,
            Size: Size,
            MVCObject: MVCObject,
            MVCArray: MVCArray,
            MapTypeId: MapTypeId,
            ControlPosition: ControlPosition,
            LatLng: LatLng,
            LatLngBounds: LatLngBounds,
            StreetViewPanorama: StreetViewPanorama,
            StreetViewCoverageLayer: StreetViewCoverageLayer,
            StreetViewService: StreetViewService,
            StreetViewPreference: StreetViewPreference,
            StreetViewSource: StreetViewSource,
            StreetViewStatus: StreetViewStatus,
            event: event,
            places: {
                Autocomplete: Autocomplete,
                SearchBox: SearchBox,
                AutocompleteService: AutocompleteService,
                PlacesService: PlacesService,
            },
            geometry: {
                spherical: spherical,
            },
            Polygon: Polygon,
            Polyline: Polyline,
            Circle: Circle,
            OverlayView: OverlayView,
            KmlLayer: KmlLayer,
            MapCanvasProjection: MapCanvasProjection,
            MapPanes: MapPanes,
            VisibleRegion: VisibleRegion,
            DirectionsService: DirectionsService,
            DirectionsRenderer: DirectionsRenderer,
            InfoWindow: InfoWindow_,
        },
    };
};

const places = {
    AutocompleteService: AutocompleteService,
    PlacesService: PlacesService,
};

export {
    Circle,
    Data,
    event,
    spherical,
    Feature,
    LatLng,
    LatLngBounds,
    MVCArray,
    MVCObject,
    MapCanvasProjection,
    MapPanes,
    Map_ as Map,
    Marker,
    OverlayView,
    KmlLayer,
    Point,
    Polygon,
    Polyline,
    Size,
    StreetViewCoverageLayer,
    StreetViewPanorama,
    StreetViewService,
    VisibleRegion,
    DirectionsService,
    DirectionsRenderer,
    InfoWindow_ as InfoWindow,
    places,
    mockInstances,
    initialize,
};
