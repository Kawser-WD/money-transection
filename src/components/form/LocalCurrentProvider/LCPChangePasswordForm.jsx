import { useForm } from "react-hook-form";
import { Button, Input, Typography } from "@material-tailwind/react";

const LCPChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    mode: "onChange", // Updates `isValid` when inputs change
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Watch all fields to check if they are filled
  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-[21px]">
        <div className="w-full space-y-3">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
            Current Password
          </Typography>
          <Input
            type="password"
            placeholder="Enter Current Password"
            {...register("currentPassword", { required: true })}
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <div className="w-full space-y-3">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
            New Password
          </Typography>
          <Input
            type="password"
            placeholder="Enter New Password"
            {...register("newPassword", { required: true })}
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <div className="w-full space-y-3">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
            Confirm New Password
          </Typography>
          <Input
            type="password"
            placeholder="Confirm New Password"
            {...register("confirmPassword", { required: true })}
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
      </div>
      <Button
        type="submit"
        className={`flex ml-auto h-12 w-[148px] mt-[36px] rounded-[56px] text-base leading-4 font-medium capitalize !shadow-none justify-center items-center ${
          isValid ? "bg-primary text-white" : "bg-[#F2F2F2] text-[#48484D]"
        }`}
        disabled={!isValid}
      >
        Change
      </Button>
    </form>
  );
};

export default LCPChangePasswordForm;
