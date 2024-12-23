import { Button, Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ConfirmTransectionForm = ({
  handleOpenConfirmTransection,
  handleFragmentSuccess,
  handleFragmentFailed
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
          Request ID
        </Typography>
        <Input
          type="password"
          placeholder="Enter Request ID"
          {...register("requestID", { required: "Request Id is required" })}
          className={`!border ${
            watchFields.requestId || focusedFields.requestId
              ? "bg-[#E8F0FE] !border-[#CBD5E0]"
              : errors.requestId
              ? "!border-red-500"
              : "!border-[#CBD5E0]"
          } text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 h-[48px] !rounded-3xl`}
          onFocus={() => handleFocus("requestId")}
          onBlur={() => handleBlur("requestId")}
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        {errors.requestId && (
          <Typography className="text-sm text-red-500 mt-1">
            {errors.requestId.message}
          </Typography>
        )}
      </div>
      <div className="w-full space-y-3">
        <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
          Fragments
        </Typography>
        <Input
          type="text"
          placeholder="Enter Fragments"
          {...register("fragments", {
            required: "Fragment is required",
          })}
          className={`!border ${
            watchFields.fragments || focusedFields.fragments
              ? "bg-[#E8F0FE] !border-[#CBD5E0]"
              : errors.fragments
              ? "!border-red-500"
              : "!border-[#CBD5E0]"
          } text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl`}
          onFocus={() => handleFocus("fragments")}
          onBlur={() => handleBlur("fragments")}
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        {errors.fragments && (
          <Typography className="text-sm text-red-500 mt-1">
            {errors.fragments.message}
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
          onClick={handleFragmentSuccess}
        >
          Submit
        </Button>
      </div>

      <div>

      <Button
          type="submit"
          className={`h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center text-base text-white leading-4 font-medium shadow-none hover:shadow-none capitalize ${
            isValid ? "bg-[#4CAF50]" : "bg-[#F2F2F2] text-[#48484D]"
          }`}
          ripple={false}
          disabled={!isValid}
          onClick={handleFragmentFailed}
        >
          Failed
        </Button>
      </div>
    </form>
  );
};

export default ConfirmTransectionForm;
