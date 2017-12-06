// Javascript
define( ["jquery","qlik","./Chart.min", "./properties", "./initialProperties"],function ($,qlik,Chart, props, initialProperties) {
    'use strict';
    
    Chart.defaults.global.responsive = true;

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split(''), color = '#';
        for (var i = 0; i < 6; i++ ) {color += letters[Math.floor(Math.random() * 16)];}
        return color;
    }   

    function paint ($element, layout) {
        let chart = null;

        let chartData   = new Array();
        let chartLabels = new Array();
        let chartColors = new Array();

        let dimensions  = layout.qHyperCube.qDimensionInfo;
        let matrix      = layout.qHyperCube.qDataPages[0].qMatrix;
        let measures    = layout.qHyperCube.qMeasureInfo;

        let id = "polar_" + layout.qInfo.qId;
            
        if (!( dimensions && dimensions.length > 0))
            return; 
        
        matrix.forEach(( row ) => {
            chartData.push(parseFloat(row[1].qText));

            chartLabels.push(row[0].qText);
            chartColors.push(getRandomColor());
        });       

        if(!(layout.qHyperCube.qDataPages[0] && matrix)) 
            return;

        if (document.getElementById(id)) 
        {
            $("#" + id).remove();
        }

        $element.append($('<canvas/>').attr("id", id));

        let context = $('#'+id).get(0).getContext("2d");
        
        let config = {
            data: {
                datasets: [{
                    label: measures[0].qFallbackTitle,
                    data: chartData,
                    backgroundColor: chartColors
                }],
                labels: chartLabels
            },
            type: layout.props.chartType,
            options: {
                legend: {
                    display: layout.props.legendToggle,
                    position: layout.props.legendPos
                }
            }
        }

        chart = new Chart(context, config);  
        
    }

    return {
        initialProperties: initialProperties,
        definition: props,
        snapshot: {
            canTakeSnapshot: true
        },
        paint : paint 
    }
 });  


