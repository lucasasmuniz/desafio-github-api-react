import { GithubUser } from "../models/User";
import "./styles.css";

type Props = {
    user: GithubUser;
}


export default function CardGitHub({user}: Props) {

    return (
      <div className="card-github-container mt-54">
        <div className="card-left">
            <img src={user.imgUrl} alt={user.name} />
        </div>
        <div className="card-right">
            <h4>Informações</h4>
            <div className="info-user-container">
                <div className="info-user info-perfil">
                    <p><span>Perfil: </span><a target="_blank" href={user.url}>{user.url}</a></p>
                </div>
                <div className="info-user">
                    <p><span>Seguidores: </span>{user.followers}</p>
                </div>
                <div className="info-user">
                    <p><span>Localidade: </span>{user.location}</p>
                </div>
                <div className="info-user">
                    <p><span>Nome: </span>{user.name}</p>
                </div>
            </div>
        </div>
      </div>
    );
  }