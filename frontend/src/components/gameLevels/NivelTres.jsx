import { useEffect } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Text, VStack } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import useGame from "../../hooks/useGame";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import wrong from "../../hooks/UseAlerts";

export default function NivelTres () {
    localStorage.setItem("nivel", 3);
    const userName = localStorage.getItem('userName');
    const { tasks, reply, getQuestions, handleQuestion, getReward } = useGame();
    const { wrongReply, finishGame } = wrong();
    

    useEffect(() => {
        getQuestions();
    }, []); 
    
    const nextLevel = () => {
        const  value =  reply.value
        const answer = reply.answer
        if(value === answer && value!== ""  ) {   
            const reward = getReward() + 1000;          
            swal({
                title: "Felicidades has completado el juego",
                text: `Tu premio acumulado fue ${reward}`,
                icon: "success",
                timer: "2000"
            })
            finishGame();
        } else if (value !== answer && value!== "") {
            wrongReply();
        } 

    }
    nextLevel();
    return (
        <Container 
            w='100%' 
            h='800px'
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
                Nivel Tres
            </Text> 
            {tasks.map((task) => (
                <Box align="center" key={task._id}>
                    <Flex 
                        mt="100px"
                        minWidth='540px'
                        maxH="200px"
                        justifyContent="center" 
                        fontSize="3xl" 
                        color="blackAlpha.900"
                        backgroundColor="white"
                        borderRadius="10px"
                    >
                        <Text >{task.title}</Text>
                    </Flex>
                    <Grid
                    mt="50px"
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(4, 1fr)'
                        gap={4}
                    >
                        <GridItem colSpan={2}>
                            <Button  
                                minWidth='250px' 
                                minHeight='50px' 
                                value={task.answerA} 
                                onClick={handleQuestion}
                            >
                                A: {task.answerA}
                            </Button>
                        </GridItem>
                        <GridItem colSpan={2} >
                            <Button 
                                minWidth='250px' 
                                minHeight='50px' 
                                ml='10' 
                                value={task.answerB} 
                                onClick={handleQuestion}
                            >
                                B: {task.answerB}
                            </Button>
                        </GridItem>
                        <GridItem colSpan={2} >
                            <Button 
                                minWidth='250px' 
                                minHeight='50px' 
                                value={task.answerC} 
                                onClick={handleQuestion}
                            >
                                C: {task.answerC}
                            </Button>
                        </GridItem>
                        <GridItem colSpan={2}   >
                            <Button 
                                minWidth='250px' 
                                minHeight='50px' 
                                ml='10' 
                                value={task.answerD} 
                                onClick={handleQuestion}
                            >
                                D: {task.answerD}
                            </Button>
                        </GridItem>
                    </Grid>
                </Box>
            ))}
            <VStack>
                <Box w='50%' 
                    justifyContent="center" 
                    alignContent="center"
                    mt='60px'>
                    <FormControl>
                        <FormLabel 
                            htmlFor="premio"
                            textColor="white"
                        >
                            Premio Acumulado
                        </FormLabel>
                        <Button 
                        id="premio"
                            align="center" 
                            
                            fontSize="4xl"
                            minWidth='250px' 
                            minHeight='50px'
                            
                        >
                            {getReward()}
                        </Button> 
                    </FormControl>
                </Box>
            </VStack>
        </Container>

    );
}