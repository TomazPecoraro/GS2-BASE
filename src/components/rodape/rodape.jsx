import  styles from './rodape.module.css';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
          <div>
            <h2 class={styles.bikecheckrodape}>
              NOME
            </h2>
            <p>&copy; Todos os direitos reservados - 2023</p>
          </div>
        </footer>
    );
  }