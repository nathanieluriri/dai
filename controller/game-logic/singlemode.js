    // Get all the buttons with the class "myButton"
    var nbuttons = document.getElementsByClassName('numbers');

    // Store the button contents in an array
    var buttonContents = [];

    // Add click event listeners to the buttons
    for (var i = 0; i < nbuttons.length; i++) {
        nbuttons[i].addEventListener('click', function(event) {
        // Get the content of the clicked button
        var buttonContent = event.target.textContent;
        alert(`im here`)
        // Store the button content in the array
        buttonContents.push(buttonContent);

        // Display the updated array
        console.log('Button contents=:', buttonContents);
      });
    }