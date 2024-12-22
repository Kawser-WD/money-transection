import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import close from "../../assets/icon/Close-Square.png";
import { useState } from "react";
import Enable2FAScan from "./Enable2FAScan";
const Enable2FA = ({ handleOpen2FA, open2FA }) => {
  const [open2FAScan, setOpen2FAScan] = useState(false);

  const handleOpen2FAScan = () => setOpen2FAScan(!open2FAScan);
  return (
    <>
      <Dialog
        open={open2FA}
        handler={handleOpen2FA}
        className="w-[548px] h-[237px] rounded-2xl"
      >
        <DialogHeader className="bg-ash h-[68px] flex justify-between items-center px-6 rounded-2xl">
          <span className="text-2xl font-medium leading-[33.6px] text-secondary">
            Enable 2FA
          </span>
          <img
            src={close}
            alt="close-icon"
            className="h-6 w-6 object-cover cursor-pointer"
            onClick={handleOpen2FA}
          />
        </DialogHeader>
        <DialogBody className="px-6 py-8">
          <Typography className="text-lg font-normal leading-[25.2px] text-secondary">
            Are you sue want to enable 2FA?
          </Typography>
        </DialogBody>
        <DialogFooter className="flex gap-[10px]">
          <Button
            className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#FEDCD0]  shadow-none hover:shadow-none capitalize"
            ripple={false}
            onClick={handleOpen2FA}
          >
            <Typography className="text-base text-[#FA5014] leading-4 font-medium">
              No
            </Typography>
          </Button>
          <Button
            className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#4CAF50] text-base text-white leading-4 font-medium shadow-none hover:shadow-none capitalize"
            ripple={false}
            onClick={() => {
              handleOpen2FA();
              handleOpen2FAScan();
            }}
          >
            Change
          </Button>
        </DialogFooter>
      </Dialog>
      <Enable2FAScan
        handleOpen2FAScan={handleOpen2FAScan}
        open2FAScan={open2FAScan}
      />
    </>
  );
};

export default Enable2FA;
