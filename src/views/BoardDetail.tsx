import { Grid, Typography} from '@mui/material'
import React, { ReactElement, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router';
import AddList from '../components/BoardDetail/AddList';
import ListComponent from '../components/BoardDetail/ListComponent';
import { List, Board} from '../types';
import { v4 as uuid } from 'uuid';


interface LocationState{
    board:Board
}

function BoardDetail(): ReactElement {
    //Get boardId from URL
    const { id } = useParams()

    //Get boardName from state
    const boardName = useLocation().state as LocationState

    //Load lists
    const [lists,setLists]=useState<List[]>([])
    useEffect(() => {
        const fetchLists = async () => {
            try {
                const response = await fetch('http://localhost:3001/lists?boardId='+id);
                const listsData = await response.json();
                setLists(listsData);
            }
            catch(err) {
                console.log(err);
                throw err;     
              }
          };
          fetchLists();    
      },[id]);

    //Add new list
    const handleAddList = (listName:string) => {    
        const newList={
            "id": uuid(),
            "name": listName,
            "boardId":id || ""
        }
        setLists([...lists,newList])
        saveList(newList).then((response) => {
            if (!response.ok) {
                alert('Nepodarilo sa uložiť')
                setLists(lists.filter(l => l !== newList))
            }
        })
    }

    //Save new list to BE
    let saveList = async function (newList: List) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newList)
        };
        const response = await fetch('http://localhost:3001/lists', requestOptions)
        const data = await response
        return data
    }

    return (
        <div>
            <Typography variant="h4">
                 Detail boardu: {boardName}
            </Typography>
            <Grid container spacing={2} flexWrap="nowrap" >
                { 
                    lists.map(l => <ListComponent list={l} key={l.id}/> )
                }
                    <AddList onAdd={handleAddList}/>
            </Grid>
        </div>
    )
}
export default BoardDetail