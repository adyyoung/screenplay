import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import ActionIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VideoIcon from '@material-ui/icons/Videocam';
import { withRouter } from 'react-router';
import { Divider } from '@material-ui/core';
const MainNavigation = ({ history, match }) => {
  const activePath = match.path;
  const items = [
    {
      label: 'Actors',
      secondary: 'Application users',
      icon: <FaceIcon />,
      href: '/actors'
    },
    {
      label: 'Scripts',
      secondary: 'Series of actions',
      icon: <AssignmentIcon />,
      href: '/tasks'
    },
    {
      label: 'Actions',
      secondary: 'Interactions with elements',
      icon: <ActionIcon />,
      href: '/actions'
    },
    {
      label: 'Elements',
      secondary: 'Webpage elements',
      icon: <LayersIcon />,
      href: '/elements'
    }
  ];
  const secondaryItems = [
    {
      label: 'Scenes',
      secondary: 'Tests',
      icon: <VideoIcon />,
      href: '/tests'
    }
  ];
  const renderListItem = ({ label, icon, href, secondary }) => (
    <ListItem
      selected={href === activePath}
      key={label}
      button
      onClick={() => history.push(href)}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} secondary={secondary} />
    </ListItem>
  );
  return (
    <div>
      {items.map(renderListItem)}
      <Divider />
      {secondaryItems.map(renderListItem)}
    </div>
  );
};

export default withRouter(MainNavigation);
