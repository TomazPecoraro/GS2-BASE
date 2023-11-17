import  styles from './incio.module.css';
import Image from 'next/image';

export default function Inicio() {
    return (
    <main className={styles.bghome}>
        <section className={styles.home1}>
            <div>
                <h1 className= {styles.titulobemvindo}>
                    Bem vindo ao Nome!
                </h1>
                <p className={styles.p}>
                Descubra a revolução no cuidado com a
                pele com o NOME, sua solução completa
                para triagem e diagnóstico simplificado de
                problemas de pele. Sabemos que a saúde da
                sua pele é fundamental para o seu bem-estar,
                e é por isso que projetamos uma plataforma
                inovadora que coloca o poder da triagem e
                do diagnóstico nas suas mãos.
                </p>
            </div>
            <div>
                <Image src="/02.png" width={324}height={310} className= {styles.imagem}/>
            </div>
        </section>
    </main>
    )
}