import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import close from "../../assets/icon/Close-Square.png";
import ConfirmTransferTable from "./ConfirmTransferTable";
const ConfirmTransferModal = ({ handleConfirm, confirm }) => {
  return (
    <>
      <Dialog
        open={confirm}
        handler={handleConfirm}
        className="w-[920px] h-[569px] rounded-2xl"
      >
        <DialogHeader className="bg-ash h-[68px] flex justify-between items-center px-6 rounded-2xl">
          <span className="text-2xl font-medium leading-[33.6px] text-secondary">
            Confirm Transfer
          </span>
          <img
            src={close}
            alt="close-icon"
            className="h-6 w-6 object-cover cursor-pointer"
            onClick={handleConfirm}
          />
        </DialogHeader>
        <DialogBody className="px-6">
          <ConfirmTransferTable></ConfirmTransferTable>
        </DialogBody>
        <DialogFooter className="flex gap-[10px]">
          <Button
            className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#FEDCD0]  shadow-none hover:shadow-none capitalize"
            ripple={false}
            onClick={handleConfirm}
          >
            <Typography className="text-base text-[#FA5014] leading-4 font-medium">
              Cancel
            </Typography>
          </Button>
          <Button
            className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#4CAF50] text-base text-white leading-4 font-medium shadow-none hover:shadow-none capitalize"
            ripple={false}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ConfirmTransferModal;
