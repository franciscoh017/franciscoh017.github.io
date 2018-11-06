var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

var barChartData = {
    labels: ['< 18', '18-25', '26-35', '36-45', '46-55', '> 56'],
    datasets: [{
        label: 'Masculino',
        backgroundColor:
            '#2196F3',
        yAxisID: 'y-axis-1',
        borderColor: '#777',
        borderWidth: 1,
        hoverBorderColor: '#222',
        hoverBorderWidth: 2,
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
        borderColor: '#777',
        borderWidth: 1,
        hoverBorderColor: '#222',
        hoverBorderWidth: 2,
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
        borderColor: '#777',
        borderWidth: 1,
        hoverBorderColor: '#222',
        hoverBorderWidth: 2 
    }]
};

pieChartData = {
    datasets: [{
        data: [324, 50],
        backgroundColor:
            [
                '#4CAF50',
                '#FFEE58'
            ],
        borderColor: '#777',
        borderWidth: 1,
        hoverBorderColor: '#222',
        hoverBorderWidth: 2
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Miembro',
        'No Miembro'
    ]
};

let ctx = document.getElementById("cantPorEdad");
let ctx2 = document.getElementById("cantPorTipo");
let ctx3 = document.getElementById("cantPorProvincia");

let edadChart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
        // Boolean - whether or not the chart should be responsive and resize when the browser does.

        responsive: true,

        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

        maintainAspectRatio: true,
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

let tipoChart = new Chart(ctx2, {
    type: 'doughnut',
    data: pieChartData,
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});

let provinciaChart = new Chart(ctx3, {
    type: 'bar',
    data: barChartData2,
    options: {
        responsive: true
    }
});


