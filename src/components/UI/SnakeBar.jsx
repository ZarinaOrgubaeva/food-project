import { Alert, Snackbar } from "@mui/material"

export const SnakeBar = ({isOpen, onClose, message, severity, autoHideDuration}) =>{
    return(
        <Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration || 4000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
        </Alert>
      </Snackbar>
    )
}