import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ManagerSignInForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = userId && password; // Check if both fields are filled

  return (
    <Card className="w-[600px] h-[555px] bg-[#FFFFFF] shadow-inner py-[34px]  p-[59px]">
      <Typography className="text-[32px] font-medium text-secondary leading-10 mb-12">
        Sign In
      </Typography>
      <CardBody className="p-0 m-0 space-y-[30px]">
        <div className="w-full space-y-3">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
            User ID
          </Typography>
          <Input
            type="text"
            placeholder="Enter user ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <div className="w-full space-y-3">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
            Password
          </Typography>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <Link to="/manager-forgot-password">
          <Typography className="text-right text-sm font-medium text-primary leading-5 mt-[14px]">
            Forgot Password ?
          </Typography>
        </Link>
      </CardBody>
      <CardFooter className="p-0 mt-[42px]">
        <Link to="/dashboard/manager-table">
          <Button
            className={`h-12 rounded-[56px] text-base leading-4 font-medium capitalize !shadow-none ${
              isFormValid
                ? "bg-primary text-white"
                : "bg-[#F2F2F2] text-[#48484D]"
            }`}
            fullWidth
            disabled={!isFormValid}
          >
            Sign in
          </Button>
        </Link>
        <Typography className="text-center text-base leading-[22.4px] font-normal text-[#8E8F96] mt-6">
          Don’t have an account?{" "}
          <Link to="/manager-signUp">
            <span className="text-secondary">Sign Up</span>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default ManagerSignInForm;
