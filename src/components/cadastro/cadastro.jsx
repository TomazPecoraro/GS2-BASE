import React, { useState } from "react";
import styles from './cadastro.module.css'
import Link from "next/link";

export default function Login() {

        const [usuario, setUsuario] = useState({
          info: "cadastro",
          email: "",
          senha: ""
        });

        const handleChange = (e) =>{
          const{name, value} = e.target;
          setUsuario({...usuario,[name]:value});
          };

          const handleSubmit = async (e)=>{
            e.preventDefault();

            let user;

            try {
              const response = await fetch("http://localhost:3000/api/base/base-users",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario),
              });

              if(response.ok){
                const data = response.json();

                if(data){
                  alert("LOGIN REALIZADO COM SUCESSO!")
                }else{
                  alert("SENHA E OU USUAÁRIOS INVÁLIDOS!")
                }

              }

          }catch(error){
            console.error(error);
          }
        }
  return (
    <div className={styles.bg}>
        <div className={styles.login}>
        <h1 className={styles.titulologin}>Cadastro</h1>
        <div>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <input className={styles.campos} type="email" name="email" id="idEmail" placeholder="Usuário" value={usuario.email} onChange={handleChange}/>
                </div>
                <div>
                 <input className={styles.campos} type="password" name="senha" id="idSenha" placeholder="Senha" value={usuario.senha} onChange={handleChange}/>
                </div>
                <div>
                    <Link className={styles.linkcadastro} href='../login/page'>Já tenho Login</Link>
                </div>
                <div>
                    <button className={styles.botao}>Cadastrar</button>
                </div>
            </fieldset>
            </form>
        </div>
        </div>
    </div>
  );
}