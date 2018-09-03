import React from 'react';
import Context from '../Context';
import cuid from 'cuid';
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
  Chip
} from '@material-ui/core';
import { addTest } from '../../actions/tests';

const styles = theme => ({});

class AddActor extends React.Component {
  state = {
    activeStep: 0,
    name: this.props.scene ? this.props.scene.name : '',
    description: this.props.scene ? this.props.scene.description : '',
    tags: this.props.scene ? this.props.scene.tags : [],
    currentTag: ''
  };
  render() {
    const { activeStep, name, description, tags } = this.state;
    const steps = ['Scene details', 'Add tags'];
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
            <DialogTitle id="alert-dialog-title">{'Add a scene'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                An scene describes a series of actions performed by actors.
                Scenes should be thought of as Functional Tests.
              </DialogContentText>

              <Stepper activeStep={activeStep} orientation="horizontal">
                {steps.map((label, index) => {
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {
                {
                  0: (
                    <React.Fragment>
                      <TextField
                        required
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Scene name"
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
                        label="Scene description"
                        type="text"
                        fullWidth
                        multiline
                        value={description}
                        onChange={({ target: { value } }) =>
                          this.setState({ description: value })
                        }
                      />
                      {buttons({
                        button1Text: 'Cancel',
                        button1Click: () => {
                          setDialog(null);
                        },
                        button1Disabled: false,
                        button2Text: 'Next',
                        button2Click: () => this.setState({ activeStep: 1 }),
                        button2Disabled: !name
                      })}
                    </React.Fragment>
                  ),
                  1: (
                    <React.Fragment>
                      <form
                        onSubmit={a => {
                          if (!this.state.currentTag) {
                            return;
                          }
                          if (tags.includes(this.state.currentTag)) {
                            this.setState({ currentTag: '' });
                            return;
                          }
                          this.setState({
                            tags: [...tags, this.state.currentTag],
                            currentTag: ''
                          });
                        }}
                        style={{ display: 'flex', alignItems: 'baseline' }}
                      >
                        <TextField
                          autoFocus
                          margin="normal"
                          label="Tags"
                          type="text"
                          fullWidth
                          value={this.state.currentTag}
                          onChange={({ target: { value } }) =>
                            this.setState({
                              currentTag: value
                            })
                          }
                        />
                        <div style={{ width: 12 }} />
                        <Button
                          type="submit"
                          color="secondary"
                          variant="contained"
                          disabled={!this.state.currentTag}
                        >
                          Add
                        </Button>
                      </form>
                      {tags.map(tag => (
                        <Chip
                          key={tag}
                          label={tag}
                          onDelete={() =>
                            this.setState({
                              tags: tags.filter(t => t !== tag)
                            })
                          }
                        />
                      ))}
                      {buttons({
                        button1Text: 'Back',
                        button1Click: () => this.setState({ activeStep: 0 }),
                        button1Disabled: false,
                        button2Text: 'Finish',
                        button2Click: () => {
                          //   alert('redirect');
                          dispatch(addTest(cuid(), name, description, tags));
                          setDialog(null);
                        },
                        button2Disabled: false
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
