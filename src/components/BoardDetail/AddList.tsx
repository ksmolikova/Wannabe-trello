import React, { useRef } from 'react'
import {  Grid, Stack, TextFieldProps, TextField} from '@mui/material'

interface Props {
    onAdd: (boardName:string) => void
}

const AddList = (props: Props) => {
    const listNameInput = useRef<TextFieldProps>(null)

    //Ask parent to save new list on enter
    const handleSubmit = (event: React.KeyboardEvent) => {
        if ((event.key === 'Enter' ) && (listNameInput.current))  {
                props.onAdd(String(listNameInput.current?.value))
                listNameInput.current.value = "";
        }
    }

    return ( 
        <Grid  xs item key="newList">
            <Stack spacing={2}>
                <TextField variant="filled" color="secondary" onKeyDown={handleSubmit} inputRef={listNameInput}  label="Nový stĺpec" focused /> 
            </Stack>
      </Grid>
    )
}


export default AddList
