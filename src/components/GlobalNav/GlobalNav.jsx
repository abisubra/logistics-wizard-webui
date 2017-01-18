import React from 'react';
import IconButton from 'material-ui/IconButton';
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar';
import { Icon } from 'react-fa';
import { Link } from 'react-router';
import RoleSwitcher from 'containers/RoleSwitcherContainer';
import classes from './GlobalNav.scss';

const styles = {
  separator: {
    margin: '0px 0.75rem 0px 1rem',
  },
  toolbarTitle: {
    fontSize: '.8rem',
    fontWeight: '600',
  },
  toolbar: {
    height: '42px',
  },
  toolbarGroup: {
    display: 'flex',
  },
  icon: {
    width: '1.7rem',
    height: '1.7rem',
  },
  iconButton: {
    top: '-1.5px',
  },
};

export const GlobalNav = () => (
  <div className={classes.globalNav}>
    <Toolbar style={styles.toolbar}>
      <ToolbarGroup firstChild>
        <Link to="/">
          <ToolbarTitle text="Logistics Wizard" className={classes.title} style={styles.toolbarTitle} />
        </Link>
      </ToolbarGroup>

      <ToolbarGroup style={styles.toolbarGroup}>
        <RoleSwitcher />
        <IconButton style={styles.iconButton}>
          <a href="https://github.com/IBM-Bluemix/logistics-wizard" target="_blank">
            <Icon
              style={styles.icon}
              name="github"
              className={classes.github}
            />
          </a>
        </IconButton>

      </ToolbarGroup>
    </Toolbar>
  </div>
);

GlobalNav.propTypes = {
};

export default GlobalNav;
