import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import close from "../../assets/icon/Close-Square.png";
import ManualDepositForm from "../form/ManualDepositForm";
const ManualDeposit = ({ handleOpenManual, openManual }) => {
  return (
    <Dialog
      open={openManual}
      handler={handleOpenManual}
      className="w-[668px] h-[675px] rounded-2xl"
    >
      <DialogHeader className="bg-ash h-[68px] flex justify-between items-center px-6 rounded-2xl">
        <span className="text-2xl font-medium leading-[33.6px] text-secondary">
          Manual Deposit
        </span>
        <img
          src={close}
          alt="close-icon"
          className="h-6 w-6 object-cover cursor-pointer"
          onClick={handleOpenManual}
        />
      </DialogHeader>
      <DialogBody className="px-6">
        <ManualDepositForm handleOpenManual={handleOpenManual} />
      </DialogBody>
    </Dialog>
  );
};

export default ManualDeposit;
