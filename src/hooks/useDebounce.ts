import React, { useEffect, useState } from "react"

const useDebounce: React.FC = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [value, delay])
    return debouncedValue
}

export default useDebounce