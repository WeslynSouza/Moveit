import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChanllengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengeContext);

    return  (
        <div className={styles.profileContainer}>
            <img src="https://github.com/weslynSouza.png" alt='Wesley de Souza'/>
            <div>
                <strong> Wesley de Souza </strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
        
    )
}