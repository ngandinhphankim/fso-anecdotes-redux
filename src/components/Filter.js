import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

export function Filter() {
    const dispatch = useDispatch()
    const style = {
        marginBottom: 10
    }

    const handleOnChange = event => {
        dispatch(filterChange(event.target.value))
    }

    return (
        <div style={style}>filter
            <input onChange={handleOnChange} />
        </div>
    )
}