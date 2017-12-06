// JavaScript
define( [], function () {
	'use strict';
	
	let dimensions = {
		uses: "dimensions",
		min: 1,
		max: 1
	};
	let measures = {
		uses: "measures",
		min: 1,
		max: 1
	};
	
	let legendLocationSelector = {
		ref: "props.legendPos",
		label: "Legend position",
		type: "string",
		component: "dropdown",
		options: [
			{
				value: "left",
				label: "Left"
			},
			{
				value: "top",
				label: "Top"
			},
			{
				value: "right",
				label: "Right"
			},
			{
				value: "bottom",
				label: "Bottom"
			},
		]
	};

	let chartTypeSelector = {
		ref: "props.chartType",
		label: "Chart type",
		type: "string",
		component: "dropdown",
		options: [
			{
				value: "radar",
				label: "Radar"
			},
			{
				value: "polarArea",
				label: "Polar Area"
			}
		]
	};

	let toggleLegend = {
		ref: "props.legendToggle",
		label: "Toggle legend",
		"type": "boolean",
		"defaultValue": true
	}

	let appearanceSection = {
		uses: "settings",
		items: {
			legendLocationSelector: legendLocationSelector,
			toggleLegend: toggleLegend,
			chartTypeSelector: chartTypeSelector
		}
	};

	let sorting = {
		uses: "sorting"
	}


	
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: dimensions,
			measures: measures,
			sorting: sorting,
			appearance: appearanceSection
		}
	};
});