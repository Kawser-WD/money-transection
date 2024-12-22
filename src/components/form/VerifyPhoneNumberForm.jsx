import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import arrowLeft from "../../assets/icon/Arrow - Left.png";
import { Link } from "react-router-dom";

const VerifyPhoneNumberForm = () => {
  return (
    <Card className="w-[600px] h-[416px] bg-[#FFFFFF] shadow-inner py-[34px] px-[30px] space-y-8">
      <Link to="/forgot-password">
        <Typography className="text-base font-normal text-secondary leading-[22.4px] flex items-center gap-2">
          <img src={arrowLeft} alt="" /> Back
        </Typography>
      </Link>
      <Typography className="text-[32px] font-medium text-secondary leading-10">
        Verify Phone Number
      </Typography>
      <div className="w-full h-[38px] rounded-[10px] py-2 px-4 bg-[#E9AA00] bg-opacity-[10%]">
        <Typography className="text-center text-base font-normal text-[#E9AA00] leading-[22.4px]">
          Confirm the last 3 digit of your phone number : ***763
        </Typography>
      </div>
      <CardBody className="p-0 mt-6">
        <div className="w-full space-y-3">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
            Enter last 3 digit of your phone number
          </Typography>
          <Input
            type="text"
            placeholder="Enter last 3 digits"
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
      </CardBody>
      <CardFooter className="p-0 m-0">
        <Link to="/reset-password">
          {" "}
          <Button
            className="h-12 rounded-[56px] text-base leading-4 font-medium capitalize !shadow-none bg-primary text-white"
            fullWidth
          >
            Submit
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default VerifyPhoneNumberForm;
