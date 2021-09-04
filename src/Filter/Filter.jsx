import { Component } from "react";
import { Wrapper, Input, Label } from "./Filter.styled";

class Filter extends Component {
  render() {
    return (
      <Wrapper>
        <Label htmlFor="filter">Find contacts by name</Label>
        <Input type="text" name="filter" />
      </Wrapper>
    );
  }
}

export default Filter;
