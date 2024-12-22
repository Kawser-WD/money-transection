import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import close from "../../../assets/icon/Close-Square.png";
import ConfirmTransectionForm from "../Manager/ConfirmFragmentForm";
const ConfirmTransection = ({
  handleOpenConfirmTransection,
  handleFragmentSuccess,
  fragmentSuccess,
  confirmTransection,
  handleFragmentFailed,
  fragmentFailed,
}) => {
  return (
    <Dialog
      open={confirmTransection}
      handler={handleOpenConfirmTransection}
      className="w-[780px] h-[530px] rounded-2xl"
    >
      <DialogHeader className="bg-ash h-[68px] flex justify-between items-center px-6 rounded-2xl">
        <span className="text-2xl font-medium leading-[33.6px] text-secondary">
          Create Fragments
        </span>
        <img
          src={close}
          alt="close-icon"
          className="h-6 w-6 object-cover cursor-pointer"
          onClick={handleOpenConfirmTransection}
        />
      </DialogHeader>
      <DialogBody className="px-6">
        <ConfirmTransectionForm
          handleOpenConfirmTransection={handleOpenConfirmTransection}
          handleFragmentSuccess={handleFragmentSuccess}
          fragmentSuccess={fragmentSuccess}
          handleFragmentFailed={handleFragmentFailed}
          fragmentFailed = {fragmentFailed}
        />
      </DialogBody>
    </Dialog>
  );
};

export default ConfirmTransection;
