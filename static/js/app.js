// URL to your JSON data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
//let samples; 
function init() {
    // Fetch the JSON data and initialize the page
    let dropdown = d3.select("#selDataset");
    d3.json(url).then((data) => {
        for (let i = 0; i < data.names.length; i++){
            dropdown.append("option").text(data.names[i]).property("value", data.names[i]);
        };
        let sampleName = data.names[0];

        createHorizontalBarChart(sampleName);
        createBubbleChart(sampleName);
        displayMetadata(sampleName);
    });
};

function createHorizontalBarChart(sample) {
    d3.json(url).then((data) => {
        const sampleInfo = data.samples;
        const selectedSample = sampleInfo.find(result => result.id === sample);

        const otu_ids = selectedSample.otu_ids;
        const otu_labels = selectedSample.otu_labels;
        const sample_values = selectedSample.sample_values;

        const yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
        const xticks = sample_values.slice(0, 10).reverse();
        const labels = otu_labels.slice(0, 10).reverse();

        const trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        const layout = {
            title: "Top 10 OTUs Present"
        };

        Plotly.newPlot("bar", [trace], layout);
    });
}

function createBubbleChart(sample) {
  d3.json(url).then((data) => {
    // Fetch sample data
    const sampleInfo = data.samples;
    const selectedSample = sampleInfo.find(result => result.id === sample);

    const otu_ids = selectedSample.otu_ids;
    const otu_labels = selectedSample.otu_labels;
    const sample_values = selectedSample.sample_values;

    console.log(otu_ids, otu_labels, sample_values);

    const trace1 = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    };

    const layout = {
      title: "Bacteria Per Sample",
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
    };

    Plotly.newPlot("bubble", [trace1], layout);
  });
}

// Function to display metadata
function displayMetadata(sample) {
  // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {

        let metadata = data.metadata;
        let value = metadata.filter(result => result.id == sample);

        let valueData = value[0];

        d3.select("#sample-metadata").html("");

        Object.entries(valueData).forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
}


// Function to handle dropdown change
function optionChanged(selectedValue) {
    createHorizontalBarChart(selectedValue);
    createBubbleChart(selectedValue);
    displayMetadata(selectedValue);
}

init();