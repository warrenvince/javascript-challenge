// from data.js
var tableData = data;
var tbody = d3.select("tbody");

let button = d3.select("#filter-btn");
let input = d3.select("#datetime");

//populate table based on data available
data.forEach((report) => {
    //console.log(report);
    let row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        //console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    });
});


function clickHandler() {
    console.log("A button has been clicked!");
    console.log(d3.event.target);
    let newText = input.property("value");
    console.log(newText);
    tbody.html('');
    let selectSightings = tableData => tableData.datetime == newText;
    let filteredSightings = tableData.filter(selectSightings);
    console.log(selectSightings);
    console.log(filteredSightings);
    filteredSightings.forEach((report) => {
        console.log(report);
        let row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            //console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });
    //console.log(youngerSimpsons);
    }
function inputHandler() {
    let newText = d3.event.target.value;
    console.log(newText);
}
button.on('click', clickHandler);
//input.on('change', inputHandler);

// YOUR CODE HERE!
