import React from 'react';
import styles from './Content.css';
import jade from './jade/content.jade';

export default class Content extends React.Component {
  render() {
    return jade({styles});
  }
}
