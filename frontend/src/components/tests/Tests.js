import React from 'react';
import EmptySection from '../shared/EmptySection';
import {
  withStyles,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Button
} from '@material-ui/core';
import AddTest from './AddTest';
import Context from '../Context';
import { deleteTest } from '../../actions/tests';
import { compose } from 'redux';
import { withRouter } from 'react-router';
const styles = theme => ({});
const Tests = ({ classes, history }) => (
  <Context>
    {({ state: { tests }, dispatch, setDialog }) =>
      Object.keys(tests).length === 0 ? (
        <EmptySection
          subtitle="Start by adding a Scene."
          buttonText="Add a scene"
          onClick={() => setDialog(<AddTest />)}
        />
      ) : (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Tags</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(tests).map(test => (
                <TableRow key={test.id}>
                  <TableCell component="th" scope="row">
                    {test.name}
                  </TableCell>
                  <TableCell>{test.description}</TableCell>
                  <TableCell>
                    {test.tags.map(tag => (
                      <Chip key={tag} label={tag} />
                    ))}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => history.push(`/tests/${test.id}`)}
                      variant="flat"
                      color="primary"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="flat"
                      color="secondary"
                      onClick={() => {
                        if (window.confirm('Delete this scene?'))
                          dispatch(deleteTest(test.id));
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )
    }
  </Context>
);

export default compose(
  withStyles(styles),
  withRouter
)(Tests);
