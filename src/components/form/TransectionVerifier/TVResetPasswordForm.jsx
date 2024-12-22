import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import arrowLeft from "../../../assets/icon/Arrow - Left.png";
const TVResetPasswordForm = () => {
  return (
    <Card className="w-[600px] h-[653px] bg-[#FFFFFF] shadow-inner p-[59px]">
      <Link to="/">
        <Typography className="text-base font-normal text-secondary leading-[22.4px] flex items-center gap-2">
          <img src={arrowLeft} alt="" /> Back
        </Typography>
      </Link>
      <Typography className="text-[32px] font-medium text-secondary leading-10 mt-11 mb-[53px]">
        Reset Password
      </Typography>
      <CardBody className="p-0">
        <div className="w-full">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px] mb-[17px]">
            Reset Code
          </Typography>
          <Input
            type="text"
            placeholder="Enter reset code"
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <div className="w-full my-[29px]">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px] mb-[17px]">
            New Password
          </Typography>
          <Input
            type="password"
            placeholder="Enter new password"
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <div className="w-full space-y-3">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
            Confirm Password
          </Typography>
          <Input
            type="password"
            placeholder="Enter confirm password"
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
      </CardBody>
      <CardFooter className="p-0 mt-[49px]">
        <Link to="/tv-verify-phone-number">
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

export default TVResetPasswordForm;
