import '../../app/globals.css'
import Image from 'next/image';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import styles from './membros.module.css'

export default function membros() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <h2>Nosso time</h2>
        <h3>Conheça os participante da equipe</h3>
        <section className={styles.membros}>
          <article>
            <Image src="/03.png" width={306}height={306}/>
            <h4 className={styles.fundobranco}>Alexandre Portugal do Nascimento</h4>
            <p>RM - 551737</p>
          </article>
          <article>
              <Image src="/04.png" width={306}height={306}/>
              <h4 className={styles.fundobranco}>Felipe Sieiro Paim dos Santos</h4>
              <p>RM - 98249</p>
          </article>
          <article>
              <Image src="/05.png" width={306}height={306}/>
              <h4 className={styles.fundobranco}>Jonathan Matus Souza de Moraes</h4>
              <p>RM - 551643</p>
          </article>
          <article>
              <Image src="/06.png" width={306}height={306}/>
              <h4 className={styles.fundobranco}>Tomaz de Oliveira Pecoraro</h4>
              <p>RM - 98499</p>
          </article>
        </section>
      </main>
      <footer>
        <Rodape/>
      </footer>
    </div>
  );
};