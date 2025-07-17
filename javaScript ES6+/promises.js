console.log("This is the start of the code!!!!!!!");


const Promise_git_api_data = new Promise((resolve, reject) => {
    setTimeout(function(){
        const api_data = fetch('https://dummyjson.com/posts')
        
        resolve(api_data);

        console.log("The api is running !!!!!!!!!!!!");
        
        
    }, 2000)
});

Promise_git_api_data
    .then((result)=> result.json())
    .then((data)=>console.log(data))
    .catch((Error) => (Error))
    .finally(()=>("promise execution is done!!"))


console.log("This is the end of the code!!!!");
