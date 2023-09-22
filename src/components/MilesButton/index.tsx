import { ReactNode } from 'react'
import styles from './styles.module.css'

interface MilesButtonProps {
   onClickFunction?: () => void
   children?: ReactNode
}

export function MilesButton({ onClickFunction, children }: MilesButtonProps) {
   return <button className={styles.button} onClick={onClickFunction}>
      {children}
   </button>
}