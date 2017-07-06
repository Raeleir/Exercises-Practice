var input = document.getElementById("pokemon-name").value;
var createName = function (name) {
    var div = document.createElement("div");
    div.innerHTML = name;
    document.querySelector("#output").appendChild(div);
}

var getPokemon = function (str) {
    axios.get("http://pokeapi.co/api/v2/pokemon/" + str).then(function (response) {
        createName(response.data.name);
    }).catch(function (err) {
        console.log(err);
    });
}

getPokemon(str);

//^^^^ WIP ^^^^//

document.getElementById("search").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    var input = document.getElementById("pokemon-name").value;
    if (typeof (input) === "string") {
        xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + input.toLowerCase());
    } else {
        xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + input);
    };
    xhr.send();

    xhr.onreadystatechange = function () {
        var DONE = 4;
        var OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                var data = JSON.parse(xhr.responseText);
                if (data.types.length === 2) {
                    document.getElementById("output").innerHTML = "<h1>" + data.name + "</h1>" + "<h4>" + "Type: " + data.types[0].type.name + "/" + data.types[1].type.name + "</h4>" + "<img src='" + data.sprites.front_default + "'>";
                } else {
                    document.getElementById("output").innerHTML = "<h1>" + data.name + "</h1>" + "<h4>" + "Type: " + data.types[0].type.name + "</h4>" + "<img src='" + data.sprites.front_default + "'>";
                }
            } else {
                console.log("Error: " + xhr.status);
            }
        }
    };

});
