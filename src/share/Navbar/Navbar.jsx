import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Logo from "../../assets/Logo/Nav-Logo.png";
import NotificationIcon from "../../assets/icon/notification.png";
import ProfileMenu from "./ProfileMenu";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    "New order received.",
    "Your password was updated successfully.",
    "You have a new message.",
  ]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const deleteNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Navbar className="sticky top-0 z-10 h-20 max-w-full rounded-none shadow-none border border-[#E1E2E3] px-4 py-2 lg:px-[39px] lg:py-6">
      <div className="flex items-center justify-between text-blue-gray-900 lg:-mt-[10px] mt-[10px]">
        <img src={Logo} alt="logo" className="h-8 w-28 object-cover" />
        <div className="flex items-center gap-4">
          <div className="relative flex items-center gap-5">
            <button
              className="relative focus:outline-none"
              onClick={toggleNotifications}
            >
              <img
                src={NotificationIcon}
                alt="notification"
                className="h-5 w-5 object-cover"
              />
              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {notifications.length}
                </span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute top-10 -left-64 w-80 bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                {notifications.length === 0 ? (
                  <p className="text-gray-500">No new notifications</p>
                ) : (
                  <ul>
                    {notifications.map((notification, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center py-2 border-b last:border-none"
                      >
                        <span className="text-gray-800">{notification}</span>
                        <button
                          className="text-red-600 text-sm"
                          onClick={() => deleteNotification(index)}
                        >
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <div className="border-r h-11"></div>
            <ProfileMenu />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm">
            <span>Sign in</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default StickyNavbar;
