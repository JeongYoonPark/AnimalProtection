import Logo from "./../assets/img/Logo.png"
import "../css/Login.scss"
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div className="Login">
            <div className="loginBox">
                <Link to="/">
                    <img className="logo" src={Logo}/>
                </Link>
                <p>로그인</p>
                <div className="formArea">
                    <p className="label">아이디</p>
                    <input type="text" />
                    <p className="label">비밀번호</p>
                    <input type="password" />
                    <p>회원이 아니신가요?</p>
                    <p>아이디/비밀번호를 잊어버리셨나요?</p>
                    <div className="loginBtn">로그인</div>
                </div>
            </div>
        </div>
    )
}

export default Login;