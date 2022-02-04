import { Grid, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddBoardForm from '../components/Home/AddBoardForm'
import BoardCard from '../components/Home/BoardCard'
import { Board } from '../types'
import { v4 as uuid } from 'uuid';



const Home = () => {
    const [boards,setBoards]=useState<Board[]>([])
    //GET data from BE
    useEffect(() => {
        const fetchBoards = async () => {
           try {
                const response = await fetch('http://localhost:3001/boards')
                const boardsData = await response.json()
                setBoards(boardsData)
           }
            catch(err) {
                console.log(err)
                throw err;    
            }
        };
        fetchBoards();    
      }, []);

    //Add new board
    const handleAdd = (boardName:string) => {
        const newBoard={
            "id": uuid(),
            "name": boardName
        }
        setBoards([...boards,newBoard])
        saveBoard(newBoard).then((response) => {
            if (!response.ok) {
                alert('Nepodarilo sa uložiť')
                setBoards(boards.filter(b => b !== newBoard))
            }
        })     
    }

    //Save new board to BE
    let saveBoard = async function (newBoard: Board) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBoard)
        };
        const response = await fetch('http://localhost:3001/boards', requestOptions)
        const data = await response
        return data
    }
    
    return (
        <div>
            <Typography variant="h4">
                Zoznam boardov
            </Typography>
            <Grid container spacing={2} >
                    { 
                        boards.map(b=> <BoardCard key={b.id} board={b}/>)
                    }
                        <AddBoardForm onAdd={handleAdd}/>
            </Grid>        
        </div>
    )
}

export default Home
