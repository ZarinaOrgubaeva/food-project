import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { getTheme } from "../../../lib/constants/theme";
import { ReactComponent as BasketIcon } from "../../assets/icons/Basket-icon.svg";
const BasketBtn = ({ count, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      <BasketIcon />
      <StyledSpan>Your Card </StyledSpan>
      <StyledCount id="counter">{count || 0}</StyledCount>
    </StyledButton>
  );
};
export default BasketBtn;
//style
const StyledButton = styled(Button)(({theme}) => ({
  "&": {
    background: theme.palette.primary.dark,
    borderRadius: "30px",
    padding: "12px 32px",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "&:hover > #counter": {
      backgroundColor: theme.palette.primary.dark,
    },
    "&.bump": {
      animation: "bump 300ms ease-out",
    },
    "&.@keyframes bump": {
      "0%": {
        transform: "scale(1)",
      },
      "10% ": {
        transform: "scale(0.9)",
      },
      "30% ": {
        transform: "scale(1.1)",
      },
      "50%": {
        transform: "scale(1.15)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  },
}));
// const StyledButton = styled.button`
//   background: #5a1f08;
//   border-radius: 30px;
//   padding: 12px 32px;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 24px;
//   color: #ffffff;
//   display: flex;
//   align-items: center;

//   &:hover {
//     background-color: #2c0d00;
//   }
//   &:hover > #counter {
//     background-color: #a73a0b;
//   }
//   &.bump {
//     animation: bump 300ms ease-out;
//   }

//   @keyframes bump {
//     0% {
//       transform: scale(1);
//     }
//     10% {
//       transform: scale(0.9);
//     }
//     30% {
//       transform: scale(1.1);
//     }
//     50% {
//       transform: scale(1.15);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }
// `;
const StyledSpan = styled("span")(() => ({
  "&": { marginLeft: "12px", marginRight: "12px" },
}));

const StyledCount = styled('span')(()=>({
  background: "#8a2b06",
  borderRadius: "30px",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "27px",
  color: "#ffffff",
  padding: "4px 20px",
  cursor: "pointer",
}))
  
