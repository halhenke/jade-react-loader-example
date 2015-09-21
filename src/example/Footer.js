import React from 'react';
import styles from './Footer.css';
import jade from './jade/footer.jade';

export default class Footer extends React.Component {
  render() {
    return jade({styles});
  }
}
