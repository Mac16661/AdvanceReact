import { Button } from "@material-ui/core";
import styled, { css } from "styled-components";

//TODO: Our own custom define Button with the help of material ui
// const Button1 = styled.button`
// margin: 10px;
// padding: 20px;
// border: 2px solid red;
// cursor:pointer;

// ${(props) =>
//   props.darkMode &&
//   css`
//     background: gray;
//   `}
// `;

//This button is defined from the button above
const SalesButton = styled(Button)`
  background-color: orange;
  font-weight: bolder;

  ${(props) =>
    props.darkMode &&
    css`
      background-color: green;
      color: white;
  `}
`;

//TODO: SalesButton is overriding the material ui button which is really cool (when the above "const Button = ..." thing is commeted out)
export { SalesButton } //This is our custom designed material ui
export default Button // This is the one direct from material ui 


