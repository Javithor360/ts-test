import { useEffect } from 'react'
import { useAppContext } from '../../context/AppContext.tsx'

export const Main = () => {
    const { getInfo, message } = useAppContext()
    useEffect(() => {
        getInfo()
    }, [getInfo])

    return (
    <div>
        {message}
    </div>
    )
}
