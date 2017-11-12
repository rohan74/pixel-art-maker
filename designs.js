// Select color input
var color = document.querySelector('#colorPicker');

// When size is submitted by the user, call makeGrid()
var form = document.querySelector("#sizePicker");

form.addEventListener('submit', function() {
    //remove table in canvas if it is already present and display the new table of different size 
    var canvas = document.getElementById('pixel_canvas');

    if (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
        event.preventDefault();
    }

    event.preventDefault();
    // Select size input
    var height = document.querySelector('#input_height').value;
    var width = document.querySelector('#input_width').value;
    makeGrid(height, width);

});



function makeGrid(height, width) {

    // create table based on the height and width inputs
    var table = document.querySelector("#pixel_canvas");

    var tblBody = document.createElement("tbody");

    for (var i = 1; i <= height; i++) {
        // create rows
        var row = document.createElement('tr');

        // create coloum and add to row 
        for (var j = 1; j <= width; j++) {
            var col = document.createElement('td');
            //change color on clicking the cell
            col.addEventListener('click', function() {
                this.style.background = color.value;
            });

            row.appendChild(col); // append coloum  to row 
        }

        // add row to end of table body
        tblBody.appendChild(row);
    }
    // append table into body 
    table.appendChild(tblBody);

    table.setAttribute('border', "2");
}
