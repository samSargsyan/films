import { useCallback, useRef } from "react"

const useDebounce = (callback, delay) => {
    const time = useRef(null);

    const debounce = useCallback((...args)=>{
        if(time.current){
            clearTimeout(time.current);
        }

        time.current = setTimeout(()=>{
            callback(...args)
        },delay)

    },[callback,delay])

    return debounce;
}

export default useDebounce;