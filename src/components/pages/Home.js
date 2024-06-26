import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome <span>Costs</span></h1>
            <p>Start managing your projects now</p>
            <LinkButton to="/newProject" text="Create Project"/>
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home