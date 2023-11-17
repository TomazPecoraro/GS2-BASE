import Link from "next/link";
import  styles from './cabecalho.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <nav>
        <div class={styles.cabecalho}>
          <h1 class={styles.bikecheck}>
            NOME
          </h1>
          <div className={styles.botao}>
            <Link href="../../pages/doencas/doencaspage.jsx">Doenças de Pele</Link>
          </div>
          <div className={styles.botao}>
            <Link href="../../pages/doencas/doencaspage.jsx">Formulário</Link>
          </div>
          <div className={styles.botao}>
            <Link href="../../pages/doencas/doencaspage.jsx">Membros</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}