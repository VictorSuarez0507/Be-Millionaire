import { Box, Button, Container, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home () {
   
    const [name, setName] = useState("");
    const [error, setError] = useState({
        name: undefined,
    });
    localStorage.setItem("userName", name);

    const redireccion = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value
        if(value.length <= 3){
            setError({
                ...error,
                name: "El nombre debe tener mas de 3 caracteres"          
            })
            }else {
                setError({
                ...error,
                name: "",
            })
        }
        setName(value);
    }
    const formValid = Object.keys(error).every(
        (key) => error[key] === "")

    const nextLevel = () => {
        setTimeout(() => {
            redireccion("/nivel-1");
            onload();
            }, 2000);
    }

    return (
        <Container 
            align="center"
        >               
            <Box  padding="30px">
                <Image src='https://www.copnia.gov.co/sites/default/files/node/kids_content/field_image/millonario.jpg' 
                    alt='millionaire' />
            </Box>
            <Flex 
                justifyContent="center" 
                fontSize="5xl" 
                color="whiteAlpha.900"
            >
                <Text>Bienvenido</Text>
            </Flex>
            <Flex mt="30px" w="50%" justifyContent="center">
                <Input  color="white" placeholder="Ingresa tu nombre" onChange={handleChange}/>                  
                <Button type="submit" 
                    colorScheme="whiteAlpha"  
                    isDisabled={!formValid}
                    onClick={nextLevel}
                >
                    ¡A jugar!
                </Button>
            </Flex>  
            <Text ml="0" color="red.400">{error.name}</Text>       
        </Container>
    );
}

