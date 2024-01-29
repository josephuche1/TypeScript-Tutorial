"use strict";
class Instagram {
    // You must implement all the properties of the interface
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, resolution // you can add more properties
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.resolution = resolution;
    }
    createStory() {
        console.log("Creating story");
    }
}
