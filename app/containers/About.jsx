import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>Prism</h1>
      <div className={cx('description')}>
        <p>Icloud Build Automation tool.<br />
         Our Goal is  to bring up partition, kick Hosts and Break Fix hosts faster and efficient
        </p>
      </div>
      <div className={cx('contribute')}>
        <p>Want to contribute? Help us out!
          If you think the code on &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/choonkending/react-webpack-node">this repo</a>
        &nbsp;could be improved, please create an issue&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/choonkending/react-webpack-node/issues">here</a>!
        </p>
      </div>
    </div>
  );
};

export default About;
