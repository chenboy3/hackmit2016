import React from 'react';
import Task from './Task.jsx';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

export default React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    let {tasks} = this.props;

    if (tasks.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }

    return (
      <form>
        <ListGroup>
          {tasks.map(task =>
            <Task task={task} key={task.title} />
          )}
        </ListGroup>
      </form>
    );
  }
});
