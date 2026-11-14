//fetch is also a browser provided 

// const data = fetch("https://jsonplaceholder.typicode.com/posts/1");


async function getRecentPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    // convert the response to json format and store it in the data variable
    const data = await res.json();

    console.log(data);


    document.querySelector(".posts").innerHTML = data.body;

}

getRecentPosts();
