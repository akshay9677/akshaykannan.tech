import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function SnacksBar(props) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={props.open}
      onClose={props.onClose}
    >
      <Alert
        elevation={6}
        variant='filled'
        severity={props.failed ? "error" : "success"}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}

export default SnacksBar;
