import styles from './NameModal.module.css'

const NameModal = () => {
    return (
        <div className={styles.container}>
            <div className={styles["modal-container"]}>
                <div className={styles.exit}></div>
            </div>
        </div>
    )
}

export default NameModal