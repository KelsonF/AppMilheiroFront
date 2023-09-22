import styles from './styles.module.css'

interface ButtonProps{
   text: string
   onClickFunction?: ()=>void
}

export function Button({text, onClickFunction}: ButtonProps){
   return <button onClick={onClickFunction} className={styles.button}>
      {text}
   </button>
}