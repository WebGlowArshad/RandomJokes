
const apibody = document.querySelector('.api-body')
const apiurl = "https://icanhazdadjoke.com/"
// const apiurl = "https://jsonplaceholder.typicode.com/posts/1"
const fetchdata = () => {
    const response = fetch(apiurl, {
        headers: {
            Accept: "application/json",
        }
    })
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then((data) => {
            console.log(data.joke);
            apibody.innerHTML = data.joke

        })
        .catch((error) => {
            console.log(error);

        })

}

document.getElementById('fetchjoke').addEventListener('click', fetchdata)
