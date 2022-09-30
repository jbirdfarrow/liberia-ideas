const dataSource = {
  "chart": {
    "caption": "Participation in Liberia by County",
    "subcaption": "according to IREX sign up sheets",
    "plottooltext": "$label had <b>$dataValue</b> participants $seriesName",
    "theme": "fusion"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Bong"
        },
        {
          "label": "Bomi"
        },
        {
          "label": "Margibi"
        },
        {
          "label": "Montserrado"
        },
        {
          "label": "Grand Cape Mount"
        },
        {
          "label": "Grand Bassa"
        },
        {
          "label": "Nimba"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "HIVE",
      "data": [
        {
          "value": "185"
        },
        {
          "value": "210"
        },
        {
          "value": "270"
        },
        {
          "value": "255"
        },
        {
          "value": "242"
        },
        {
          "value": "255"
        },
        {
          "value": "242"
        }
      ]
    },
    {
      "seriesname": "HIVE",
      "data": [
        {
          "value": "185"
        },
        {
          "value": "210"
        },
        {
          "value": "270"
        },
        {
          "value": "255"
        },
        {
          "value": "242"
        },
        {
          "value": "255"
        },
        {
          "value": "242"
        }
      ]
    }
  ]
};

FusionCharts.ready(function() {
   var myChart = new FusionCharts({
      type: "msbar3d",
      renderAt: "chart-container",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
   }).render();
});