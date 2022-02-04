import {TextField, TextFieldProps} from '@mui/material'
import React, { useRef } from 'react'

interface Props {
    onAdd: (itemName:string) => void
}

const AddItem = (props: Props) => {
    const itemNameInput = useRef<TextFieldProps>(null)

    //Ask parent to save new item on enter
    const handleSubmit = (event: React.KeyboardEvent) => {
        if ((event.key === 'Enter') && (itemNameInput.current)) {
            props.onAdd(String(itemNameInput.current?.value))
            itemNameInput.current.value = ""
        }
    }

    return (
             <TextField color="secondary" onKeyDown={handleSubmit} inputRef={itemNameInput}  label="Nová položka" focused /> 
    )
}

export default AddItem
