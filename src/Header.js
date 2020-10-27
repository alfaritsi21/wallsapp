import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Avatar, IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Wallsapp" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Arqi Alfaritsi</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
