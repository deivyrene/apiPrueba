console.log('js')
var dataUf =$( "#chartdiv" ).data("lastValue" );
var dataDolar =$( "#dolardiv" ).data( "dolarValue" );
var dataTmc =$( "#tmcDiv" ).data( "tmcValue" );

for (var prop in dataUf) {
    dataUf[prop].Valor = parseFloat(dataUf[prop].Valor);
}
var chart = AmCharts.makeChart( "chartdiv", {
    "type": "serial",
    "theme": "dark",
    "titles": [{
        "text": "Detalle UF."
      }],
    "dataProvider": dataUf,
    "valueAxes": [ {
      "gridColor": "#00ff00",
      "gridAlpha": 0.2,
      "dashLength": 0
    } ],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [ {
      "balloonText": "[[category]]: <b>[[value]]</b>",
      "fillAlphas": 0.8,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "Valor"
    } ],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "Fecha",
    "categoryAxis": {
      "gridPosition": "start",
      "gridAlpha": 0,
      "tickPosition": "start",
      "tickLength": 20
    },
    "export": {
      "enabled": true
    }
  
  } );
  console.log('----------------USD-----------------------',dataDolar);
  for (var prop in dataDolar) {
    if(dataDolar.length > 0){
        if(dataDolar[prop].Fecha != "No Disponible"){
            dataDolar[prop].Valor = parseFloat(dataDolar[prop].Valor);
        }else{
            dataDolar[prop].Valor = 0;
            dataDolar[prop].Fecha = ''
        }
    }
}
  var chart2 = AmCharts.makeChart( "dolardiv", {
    "type": "serial",
    "theme": "light",
    "titles": [{
        "text": "Detalle Dolar"
      }],
    "dataProvider": dataDolar,
    "valueAxes": [ {  "gridColor": "#FFFFFF",
      "gridAlpha": 0.2,
      "dashLength": 0
    } ],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [ {
      "balloonText": "[[category]]: <b>[[value]]</b>",
      "fillAlphas": 0.8,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "Valor"
    } ],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "Fecha",
    "categoryAxis": {
      "gridPosition": "start",
      "gridAlpha": 0,
      "tickPosition": "start",
      "tickLength": 20
    },
    "export": {
      "enabled": true
    }
  
  } );

  for (var prop in dataTmc) {
    dataTmc[prop].Valor = parseFloat(dataTmc[prop].Valor);
  }

  console.log("----"+dataTmc)
  var chart3 = AmCharts.makeChart( "tmcDiv", {
    "type": "serial",
    "theme": "light",
    "titles": [{
        "text": "Detalle TMC."
      }],
    "dataProvider": dataTmc,
    "valueAxes": [ {  "gridColor": "#FFFFFF",
      "gridAlpha": 0.2,
      "dashLength": 0
    } ],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [ {
      "balloonText": "[[category]]: <b>[[value]]</b>",
      "fillAlphas": 0.8,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "Valor"
    } ],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "Fecha",
    "categoryAxis": {
      "gridPosition": "start",
      "gridAlpha": 0,
      "tickPosition": "start",
      "tickLength": 20
    },
    "export": {
      "enabled": true
    }
  
  } );

chart.write ("chartdiv");
chart2.write ("dolardiv");
chart3.write ("tmcDiv");
    