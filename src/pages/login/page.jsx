import '../../app/globals.css'
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import Login from '../../components/login/login'

export default function PGLogin() {
    return (
    <div>
        <header>
            <Header/>
        </header>
    <section>
        <Login/>
    </section>
        <footer>
            <Rodape/>
        </footer>
    </div>
    )
}
