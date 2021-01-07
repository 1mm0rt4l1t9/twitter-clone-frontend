import React, { useState } from 'react';
import { TextField, Typography, FormControl, FormGroup, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

import { makeStyles } from '@material-ui/core/styles';

import DialogBlock from '../../components/DialogBlock';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueLeftSide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    overflow: 'hidden',
    position: 'relative',
  },
  blueLeftSideList: {
    position: 'relative',
    width: 400,
    padding: 0,
    margin: 0,
    listStyle: 'none',
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      fontSize: 20,
      fontWeight: 700,
      color: '#fff',
    },
  },
  blueLeftSideListItem: {
    marginBottom: 40,
  },
  blueLeftSideListBigIcon: {
    position: 'absolute',
    top: '50%',
    left: '65%',
    transform: 'translate(-50%, -50%)',
    width: '180%',
    height: '180%',
  },
  blueLeftSideListIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  authRightSide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 50%',
    overflow: 'hidden',
  },
  authRightSideWrapper: {
    width: 400,
  },
  twitterIcon: {
    fontSize: 45,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 45,
  },
  button: {
    marginBottom: 20,
  },
  inputContain: {
    marginBottom: 18,
  },
  signUpFields: {
    marginBottom: theme.spacing(5),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();

  const handleSignInOpen = () => {
    setVisibleModal('signIn');
  };

  const handleSignUpOpen = () => {
    setVisibleModal('signUp');
  };

  const handleModalClose = () => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.blueLeftSide}>
        <TwitterIcon className={classes.blueLeftSideListBigIcon} color="primary" />
        <ul className={classes.blueLeftSideList}>
          <li className={classes.blueLeftSideListItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueLeftSideListIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueLeftSideListItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueLeftSideListIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueLeftSideListItem}>
            <Typography variant="h6">
              <ModeCommentOutlinedIcon className={classes.blueLeftSideListIcon} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </div>

      <div className={classes.authRightSide}>
        <div className={classes.authRightSideWrapper}>
          <TwitterIcon className={classes.twitterIcon} color="primary" />
          <Typography className={classes.title} variant="h4">
            Узнайте, что происходит
            <br />в мире прямо сейчас
          </Typography>
          <Typography style={{ marginBottom: 15 }}>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <Button
            onClick={handleSignUpOpen}
            className={classes.button}
            variant="contained"
            color="primary"
            fullWidth>
            Зарегистрироваться
          </Button>
          <Button
            className={classes.button}
            onClick={handleSignInOpen}
            variant="outlined"
            color="primary"
            fullWidth>
            Войти
          </Button>

          <DialogBlock
            title={'Создайте учетную запись'}
            visibleModal={visibleModal === 'signUp'}
            handleModalClose={handleModalClose}>
            <FormControl component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.signUpFields}
                  type="name"
                  id="name"
                  label="Имя"
                  variant="filled"
                  margin="dense"
                  fullWidth
                  autoFocus
                />

                <TextField
                  className={classes.signUpFields}
                  type="email"
                  id="email"
                  label="Почта"
                  variant="filled"
                  margin="dense"
                  fullWidth
                  autoFocus
                />

                <TextField
                  className={classes.signUpFields}
                  type="password"
                  id="password"
                  label="Пароль"
                  variant="filled"
                  margin="dense"
                  fullWidth
                />

                <Button
                  onClick={() => 'хы'}
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={{ marginBottom: 30 }}>
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </DialogBlock>

          <DialogBlock
            title={'Войти в Твиттер'}
            visibleModal={visibleModal === 'signIn'}
            handleModalClose={handleModalClose}>
            <FormControl component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.inputContain}
                  type="email"
                  id="email"
                  label="Почта"
                  variant="filled"
                  margin="dense"
                  fullWidth
                  autoFocus
                />

                <TextField
                  className={classes.inputContain}
                  type="password"
                  id="password"
                  label="Пароль"
                  variant="filled"
                  margin="dense"
                  fullWidth
                />

                <Button
                  onClick={() => 'хы'}
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={{ marginBottom: 30 }}>
                  Вход
                </Button>
              </FormGroup>
            </FormControl>
          </DialogBlock>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
