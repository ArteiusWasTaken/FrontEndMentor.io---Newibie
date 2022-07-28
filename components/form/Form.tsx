import { TextField, Button, Box } from "@mui/material";
import { useFormControls } from "./";

const inputFieldValues = [
  {
    name: "email",
    label: "Your email address...",
    id: "my-email",
  },
];
export const Form = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <Box
      sx={{
        display: { md: "flex", sm: "flex-column" },
      }}
      paddingTop={5}
      paddingBottom={5}
    >
      <Box className="TextField-border-radius">
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          {inputFieldValues.map((inputFieldValue, index) => {
            return (
              <TextField
                key={index}
                onChange={handleInputValue}
                onBlur={handleInputValue}
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                error={errors[inputFieldValue.name]}
                autoComplete="none"
                {...(errors[inputFieldValue.name] && {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                })}
              />
            );
          })}
        </form>
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={!formIsValid()}
          style={{ borderRadius: 50, width: "100%" }}
        >
          Notify Me
        </Button>
      </Box>
    </Box>
  );
};
