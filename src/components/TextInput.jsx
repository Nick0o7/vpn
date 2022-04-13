import styled from "@emotion/styled";

const Container = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    height: 50px;
    width: 100px;
`;

const Input = styled.input`
    height: 100%;
    width: 100%;
    background-color: #DBA601;
    border:none;
    border-radius: 10px;
    &:focus{
        border:none;
        outline:none;
    }
`;

const TextInput = ({handleChange}) => {
  
  return (
    <Container> 
        <Input onChange={(e) => handleChange(e)}/>
    </Container>
  )
}

export default TextInput