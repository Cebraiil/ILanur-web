import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Card from '@mui/material/Card';

export default function Test() {
  return (

    <Card variant="outlined" sx={{padding:1}}>
      <div style={{float:'left'}}>
        <div class="numberCircle">100</div>
      </div>
      <div style={{float:'left', paddingLeft:10}}>
        <div style={{fontSize:19}}>Al-Fatiha</div>
        <div style={{fontSize:11}}>The Opening</div>
      </div>
      <div style={{float:'right', paddingLeft:10, direction:'rtl'}}>
        <div style={{fontSize:19}}>سُورَةُ ٱلْفَاتِحَةِ</div>
        <div style={{fontSize:11}}>234 Ayahs</div>
      </div>
    </Card>
  );
}
