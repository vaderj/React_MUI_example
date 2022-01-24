import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
//import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//import InboxIcon from '@mui/icons-material/MoveToInbox';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
//import CastleIcon from '@mui/icons-material/Castle';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import CabinIcon from '@mui/icons-material/Cabin';

//import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import createSvgIcon from '@mui/material/utils/createSvgIcon';
import { loadCSS } from 'fg-loadcss';

const GithubIcon = createSvgIcon(
  <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/>
  ,'Github');

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface IDrawerProps{
  open:boolean;
  callback:any;
  homeCloseCallback:any;
  countOpenCloseCallback:any;
  d3Callback:any;
  leafletCallback:any;
  fieldorgCallback:any;
}

export const TemporaryDrawer:React.FunctionComponent<IDrawerProps> = (props) => {
  const [state, setState] = React.useState({
    top: false,
    left: props.open,
    bottom: false,
    right: false,
  });

  React.useEffect(() => {
    setState({ 
      top: false,
      left: props.open,
      bottom: false,
      right: false,
     });
  }, [props.open])

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild,
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, [])

  console.log("TemporaryDrawer component => props : ",props);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      props.callback(open);
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem button key={'Close Menu'} onClick={toggleDrawer(anchor, false)} >
            <ListItemIcon>
              <Icon baseClassName="fas" className="fa-times" sx={{ color:"red" }} />
            </ListItemIcon>
            <ListItemText primary={'Close Menu'} />
          </ListItem>

      <Divider />

        <ListItem button key={'home'} onClick={()=>{props.homeCloseCallback(true)}}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>

          <ListItem button key={'d3'} onClick={()=>{props.d3Callback(true)}}>
            <ListItemIcon>
               <MapIcon />
            </ListItemIcon>
            <ListItemText primary={'d3'} />
          </ListItem>

          <ListItem button key={'leaflet'} onClick={()=>{props.leafletCallback(true)}} >
            <ListItemIcon>
              <MyLocationIcon /> 
            </ListItemIcon>
            <ListItemText primary={'leaflet'} />
          </ListItem>

          <ListItem button key={'countOpenClose'} onClick={()=>{props.countOpenCloseCallback(true)}}>
            <ListItemIcon>
              <HourglassTopIcon /> 
            </ListItemIcon>
            <ListItemText primary={'Count Open/Close countdown'} />
          </ListItem>
{/*
          <ListItem button key={'fieldorg'} onClick={()=>{props.fieldorgCallback(true)}}>
            <ListItemIcon>
              <CabinIcon /> 
            </ListItemIcon>
            <ListItemText primary={'FieldOrg'} />
          </ListItem>*/}
          
      </List>
      <Divider />
      <List>
        {/*['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))/*}*/}

          <ListItem button key={'githubLinkKeyId'} onClick={()=> window.open("http://github.com/vaderj", "_tab")} > 
            <ListItemIcon>
              <GithubIcon />
            </ListItemIcon>
            <ListItemText primary={'Github'} />
          </ListItem>
          <ListItem button key={'hackadayLinkKeyId'} onClick={()=> window.open("https://hackaday.io/vader", "_tab")} > 
            <ListItemIcon>
              <GithubIcon />
            </ListItemIcon>
            <ListItemText primary={'HackADay.io'} />
          </ListItem>
          <ListItem button key={'thingiversLinkKeyId'} onClick={()=> window.open("https://www.thingiverse.com/vaderj", "_tab")} > 
            <ListItemIcon>
              <GithubIcon />
            </ListItemIcon>
            <ListItemText primary={'Thingiverse'} />
          </ListItem>



      </List>
    </Box>
  );
/*
  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>*/

    return (
      <div>
        
            <Drawer
              anchor={'left'}
              open={props.open}
              onClose={toggleDrawer('left', false)}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {list('left')}
            </Drawer>
        
        
      </div>
  );
}