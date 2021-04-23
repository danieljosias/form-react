import { useState } from 'react';
import './estilos.css';

function App(){

        const[formValues, setformValues] = useState({ });
        
        const handleInputChange = (e) => {
            const {name, value} = e.target;
            setformValues({...formValues, [name]: value});
        };

        const handleSubmit = (e) =>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            console.log('handleSubmit', data);
        };

        console.log('formValues', formValues);
        return(
            <div>
                <h1 className="title">Form React</h1>
                
                <form onSubmit={handleSubmit} className="formulario">
                   <div className ="container">
                        <div className="input-group">
                            <label className="title-input">
                            Nome:
                            <input type="text" name="nome" required placeholder="Digite seu nome" onChange={handleInputChange} value={formValues.name} />
                            </label>
                            
                            <label className="title-input">
                            E-mail:
                            <input type="text" name="email" required placeholder="Digite seu email" onChange={handleInputChange} value={formValues.email || ''} />
                            </label>                
                            
                            <label className="title-input">
                            Senha:
                            <input type="password" name="senha" required placeholder="Digite sua senha" onChange={handleInputChange} value={formValues.senha || ''}/>
                            </label>  

                            <label className="title-input">
                                Sexo:
                                <select name="sexo" className="select-sexo" onChange={handleInputChange} value={formValues.name }>
                                    <option value="Selecione">Selecione</option>
                                    <option value="Masculino" >Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </label>
                       
                        <label className="title-input" >
                           Nascimento:
                            <input name="data" type="date" className="nascimento" onChange={handleInputChange} value={formValues.data || ''}/>
                        </label>                  
                        
                        <label className="title-input">
                            Idiomas:
                            <input type="checkbox" name="ingles" className="chk-input" />Inglês
                            <input type="checkbox" name="espanhol" className="chk-input" />Espanhol
                            <input type="checkbox" name="italiano" className="chk-input" />Italiano
                        </label>
                    
                        <button type="submit" className="btn-enviar">Enviar</button>

                        </div>   
                   </div>
                </form>
            </div>
        )
    }

export default App;