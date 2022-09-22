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
import { MVCObject } from "../maps/event/mvcobject";
export declare class Autocomplete extends MVCObject implements google.maps.places.Autocomplete {
    constructor(inputField: HTMLInputElement, opts?: google.maps.places.AutocompleteOptions);
    getBounds: jest.Mock<any, any>;
    getFields: jest.Mock<any, any>;
    getPlace: jest.Mock<any, any>;
    setBounds: jest.Mock<any, any>;
    setComponentRestrictions: jest.Mock<any, any>;
    setFields: jest.Mock<any, any>;
    setOptions: jest.Mock<any, any>;
    setTypes: jest.Mock<any, any>;
}
