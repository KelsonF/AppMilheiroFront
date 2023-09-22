import { ReactNode } from "react"
import styles from './styles.module.css'

interface BodyProps{
   children: ReactNode
}

export function Body({children}: BodyProps){
   return (
      <div className={styles['main-body']}>
         {children}
      </div>
   )
}