import React, { useState } from "react";

const PizzaList = () => {
  const defaultState = {
    name: "Tony",
    size: "Small",
    sausage: "false",
    spinach: "false",
    mushroom: "false",
    olive: "false",
  };
  const [order, setOrder] = useState([]);
  const [formState, setFormState] = useState({ ...defaultState });
  //   const [sizeState, setSizeState] = useState("");
  //   const [sausageState, setSausageState] = useState("");
  //   const [spinachState, setSpinachState] = useState("");
  //   const [oliveState, setOliveState] = useState("");
  //   const [mushroom, setMushroomState] = useState("");

  const changeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    //console.log(event.target.name, event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormState(defaultState);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Please Enter Your Name:"
          value={nameState.name}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="size">
        What size pizza would you like?
        <select
          value={sizeState}
          name="size"
          id="size"
          //   onChange={inputChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra large">Extra Large</option>
          <option value="murica">'Murica</option>
        </select>
      </label>
      <label htmlFor="special instructions">
        Special Instructions
        <textarea
          id="special"
          name="special"
          // onChange={inputChange}
        />
      </label>
      <label htmlFor="toppings">
        <input type="checkbox" name="sausage" value="sausageState"></input>
        <label htmlFor="sausage">Sausage</label>
        <input type="checkbox" name="spinach" value="spinachState"></input>
        <label htmlFor="spinach">Spinach</label>
        <input type="checkbox" name="olive" value="oliveState"></input>
        <label htmlFor="olive">Olives</label>
        <input type="checkbox" name="mushroom" value="mushroomState"></input>
        <label htmlFor="mushroom">Mushroom</label>
        {/* onChange={inputChange} */}
      </label>
      <button type="submit">Click to place order!</button>
    </form>
  );
};

export default PizzaList;
