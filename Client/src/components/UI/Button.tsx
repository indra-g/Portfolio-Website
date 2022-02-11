import MButton from "@mui/material/Button";
const Button: React.FC<{
  text: string;
}> = (props) => {
  return (
    <MButton
      variant="contained"
      style={{
        backgroundColor: "#0057FF",
        borderRadius: "50px",
        textTransform: "capitalize",
      }}
    >
      {props.text}
    </MButton>
  );
};
export default Button;
