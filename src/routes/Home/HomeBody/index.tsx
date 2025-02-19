import './styles.css';
import { Link } from 'react-router-dom';

export default function HomeBody(){

    return(
        <main className="mt-27">
            <section>
                <h1 className="title">Desafio Github API</h1>
                <h2 className="sub-title mb-27">DevSuperior - Escola de programação</h2>
                <Link to={"/search"}>
                    <div className='btn-blue'>Começar</div>
                </Link>
            </section>
        </main>
    );
}