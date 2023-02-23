// import { createPortal } from "react-dom";
// import styled from "styled-components";

import styled from "@emotion/styled";
import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";

// const BackDrop = ({ onClose }) => {
//   return <StyledBackDrop onClick={onClose} />;
// };

// const ModalContent = ({ children }) => {
//   return <StyledModalContent>{children}</StyledModalContent>;
// };
// //Root => index => div
// const backdropRoot = document.getElementById("backdrop");
// const modalOverlayRoot = document.getElementById("modalOverlay");

// export const Modal = ({ children, onClose }) => {
//   return (
//     <>
//       {createPortal(<BackDrop onClose={onClose} />, backdropRoot)},
//       {createPortal(<ModalContent>{children}</ModalContent>, modalOverlayRoot)}
//     </>
//   );
// };
// //style
// const StyledBackDrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: 20;
//   background-color: rgba(0, 0, 0, 0.75);
// `;

// const StyledModalContent = styled.div`
//   position: fixed;
//   top: 20vh;
//   left: 5%;
//   width: 90%;
//   background-color: white;
//   padding: 1rem;
//   border-radius: 14px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
//   z-index: 30;
//   animation: slide-down 300ms ease-out forwards;
//   width: 40rem;
//   left: calc(50% - 20rem);

//   @keyframes slide-down {
//     from {
//       opacity: 0;
//       transform: translateY(-3rem);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;
const style = {
  position: "fixed",
  top: "20vh",
  left: "5%",
  width: "90%",
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "14px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
  zIndex: "30",
  animation: "slide-down 300ms ease-out forwards",
  width: "40rem",
  left: "calc(50% - 20rem)",
};

export const MuiModal = ({ onClose, children, open }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {children}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
