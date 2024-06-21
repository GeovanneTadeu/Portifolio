import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'


function Sobre() {
    return (
        
            
            <>
            <section className={styles.sobre}>
                <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                    <div>
                    <h2>Sobre</h2>

                    <p>Sou <span>Geovanne Tadeu</span> <br />
                    <strong>Estudante</strong> </p>

                    <p>Comecei a estudar programação em 2021.</p>

                    
                    </div>
                </div>
                <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                </div>
            </div>
                
            </section>
            
            </>
            
        
    )
}

export default Sobre