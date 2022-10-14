import { Avatar, Card, Rating, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

export default function LanguageCard(props) {
  const { language, image, experience, value } = props;

  return (
    <Card sx={{padding: 1, backgroundColor: 'transparent', shadowOpacity: 0}}>
        <Stack direction="row" alignItems={"center"}>
            <Avatar src={image} sx ={{display: {width: "25%", height: "25%"}}} alt="kotlin"/>
            <Typography sx={{typography: { sm: "h6", xs: {fontSize: 15}, }}} color={"common.white"}>{language}</Typography>
        </Stack>
        <Stack alignItems={"center"}>
            <Typography sx={{justifyContent: "center", mb: 1, typography: { sm: {fontSize: 25}, xs: {fontSize: 10}, }}} color={"common.white"}>{experience}</Typography>
            <Rating name="read-only" value={value} readOnly sx={{justifyContent: "center"}} />
        </Stack>
    </Card>
  );
}