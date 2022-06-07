var naver_id_login = new naver_id_login("xneNfIal5CkgtXiMRHOo", "http://localhost:80/index");
var nickname;
function naverSignInCallback()
{
    //console.log(naver_id_login.getProfileData('id'));
    //console.log(naver_id_login.getProfileData('email'));
    document.getElementById("naverIdLogin_nickname").textContent = naver_id_login.getProfileData('nickname') + "님";
    //console.log(naver_id_login.getProfileData('name'));
 }

naver_id_login.get_naver_userprofile("naverSignInCallback()");

function setLoginStatus(){
        console.log('t');
        sessionStorage.clear();
	    location.replace("http://127.0.0.1:80/");
}
