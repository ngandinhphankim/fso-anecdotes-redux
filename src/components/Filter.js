import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

export function Filter() {
    const dispatch = useDispatch()
    const style = {
        marginBottom: 10
    }

    const handleOnChange = event => {
        dispatch(setFilter(event.target.value))
    }

    return (
        <div style={style}>filter
            <input onChange={handleOnChange} />
        </div>
    )
}