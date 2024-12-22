import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import close from "../../assets/icon/Close-Square.png";
import ChangePasswordForm from "../form/ChangePasswordForm";
const ChangePasswordModal = ({ handleOpen, open }) => {
  //   const [open, setOpen] = useState(false);

  //   const handleOpen = () => setOpen(!open);
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="w-[548px] h-[470px] rounded-2xl"
    >
      <DialogHeader className="bg-ash h-[68px] flex justify-between items-center px-10 rounded-2xl">
        <span className="text-2xl font-medium leading-[33.6px] text-secondary">
          Change Password
        </span>
        <img
          src={close}
          alt="close-icon"
          className="h-6 w-6 object-cover cursor-pointer"
          onClick={handleOpen}
        />
      </DialogHeader>
      <DialogBody className="px-10">
        <ChangePasswordForm />
      </DialogBody>
    </Dialog>
  );
};

export default ChangePasswordModal;
