import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import FileUploader from '../utils/FileUploader';

export default function Home() {
  return (
    <Box justifyItems={"center"}>
      <Typography variant='h4' gutterBottom >
        Welcome to the best Forensic Binary Analyser!
      </Typography>
      <Typography>
        drop a file!
      </Typography>
      <FileUploader onUpload={file => {
        //file upload via HTTP post
      }} ></FileUploader>
    </Box>
  );
}