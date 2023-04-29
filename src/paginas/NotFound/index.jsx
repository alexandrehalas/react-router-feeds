import Button from 'componentes/Button';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import error404 from './error404.png';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>Ops! Página não encontrada.</h1>
                <p className={styles.paragraph}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={styles.paragraph}>Aguarde uns instantes e recarregue a página</p>
                <div className={styles.buttonContainer} onClick={() => navigate(-1)}>
                    <Button size='lg'>Voltar</Button>
                </div>
                <img className={styles.dogImage} src={error404} alt='Cachorro de óculos com roupas de humano'></img>
            </div>
            <div className={styles.whiteSpace}></div>
        </>
    )
}
