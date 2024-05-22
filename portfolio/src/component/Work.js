import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

import CardData from './CardData'; 

const Work = () => {
  return (
    <div className='project'>
      <div className='project-container'>
        {CardData.map((val, index) => (
          <Card className='card' key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{height: 185}}
              image={val.imgsrc}
              title={val.title}
            />
            <CardContent>
                {val.text}
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between'}} >
              <Button className= 'btn' size="medium" sx={{color: 'white', backgroundColor: 'black'}} href={val.source}>Code</Button>
              <Button className= 'btn' size="medium" sx={{color: 'white', backgroundColor: 'black'}} href={val.view}>View</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div> 
  );
}

export default Work;
