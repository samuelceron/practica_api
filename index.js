var arr;
fetch('https://swapi.co/api/people/1')
  .then(data => data.json()) 
  .then(data => {
    console.log(data.films.map(element =>
    element.split('/')[data.films.length]
    ))
    })

// .then(function(data) {
//     let films = data.results; // Get the results
//     return films.map(function(films) { // Map through the results and for each run the code below
//       let li = createNode('li'), //  Create the elements we need
//           img = createNode('img'),
//           span = createNode('span');
//       img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
//       span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
//       append(li, img); // Append all our elements
//       append(li, span);
//       append(ul, li);
//     })
//   })
  .catch(function(error) {
    console.log('Error');
  });  
