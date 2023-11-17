import Link from "next/link";
import  styles from './cabecalho.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <nav>
        <div class={styles.cabecalho}>
          <h1 class={styles.NOME}>
            <Link href="/">NOME</Link>
          </h1>
          <div className={styles.botao}>
            <Link href="../../pages/doencas/doencaspage">Doenças de Pele</Link>
          </div>
          <div className={styles.botao}>
            <Link href="../../pages/formulario/formulariopage">Formulário</Link>
          </div>
          <div className={styles.botao}>
            <Link href="../../pages/membros/membrospage">Membros</Link>
          </div>
          <div className={styles.botao}>
            <Link href="../../pages/login/loginpage">Login</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}