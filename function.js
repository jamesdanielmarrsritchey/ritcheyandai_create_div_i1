function createDiv(divId, divClass, parentId) {
    // Create a new div
    var newDiv = document.createElement("div");

    // Set the div's id and class
    newDiv.id = divId;
    newDiv.className = divClass;

    // Find the parent element
    var parentElement = document.getElementById(parentId);

    // Append the new div to the parent element
    if (parentElement) {
        parentElement.appendChild(newDiv);
    } else {
        console.log(`Parent element with id ${parentId} not found.`);
    }
}

/*
Example:

window.onload = function() {
    createDiv("myDiv", "myClass", "myParent");
};

OnClick Example: 

document.getElementById("myButton").onclick = function() {
    createDiv("myDiv", "myClass", "myParent");
};
*/