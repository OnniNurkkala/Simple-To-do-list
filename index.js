function addToList() {
    var inputText = document.getElementById("todotext").value;
    if (inputText.trim() !== "") {
        // Create a list
        var list = document.getElementById("todolist");
        // Create a list item
        var listItem = document.createElement("li");

        // Add text to the list item
        var listText = document.createTextNode(inputText)
        listItem.appendChild(listText)

        // Add mark as done checkbox  to the list item
        var markCheckbox = document.createElement("input");
        markCheckbox.type = "checkbox";
        listItem.appendChild(markCheckbox)

        // Add remove button to the list item
        var removeButton = document.createElement("button")
        removeButton.appendChild(document.createTextNode("Remove"));
        removeButton.onclick = function() {
            removeFromList(listItem);
        };
        listItem.appendChild(removeButton)

        var priorityDropdown = document.getElementById("prioritymenu");
        var priority = priorityDropdown.value;
        listItem.setAttribute("data-priority", priority);

        // Set background color based on the selected value
        if (priority === '3') {
            listItem.style.backgroundColor = 'red';
        } else if (priority === '2') {
            listItem.style.backgroundColor = 'yellow';
        } else if (priority === '1') {
            listItem.style.backgroundColor = 'green';
        }

        //Add the list item to the list
        list.appendChild(listItem);

        //Clear out the list
        inputText = document.getElementById("todotext").value ="";
    } else alert("Please enter a value before adding to the list.");
}

function sortList() {
    var list = document.getElementById("todolist");
    var listItems = Array.from(list.children);

    // Custom sorting function based on data-priority attribute
    listItems.sort(function (a, b) {
        var priorityA = parseInt(a.getAttribute("data-priority"));
        var priorityB = parseInt(b.getAttribute("data-priority"));

        return priorityB - priorityA;
    });

    // Clear the current list
    list.innerHTML = "";

    // Append the sorted list items back to the list
    listItems.forEach(function (item) {
        list.appendChild(item);
    });
}


function removeFromList(listItem) {
    var list = document.getElementById("todolist");
    list.removeChild(listItem);
}



