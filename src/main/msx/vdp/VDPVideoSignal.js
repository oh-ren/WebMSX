// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

wmsx.VDPVideoSignal = function(signalMetrics) {

    this.connectMonitor = function(pMonitor) {
        monitor = pMonitor;
        monitor.setSignalMetrics(signalMetrics);
    };

    this.setSignalMetrics = function(metrics) {
        if (monitor) monitor.setSignalMetrics(metrics);
    };

    this.newFrame = function(image, sourceX, sourceY, sourceWidth, sourceHeight) {
        monitor.newFrame(image, sourceX, sourceY, sourceWidth, sourceHeight);
    };

    this.signalOff = function() {
        if (monitor) monitor.signalOff();
    };

    this.showOSD = function(message, overlap) {
        if (monitor) monitor.showOSD(message, overlap);
    };

    var monitor;

};