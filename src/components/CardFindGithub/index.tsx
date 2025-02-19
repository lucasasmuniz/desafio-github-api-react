import './styles.css';

export default function CardFindGithub() {
    return (
      <>
          <div className="card-find-github">
            <h2>Encontre um perfil Github</h2>
            <form className="form-find-github">
                <input type="text" placeholder='Usuário Github'/>
                <button type="submit" className="btn-blue">Encontrar</button>
            </form>
          </div>
      </>
    );
  }