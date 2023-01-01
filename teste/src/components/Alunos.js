import React from 'react';

class Alunos extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            alunos : []
        }
    }

    componentDidMount(){
        this.buscarAluno();
    }

    componentWillUnmount(){

    }

    buscarAluno(){
        fetch("mongodb+srv://thiagobrotther:<piano2023>@documento.grgrx3t.mongodb.net/?retryWrites=true&w=majority")
        .then(resposta => resposta.bson())
        .then(dados => {
            this.setState({ alunos : dados })
        })
    }

    render(){
        return(
            <div>

                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Matrícula</th>
                            <th>Nome</th>
                            <th>Contato</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {
                        this.state.alunos.map((aluno) =>
                        <tr>
                            <td>{aluno.matrícula}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.contato}</td>
                            <td>Atualizar Exlcuir</td>
                        </tr>
                        )
                    }
                    

                </tbody>
                </table>
                

                </div>            
            
        );
    };
}


export default Alunos;