import React from 'react';
import StyledButton from "../atoms/Card";
import { TextField } from "material-ui";

const SearchForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <TextField
          hintText="Search for People or Companies..."
          name="search"
          onChange={props.handleChange}
          value={props.search}
        />
        <StyledButton onClick={props.handleSubmit}/>
      </form>
    </div>
  );
};

export default SearchForm;
