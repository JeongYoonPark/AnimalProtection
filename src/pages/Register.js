import "../css/Register.scss";
import Logo from "./../assets/img/Logo.png"
import { Link } from 'react-router-dom';

function Register(){
    return(
        <div className="Register">
            <div className="registerBox">
                <Link to="/">
                    <img className="logo" src={Logo}/>
                </Link>
                <p>회원가입</p>
                <div className="formArea">
                    <p>
                        이름<input type="text" />
                    </p>
                    <p>
                        아이디<input type="text" />
                    </p>
                    <p>
                        비밀번호<input type="password" />
                    </p>
                    <p>
                        비밀번호 확인<input type="password" />
                    </p>
                    <p>
                        전화번호
                        <p className="phoneNumberBox">
                            <input type="number" className="phoneNumber"/>
                            <span>-</span>
                            <input type="number" className="phoneNumber"/>
                            <span>-</span>
                            <input type="number" className="phoneNumber"/>
                        </p>
                        
                    </p>
                    <p>
                        주소<input type="text" />
                    </p>
                    <div className="registerBtn">회원가입</div>
                </div>
            </div>
        </div>
    )
}

export default Register;