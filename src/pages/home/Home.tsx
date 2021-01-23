import React from 'react';
import {
  Container,
  Grid,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const useStyles = makeStyles({
  root: {
    height: '100vh'
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenu: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 10,
  },
  itemIcon: {
    fontSize: 28,
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul className={classes.sideMenu}>
            <li className={classes.listItem}>
              <IconButton className={classes.logo} color="primary">
                <TwitterIcon className={classes.logoIcon} />
              </IconButton>
            </li>
            <li className={classes.listItem}>
              <IconButton>
                <SearchIcon className={classes.itemIcon} />
              </IconButton>
              <Typography className={classes.itemLabel} variant="h6">
                Поиск
              </Typography>
            </li>
            <li className={classes.listItem}>
              <IconButton>
                <NotificationsNoneIcon className={classes.itemIcon} />
              </IconButton>
              <Typography className={classes.itemLabel} variant="h6">
                Уведомления
              </Typography>
            </li>
            <li className={classes.listItem}>
              <IconButton>
                <MailOutlineIcon className={classes.itemIcon} />
              </IconButton>
              <Typography className={classes.itemLabel} variant="h6">
                Сообщения
              </Typography>
            </li>
            <li className={classes.listItem}>
              <IconButton>
                <BookmarkBorderIcon className={classes.itemIcon} />
              </IconButton>
              <Typography className={classes.itemLabel} variant="h6">
                Закладки
              </Typography>
            </li>
            <li className={classes.listItem}>
              <IconButton>
                <ListAltIcon className={classes.itemIcon} />
              </IconButton>
              <Typography className={classes.itemLabel} variant="h6">
                Список
              </Typography>
            </li>
            <li className={classes.listItem}>
              <IconButton>
                <PersonOutlineIcon className={classes.itemIcon} />
              </IconButton>
              <Typography className={classes.itemLabel} variant="h6">
                Профиль
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper>123</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>123</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
