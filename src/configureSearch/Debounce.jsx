import { useRef } from "react"

export default function useDebounce(fn, delay) {
    const timeRef = useRef(null)
    
    function debouncedFn(...args) {
        window.clearTimeout(timeRef.current)
        timeRef.current = window.setTimeout(() => {
            fn(...args)
        }, delay)

    }

    return debouncedFn
}