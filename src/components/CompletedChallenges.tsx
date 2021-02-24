import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChanllengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChanllenges() {

    const { challengesCompleted } = useContext(ChallengeContext);

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}