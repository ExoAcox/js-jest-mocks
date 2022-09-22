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
/// <reference types="google.maps" />
/// <reference types="jest" />
import { MVCObject } from "../../maps/event/mvcobject";
export declare class Data extends MVCObject implements google.maps.Data {
    constructor(opt?: google.maps.Data.DataOptions | null);
    static Feature: jest.Mock<any, any>;
    add: jest.Mock<any, any>;
    addGeoJson: jest.Mock<any, any>;
    contains: jest.Mock<any, any>;
    forEach: jest.Mock<any, any>;
    getControlPosition: jest.Mock<any, any>;
    getControls: jest.Mock<any, any>;
    getDrawingMode: jest.Mock<any, any>;
    getFeatureById: jest.Mock<any, any>;
    getMap: jest.Mock<any, any>;
    getStyle: jest.Mock<any, any>;
    loadGeoJson: jest.Mock<any, any>;
    overrideStyle: jest.Mock<any, any>;
    remove: jest.Mock<any, any>;
    revertStyle: jest.Mock<any, any>;
    setControlPosition: jest.Mock<any, any>;
    setControls: jest.Mock<any, any>;
    setDrawingMode: jest.Mock<any, any>;
    setMap: jest.Mock<any, any>;
    setStyle: jest.Mock<any, any>;
    toGeoJson: jest.Mock<any, any>;
}
