import { styled } from "@mui/system";
import {
  Box as MUIBox,
  FormGroup as MUIFormGroup,
  FormLabel as MUIFormLabel,
  OutlinedInput,
  Button as MUIButton,
} from "@mui/material";

export const FormContainer = styled(MUIBox)({
  width: "300px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Form = styled(MUIFormGroup)({
  background: "opacity",
  border: "2px solid #000",
  borderRadius: "10px",
});

export const FormContent = styled(MUIBox)({
  padding: "20px 10px",
});

export const Label = styled(MUIFormLabel)();

export const Input = styled(OutlinedInput)({
  height: "30px !important",
  width: "100%",
  margin: "5px 0 15px",
  backgroundColor: "#fff",
  padding: "0 !important",
  "& .MuiInputBase-input": {
    padding: "10px",
  },
});

export const Button = styled(MUIButton)();
