import styles from "../styles/hero.module.css"
import bg from "../assets/bg.png";
const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.bg} src={bg} alt="background" />
            <div className={styles.overlay}>

            </div>
        </div>
    )
}

export default Hero;