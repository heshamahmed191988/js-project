// Create a HTML document object
var doc = document.implementation.createHTMLDocument("My Page");

// Set the background color of the document body
doc.body.style.backgroundColor = "#e1dcc5";

// Create a header element
var header = document.createElement("header");

// Set the header style
header.style.height = "50vh"; // half-page height
header.style.display = "flex"; // flex layout
header.style.alignItems = "center"; // center items vertically
header.style.justifyContent = "center"; // center items horizontally
header.style.fontSize = "36px"; // font size
header.style.fontWeight = "bold"; // font weight
header.style.color = "white"; // font color

// Set the header text
header.textContent = "Welcome to My Page";

// Append the header to the document body
doc.body.appendChild(header);

// Create a div element for the images
var imagesDiv = doc.createElement("div");

// Set the div style
imagesDiv.style.display = "flex"; // flex layout
imagesDiv.style.alignItems = "center"; // center items vertically
imagesDiv.style.justifyContent = "space-around"; // space items evenly

// Create two image elements
var image1 = doc.createElement("img");
var image2 = doc.createElement("img");

// Set the image sources
image1.src ="https://www.mobtada.com/resize?src=uploads/images/2016/12/378096.jpg&w=750&h=450&zc=0&q=70",alt="pictures of history";
image2.src = "https://th.bing.com/th/id/OIP.7g4pk_grhluPxKoEOTdZWAHaE8?pid=ImgDet&rs=1",alt="pictures of it";

// Set the image widths
image1.width = 500;
image2.width = 500;

// Append the images to the div
imagesDiv.appendChild(image1);
imagesDiv.appendChild(image2);


// Append the div to the document body
doc.body.appendChild(imagesDiv);

function goToPage() {
  window.location = "page 2.html";
}

 // Create a button element
// var button = document.createElement("button");

// Set the button style
// button.style.display = "block"; // block layout
// button.style.margin = "auto"; // center the button horizontally
// button.style.padding = "10px 20px"; // add some padding
// button.style.fontSize = "24px"; // font size
// button.style.fontWeight = "bold"; // font weight

// // Set the button text
// button.textContent = "login";

// // Set the button onclick function
// button.onclick = function() {
//   // Open another page in a new tab or window
//   window.open.href("", "_blank");
// }; 




// // Append the button to the document body
// doc.body.appendChild(button);




// Write the document to the current window
document.write(doc.documentElement.outerHTML);
