import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import profileIcon from "../../assets/Logo/profile.png";
import lock from "../../assets/Logo/lock.png";
import gallery from "../../assets/Logo/gallery.png";
import Logout from "../../assets/Logo/Logout.png";
import shieldTick from "../../assets/Logo/shield-tick.png";
import profile from "../../assets/images/Profile.png";
import ChangePasswordModal from "../../components/ChangePasswordModal/ChangePasswordModal";
import Enable2FA from "../../components/Enable2FA/Enable2FA";
import AddPhoto from "../../components/AddPhoto/AddPhoto";
const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2FA, setOpen2FA] = useState(false);
  const [openAddPhoto, setOpenAddPhoto] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleOpen2FA = () => setOpen2FA(!open2FA);
  const handleOpenAddPhoto = () => setOpenAddPhoto(!openAddPhoto);
  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center rounded-full py-0.5 pr-2 pl-0.5"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="h-11 w-11 object-cover"
              src={profile}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-5 min-w-[253px] h-[344px] rounded-[12px] space-y-[10px]">
          <MenuItem className="flex items-center space-x-[10px] h-12">
            <img src={profileIcon} alt="profile" className="h-6 w-6" />
            <Typography className="text-xl font-normal leading-5 text-secondary">
              UID | 571912043
            </Typography>
          </MenuItem>
          <hr className="my-3" />
          <MenuItem
            className="flex items-center space-x-[10px] h-12"
            onClick={handleOpen}
          >
            <img src={lock} alt="profile" className="h-6 w-6" />
            <Typography className="text-xl font-normal leading-5 text-secondary">
              Change Password
            </Typography>
          </MenuItem>
          <MenuItem
            className="flex items-center space-x-[10px] h-12"
            onClick={handleOpen2FA}
          >
            <img src={shieldTick} alt="profile" className="h-6 w-6" />
            <Typography className="text-xl font-normal leading-5 text-secondary">
              Disable 2FA
            </Typography>
          </MenuItem>
          <MenuItem
            className="flex items-center space-x-[10px] h-12"
            onClick={handleOpenAddPhoto}
          >
            <img src={gallery} alt="profile" className="h-6 w-6" />
            <Typography className="text-xl font-normal leading-5 text-secondary">
              Add Photo
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center space-x-[10px] h-12">
            <img src={Logout} alt="profile" className="h-6 w-6" />
            <Typography className="text-xl font-normal leading-5 text-secondary">
              Logout
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
      <ChangePasswordModal handleOpen={handleOpen} open={open} />
      <Enable2FA handleOpen2FA={handleOpen2FA} open2FA={open2FA} />
      <AddPhoto
        handleOpenAddPhoto={handleOpenAddPhoto}
        openAddPhoto={openAddPhoto}
      />
    </>
  );
};

export default ProfileMenu;
