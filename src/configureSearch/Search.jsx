import { useState } from "react"
import useDebounce from "./Debounce"
import "../style.css"

export default function SearchInput({value, onChange}) {

    const [displayValue, setDisplayValue] = useState(value)
    const debouncedChange = useDebounce(onChange, 500)

    function handleChange(e){
        setDisplayValue(e.target.value)
        debouncedChange(e.target.value)
    }
    return(
        <input 
        className="input" 
        type="search" 
        value={displayValue} 
        onChange={handleChange}
        ></input>
    )
}