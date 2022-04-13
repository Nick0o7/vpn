import styled from "@emotion/styled";
import {Close} from '@mui/icons-material';
import { useEffect, useState } from "react";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
`;

const Snackbar = styled.div`
    display: flex;
    width: 50vw;
    background-color: #DBA601;
    border-radius: 0 0 5px 5px;
    justify-content: space-between;
`;

const Message = styled.p`
    margin-left:8px;
`;

const Icon = styled.div`
    cursor:pointer;
`;

const Snack = ({open, handleClick}) => {

    const [message, setMessage] = useState("");

    useEffect(() => {
        
        const time = new Date().getHours();
        
        if(time >=5 && time < 12){
            setMessage("Good Morning, Guest!");
          }
        else  if(time > 12 && time <= 17){
            setMessage("Good Afternoon, Guest!");
          }
        else if(time > 17 && time <= 20){
            setMessage("Good Evening, Guest!");
          }
          else{
            setMessage("Good Night, Guest!");
          }    
    },[])

    
  return (
    <>
        {open && 
        <Container>
            <Snackbar>
                <Message>{message}</Message>

                <Icon onClick={handleClick}>
                    <Close/>
                </Icon>
            </Snackbar>
        </Container>
        }
    </>
  )
}

export default Snack