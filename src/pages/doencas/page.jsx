import '../../app/globals.css'
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import Doencas from '../../components/doencas/doencas'

export default function DoencasPele() {
    return (
    <div>
        <header>
            <Header/>
        </header>
        <section>
            <Doencas/>
        </section>
        <footer>
            <Rodape/>
        </footer>
    </div>
    )
}
