import bcImg from '../../assets/banner-home.png';
import "./style.css";
import Sabores from '../Sabores';

function Home() {
    return (
       
        <section >
            <div className="content Home">
                <div className="imagem-home" title="SORVETE ARTESANAL"></div>
                <div className="text">SORVETE ARTESANAL</div>
            </div>
            <Sabores />
        </section>

      
                
           
        
    )
}

export default Home;