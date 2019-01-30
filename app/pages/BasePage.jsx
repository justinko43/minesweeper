import React from 'react';
import classNames from 'classnames/bind';

import Game from '../containers/Game';
import styles from './scss/base-page.scss';

const cx = classNames.bind(styles);

function BasePage() {
  return (
    <div className={cx('base-page')}>
      <Game />
    </div>
  );
}

export default BasePage;
