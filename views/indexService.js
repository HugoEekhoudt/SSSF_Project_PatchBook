const http = new XMLHttpRequest();
const url ='http://localhost:3000/user';
http.open("Get", url);
http.send();
http.onreadystatechange = (error)=> {
    if (http.readyState === 4) {
        document.querySelector('.pNavBar').innerHTML += http.response.username
    }
}