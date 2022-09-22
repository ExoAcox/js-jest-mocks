'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
class LatLng {
    constructor(a, b, c) {
        this.equals = jest
            .fn()
            .mockImplementation((other) => false);
        this.lat = jest.fn().mockImplementation(() => 0);
        this.lng = jest.fn().mockImplementation(() => 0);
        this.toString = jest.fn().mockImplementation(() => "");
        this.toUrlValue = jest
            .fn()
            .mockImplementation((precision) => "");
        this.toJSON = jest
            .fn()
            .mockImplementation(() => {
            return { lat: 0, lng: 0 };
        });
    }
}
class LatLngBounds {
    constructor(sw, ne) {
        this.contains = jest
            .fn()
            .mockImplementation((latLng) => false);
        this.equals = jest
            .fn()
            .mockImplementation((other) => false);
        this.extend = jest
            .fn()
            .mockImplementation((point) => this);
        this.getCenter = jest
            .fn()
            .mockImplementation(() => new google.maps.LatLng({ lat: 0, lng: 0 }));
        this.getNorthEast = jest
            .fn()
            .mockImplementation(() => new google.maps.LatLng({ lat: 0, lng: 0 }));
        this.getSouthWest = jest
            .fn()
            .mockImplementation(() => new google.maps.LatLng({ lat: 0, lng: 0 }));
        this.intersects = jest
            .fn()
            .mockImplementation((other) => false);
        this.isEmpty = jest.fn().mockImplementation(() => false);
        this.toJSON = jest
            .fn()
            .mockImplementation(() => {
            return { east: 0, north: 0, south: 0, west: 0 };
        });
        this.toSpan = jest
            .fn()
            .mockImplementation(() => new google.maps.LatLng({ lat: 0, lng: 0 }));
        this.toString = jest.fn().mockImplementation(() => "");
        this.toUrlValue = jest
            .fn()
            .mockImplementation((precision) => "");
        this.union = jest
            .fn()
            .mockImplementation((other) => this);
    }
}

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
const MOCKS_REGISTRY = new Map();
function get(item) {
    return MOCKS_REGISTRY.get(item.name) || [];
}
function clearAll() {
    MOCKS_REGISTRY.clear();
}
// Signature to require at least one item
function clear(item, ...rest) {
    for (const ctr of [item, ...rest]) {
        MOCKS_REGISTRY.delete(ctr.name);
    }
}
const mockInstances = {
    get,
    clear,
    clearAll,
};
/* Internal */
function __registerMockInstance(ctr, instance) {
    const existing = MOCKS_REGISTRY.get(ctr.name) || [];
    MOCKS_REGISTRY.set(ctr.name, [...existing, instance]);
}

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
const MapsEventListener = {
    remove: jest.fn(),
};
const event = {
    addDomListener: jest
        .fn()
        .mockImplementation((instance, eventName, handler, capture) => MapsEventListener),
    addDomListenerOnce: jest
        .fn()
        .mockImplementation((instance, eventName, handler, capture) => MapsEventListener),
    addListener: jest
        .fn()
        .mockImplementation((instance, eventName, handler) => MapsEventListener),
    addListenerOnce: jest
        .fn()
        .mockImplementation((instance, eventName, handler) => MapsEventListener),
    clearInstanceListeners: jest
        .fn()
        .mockImplementation((instance) => null),
    clearListeners: jest
        .fn()
        .mockImplementation((instance, eventName) => null),
    hasListeners: jest
        .fn()
        .mockImplementation((instance, eventName) => false),
    removeListener: jest
        .fn()
        .mockImplementation((listener) => null),
    trigger: jest
        .fn()
        .mockImplementation((instance, eventName, ...eventArgs) => null),
};

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
class MVCObject {
    constructor() {
        this.addListener = jest
            .fn()
            .mockImplementation((eventName, handler) => MapsEventListener);
        this.bindTo = jest
            .fn()
            .mockImplementation((key, target, targetKey, noNotify) => null);
        this.changed = jest.fn().mockImplementation((key) => null);
        this.get = jest.fn().mockImplementation((key) => { });
        this.notify = jest.fn().mockImplementation((key) => null);
        this.set = jest
            .fn()
            .mockImplementation((key, value) => null);
        this.setValues = jest.fn().mockImplementation((values) => null);
        this.unbind = jest.fn().mockImplementation((key) => null);
        this.unbindAll = jest.fn().mockImplementation(() => null);
        const ctor = this.constructor;
        __registerMockInstance(ctor, this);
        if (ctor.mockInstances === undefined) {
            ctor.mockInstances = [];
        }
        if (MVCObject._mockClasses === undefined) {
            MVCObject._mockClasses = [];
        }
        ctor.mockInstances.push(this);
        MVCObject._mockClasses.push(ctor);
    }
}
MVCObject._mockClasses = [];
MVCObject.mockInstances = [];
// if running a test that supports afterEach, then we will cleanup the instances
// automatically at the end of each test.
if (typeof afterEach === "function") {
    afterEach(() => {
        if (MVCObject._mockClasses) {
            for (const ctor of MVCObject._mockClasses) {
                ctor.mockInstances = undefined;
            }
        }
        MVCObject._mockClasses = undefined;
    });
}

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
class Autocomplete extends MVCObject {
    constructor(inputField, opts) {
        super();
        this.getBounds = jest
            .fn()
            .mockImplementation(() => null);
        this.getFields = jest.fn().mockImplementation(() => []);
        this.getPlace = jest
            .fn()
            .mockImplementation(() => ({ name: "" }));
        this.setBounds = jest
            .fn()
            .mockImplementation((bounds) => { });
        this.setComponentRestrictions = jest
            .fn()
            .mockImplementation((restrictions) => { });
        this.setFields = jest
            .fn()
            .mockImplementation((fields) => { });
        this.setOptions = jest
            .fn()
            .mockImplementation((options) => { });
        this.setTypes = jest.fn().mockImplementation((types) => { });
    }
}

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
class Map_ extends MVCObject {
    constructor(mapDiv, opts) {
        super();
        this.fitBounds = jest
            .fn()
            .mockImplementation((bounds, padding) => {
            return null;
        });
        this.getBounds = jest.fn().mockImplementation(() => new LatLngBounds());
        this.getCenter = jest
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getClickableIcons = jest.fn().mockImplementation(() => false);
        this.getDiv = jest.fn().mockImplementation(() => {
            return jest.fn();
        });
        this.getHeading = jest.fn().mockImplementation(() => 0);
        this.getMapTypeId = jest
            .fn()
            .mockImplementation(() => google.maps.MapTypeId.ROADMAP);
        this.getProjection = jest
            .fn()
            .mockImplementation(() => jest.fn());
        this.getRenderingType = jest
            .fn()
            .mockImplementation(() => google.maps.RenderingType.RASTER);
        this.getStreetView = jest
            .fn()
            .mockImplementation(() => jest.fn());
        this.getTilt = jest.fn().mockImplementation(() => 0);
        this.getZoom = jest.fn().mockImplementation(() => 0);
        this.moveCamera = jest
            .fn()
            .mockImplementation((cameraOptions) => {
            return null;
        });
        this.panBy = jest.fn().mockImplementation((x, y) => {
            return null;
        });
        this.panTo = jest
            .fn()
            .mockImplementation((latLng) => {
            return null;
        });
        this.panToBounds = jest
            .fn()
            .mockImplementation((latLngBounds, padding) => {
            return null;
        });
        this.setCenter = jest
            .fn()
            .mockImplementation((latlng) => {
            return null;
        });
        this.setHeading = jest.fn().mockImplementation((heading) => {
            return null;
        });
        this.setMapTypeId = jest
            .fn()
            .mockImplementation((mapTypeId) => {
            return null;
        });
        this.setOptions = jest
            .fn()
            .mockImplementation((options) => {
            return null;
        });
        this.setStreetView = jest
            .fn()
            .mockImplementation((panorama) => {
            return null;
        });
        this.setTilt = jest.fn().mockImplementation((tilt) => {
            return null;
        });
        this.setZoom = jest.fn().mockImplementation((zoom) => {
            return null;
        });
        this.setClickableIcons = jest
            .fn()
            .mockImplementation((clickable) => {
            return null;
        });
        this.data = new google.maps.Data();
        this.controls = [
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(),
            new google.maps.MVCArray(), // TOP_RIGHT
        ];
        this.mapTypes = new google.maps.MVCObject();
        this.overlayMapTypes = new google.maps.MVCArray();
    }
}

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
class Circle extends MVCObject {
    constructor(opt) {
        super();
        this.getBounds = jest
            .fn()
            .mockImplementation(() => null);
        this.getCenter = jest
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getDraggable = jest.fn().mockImplementation(() => true);
        this.getEditable = jest.fn().mockImplementation(() => true);
        this.getMap = jest
            .fn()
            .mockImplementation(() => new Map_(null));
        this.getRadius = jest.fn().mockImplementation(() => 0);
        this.getVisible = jest.fn().mockImplementation(() => true);
        this.setCenter = jest
            .fn()
            .mockImplementation((center) => { });
        this.setDraggable = jest
            .fn()
            .mockImplementation((draggable) => { });
        this.setEditable = jest.fn().mockImplementation((editable) => { });
        this.setMap = jest.fn().mockImplementation((map) => { });
        this.setOptions = jest
            .fn()
            .mockImplementation((options) => { });
        this.setRadius = jest.fn().mockImplementation((radius) => { });
        this.setVisible = jest.fn().mockImplementation((visible) => { });
    }
}

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
var ControlPosition;
(function (ControlPosition) {
    ControlPosition[ControlPosition["BOTTOM_CENTER"] = 0] = "BOTTOM_CENTER";
    ControlPosition[ControlPosition["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    ControlPosition[ControlPosition["LEFT_BOTTOM"] = 3] = "LEFT_BOTTOM";
    ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
    ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
    ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 6] = "RIGHT_BOTTOM";
    ControlPosition[ControlPosition["RIGHT_CENTER"] = 7] = "RIGHT_CENTER";
    ControlPosition[ControlPosition["RIGHT_TOP"] = 8] = "RIGHT_TOP";
    ControlPosition[ControlPosition["TOP_CENTER"] = 9] = "TOP_CENTER";
    ControlPosition[ControlPosition["TOP_LEFT"] = 10] = "TOP_LEFT";
    ControlPosition[ControlPosition["TOP_RIGHT"] = 11] = "TOP_RIGHT";
})(ControlPosition || (ControlPosition = {}));

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
class Feature {
    constructor(options) {
        this.forEachProperty = jest
            .fn()
            .mockImplementation((callback) => {
            return null;
        });
        this.getGeometry = jest
            .fn()
            .mockImplementation(() => {
            return null;
        });
        this.getId = jest
            .fn()
            .mockImplementation(() => {
            return "1";
        });
        this.getProperty = jest.fn().mockImplementation((name) => {
            return undefined;
        });
        this.removeProperty = jest.fn().mockImplementation((name) => {
            return null;
        });
        this.setGeometry = jest
            .fn()
            .mockImplementation((newGeometry) => {
            return null;
        });
        this.setProperty = jest
            .fn()
            .mockImplementation((name, newValue) => {
            return null;
        });
        this.toGeoJson = jest
            .fn()
            .mockImplementation((callback) => {
            return null;
        });
    }
}

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
class Data extends MVCObject {
    constructor(opt) {
        super();
        this.add = jest
            .fn()
            .mockImplementation((feature) => {
            return null;
        });
        this.addGeoJson = jest
            .fn()
            .mockImplementation((geoJson, options) => {
            return [];
        });
        this.contains = jest
            .fn()
            .mockImplementation((feature) => {
            return false;
        });
        this.forEach = jest
            .fn()
            .mockImplementation((callback) => {
            return null;
        });
        this.getControlPosition = jest
            .fn()
            .mockImplementation(() => {
            return ControlPosition.BOTTOM_CENTER;
        });
        this.getControls = jest.fn().mockImplementation(() => {
            return null;
        });
        this.getDrawingMode = jest.fn().mockImplementation(() => {
            return null;
        });
        this.getFeatureById = jest
            .fn()
            .mockImplementation((id) => {
            return undefined;
        });
        this.getMap = jest.fn().mockImplementation(() => {
            return null;
        });
        this.getStyle = jest
            .fn()
            .mockImplementation(() => {
            return null;
        });
        this.loadGeoJson = jest
            .fn()
            .mockImplementation((url, options, callback) => {
            return null;
        });
        this.overrideStyle = jest
            .fn()
            .mockImplementation((feature, style) => {
            return null;
        });
        this.remove = jest
            .fn()
            .mockImplementation((feature) => {
            return null;
        });
        this.revertStyle = jest
            .fn()
            .mockImplementation((feature) => {
            return null;
        });
        this.setControlPosition = jest
            .fn()
            .mockImplementation((controlPosition) => {
            return null;
        });
        this.setControls = jest
            .fn()
            .mockImplementation((controls) => {
            return null;
        });
        this.setDrawingMode = jest
            .fn()
            .mockImplementation((drawingMode) => {
            return null;
        });
        this.setMap = jest
            .fn()
            .mockImplementation((map) => {
            return null;
        });
        this.setStyle = jest
            .fn()
            .mockImplementation((style) => {
            return null;
        });
        this.toGeoJson = jest
            .fn()
            .mockImplementation((callback) => {
            return null;
        });
    }
}
Data.Feature = jest
    .fn()
    .mockImplementation((options) => new Feature(options));

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
class MVCArray extends MVCObject {
    constructor(array) {
        super();
        this.clear = jest.fn().mockImplementation(() => { });
        this.forEach = jest
            .fn()
            .mockImplementation((callback) => { });
        this.getArray = jest.fn().mockImplementation(() => []);
        this.getAt = jest.fn().mockImplementation((i) => ({}));
        this.getLength = jest.fn().mockImplementation(() => 0);
        this.insertAt = jest
            .fn()
            .mockImplementation((i, elem) => { });
        this.pop = jest.fn().mockImplementation(() => ({}));
        this.push = jest.fn().mockImplementation((elem) => 0);
        this.removeAt = jest.fn().mockImplementation((i) => ({}));
        this.setAt = jest.fn().mockImplementation((i, elem) => { });
    }
}

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
class Point {
    constructor(x, y) {
        this.toString = jest.fn().mockImplementation(() => {
            return "";
        });
        this.x = x;
        this.y = y;
    }
    equals(other) {
        return other.x === this.x && other.y === this.y;
    }
}

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
class VisibleRegion extends MVCObject {
}

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
class MapCanvasProjection extends MVCObject {
    constructor() {
        super(...arguments);
        this.fromContainerPixelToLatLng = jest
            .fn()
            .mockImplementation((pixel, nowrap) => new LatLng(0, 0));
        this.fromDivPixelToLatLng = jest
            .fn()
            .mockImplementation((pixel, nowrap) => new LatLng(0, 0));
        this.fromLatLngToContainerPixel = jest
            .fn()
            .mockImplementation((latLng) => new Point(0, 0));
        this.fromLatLngToDivPixel = jest
            .fn()
            .mockImplementation((latLng) => new Point(0, 0));
        this.getVisibleRegion = jest
            .fn()
            .mockImplementation(() => new VisibleRegion());
        this.getWorldWidth = jest.fn().mockImplementation(() => 0);
    }
}

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
class MapPanes {
}

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
class Marker extends MVCObject {
    constructor(opts) {
        super();
        this.getAnimation = jest
            .fn()
            .mockImplementation(() => null);
        this.getClickable = jest.fn().mockImplementation(() => null);
        this.getCursor = jest
            .fn()
            .mockImplementation(() => null);
        this.getDraggable = jest
            .fn()
            .mockImplementation(() => null);
        this.getIcon = jest
            .fn()
            .mockImplementation(() => null);
        this.getLabel = jest
            .fn()
            .mockImplementation(() => null);
        this.getMap = jest
            .fn()
            .mockImplementation(() => null);
        this.getOpacity = jest
            .fn()
            .mockImplementation(() => null);
        this.getPosition = jest
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getShape = jest
            .fn()
            .mockImplementation(() => null);
        this.getTitle = jest
            .fn()
            .mockImplementation(() => null);
        this.getVisible = jest.fn().mockImplementation(() => null);
        this.getZIndex = jest
            .fn()
            .mockImplementation(() => null);
        this.setAnimation = jest
            .fn()
            .mockImplementation((animation) => { });
        this.setClickable = jest
            .fn()
            .mockImplementation((flag) => { });
        this.setCursor = jest
            .fn()
            .mockImplementation((cursor) => { });
        this.setDraggable = jest
            .fn()
            .mockImplementation((flag) => { });
        this.setIcon = jest
            .fn()
            .mockImplementation((icon) => { });
        this.setLabel = jest
            .fn()
            .mockImplementation((label) => { });
        this.setMap = jest
            .fn()
            .mockImplementation((map) => { });
        this.setOpacity = jest
            .fn()
            .mockImplementation((opacity) => { });
        this.setOptions = jest
            .fn()
            .mockImplementation((options) => { });
        this.setPosition = jest
            .fn()
            .mockImplementation((latlng) => { });
        this.setShape = jest
            .fn()
            .mockImplementation((shape) => { });
        this.setTitle = jest
            .fn()
            .mockImplementation((title) => { });
        this.setVisible = jest
            .fn()
            .mockImplementation((visible) => { });
        this.setZIndex = jest
            .fn()
            .mockImplementation((zIndex) => { });
        this.addListener = jest
            .fn()
            .mockImplementation((eventName, handler) => MapsEventListener);
    }
}

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
class OverlayView extends MVCObject {
    constructor() {
        super(...arguments);
        this.draw = jest.fn();
        this.getMap = jest
            .fn()
            .mockImplementation(() => new Map_(null, {}));
        this.getPanes = jest
            .fn()
            .mockImplementation(() => new MapPanes());
        this.getProjection = jest
            .fn()
            .mockImplementation(() => new MapCanvasProjection());
        this.onAdd = jest.fn();
        this.onRemove = jest.fn();
        this.setMap = jest
            .fn()
            .mockImplementation((map) => null);
    }
}

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
class KmlLayer extends MVCObject {
    constructor(opts) {
        super();
        this.getDefaultViewport = jest
            .fn()
            .mockImplementation(() => null);
        this.getMap = jest
            .fn()
            .mockImplementation(() => null);
        this.getMetadata = jest
            .fn()
            .mockImplementation(() => null);
        this.getStatus = jest
            .fn()
            .mockImplementation(() => null);
        this.getUrl = jest
            .fn()
            .mockImplementation(() => null);
        this.getZIndex = jest
            .fn()
            .mockImplementation(() => null);
        this.setMap = jest
            .fn()
            .mockImplementation((map) => {
            return;
        });
        this.setOptions = jest
            .fn()
            .mockImplementation((options) => {
            return;
        });
        this.setUrl = jest.fn().mockImplementation((url) => {
            return;
        });
        this.setZIndex = jest.fn().mockImplementation((zIndex) => {
            return;
        });
        this.addListener = jest
            .fn()
            .mockImplementation((eventName, handler) => MapsEventListener);
    }
}

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
class Polygon extends MVCObject {
    constructor(opts) {
        super();
        this.getDraggable = jest.fn().mockImplementation(() => false);
        this.getEditable = jest.fn().mockImplementation(() => false);
        this.getMap = jest
            .fn()
            .mockImplementation(() => ({}));
        this.getPath = jest
            .fn()
            .mockImplementation(() => ({}));
        this.getPaths = jest
            .fn()
            .mockImplementation(() => ({}));
        this.getVisible = jest.fn().mockImplementation(() => false);
        this.setDraggable = jest
            .fn()
            .mockImplementation((draggable) => { });
        this.setEditable = jest
            .fn()
            .mockImplementation((editable) => { });
        this.setMap = jest
            .fn()
            .mockImplementation((map) => { });
        this.setOptions = jest
            .fn()
            .mockImplementation((options) => { });
        this.setPath = jest
            .fn()
            .mockImplementation((path) => { });
        this.setPaths = jest
            .fn()
            .mockImplementation((paths) => { });
        this.setVisible = jest
            .fn()
            .mockImplementation((visible) => { });
    }
}

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
class Polyline extends MVCObject {
    constructor(opts) {
        super();
        this.getDraggable = jest.fn().mockImplementation(() => false);
        this.getEditable = jest.fn().mockImplementation(() => false);
        this.getMap = jest
            .fn()
            .mockImplementation(() => ({}));
        this.getPath = jest
            .fn()
            .mockImplementation(() => ({}));
        this.getVisible = jest.fn().mockImplementation(() => false);
        this.setDraggable = jest
            .fn()
            .mockImplementation((draggable) => { });
        this.setEditable = jest
            .fn()
            .mockImplementation((editable) => { });
        this.setMap = jest
            .fn()
            .mockImplementation((map) => { });
        this.setOptions = jest
            .fn()
            .mockImplementation((options) => { });
        this.setPath = jest
            .fn()
            .mockImplementation((path) => { });
        this.setVisible = jest
            .fn()
            .mockImplementation((visible) => { });
    }
}

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
class SearchBox extends MVCObject {
    constructor() {
        super(...arguments);
        this.getBounds = jest
            .fn()
            .mockImplementation(() => null);
        this.getPlaces = jest
            .fn()
            .mockImplementation(() => [
            { name: "" },
        ]);
        this.setBounds = jest
            .fn()
            .mockImplementation((bounds) => null);
    }
}

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
class Size {
    constructor(width, height, widthUnit, heightUnit) {
        this.toString = jest.fn().mockImplementation(() => {
            return "";
        });
        this.width = width;
        this.height = height;
    }
    equals(other) {
        return other.height === this.height && other.width === this.width;
    }
}

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
class DirectionsService extends MVCObject {
    constructor(opt) {
        super();
        this.route = jest
            .fn()
            .mockImplementation((_, callback) => {
            return callback({ routes: [{ legs: [{ distance: { value: 100 } }] }] }, "OK");
        });
    }
}

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
class DirectionsRenderer extends MVCObject {
    constructor(opt) {
        super();
        this.setMap = jest
            .fn()
            .mockImplementation();
        this.setDirections = jest
            .fn()
            .mockImplementation();
    }
}

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
class StreetViewCoverageLayer extends MVCObject {
    constructor() {
        super(...arguments);
        this.getMap = jest
            .fn()
            .mockImplementation(() => null);
        this.setMap = jest
            .fn()
            .mockImplementation((map) => null);
    }
}

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
class StreetViewPanorama extends MVCObject {
    constructor() {
        super(...arguments);
        this.controls = [];
        this.getLinks = jest
            .fn()
            .mockImplementation(() => null);
        this.getLocation = jest
            .fn()
            .mockImplementation(() => ({
            description: null,
            latLng: new LatLng(1, 1),
            pano: "pano",
            shortDescription: null,
        }));
        this.getMotionTracking = jest.fn().mockImplementation(() => false);
        this.getPano = jest.fn().mockImplementation(() => "pano");
        this.getPhotographerPov = jest
            .fn()
            .mockImplementation(() => ({ heading: 0, pitch: 0 }));
        this.getPosition = jest
            .fn()
            .mockImplementation(() => new LatLng(1, 1));
        this.getPov = jest
            .fn()
            .mockImplementation(() => ({ heading: 0, pitch: 0 }));
        this.getStatus = jest
            .fn()
            .mockImplementation(() => google.maps.StreetViewStatus.OK);
        this.getVisible = jest.fn().mockImplementation(() => true);
        this.getZoom = jest.fn().mockImplementation(() => 0);
        this.registerPanoProvider = jest
            .fn()
            .mockImplementation((provider, opt_options) => null);
        this.setLinks = jest
            .fn()
            .mockImplementation((inks) => null);
        this.setMotionTracking = jest
            .fn()
            .mockImplementation((motionTracking) => null);
        this.setOptions = jest
            .fn()
            .mockImplementation((options) => null);
        this.setPano = jest.fn().mockImplementation((pano) => null);
        this.setPosition = jest
            .fn()
            .mockImplementation((latLng) => null);
        this.setPov = jest
            .fn()
            .mockImplementation((pov) => null);
        this.setVisible = jest
            .fn()
            .mockImplementation((flag) => null);
        this.setZoom = jest.fn().mockImplementation((zoom) => null);
    }
}

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
var StreetViewPreference;
(function (StreetViewPreference) {
    StreetViewPreference["BEST"] = "best";
    StreetViewPreference["NEAREST"] = "nearest";
})(StreetViewPreference || (StreetViewPreference = {}));
var StreetViewSource;
(function (StreetViewSource) {
    StreetViewSource["DEFAULT"] = "default";
    StreetViewSource["OUTDOOR"] = "outdoor";
})(StreetViewSource || (StreetViewSource = {}));
var StreetViewStatus;
(function (StreetViewStatus) {
    StreetViewStatus["OK"] = "OK";
    StreetViewStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    StreetViewStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
})(StreetViewStatus || (StreetViewStatus = {}));

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
class StreetViewService {
    constructor() {
        this.getPanorama = jest
            .fn()
            .mockImplementation((request, callback) => {
            return Promise.resolve({
                data: {
                    copyright: "copyright",
                    imageDate: "imageDate",
                    links: [],
                    location: {
                        description: "description",
                        pano: "123",
                        shortDescription: null,
                        latLng: new LatLng(1, 1),
                    },
                    tiles: {
                        centerHeading: 0,
                        getTileUrl: () => "tileUrl",
                        tileSize: new Size(1, 1),
                        worldSize: new Size(1, 1),
                    },
                },
            });
        });
        __registerMockInstance(this.constructor, this);
    }
}

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
var MapTypeId;
(function (MapTypeId) {
    MapTypeId["HYBRID"] = "hybrid";
    MapTypeId["ROADMAP"] = "roadmap";
    MapTypeId["SATELLITE"] = "satellite";
    MapTypeId["TERRAIN"] = "terrain";
})(MapTypeId || (MapTypeId = {}));

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
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
class InfoWindow_ extends MVCObject {
    constructor(opts) {
        super();
        this.close = jest.fn().mockImplementation(() => null);
        this.focus = jest.fn();
        this.getContent = jest
            .fn()
            .mockImplementation(() => {
            return jest.fn();
        });
        this.getPosition = jest
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getZIndex = jest
            .fn()
            .mockImplementation(() => 1);
        this.open = jest
            .fn()
            .mockImplementation((options, anchor) => null);
        this.setContent = jest
            .fn()
            .mockImplementation((content) => null);
        this.setOptions = jest
            .fn()
            .mockImplementation((options) => null);
        this.setPosition = jest
            .fn()
            .mockImplementation((position) => null);
        this.setZIndex = jest
            .fn()
            .mockImplementation((zIndex) => null);
    }
}

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
const spherical = {
    computeDistanceBetween: jest
        .fn()
        .mockImplementation(() => 100),
};

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
const initialize = function () {
    mockInstances.clearAll();
    global.google = {
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
            },
            geometry: {
                spherical: spherical
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

exports.Circle = Circle;
exports.Data = Data;
exports.DirectionsRenderer = DirectionsRenderer;
exports.DirectionsService = DirectionsService;
exports.Feature = Feature;
exports.InfoWindow = InfoWindow_;
exports.KmlLayer = KmlLayer;
exports.LatLng = LatLng;
exports.LatLngBounds = LatLngBounds;
exports.MVCArray = MVCArray;
exports.MVCObject = MVCObject;
exports.Map = Map_;
exports.MapCanvasProjection = MapCanvasProjection;
exports.MapPanes = MapPanes;
exports.Marker = Marker;
exports.OverlayView = OverlayView;
exports.Point = Point;
exports.Polygon = Polygon;
exports.Polyline = Polyline;
exports.Size = Size;
exports.StreetViewCoverageLayer = StreetViewCoverageLayer;
exports.StreetViewPanorama = StreetViewPanorama;
exports.StreetViewService = StreetViewService;
exports.VisibleRegion = VisibleRegion;
exports.event = event;
exports.initialize = initialize;
exports.mockInstances = mockInstances;
exports.spherical = spherical;
