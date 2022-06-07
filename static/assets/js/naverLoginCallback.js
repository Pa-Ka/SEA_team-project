function setLoginStatus(){
        sessionStorage.clear();
	    location.replace("http://127.0.0.1:80/");
}


var str = JSON.parse(decodeURIComponent(window.location.search.replace(/\+/g,'')).replace(/\'/g,'"').slice(14));
console.log(str)

document.getElementById("naverIdLogin_nickname").innerHTML = str.response.nickname + '님';

