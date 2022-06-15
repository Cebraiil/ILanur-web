import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Chapters = ({ chapters }) => {
  return (
    <div style={{textAlign:'center'}}>
    <h1>Quran Screen</h1>
        <Box  sx={{ flexGrow: 1, marginRight:2, marginLeft:2 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            {chapters.data.map(chapter => (
              <Grid key={chapter.number} item xs={2} sm={4} md={4}>
                  <Card className='card-chapter' variant="outlined" sx={{padding:2}}>
                    <div style={{float:'left'}}>
                      <div class="numberCircle">{chapter.number}</div>
                    </div>
                    <div style={{float:'left', paddingLeft:10, direction:'ltr'}}>
                      <div>{chapter.englishName}</div>
                      <div style={{fontSize:11,direction:'ltr', float:'left' }}>{chapter.revelationType}</div>
                    </div>
                    <div style={{float:'right', paddingLeft:10, direction:'rtl'}}>
                      <div>{chapter.name}</div>
                      <div style={{fontSize:11}}>Ayahs {chapter.number}</div>
                    </div>
                  </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
    </div>
  );
}

export default Chapters
