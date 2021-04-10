import '../styles/components/login.css';
import { FaUserAlt } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { Link } from 'react-router-dom'

export function Login() {
    
    const { 
        loginTitle, 
        loginSubTitle, 
        btCriarConta, 
        btLogin, 
        isLogedIn,
        logIn, 
        createAccount,
        email,
        password,
        setEmail,
        setPassword, 
    } = useContext(LoginContext)

    
    
    return (
        
            <div className="body-login">
                
                <div className="container">
                    <div className="content">
                        
                        <div className="left-side">
                            <h2 className="title title-primary">TaskPad</h2>
                            <h3 className="sub-title">Sua plataforma de controle</h3>
                            <p className="description">Uma aplicação bem estruturada </p>
                            <p className="description">para gerenciar de forma</p>           
                            <p className="description">prática seus afazeres</p>
                        </div>

                        <div className="right-side">
                            <h2 className="title title-secondary">{loginTitle}</h2>
                            <p className='sub-title'>{loginSubTitle} <a href="#" onClick={createAccount}>{btCriarConta}</a></p> 
                            <form action="" className="form">
                                <p className="form-p">USUÁRIO</p>
                                    
                                <label className="label-input" htmlFor="">
                                    <FaUserAlt className="icon-modify"/>
                                    <input 
                                        type="text" 
                                        placeholder="Digite seu usuário..."
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                    
                                <p className="form-p">SENHA</p>
                                <label className="label-input" htmlFor="">
                                    <IoKey className="icon-modify"/>
                                    <input 
                                        type="password" 
                                        placeholder="Digite sua senha..."
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </label>
                                
                                <a href="#" className="form-a">Esqueceu sua senha?</a>

                                
                                
                                <Link to="/index" className="btn-link" > 
                                    <button className="btn" onClick= { (e) =>{
                                        logIn()
                                        
                                        }
                                    }>
                                        {btLogin}
                                    </button>
                                </Link>
                                
                                {/* <footer className="login-footer">Copyright - TaskPad ©</footer> */}
                                
                            </form>
                            
                        </div>
                        {/* <footer className="login-footer">Copyright - TaskPad ©</footer> */}
                    </div> 
                </div>
            </div>    
    );
}

