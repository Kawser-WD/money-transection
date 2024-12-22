import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import ConfirmTransferTable from "../CreateOrder/ConfirmTransferTable";
import close from "../../assets/icon/Close-Square.png";
import ManualDepositForm from "../form/ManualDepositForm";
import SquareDepositForm from "../form/SquareDepositForm";
const SquareDeposit = ({ handleOpenSquare, openSquare }) => {
  return (
    <Dialog
      open={openSquare}
      handler={handleOpenSquare}
      className="w-[648px] h-[785px] rounded-2xl"
    >
      <DialogHeader className="bg-ash h-[68px] flex justify-between items-center px-6 rounded-2xl">
        <span className="text-2xl font-medium leading-[33.6px] text-secondary">
          Manual Deposit
        </span>
        <img
          src={close}
          alt="close-icon"
          className="h-6 w-6 object-cover cursor-pointer"
          onClick={handleOpenSquare}
        />
      </DialogHeader>
      <DialogBody className="px-6">
        <SquareDepositForm handleOpenSquare={handleOpenSquare} />
      </DialogBody>
    </Dialog>
  );
};

export default SquareDeposit;
