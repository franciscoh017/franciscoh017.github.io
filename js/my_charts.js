var barChartData = {
    labels: ['Menor de 18', '18-25', '26-35', '36-45', '46-55', 'Mayor de 56'],
    datasets: [{
        label: 'Masculino',
        backgroundColor:
            '#2196F3',
        yAxisID: 'y-axis-1',
        data: [
            1,
            3,
            2,
            14,
            20,
            13,
            15
        ]
    }, {
        label: 'Femenino',
        backgroundColor: '#EC407A',
        yAxisID: 'y-axis-2',
        data: [
            3,
            4,
            1,
            2,
            3,
            20,
            12
        ]
    }]

};
var cantPorProvincia = [
    1,
    3,
    2,
    14,
    20,
    13,
    15,
    0,
    0,
    0,
    0
];
var barChartData2 = {
    labels: ['Peravia', 'Monte Plata', 'Santo Domingo', 'San Juan', 'San Cristobal', 'San Jose de Ocoa', 'Santiago', 'Monseñor Nouel', 'Barahona', 'Dajabon', 'Duarte'],
    datasets: [{
        label: 'Cantidad',
        data: cantPorProvincia,
        backgroundColor: palette('tol-rainbow', cantPorProvincia.length).map(function (hex) {
            return '#' + hex;
        }),
    }]
};

pieChartData = {
    datasets: [{
        data: [324, 50],
        backgroundColor:
            [
                '#4CAF50',
                '#FFEE58'
            ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Miembro',
        'No Miembro'
    ]
};

window.onload = function () {
    var ctx = document.getElementById("cantPorEdad");
    var ctx2 = document.getElementById("cantPorTipo");
    var ctx3 = document.getElementById("cantPorProvincia");
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            aspectRatio: 1.5,
            responsive: true,
            title: {
                display: true,
                text: 'Cantidad por Sexo y Edad'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes:
                    [{

                        ticks: { autoSkip: true },
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        ticks: { autoSkip: true },
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }],
            }
        }
    });

    var myPieChart = new Chart(ctx2, {
        type: 'pie',
        data: pieChartData,
        options: {

        }
    });

    window.myBar2 = new Chart(ctx3, {
        type: 'bar',
        data: barChartData2,
        options: {
            responsive: true
        }
    });
};


