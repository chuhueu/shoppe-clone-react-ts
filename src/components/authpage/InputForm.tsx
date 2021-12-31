import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleFormInput: {
      flex: 1,
      padding: "0.75rem",
      outline: "none",
      border: "1px solid rgba(0,0,0,.14)",
      borderRadius: "2px",
      boxShadow: "inset 0 2px 0 rgb(0 0 0 / 2%)",
      marginBottom: "10px",
      "&:focus": {
        borderColor: "rgba(0,0,0,.54)",
        boxShadow: "inset 0 2px 0 rgb(0 0 0 / 14%)",
      },
      "&:invalid[focused='true']": {
        borderColor: "#ff424f",
      },
      "&:invalid[focused='true'] ~ span": {
        display: "block",
      },
    },
    styleError: {
      display: "none",
      fontFamily: "Roboto",
      fontSize: "0.75rem",
      color: "#ff424f",
      marginBottom: "10px",
    },
  })
);

const InputForm = (props: any) => {
  const classes = useStyles();
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;

  //console.log(inputProps);

  const handleFocus = (e: any) => {
    setFocused(true);
  };

  return (
    <Box display="flex" flexDirection="column">
      <input
        className={classes.styleFormInput}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className={classes.styleError}>{errorMessage}</span>
    </Box>
  );
};

export default InputForm;
