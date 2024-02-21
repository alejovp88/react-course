const apiKey = 'QJfLOVkw8vjubzIdXyxCZmUVHmtB4RPF',
    url = 'api.giphy.com/v1/gifs/random',
    request = fetch(`http://${url}?api_key=${apiKey}`);

/*request.then(resp => {
    console.log(resp);
    resp.json().then(data => {
        console.log(data)
    })
})
    .catch(console.warn)*/

request
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } =data.images.original,
            img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch(console.warn)