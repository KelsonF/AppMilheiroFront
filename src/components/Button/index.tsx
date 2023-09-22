import styles from './styles.module.css'

interface ButtonProps {
   text: string
   onClickFunction?: () => number
}

export function Button({ text, onClickFunction }: ButtonProps) {
   return (
      <div className={styles.wrapper}>
         <button onClick={onClickFunction} className={styles.button}>
            {text}
         </button>
      </div>
   )
}