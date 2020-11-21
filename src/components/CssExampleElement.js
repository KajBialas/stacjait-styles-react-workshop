import React, { useState } from 'react';
import styles from './cssExampleElement.module.scss';
import classNames from 'classnames';

function CssExampleElement() {
  const [ active, setActive ] = useState(false);
  const [ color, setColor ] = useState('');

  const handleClick = () => setActive(!active);
  const handleChange = (e) => setColor(e.target.value);

  const cssExampleElementContainerStyle = {
    backgroundColor: color,
  }

  const containerClassName = classNames(
    styles.cssExampleElementContainer,
    {
      [styles.cssExampleElementContainerActive]: !active,
    }
  )

  return (
    <div
      className={containerClassName}
      style={cssExampleElementContainerStyle}
    >
      <button className={styles.cssExampleElementButton} onClick={handleClick}>Change color</button>
      <input type="text" value={color} onChange={handleChange} />
      <div className={styles.container}>
        dsfsdf
      </div>
    </div>
  )
}

export default CssExampleElement;