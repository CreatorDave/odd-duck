'use strict';

// ***** GLOBALS *****
let myProducts = [];
let votingRounds = 25;

// ***** DOM WINDOWS *****
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-container');

// ***** CANVAS ELEMENT FOR CHART DEMO *****

let canvasElem = document.getElementById('chart');

// ***** CONSTRUCTOR FUNCTION *****
function Product(name, imgExtension = 'jpg'){
    this.name = name;
    this.img = `img/${name}.${imgExtension}`;
    this.votes = 0;
    this.views = 0;
}

// ***** HELPER FUNCTIONS / UTILITIES *****

function randomIndex(){
    return Math.floor(Math.random() * myProducts.length);
}

function renderImg(){
// TODO: 3 unique images and populate the images
let imgOneIndex = randomIndex();
let imgTwoIndex = randomIndex();
let imgThreeIndex = randomIndex();
// ** Validation to make sure numbers are unique **
while(imgOneIndex === imgTwoIndex || imgTwoIndex === imgThreeIndex || imgOneIndex === imgThreeIndex){
    // TODO: reassign one of the variables
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
}

imgOne.src = myProducts[imgOneIndex].img;
imgTwo.src = myProducts[imgTwoIndex].img;
imgThree.src = myProducts[imgThreeIndex].img;
imgOne.title = myProducts[imgOneIndex].name;
imgTwo.title = myProducts[imgTwoIndex].name;
imgThree.title = myProducts[imgThreeIndex].name;
imgOne.alt = `this is an image of ${myProducts[imgOneIndex].name}`;
imgTwo.alt = `this is an image of ${myProducts[imgTwoIndex].name}`;
imgThree.alt = `this is an image of ${myProducts[imgThreeIndex].name}`;

    // TODO: increase the number of views on the images that have been rendered
myProducts[imgOneIndex].views++;
myProducts[imgTwoIndex].views++;
myProducts[imgThreeIndex].views++;
};


// ***** HELPER FUNCTION TO RENDER CHART *****
function renderChart() {
    // TODO: Build out my chart object
    let productNames = [];
    let productVotes = [];
    let productViews = [];

    for (let i = 0; i < myProducts.length; i++) {
        productNames.push(myProducts[i].name);
        productVotes.push(myProducts[i].votes);
        productViews.push(myProducts[i].views);
    }

    // const ctx = document.getElementById('myChart');

    
    
    let chartObj = {
        type: 'bar',
        data: {
            labels: productNames,
            datasets: [{
                label: '# of Votes',
                data: productVotes,
                borderWidth: 1,
                backgroundColor: 'turquoise'
            },
            {
                label: '# of Views',
                data: productViews,
                borderWidth: 1,
                backgroundColor: 'yellow'
            
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // TODO: use the Chart Constructor - pass in canvas elem, and my chartObj with all the product data
    new Chart(canvasElem, chartObj);
}

//  ***** EVENT HANDLERS *****
function handleClick(event){
    // TODO: Identify what image was clicked on
    let imgClicked = event.target.title;

    console.log(imgClicked);
    // TODO: Increase the number of votes to that specific image
    for(let i = 0; i < myProducts.length; i++){
        if(imgClicked === myProducts[i].name){
            myProducts[i].votes++;
        }
    }
    // TODO: decrement voting rounds
    votingRounds--;
    // TODO: Rerender 3 new images
    renderImg();
    // TODO: once voting rounds have ended - not allow any more clicks
    if(votingRounds === 0){
        imgContainer.removeEventListener('click', handleClick);
    }
}

    function handleShowResults(){
    // TODO: Display the results once there are no more votes
        if(votingRounds === 0){
            // for(let i = 0; i < myProducts.length; i++){
            //     let liElem = document.createElement('li');
            //     liElem.textContent = `${myProducts[i].name} - views: ${myProducts[i].views} & votes: ${myProducts[i].votes}`;
            //     resultsList.appendChild(liElem);
            // }
            // resultsBtn.removeEventListener('click', handleShowResults);
            renderChart();
        }
    };

    // ***** EXECUTABLE CODE *****
    let bag = new Product('bag');
    let banana = new Product('banana');
    let bathroom = new Product('bathroom');
    let boots = new Product('boots');
    let breakfast = new Product('breakfast');
    let bubblegum = new Product('bubblegum');
    let chair = new Product('chair');
    let cthulhu = new Product('cthulhu');
    let dogduck = new Product('dog-duck');
    let dragon = new Product('dragon');
    let pen = new Product('pen');
    let petsweep = new Product('pet-sweep');
    let scissors = new Product('scissors');
    let shark = new Product('shark');
    let sweep = new Product('sweep');
    let tauntaun = new Product('tauntaun');
    let unicorn = new Product('unicorn');
    let watercan = new Product('water-can');
    let wineglass = new Product('wine-glass');

    myProducts.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);


    renderImg();

    imgContainer.addEventListener('click', handleClick);
    resultsBtn.addEventListener('click', handleShowResults);

