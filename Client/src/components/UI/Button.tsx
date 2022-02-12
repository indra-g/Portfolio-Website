import MButton from "@mui/material/Button";
const Button: React.FC<{
  text: string;
  onClick?: () => void;
}> = (props) => {
  return (
    <MButton
      onClick={props.onClick}
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
