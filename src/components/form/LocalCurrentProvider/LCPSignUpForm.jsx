import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const LCPSignUpForm = () => {
  return (
    <Card className="w-[713px] h-[858px] bg-[#FFFFFF] shadow-inner p-[59px]">
      <Typography className="text-[32px] font-medium text-secondary leading-10">
        Sign Up
      </Typography>
      <Typography className="text-xl font-medium text-secondary leading-7 mt-[63px] mb-9">
        Personal
      </Typography>
      <CardBody className="p-0">
        <div className="grid grid-cols-2 gap-6">
          <div className="w-full">
            <Typography className="text-base font-medium text-[#48484D] leading-[22.4px] mb-[17px]">
              First Name
            </Typography>
            <Input
              type="text"
              placeholder="Enter first name"
              className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
          <div className="w-full">
            <Typography className="text-base font-medium text-[#48484D] leading-[22.4px] mb-[17px]">
              Middle Name
            </Typography>
            <Input
              type="text"
              placeholder="Enter middle name"
              className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
          <div className="w-full space-y-3">
            <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
              Last Name
            </Typography>
            <Input
              type="text"
              placeholder="Enter last name"
              className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
          <div className="w-full space-y-3">
            <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
              Phone Number
            </Typography>
            <Input
              type="text"
              placeholder="Enter Phone Number"
              className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
          <div className="w-full space-y-3">
            <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
              Gender
            </Typography>
            <select
              // label="Select Gender"
              className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl w-full cursor-pointer focus:outline-none px-3"
              // labelProps={{
              //   className: "hidden",
              // }}
              // containerProps={{ className: "min-w-[100px]" }}
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="w-full space-y-3">
            <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
              Date Of Birth
            </Typography>
            <Input
              type="text"
              placeholder="Enter Phone Number"
              className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
        </div>
        <div>
          <Typography className="text-xl font-medium text-secondary leading-7 mt-[27px] mb-9">
            Personal
          </Typography>
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full space-y-3">
              <Typography className="text-base font-medium text-[#48484D] leading-[22.4px] mb-[17px]">
                Password
              </Typography>
              <Input
                type="password"
                placeholder="Enter password"
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
          </div>
        </div>
      </CardBody>
      <CardFooter className="p-0 mt-[49px]">
        <Button
          className="h-12 rounded-[56px] text-base leading-4 font-medium capitalize !shadow-none bg-primary text-white"
          fullWidth
        >
          Create User
        </Button>
        <Typography className="text-center text-base leading-[22.4px] font-normal text-[#8E8F96] mt-6">
          Allready have an account?{" "}
          <Link to="/lcp-signin">
            <span className="text-secondary">Sign in</span>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default LCPSignUpForm;
