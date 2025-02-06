fetch("https://icanhazdadjoke.com", {
    headers: {
        "Accept": "application/json"
    }
})
    .then(response => response.json())
    .then(data => {
        let root = document.querySelector("#root")

        let joke = document.createElement("p")
        joke.textContent = data.joke

        root.append(joke)
    })