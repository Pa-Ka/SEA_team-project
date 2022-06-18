function setLoginStatus(){
        sessionStorage.clear();
	    location.replace("http://localhost:80/");
}

var str = JSON.parse(decodeURIComponent(window.location.search.replace(/\+/g,'')).replace(/\'/g,'"').slice(14));
console.log(str)

var nickname  = str.response.email.split('@');
nickname = nickname[0];

document.getElementById("naverIdLogin_nickname").innerHTML = nickname + '님';