import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@material-ui/core";

const CircularProgressPercent = (
  props: CircularProgressProps & { value: number }
) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5" component="div">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressPercent;
