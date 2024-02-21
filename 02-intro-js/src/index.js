const apiKey = 'QJfLOVkw8vjubzIdXyxCZmUVHmtB4RPF',
    url = 'api.giphy.com/v1/gifs/random',
    request = fetch(`http://${url}?api_key=${apiKey}`);

const getImgPromise = async () => {
    return request;
}

console.log(getImgPromise());