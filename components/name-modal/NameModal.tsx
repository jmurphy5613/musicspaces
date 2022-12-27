import styles from './NameModal.module.css'
import {BsXLg} from 'react-icons/bs'

const NameModal = () => {
    return (
        <div className={styles.container}>
            <div className={styles["modal-container"]}>
                <div className={styles.exit}>
                    <div className={styles.background}></div>
                    <BsXLg className={styles.x} />
                </div>
            </div>
        </div>
    );
}

export default NameModal