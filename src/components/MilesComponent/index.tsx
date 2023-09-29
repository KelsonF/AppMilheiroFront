import { RefObject } from "react"
import { MilesButton } from "../MilesButton"
import styles from './style.module.css'

interface MilesComponentProps {
   value: number
   increaseFunction?: () => void
   decreaseFunction?: () => void
   ref?: RefObject<HTMLInputElement>
}

export function MilesComponent({ value, increaseFunction, decreaseFunction }: MilesComponentProps) {
   return (
      <div className={styles.wrapper}>
         <div className={styles.button_wrapper  }>
            <MilesButton onClickFunction={decreaseFunction}>
               <span> -10 </span>
            </MilesButton>
            <MilesButton onClickFunction={decreaseFunction}>
               <span> -10 </span>
            </MilesButton>
            <MilesButton onClickFunction={decreaseFunction}>
               <span> -10 </span>
            </MilesButton>
         </div>
         <div className={styles.miles_screen}>
            {value < 0 ? 0: value}
         </div>
         <div className={styles.button_wrapper}>
            <MilesButton onClickFunction={increaseFunction}>
               <span> +10 </span>
            </MilesButton>
            <MilesButton onClickFunction={increaseFunction}>
               <span> +10 </span>
            </MilesButton>
            <MilesButton onClickFunction={increaseFunction}>
               <span> +10 </span>
            </MilesButton>
         </div>
      </div>
   )
}