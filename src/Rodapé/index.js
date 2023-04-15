import logo from '../../src/assets/logo.png';
import './rodape.css'

function Rodape() {
    return (
        <footer>
            <div className="footer">
                <img src={logo}></img>
                    <div className="endereço">
                        <h2>ENDEREÇO</h2>
                        <p>Av. Bernardino de<br></br>Campos, 98<br></br>São Paulo, SP 12345-678</p>
                    </div>
                    <div className="contato">
                        <h2>CONTATO</h2>
                        <p>info@meusite.com<br></br>Tel: (69) 1234-5678</p>
                    </div>
                    <div className="horarios">
                        <h2>HORÁRIOS</h2>
                        <p>ABERTO TODOS OS DIAS<br></br>
                        10:00 - 22:00</p>
                    </div>

            </div>
            <p>Gelateria. Orgulhosamente desenvolvido por Ryan Campos</p>
        </footer>
    )
}

export default Rodape;