'use strict'

let retrievedProducts = localStorage.getItem('myProducts');

console.log(retrievedProducts);

let parsedProducts = JSON.parse(retrievedProducts);

let canvasElem = document.getElementById('chart');

function renderChart() {
    // TODO: BUILD out my chart OBJ
    let productNames = [];
    let productVotes = [];
    let productViews = [];

    for (let i = 0; i < parsedProducts.length; i++){
        productNames.push(parsedProducts[i].name);
        productVotes.push(parsedProducts[i].votes);
        productViews.push(parsedProducts[i].views);
    }

    Chart.defaults.font.size = 20;
    Chart.defaults.font.weight = 'bold';

    let chartObj = {
        type: 'bar',
        data: {
            labels: productNames,
            datasets: [{
                label: '# of Votes',
                data: productVotes,
                backgroundColor: [
                    '#ff7300',
                    '#fffb00',
                    '#48ff00',
                    '#00ffd5',
                    '#002bff',
                    '#7a00ff',
                    '#ff00c8',
                    '#ff0000'
                ],
                borderColor: [
                    '#ff7300',
                    '#fffb00',
                    '#48ff00',
                    '#00ffd5',
                    '#002bff',
                    '#7a00ff',
                    '#ff00c8',
                    '#ff0000'
                ],
                borderWidth: 1
            },
            {
                label: '# of Views',
                data: productViews,
                backgroundColor: [
                    '#ff0000',
                    '#ff7300',
                    '#fffb00',
                    '#48ff00',
                    '#00ffd5',
                    '#002bff',
                    '#7a00ff',
                    '#ff00c8',
                    '#ff0000'
                ],
                borderColor: [
                    '#ff0000',
                    '#ff7300',
                    '#fffb00',
                    '#48ff00',
                    '#00ffd5',
                    '#002bff',
                    '#7a00ff',
                    '#ff00c8',
                    '#ff0000'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: 'white' },
                },
                x: {
                    ticks: { color: 'white' }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        padding: 30,
                        font: {
                            size: 16
                        }
                    },
                }
            }
        },
    };

    // TODO: use the chart Constructor - pass in canvas elem and my chartObj with all the product data
    new Chart(canvasElem, chartObj);
}

if(retrievedProducts){
    renderChart();
}