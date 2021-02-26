import {useContext } from 'react'
const styles= require('../styles/components/Countdown.module.css')
import { CountdownContext } from '../contexts/CountDownContext';



export function Countdown() {
  const { minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown
  } = useContext(CountdownContext)

//split('') -> 25 -> 2, 5
// pad verifica a quantidade de caracteres e comeca a preencher
// com algum valor se ela não for do tamanho adequado
// padStart comeca a preencher a partir da esquerda, do início da string
// 5 -> padStart(2, "0") -> 05
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  
  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      
      { hasFinished ? (
        <button 
        disabled
        className={styles.countdownButton}
      >
        Ciclo encerrado
      </button>

      ) : (
        <>
        {isActive && !hasFinished ?(
        <button 
        type="button" 
        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        onClick={startCountdown}
      >
        Abandonar ciclo
      </button>
      ) :
        (
        <button 
        type="button" 
        className={styles.countdownButton} 
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
      )}
        </>
      )}
    </div>
  )
}