import './styles.css';

import { useParams } from "react-router-dom";
import CardGitHub from "../../../../components/CardGithub";
import { useEffect, useState } from "react";
import type { GithubUser } from "../../../../components/models/User";
import axios from "axios";

export default function GithubUser() {

  const params = useParams();

  const [gitHubUser, setGitHubUser] = useState<GithubUser>({
    name: "",
    followers: "",
    imgUrl: "",
    location: "",
    url: ""
  })
  const [badRequestValue, setbadRequestValue] = useState(false);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${params.userName}`)
      .then(response => {
        const {data} = response;
        setGitHubUser({
          name: data.name,
          location: data.location,
          url: data.url,
          imgUrl: data.avatar_url,
          followers: data.followers,
        });
        setbadRequestValue(false);
      })
      .catch(() => {
        setbadRequestValue(true);
    })
  })
  
  return badRequestValue ? <h1 className="error-warning">Erro ao buscar usuário</h1> : <CardGitHub user={gitHubUser} />;
}