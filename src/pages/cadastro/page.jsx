import '../../app/globals.css'
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import Cadastro from '../../components/cadastro/cadastro'

export default function PGCadastro() {
    return (
    <div>
        <header>
            <Header/>
        </header>
    <section>
        <Cadastro/>
    </section>
        <footer>
            <Rodape/>
        </footer>
    </div>
    )
}
