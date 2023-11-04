import { useState } from "react";


export default function useGame () {
    const nivel = localStorage.getItem('nivel'); 
    const [tasks, setTasks] = useState([]);
    const [reply, setReply] = useState({
        value: "",
        answer: ""
    })     

    const getQuestions = async () => {   
        
        try {
            const response = await fetch(`http://localhost:3000/game/${nivel}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                },
            });      
            if (response.ok) {         
                const result = await response.json();
                return setTasks(result);
            } else {
                console.error("Error al obtener los datos de las preguntas");
            }
        } catch (error) {
        console.error('Error de conexión:', error);
        }
    }

    const handleQuestion = (e) => {
        const value = e.target.value;
        const answer = tasks[0].correct
        setReply((data) => ({
            ...data,
            value: value,
            answer: answer
        }))
    }
    const getReward = () => {
        const num = parseInt(nivel)
        return (num-1) * 1000
        
    }

    return {
        tasks,
        reply,
        getQuestions, 
        handleQuestion,
        getReward
    }
}