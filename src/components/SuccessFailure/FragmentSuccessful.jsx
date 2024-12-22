import { Dialog, DialogBody } from "@material-tailwind/react";
import success from "../../assets/Logo/Vector.png";
const FragmentSuccessful = ({
  handleFragmentSuccess,
  fragmentSuccess,
}) => {
  return (
    <Dialog
      open={fragmentSuccess}
      handler={handleFragmentSuccess}
      className="h-[227px] rounded-2xl flex items-center justify-center" // Added flex, items-center, and justify-center
    >
      <DialogBody className="p-0 m-0 flex flex-col items-center justify-center space-y-[45px]">
        <div>
          <img
            src={success}
            alt=""
            className="object-cover h-[53.33px] w-[53.33px]"
          />
        </div>
        <span className="font-medium text-[28px] leading-[39.2px] text-[#090914]">
          Create Fragment Successfully!
        </span>
      </DialogBody>
    </Dialog>
  );
};

export default FragmentSuccessful;
