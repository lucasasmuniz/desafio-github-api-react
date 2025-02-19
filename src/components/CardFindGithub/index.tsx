/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { GitUser } from '../models/User';

type FormData = {
  userName: string;
};

export default function CardFindGithub() {
  const navitage = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    userName: "",
  });

  function handleUserNameChange(event: any) {
    setFormData({ ...formData, userName: event.target.value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    navitage(`${formData.userName}`);

    // axios.get(`https://api.github.com/users/${formData.userName}`)
    //   .then(response => {
    //     const { name, location, url, avatar_url, followers } = response.data;
    //     const user: GitUser = {
    //       name,
    //       location,
    //       url,
    //       imgUrl: avatar_url,
    //       followers
    //       }
    //       console.log(user)
    //   }

    // )
  }

  return (
    <>
      <div className="card-find-github mb-54">
        <h2>Encontre um perfil Github</h2>
        <form className="form-find-github">
          <input
            onChange={handleUserNameChange}
            name="userName"
            value={formData.userName}
            type="text"
            placeholder="Usuário Github"
          />
          <button onClick={handleFormSubmit} type="submit" className="btn-blue">
            Encontrar
          </button>
        </form>
      </div>
    </>
  );
}
