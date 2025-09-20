import React, { useState, useCallback } from "react";
import axios from 'axios';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloseIcon from "@mui/icons-material/Close";

export default function FileUploader({ url }) {
  const [file, setFile] = useState(null);

  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileChange = (e) => {
    const selected = e.target.files && e.target.files[0];
    if (selected) setFile(selected);
  };

  const handleRemove = () => setFile(null);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      const dropped = e.dataTransfer?.files?.[0];
      if (dropped) setFile(dropped);
    },
    [setFile]
  );

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    if (!file) return;
    console.log("Submitting file:", url);
    alert(`Submitting "${file.name}" (${formatBytes(file.size)})`);
    const formData = new FormData();
    formData.append('binary', file); 
    try {
      const response = await axios.post(url, formData);
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed!');
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 480, mx: "auto", my: 4 }}>
      <Box
        component="label"
        onDrop={onDrop}
        onDragOver={onDragOver}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 120, // fixed height
          border: (t) => `2px dashed ${t.palette.divider}`,
          borderRadius: 2,
          bgcolor: (t) =>
            t.palette.mode === "light"
              ? "transparent"
              : "rgba(255,255,255,0.02)",
          cursor: "pointer",
          textAlign: "center",
          p: 2,
          transition: "background-color .12s ease, border-color .12s ease",
          "&:hover": {
            backgroundColor: (t) => t.palette.action.hover,
            borderColor: (t) => t.palette.primary.main,
          },
        }}
      >
        <input
          type="file"
          hidden
          onChange={handleFileChange}
          accept="*"
          // limit to one file by not using multiple
        />
        <Stack direction="row" spacing={2} alignItems="center">
          <UploadFileIcon color="action" sx={{ fontSize: 36 }} />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {file ? "Replace file" : "Click or drop a file here"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {file ? file.name : "Only one file allowed — max depends on browser"}
            </Typography>
          </Box>
        </Stack>
      </Box>

      {file && (
        <List
          sx={{
            mt: 2,
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="remove" onClick={handleRemove}>
                <CloseIcon />
              </IconButton>
            }
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <InsertDriveFileIcon color="primary" />
              <ListItemText
                primary={file.name}
                secondary={`${
                  formatBytes(file.size)
                } • ${file.type || "unknown type"}`}
              />
            </Stack>
          </ListItem>
        </List>
      )}

      {/* submit button below uploader */}
      <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          disabled={!file}
          onClick={handleSubmit}
          sx={{
            height: 48,
            borderRadius: 2,
            textTransform: "none",
            boxShadow: 2,
          }}
        >
          Submit
        </Button>

        <Button
          variant="outlined"
          color="inherit"
          size="large"
          disabled={!file}
          onClick={handleRemove}
          sx={{
            height: 48,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
}