import './styles.css';
import BtnBlue from "../../../components/BtnBlue";

export default function HomeBody(){
    return(
        <main className="mt-27">
            <section>
                <h1 className="title">Desafio Github API</h1>
                <h2 className="sub-title mb-27">DevSuperior - Escola de programação</h2>
                <BtnBlue btnName="Começar"/>
            </section>
        </main>
    );
}