import React from 'react';
import Context from '../Context';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  withStyles,
  FormControlLabel,
  Switch
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Close';

import Avatars from '../images/avatars';
import { addActor, updateActor } from '../../actions/actors';

const styles = theme => ({});

class AddActor extends React.Component {
  state = {
    activeStep: 0,
    selectedAvatar: this.props.actor ? this.props.actor.avatarId : null,
    name: this.props.actor ? this.props.actor.name : '',
    description: this.props.actor ? this.props.actor.description : '',
    customAttributes: this.props.actor
      ? this.props.actor.customAttributes
      : [
          {
            key: 'user_name',
            value: ''
          },
          {
            key: 'password',
            value: ''
          }
        ]
  };
  render() {
    const {
      activeStep,
      selectedAvatar,
      name,
      description,
      customAttributes
    } = this.state;
    const steps = ['Select an avatar', 'Select a name', 'Set user data'];
    const buttons = ({
      button1Text,
      button1Click,
      button1Disabled,
      button2Text,
      button2Click,
      button2Disabled
    }) => (
      <DialogActions>
        <Button
          onClick={button1Click}
          disabled={button1Disabled}
          color="primary"
        >
          {button1Text}
        </Button>
        <Button
          onClick={button2Click}
          disabled={button2Disabled}
          color="primary"
        >
          {button2Text}
        </Button>
      </DialogActions>
    );

    return (
      <Context.Consumer>
        {({ setDialog, dispatch }) => (
          <React.Fragment>
            <DialogTitle id="alert-dialog-title">{'Add an actor'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                An actor is used to model a user of your application.
              </DialogContentText>

              <Stepper activeStep={activeStep} orientation="horizontal">
                {steps.map((label, index) => {
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      {/* <StepContent> */}
                      {/* <Typography>{label}</Typography> */}
                      {/* </StepContent> */}
                    </Step>
                  );
                })}
              </Stepper>
              {
                {
                  0: (
                    <React.Fragment>
                      {Avatars.map(av => (
                        <Button
                          key={av.id}
                          color="secondary"
                          variant={selectedAvatar === av.id ? 'raised' : 'flat'}
                          onClick={() =>
                            this.setState({
                              selectedAvatar: av.id,
                              activeStep: 1
                            })
                          }
                        >
                          <img alt={av.id} height="60" src={av.avatar} />
                        </Button>
                      ))}
                      {buttons({
                        button1Text: 'Cancel',
                        button1Click: () => {
                          setDialog(null);
                        },
                        button1Disabled: false,
                        button2Text: 'Next',
                        button2Click: () => this.setState({ activeStep: 1 }),
                        button2Disabled: !selectedAvatar
                      })}
                    </React.Fragment>
                  ),
                  1: (
                    <React.Fragment>
                      <div
                        style={{ justifyContent: 'center', display: 'flex' }}
                      >
                        <img
                          alt={
                            (Avatars.find(a => a.id === selectedAvatar) || {})
                              .id
                          }
                          width="200"
                          src={
                            (Avatars.find(a => a.id === selectedAvatar) || {})
                              .avatar
                          }
                        />
                      </div>
                      <TextField
                        required
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Actor name"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={({ target: { value } }) =>
                          this.setState({ name: value })
                        }
                      />
                      <TextField
                        margin="normal"
                        id="description"
                        label="Actor description"
                        type="text"
                        fullWidth
                        value={description}
                        onChange={({ target: { value } }) =>
                          this.setState({ description: value })
                        }
                      />
                      {buttons({
                        button1Text: 'Back',
                        button1Click: () => this.setState({ activeStep: 0 }),
                        button1Disabled: false,
                        button2Text: 'Next',
                        button2Click: () => this.setState({ activeStep: 2 }),
                        button2Disabled: !name
                      })}
                    </React.Fragment>
                  ),
                  2: (
                    <React.Fragment>
                      <div
                        style={{ justifyContent: 'center', display: 'flex' }}
                      >
                        <img
                          width="200"
                          alt={
                            (Avatars.find(a => a.id === selectedAvatar) || {})
                              .id
                          }
                          src={
                            (Avatars.find(a => a.id === selectedAvatar) || {})
                              .avatar
                          }
                        />
                      </div>
                      {customAttributes.map((attr, i) => (
                        <div key={i} style={{ display: 'flex' }}>
                          <div style={{ flex: 1 }}>
                            <TextField
                              margin="dense"
                              label="Key"
                              InputLabelProps={{
                                shrink: true
                              }}
                              type="text"
                              fullWidth
                              value={attr.key}
                              onChange={({ target: { value } }) =>
                                this.setState({
                                  customAttributes: customAttributes.map(
                                    (ca, index) =>
                                      index === i ? { ...ca, key: value } : ca
                                  )
                                })
                              }
                            />
                          </div>
                          <div style={{ flex: 3 }}>
                            <TextField
                              margin="dense"
                              label="Value"
                              InputLabelProps={{
                                shrink: true
                              }}
                              type={attr.password ? 'password' : 'text'}
                              fullWidth
                              value={attr.value}
                              onChange={({ target: { value } }) =>
                                this.setState({
                                  customAttributes: customAttributes.map(
                                    (ca, index) =>
                                      index === i ? { ...ca, value: value } : ca
                                  )
                                })
                              }
                            />
                          </div>
                          <div style={{ marginTop: 10 }}>
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={attr.password}
                                  onChange={({ target: { checked } }) =>
                                    this.setState({
                                      customAttributes: customAttributes.map(
                                        (ca, index) =>
                                          index === i
                                            ? { ...ca, password: checked }
                                            : ca
                                      )
                                    })
                                  }
                                />
                              }
                              label={'Password'}
                            />
                          </div>
                          <div style={{ marginTop: 16 }}>
                            <Button
                              onClick={() =>
                                this.setState({
                                  customAttributes: customAttributes.filter(
                                    (ca, index) => i !== index
                                  )
                                })
                              }
                            >
                              <DeleteIcon />
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Button
                        onClick={() =>
                          this.setState({
                            customAttributes: [
                              ...customAttributes,
                              { key: '', value: '' }
                            ]
                          })
                        }
                      >
                        Add new row
                      </Button>
                      {buttons({
                        button1Text: 'Back',
                        button1Click: () => this.setState({ activeStep: 1 }),
                        button1Disabled: false,
                        button2Text: 'Finish',
                        button2Click: () => {
                          if (this.props.actor) {
                            dispatch(
                              updateActor(
                                this.props.actor.id,
                                this.state.name,
                                this.state.description,
                                this.state.selectedAvatar,
                                this.state.customAttributes
                              )
                            );
                          } else {
                            dispatch(
                              addActor(
                                this.state.name,
                                this.state.description,
                                this.state.selectedAvatar,
                                this.state.customAttributes
                              )
                            );
                          }
                          setDialog(null);
                        },
                        button2Disabled: !name
                      })}
                    </React.Fragment>
                  )
                }[activeStep]
              }
              <div style={{ width: 600 }} />
            </DialogContent>
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}

export default withStyles(styles)(AddActor);
