import styles from './banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Esse é meu espaço para apresentação. Sou Nicholas Antonio
                </p>

                
            </div>
            
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden= {true}/>
                <img  className={styles.minhaFoto} src={minhaFoto} alt='Foto Nicholas'/>
            </div>
        </div>
    )
}