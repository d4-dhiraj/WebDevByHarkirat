
async function getRecentPosts() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

    console.log(res.data);
    const data = res.data;

    document.querySelector(".posts").innerHTML = JSON.stringify(data);

}

getRecentPosts();
