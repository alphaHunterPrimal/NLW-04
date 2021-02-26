import { ChallengesContext } from "../contexts/ChallengesContext"
import {useContext} from 'react'
const styles = require("../styles/components/Profile.module.css")

export function Profile(){
    const {level} = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/josepholiveira.png" alt="eumesmo"/>
            <div>
                <strong>eumesmo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}