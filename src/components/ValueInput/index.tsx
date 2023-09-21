import { ChangeEvent } from "react"
import "./style.css"

interface ValueInputProps {
   label? : string  
   value? : string
   onChange? : (event: ChangeEvent<HTMLInputElement>)=>void
}

export function ValueInput({label,value,onChange}: ValueInputProps){
   return (
      <div className="wrapper">
         <div className="label-holder">
            <p>{label}</p>
         </div>
         <div className="input-holder">
            <input type="text" id="value-input" value={value} onChange={onChange} />
         </div>
      </div>
   )
}