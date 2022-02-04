import { Grid, TextField, TextFieldProps } from '@mui/material';
import React, {useRef } from 'react'


interface Props {
    onAdd: (boardName:string) => void
}

const AddBoardForm = (props: Props) => {
    const boardNameInput = useRef<TextFieldProps>(null)

    //Ask parent to save new board on pressing enter
    const handleSubmit = (event: React.KeyboardEvent) => {
        if ((event.key === 'Enter' ) && (boardNameInput.current)) {
                props.onAdd(String(boardNameInput.current?.value))
                boardNameInput.current.value = ""
        } 
    }

    return (
        <Grid  xs item key="newBoardForm">
            <TextField onKeyDown={handleSubmit} inputRef={boardNameInput}  label="Názov nového boardu" focused />          
        </Grid>
    )
}

export default AddBoardForm
