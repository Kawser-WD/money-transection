import { Button, Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ConfirmTransectionForm = ({
  handleOpenConfirmTransection,
  handleTransectionSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange", // Enables validation on change
  });

  // Local state to track focus
  const [focusedFields, setFocusedFields] = useState({});

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };

  const onSubmit = (data) => {
    handleOpenConfirmTransection(data);
  };

  const watchFields = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5">
      <div className="w-full space-y-3">
        <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
          Lock Id
        </Typography>
        <Input
          type="password"
          placeholder="Enter Lock Id"
          {...register("lockId", { required: "Lock Id is required" })}
          className={`!border ${
            watchFields.lockId || focusedFields.lockId
              ? "bg-[#E8F0FE] !border-[#CBD5E0]"
              : errors.lockId
              ? "!border-red-500"
              : "!border-[#CBD5E0]"
          } text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 h-[48px] !rounded-3xl`}
          onFocus={() => handleFocus("lockId")}
          onBlur={() => handleBlur("lockId")}
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        {errors.lockId && (
          <Typography className="text-sm text-red-500 mt-1">
            {errors.lockId.message}
          </Typography>
        )}
      </div>
      <div className="w-full space-y-3">
        <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
          Account Number
        </Typography>
        <Input
          type="text"
          placeholder="Enter Account Number"
          {...register("accountNumber", {
            required: "Account Number is required",
          })}
          className={`!border ${
            watchFields.accountNumber || focusedFields.accountNumber
              ? "bg-[#E8F0FE] !border-[#CBD5E0]"
              : errors.accountNumber
              ? "!border-red-500"
              : "!border-[#CBD5E0]"
          } text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl`}
          onFocus={() => handleFocus("accountNumber")}
          onBlur={() => handleBlur("accountNumber")}
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        {errors.accountNumber && (
          <Typography className="text-sm text-red-500 mt-1">
            {errors.accountNumber.message}
          </Typography>
        )}
      </div>
      <div className="w-full space-y-3">
        <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
          Amount
        </Typography>
        <Input
          type="text"
          placeholder="Enter Amount"
          {...register("amount", { required: "Amount is required" })}
          className={`!border ${
            watchFields.amount || focusedFields.amount
              ? "bg-[#E8F0FE] !border-[#CBD5E0]"
              : errors.amount
              ? "!border-red-500"
              : "!border-[#CBD5E0]"
          } text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl`}
          onFocus={() => handleFocus("amount")}
          onBlur={() => handleBlur("amount")}
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        {errors.amount && (
          <Typography className="text-sm text-red-500 mt-1">
            {errors.amount.message}
          </Typography>
        )}
      </div>
      <div className="flex gap-5 ml-auto mt-10">
        <Button
          type="submit"
          className={`h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center text-base text-white leading-4 font-medium shadow-none hover:shadow-none capitalize ${
            isValid ? "bg-[#4CAF50]" : "bg-[#F2F2F2] text-[#48484D]"
          }`}
          ripple={false}
          disabled={!isValid}
          onClick={handleTransectionSuccess}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ConfirmTransectionForm;
