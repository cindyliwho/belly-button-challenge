let ratings = ['G', 'PG', 'PG-13', 'R'];

// Metric variable for function inputs
let metric = "length";
// let metric = "rental_rate";
// let metric = "replacement_cost";

// Function to calculate and plot the average of a metric by rating
function plotMetric(films, ratings, metric) {
  // Initialize an array to hold metric averages
  let metricArray = [];

  // Loop through the array of ratings
  for (let i =0; i < ratings.length; i++) {
    // Store the rating at index `i` for evaluation
    rating = ratings[i];

    // Initialize variables to increment
    let count = 0;
    let total = 0;

    // Loop through the array of films
    for (let j = 0; j < films.length; j++) {
      // Store the film at index `j` for evaluation
      row = films[j];

      // Compare `rating` value to `rating` provided as argument
      if (row.rating == rating){

        // Increment by `metric` argument value
        total += row[metric];
        // Increment by one
        count += 1;
      }
    }
    // Calculate the average value
    let meanValue = total / count;

    // Append the average value to the  `metricArray`
    metricArray.push(meanValue);
  }
  
  // Assign `ratings` array argument to `x`
  // Assign the `metricArray` with averages for each rating to `y`
  let trace1 = {
    x: ratings,
    y: metricArray,
    type: "bar"
  }

  let data = [trace1];

  // Pass metric to chart title
  let layout = {
    title: `Pagila Rental Films Average ${metric}`
  };

  Plotly.newPlot("plot", data, layout);
}

// Invoke the plotting function
plotMetric(films, ratings, metric);