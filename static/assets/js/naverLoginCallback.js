function setLoginStatus(){
        sessionStorage.clear();
	location.href = "http://plan.is119.kr:7777/logout";
}

var str = JSON.parse(decodeURIComponent(window.location.search.replace(/\+/g,'')).replace(/\'/g,'"').slice(14));
console.log(str)

var nickname  = str.response.email.split('@');
nickname = nickname[0];

document.getElementById("naverIdLogin_nickname").innerHTML = nickname + '님';
