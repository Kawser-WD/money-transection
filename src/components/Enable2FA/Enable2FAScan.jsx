import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import close from "../../assets/icon/Close-Square.png";
import scan from "../../assets/images/scan.png";
const Enable2FAScan = ({ handleOpen2FAScan, open2FAScan }) => {
  return (
    <Dialog
      open={open2FAScan}
      handler={handleOpen2FAScan}
      className="w-[548px] h-[420px] rounded-2xl"
    >
      <DialogHeader className="bg-ash h-[68px] flex justify-between items-center px-6 rounded-2xl">
        <span className="text-2xl font-medium leading-[33.6px] text-secondary">
          Enable 2FA
        </span>
        <img
          src={close}
          alt="close-icon"
          className="h-6 w-6 object-cover cursor-pointer"
          onClick={handleOpen2FAScan}
        />
      </DialogHeader>
      <DialogBody className="px-6 py-8 flex justify-center items-center">
        <img
          src={scan}
          alt="scan"
          className="h-[200px] w-[200px] object-cover"
        />
      </DialogBody>
      <DialogFooter className="flex gap-[10px]">
        <Button
          className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#FEDCD0]  shadow-none hover:shadow-none capitalize"
          ripple={false}
          onClick={handleOpen2FAScan}
        >
          <Typography className="text-base text-[#FA5014] leading-4 font-medium">
            Close
          </Typography>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Enable2FAScan;
