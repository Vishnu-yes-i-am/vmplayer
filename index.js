document.getElementById("search_song_button").addEventListener("click", () => {
    var text = document.getElementById("search_song").value;
    console.log(text);
    fetch('https://vmplayer.herokuapp.com/search', {
        method: 'POST',
        body: JSON.stringify({
            text: text,

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            data.map((el) => {
                const element = document.createElement("li");
                element.classList.add("list-group-item");
                element.innerHTML = el.data.name;
                const id = el.data.id;
                console.log(id);
                element.addEventListener('click', () => {
                    document.getElementById("src1").setAttribute("src", "https://open.spotify.com/embed/track/" + id + "?utm_source=generator");
                    document.getElementById("song_name").innerHTML = el.data.name;
                    document.getElementById("card").style.display = "inherit";
                });
                document.getElementById("search_results").appendChild(element);
                console.log(el);
            })
        }).catch(error => console.error('Error:', error));

});

