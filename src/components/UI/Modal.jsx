import { Modal, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

// const style = {
//   display: 'flex',
//   flexDirection: "column",
//   position: "fixed",
//   top: "20vh",
//   left: "5%",
//   width: "90%",
//   backgroundColor: "white",
//   padding: "1rem",
//   borderRadius: "14px",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
//   zIndex: "30",
// };

export const MuiModal = ({ onClose, children, open }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModal>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {children}
          </Typography>
      </StyledModal>
      </Modal>
    </>
  );
};

const StyledModal = styled(Box)(() => ({
  position: "fixed",
  top: "20vh",
  left: "5%",
  width: "90%",
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "14px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
  zIndex: "30",
}));
