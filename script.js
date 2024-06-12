const input = document.getElementById("text");
const add = document.querySelector(".add");
const notes = document.querySelector(".notes");

add.addEventListener('click', function () {

    if (input.value == "") {
        alert("Enter Task First!");
    }
    else {

        const p = document.createElement('p');
        const span = document.createElement('span');
        span.innerHTML = "&#10006;";
        p.appendChild(span);
        p.appendChild(document.createTextNode(input.value));
        notes.appendChild(p);
        span.addEventListener('click', function () {
            p.remove();
        });
        input.value = "";
    }
});

