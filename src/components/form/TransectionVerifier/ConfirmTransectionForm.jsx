import { Button, Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const ConfirmTransectionForm = ({
  handleOpenConfirmTransection,
  handleTransectionSuccess,
  handleTransectionFailed,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // Enables validation on change
  });

  const onSubmit = (data) => {
    handleOpenConfirmTransection(data);
  };

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
            errors.lockId ? "!border-red-500" : "!border-[#CBD5E0]"
          } text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl`}
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
            errors.accountNumber ? "!border-red-500" : "!border-[#CBD5E0]"
          } text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl`}
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
            errors.amount ? "!border-red-500" : "!border-[#CBD5E0]"
          } text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl`}
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
          Success
        </Button>
        <Button
          type="submit"
          className={`h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center text-base text-white leading-4 font-medium shadow-none hover:shadow-none capitalize ${
            isValid ? "bg-[#4CAF50]" : "bg-[#F2F2F2] text-[#48484D]"
          }`}
          ripple={false}
          disabled={!isValid}
          onClick={handleTransectionFailed}
        >
          Failed
        </Button>
      </div>
    </form>
  );
};

export default ConfirmTransectionForm;
