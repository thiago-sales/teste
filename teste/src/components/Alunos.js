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
                <h1>Alunos</h1>
                <p>Esta é a página Alunos.</p>

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
                        <td>83991455463</td>
                        <td>none</td>
                    </tr>
                </tbody>
                
                </table>
                

                </div>            
            
        );
    };
}


export default Alunos;