import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 700;
  background-color: red;
`;

const Button = styled.button`
  font-size: 1.6rem;
  padding: 1.2rem 1.8rem;
  border: none;
  border-radius: 4px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  padding: 1.2rem 1.6rem;
  border-radius: 4px;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert("Checked In!!!")}>Check In</Button>
      <Button onClick={() => alert("Checked Out!!!")}>Check Out</Button>

      <Input placeholder="Write something..." />
      <Input placeholder="Write something..." />
    </StyledApp>
  );
}

export default App;
