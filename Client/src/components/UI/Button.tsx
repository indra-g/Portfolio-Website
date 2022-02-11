import MButton from "@mui/material/Button";
const Button: React.FC<{ text: string }> = (props) => {
  return (
    <MButton className="rounded-full" style={{ backgroundColor: "#0057FF" }}>
      {props.text}
    </MButton>
  );
};
export default Button;
