const naverLogin = new naver.LoginWithNaverId(
    {
        clientId: "xneNfIal5CkgtXiMRHOo",
        callbackUrl: "http://localhost:80/index",
        callbackHandle: true,
        loginButton: {color: "green", type: 2, height: 40}
    }
);

naverLogin.init();


window.addEventListener('load', function () {
    naverLogin.getLoginStatus(function (status) {
        if (status) {
            var email = naverLogin.user.getEmail(); // 필수로 설정할것을 받아와 아래처럼 조건문을 줍니다.

            console.log(naverLogin.user);

            if( email == undefined || email == null) {
                alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
                naverLogin.reprompt();
                return;
            }
        } else {
            console.log("callback 처리에 실패하였습니다.");
        }
    });
});
