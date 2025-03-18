import GlobalStyles from "./styles/GlobalStyles.js";
import styled from "styled-components";

import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading.jsx";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("Checked In!!!")}>Check In</Button>
        <Button onClick={() => alert("Checked Out!!!")}>Check Out</Button>

        <Heading as="h3">Form</Heading>
        <Input placeholder="Write something..." />
        <Input placeholder="Write something..." />
      </StyledApp>
    </>
  );
}

export default App;
