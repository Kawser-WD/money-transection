import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import close from "../../assets/icon/Close-Square.png";
import failed from "../../assets/Logo/Info Square.png";
const TransectionFailed = ({ handleTransectionFailed, transectionFailed }) => {
  return (
    <Dialog
      open={transectionFailed}
      handler={handleTransectionFailed}
      className="h-[227px] rounded-2xl flex items-center justify-center" // Added flex, items-center, and justify-center
    >
      <DialogBody className="p-0 m-0 flex flex-col items-center justify-center space-y-[45px]">
        <div>
          <img
            src={failed}
            alt=""
            className="object-cover h-[53.33px] w-[53.33px]"
          />
        </div>
        <span className="font-medium text-[28px] leading-[39.2px] text-[#090914]">
          Transection Failed
        </span>
      </DialogBody>
    </Dialog>
  );
};

export default TransectionFailed;
