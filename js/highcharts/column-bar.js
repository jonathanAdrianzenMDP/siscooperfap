Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Reporte de Accidentes'
    },
    subtitle: {
        text: 'Source: ' +
            'SISFAP - Módulo de Prevención de Accidentes FAP  <br> '+
            '15/11/2022 22:17'
    },
    xAxis: {
        categories: [
            'EMGRA',
            'INSPE',
            'SECRE',
            'COMOP',
            'DIGED',
            'ESOFA',
            'DIPAC',
            'DISAN',
            'SEING'
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Cantidad'
        }
    },
    
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Accidentes',
        data: [5, 6, 9, 2, 10, 11, 4,
            3, 2]

    }]
});