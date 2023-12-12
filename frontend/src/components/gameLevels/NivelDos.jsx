import { useEffect } from "react";
import { Box, Button, Container, FormControl, FormLabel, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../../hooks/useGame";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert"
import wrong from "../../hooks/UseAlerts";

export default function NivelDos () {
    localStorage.setItem("nivel", 2);
    const userName = localStorage.getItem('userName');
    const { tasks, reply, getQuestions, handleQuestion, getReward } = useGame();
    const { wrongReply, finishGame } = wrong();
    
    const redireccion = useNavigate();

    useEffect(() => {
        getQuestions();
    }, []); 
    
    const nextLevel = () => {
        const  value =  reply.value
        const answer = reply.answer
        if(value === answer && value!== ""  ) {
            swal({
                title: "¿Quieres continuar o te retiras?",
                text: "¡ Una vez retirado, no podrás recuperar tu avance! ",
                icon: "warning",
                buttons: ["Terminar", "Continuar"] ,
                dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {          
                    setTimeout(() => {
                    redireccion("/nivel-3");
                    onload();
                    }, 2000); 
                } else {
                    finishGame();
                }
              }).catch((error) => console.error("Error al continuar el juego:", error))
            
        } else if (value !== answer && value!== "") {
            wrongReply();
        } 
    }
    nextLevel();
    return (
        <Container 
            align="center"
        >
            <Text 
                textColor="whiteAlpha.900" 
                fontSize="3xl"
            >
                Jugador: {userName}
            </Text>
            <Text 
                textColor="whiteAlpha.900" 
                fontSize="3xl"
            >
                Nivel Dos
            </Text> 
            {tasks.map((task) => (
                <Box align="center" key={task._id}>
                <SimpleGrid columns={[1]} spacing='40px'>
                <Box 
                    mt="50px"
                    justifyContent="center" 
                    fontSize="3xl" 
                    color="blackAlpha.900"
                    backgroundColor="white"
                    borderRadius="10px"
                >
                    <Text >{task.title}</Text>
                </Box>
                </SimpleGrid>
                <SimpleGrid columns={[1, 2]} spacing='40px' mt="50px">
                    <Button                
                        value={task.answerA} 
                        onClick={handleQuestion}
                    >
                        A: {task.answerA}
                    </Button>
                    <Button                   
                        value={task.answerB} 
                        onClick={handleQuestion}
                    >
                        B: {task.answerB}
                    </Button>
                    <Button                              
                        value={task.answerC} 
                        onClick={handleQuestion}
                    >
                        C: {task.answerC}
                    </Button>
                    <Button    
                        value={task.answerD} 
                        onClick={handleQuestion}
                    >
                        D: {task.answerD}
                    </Button>                       
                </SimpleGrid>
            </Box>
            ))}
            <SimpleGrid columns={[1]} spacing='40px' mt="70px">
                <FormControl>
                    <FormLabel 
                        htmlFor="premio"
                        textColor="white"
                    >
                        Premio Acumulado
                    </FormLabel>
                    <Button 
                        id="premio"                               
                        fontSize="4xl"          
                    >
                        {getReward()}
                    </Button>                            
                </FormControl> 
            </SimpleGrid>
        </Container>

    );
}