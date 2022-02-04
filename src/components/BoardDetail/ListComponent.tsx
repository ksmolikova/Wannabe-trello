import React, { useState, useEffect } from 'react'
import { List, Item } from '../../types'
import { Grid, Stack, Typography} from '@mui/material'
import AddItem from './AddItem'
import ItemComponent from './ItemComponent'
import { v4 as uuid } from 'uuid';

interface Props {
    list: List
}

const ListComponent = (props: Props) => {
    const {list}=props
    const [items,setItems]=useState<Item[]>([])

    //Load items in list
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:3001/items?listId='+list.id)
                const itemsData = await response.json()
                setItems(itemsData)
            }
            catch(err) {
                console.log(err)
                throw err;    
            }
        };
        fetchItems();  
    },[list]);

    //Add new item
    const handleAddItem = (itemName:string) => {    
        const newItem={
            "id": uuid() ,
            "name": itemName,
            "listId": list.id
        }
        setItems([...items,newItem])
        saveItem(newItem).then((response) => {
            if (!response.ok) {
                alert('Nepodarilo sa uložiť')
                setItems(items.filter(i => i !== newItem))
            }
        })
    }

    //Save new item to BE
    let saveItem = async function (newItem: Item) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        };
        const response = await fetch('http://localhost:3001/items', requestOptions)
        const data = await response
        return data
    } 
    
    return (
        <Grid  xs item key={list.id}>
            <Stack spacing={2}>
                <Typography gutterBottom variant="h5" component="div" color="white">
                         {list.name}
                </Typography>
                        {
                            (items).map(i => <ItemComponent item={i} key={i.id}/>  )
                        }
                        <AddItem onAdd={handleAddItem}/>                                       
            </Stack>
        </Grid>                                      
    )
}

export default ListComponent
