const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Promise Pending
const dataPromise = d3.json(url)
console.log("Data Promise: ", dataPromise);

let jsonData;
// Fetch the JSON data and console log it
d3.json(url).then(function (data) {
    jsonData = data;
    console.log("Data loaded:", jsonData);

    const sampleValues = data.samples;
    const names = data.names;
    //const metadata = data.metadata;

    //const otuIds = sampleValues.otuIds;

    //console.log("samples loaded:", sampleValues);
    //console.log("OTU ID loaded:", otuIds);
    console.log("names loaded:", names);

    function populateDropdown() {
        const dropdown = d3.select("#selDataset");
    
        dropdown.selectAll("option")
            .data(names)
            .enter()
            .append("option")
            .attr("value", d => d)
            .text(d => d);
    }
    
    populateDropdown();

    // document.addEventListener("DOMContentLoaded", function () {
    //     function populateDropdown() {
    //         const dropdown = d3.select("#selDataset");
    //         dropdown.selectAll("option")
    //             .data(names)
    //             .enter()
    //             .append("option")
    //             .text(d => d);
    //     }
    //     populateDropdown();
    // })
});


