import Link from "next/link";
import  styles from './cabecalho.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.cabecalho}>
          <h1 className={styles.NOME}>
            <Link href="/" className = {styles.link}>NOME</Link>
          </h1>
          <div className={styles.botao}>
            <Link href="../../pages/doencas/doencaspage" className = {styles.link}>Doenças de Pele</Link>
          </div>
          <div className={styles.botao}>
            <Link href="../../pages/formulario/formulariopage" className = {styles.link}>Formulário</Link>
          </div>
          <div className={styles.botao}>
            <Link href="../../pages/membros/membrospage" className = {styles.link}>Membros</Link>
          </div>
          <div className={styles.botao}>
            <Link href="../../pages/login/loginpage">Login</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}