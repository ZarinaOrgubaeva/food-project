import { styled } from "@mui/system";

const Button = ({
  children,
  variant = "contained",
  boderStyle = " rounded",
  ...restProps
}) => {
  return (
    <StyledButton variant={variant} boderStyle={boderStyle} {...restProps}>
      {children}
    </StyledButton>
  );
};
const getBackgruondColor = (props) => {
  return props.variant === "contained" ? "#8a2b06" : "#fff";
};
const getBoder = (props) => {
  return props.variant === "contained" ? "none" : " 1px solid #8a2b06";
};
const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#8a2b06";
};
const getRadius = (props) => {
  return props.boderStyle === "rounded" ? "20px" : "6px";
};
const StyledButton = styled("button")(() => ({
  background: `${getBackgruondColor}`,
  backgroundColor: "#993108",
  borderRadius: `${getRadius}`,
  padding: "0.625rem 2rem",
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  textAlign: "center",
  color: `${getColor}`,
  border: `${getBoder}`,
  cursor: "pointer",
  ":hover": {
    background: "#7e2a0a",
    color: "#fff",
  },
  ":active": {
    background: "#993108",
  },
  "#pluzIcon": {
    marginRight: "12px",
  },
}));

export default Button;
