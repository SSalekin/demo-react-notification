import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, Collapse, Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, ButtonToolbar, Overlay, Popover } from 'react-bootstrap';

import CSSTransitionGroup from 'react-addons-css-transition-group';

const CustomPopover = React.createClass({
  render() {
    return (
      <CSSTransitionGroup
        transitionName="slide"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={100}
        transitionLeaveTimeout={300}
      >
        <div
          style={{
            position: 'absolute',
            width: 200,
            top: 0,
            right: '50%',
            backgroundColor: 'rgb(173, 228, 152',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
            border: '1px solid #CCC',
            borderRadius: 3,
            padding: 10,
          }}
        >
          <strong>Holy guacamole!</strong> Check this info.
        </div>
      </CSSTransitionGroup>
    );
  },
});

const Hello = React.createClass({
  getInitialState() {
    return { show: false };
  },

  toggle() {
    this.setState({ show: !this.state.show });
  },

  render() {
    return (
      <div>
        <Button ref="target" onClick={this.toggle}>
          Notify
        </Button>

        <Overlay
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          container={this}
          target={() => ReactDOM.findDOMNode(this.refs.target)}
        >
          <CustomPopover />
        </Overlay>
      </div>
    );
  },
});

export default Hello
