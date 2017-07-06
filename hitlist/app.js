axios.get("http://api.vschool.io:6543/hitlist.json").then(function (response) {
    for (i = 0; i < response.data.length; i++) {
        var background = 'style="background: url(' + "'" + response.data[i].image + "'" + '); background-size: cover; background-position: center; background-repeat: none;">';
        document.querySelector(".list").innerHTML += "<div class='col-md-4'>" + "<div class='pic' " + background + "<div>" + response.data[i].name + "</div>" + "</div>" + "</div>";
    };
}).catch(function (err) {
    console.log(err);
});
