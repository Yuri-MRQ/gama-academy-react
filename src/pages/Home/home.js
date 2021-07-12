import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'

// const [ usuario, setUsuario ] = useState('Guilherme')
// [ usuario, setUsuario ] convenção, o segundo sendo a função
// podemos modificar o estado do úsuario livremente
// e.target.value

function Home(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [error, setError] = useState(false);
  function handleSearch() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositorieName = [];
      repositories.map((repository => {
        repositorieName.push(repository.name);
      }))
      localStorage.setItem('repositoriesName', JSON.stringify(repositorieName));
      setError(false);
      history.push('/repositorios');
      // 
    })
    .catch(err => {
      setError(true)
    })
  }
  return (
    <S.HomeContainer>
      <S.content>
      {/* controled componets =  o input, assim que entrado muda o state e o valor
      do input busca no state a modificação por isso passamos value={useState}*/}
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={ e => setUsuario(e.target.value)}/>
      <S.Button type='button' onClick={handleSearch}>Pesqusiar</S.Button>
      </S.content>
      { error ? <S.ErrorMsg>Ocorreu um erro tente novamente.</S.ErrorMsg>: ''}
     
    </S.HomeContainer>
  );
}

export default Home;

