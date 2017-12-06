// JavaScript
define( [], function () {
	'use strict';
	let version = 1.1;
	let qHyperCubeDef = {
		qDimensions: [],
		qMeasures: [],
		qInitialDataFetch: [{
			qWidth: 10,
			qHeight: 500
		}]
	}
	return {
		version: version,
		qHyperCubeDef: qHyperCubeDef
	};
});