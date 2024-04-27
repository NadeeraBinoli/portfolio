var navElement = document.getElementById("nav");

// Add event listener for mouseover event
navElement.addEventListener("mouseover", function(event) {
  // Check if the mouseover event occurred on an <a> element inside <nav>
  if (event.target.tagName.toLowerCase() === "i") {
    // Get all <span> elements inside the <nav> element
    var spans = navElement.querySelectorAll("span");
    // Loop through each <span> element and set display to none
    spans.forEach(function(span) {
      span.style.display = "none";
    });
    // Get the <span> element inside the <a> element being hovered over
    var span = event.target.querySelector("span");
    // Set the display of the <span> element to block
    span.style.display = "block";
  }
});

// Add event listener for mouseout event
navElement.addEventListener("mouseout", function(event) {
  // Check if the mouseout event occurred on an <a> element inside <nav>
  if (event.target.tagName.toLowerCase() === "i") {
    // Get the <span> element inside the <a> element being hovered over
    var span = event.target.querySelector("span");
    // Set the display of the <span> element to none
    span.style.display = "none";
  }
});