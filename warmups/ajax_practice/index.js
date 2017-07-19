document.querySelector("#search").addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
       search(e.target.value);
    }
});

let search = (input) => {
    axios.get(`http://swapi.co/api/people/${input}`).then((response) => {
        document.querySelector("#name").innerHTML = response.data.name;
        document.querySelector("#eye").innerHTML = response.data.eye_color;
        document.querySelector("#gender").innerHTML = response.data.gender;
    })
}

