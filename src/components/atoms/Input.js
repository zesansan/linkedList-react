import styled from "styled-components";



const Input = props => (
  <label>{props.labelName}</label>
  <input type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
  />


)



export default Input;
