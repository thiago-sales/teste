import React from 'react';

class Alunos extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            alunos : []
        }
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
                    <tr>
                        <td>01</td>
                        <td>Thiago da Silva Sales</td>
                        <td>(83) 99145-5463</td>
                        <td>Atualizar Exlcuir</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Ávaro da Silva Sales</td>
                        <td>(83) 99371-5460</td>
                        <td>Atualizar Exlcuir</td>
                    </tr>
                </tbody>
                </table>
                

                </div>            
            
        );
    };
}


export default Alunos;