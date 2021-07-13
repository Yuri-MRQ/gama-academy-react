import React, { useEffect, useState } from 'react';
import * as S from './syled';
import { useHistory } from 'react-router';


export default function Repositories() {
    const [repositories, setRepositories] = useState([])
    const history = useHistory()
    useEffect(() => {
        let repositorieName = localStorage.getItem('repositoriesName')
        if(repositorieName !== null){
            setRepositories(JSON.parse(repositorieName))
            localStorage.clear();
        }else{
            history.push('/')
        }
        
    }, [history]);
    
    
    return(
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.list>
                    { repositories.map(repository => {
                        return (
                            <S.listItem>Repositório: { repository }</S.listItem>
                        )
                    })}
            </S.list>
            <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
        
    )
}
