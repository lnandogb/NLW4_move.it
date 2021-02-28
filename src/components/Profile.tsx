import React from 'react';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lnandogb.png" alt="Luis Fernando" />
            <div>
                <strong>Luis Fernando</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                Level {level}
                </p>
            </div>
        </div>
    );
}