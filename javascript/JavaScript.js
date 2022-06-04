
const btn = document.getElementById("submit");
const result = document.getElementById("result");
const content = document.getElementById("content");

btn.addEventListener("click", function (event) {
    //console.log(vale);
    //console.log(eval(result.value));
    let http = new XMLHttpRequest();
    
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            console.log('Response from the server: ' + http.response);
            const rt = JSON.parse(http.response);
            
            let arr = [];
            for (let i = 0; i < 8; i++)
            {
                
                arr.push(rt['results'][i]);
                arr[i] = arr[i]['media'];
                arr[i] = arr[i][0]['gif'];
                arr[i] = arr[i]['url'];
                content.innerHTML += "<div class=" + 'col-md-3' + "><img src=" + arr[i] + " class=" + 'imgx' + " /></div>";
                
            }
            
            console.log(rt);
            console.log(arr);
        }
    };
   
    http.open("GET", "https://api.tenor.com/v1/search?q=" + result.value +"&key=LIVDSRZULELA&limit=8", true);
    http.send(); 
    
  
});
//method 2
function ajax(url, data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.status >= 200 && xhr.staus < 400) {
                if (xhr.readyState === 4) {
                    resolve(xhr.responseText);
                }
            } else {
                reject();
            }
        }

        xhr.open(data ? 'post' : 'get', url, true);
        xhr.send(data);

    });
}

