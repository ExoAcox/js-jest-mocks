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
/// <reference types="jest" />
/// <reference types="google.maps" />
import { MVCArray } from "../../maps/event/mvcarray";
import { MVCObject } from "../../maps/event/mvcobject";
export declare class StreetViewPanorama extends MVCObject implements google.maps.StreetViewPanorama {
    controls: MVCArray<HTMLElement>[];
    getLinks: jest.Mock<any, any>;
    getLocation: jest.Mock<any, any>;
    getMotionTracking: jest.Mock<any, any>;
    getPano: jest.Mock<any, any>;
    getPhotographerPov: jest.Mock<any, any>;
    getPosition: jest.Mock<any, any>;
    getPov: jest.Mock<any, any>;
    getStatus: jest.Mock<any, any>;
    getVisible: jest.Mock<any, any>;
    getZoom: jest.Mock<any, any>;
    registerPanoProvider: jest.Mock<any, any>;
    setLinks: jest.Mock<any, any>;
    setMotionTracking: jest.Mock<any, any>;
    setOptions: jest.Mock<any, any>;
    setPano: jest.Mock<any, any>;
    setPosition: jest.Mock<any, any>;
    setPov: jest.Mock<any, any>;
    setVisible: jest.Mock<any, any>;
    setZoom: jest.Mock<any, any>;
}
