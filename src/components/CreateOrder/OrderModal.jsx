import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import close from "../../assets/icon/Close-Square.png";
import OrderForm from "../form/OrderForm";
import ConfirmTransferModal from "./ConfirmTransferModal";
const OrderModal = ({ handleOpen, open }) => {
  const [confirm, setConfirm] = useState(false);
  const handleConfirm = () => setConfirm(!confirm);
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="max-w-[780px] max-h-[900px] overflow-y-scroll scroll-smooth rounded-2xl"
      >
        <DialogHeader className="bg-ash  h-[68px] flex justify-between items-center px-10">
          <span className="text-2xl font-medium leading-[33.6px] text-secondary">
            Create Transfer
          </span>
          <img
            src={close}
            alt="close-icon"
            className="h-6 w-6 object-cover cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>
        <DialogBody className="px-10">
          <OrderForm
            handleOpen={handleOpen}
            open={open}
            handleConfirm={handleConfirm}
            confirm={confirm}
          ></OrderForm>
        </DialogBody>
      </Dialog>
      <ConfirmTransferModal handleConfirm={handleConfirm} confirm={confirm} />
    </>
  );
};

export default OrderModal;
