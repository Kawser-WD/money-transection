import { Button, Input, Typography } from "@material-tailwind/react";

const StripeDepositForm = ({ handleOpenStripe }) => {
  return (
    <section className="grid grid-cols-1 gap-5">
      <div className="h-14 w-full rounded-[30px] border flex gap-5 px-4 py-3">
        <div className="flex justify-between items-center w-1/2">
          <Typography className="text-lg leading-[25.2px] font-normal text-pash">
            Request Id
          </Typography>
          <div className="h-full w-[1px] bg-[#CBD5E0]"></div>
        </div>
        <Typography className="text-lg leading-[25.2px] font-medium text-secondary">
          546546554
        </Typography>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex gap-5 px-4 py-3">
        <div className="flex justify-between items-center w-1/2">
          <Typography className="text-lg leading-[25.2px] font-normal text-pash">
            Bank Name
          </Typography>
          <div className="h-full w-[1px] bg-[#CBD5E0]"></div>
        </div>
        <Typography className="text-lg leading-[25.2px] font-medium text-secondary">
          CBE
        </Typography>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex gap-5 px-4 py-3">
        <div className="flex justify-between items-center w-1/2">
          <Typography className="text-lg leading-[25.2px] font-normal text-pash">
            Holder Name
          </Typography>
          <div className="h-full w-[1px] bg-[#CBD5E0]"></div>
        </div>
        <Typography className="text-lg leading-[25.2px] font-medium text-secondary">
          Farhan Afid
        </Typography>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex gap-5 px-4 py-3">
        <div className="flex justify-between items-center w-1/2">
          <Typography className="text-lg leading-[25.2px] font-normal text-pash">
            Accounting Noumber
          </Typography>
          <div className="h-full w-[1px] bg-[#CBD5E0]"></div>
        </div>
        <Typography className="text-lg leading-[25.2px] font-medium text-secondary">
          513215
        </Typography>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex gap-5 px-4 py-3">
        <div className="flex justify-between items-center w-1/2">
          <Typography className="text-lg leading-[25.2px] font-normal text-pash">
            Amount
          </Typography>
          <div className="h-full w-[1px] bg-[#CBD5E0]"></div>
        </div>
        <Typography className="text-lg leading-[25.2px] font-medium text-secondary">
          521.5
        </Typography>
      </div>
      <div className="w-full space-y-3">
        <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
          Card Number
        </Typography>
        <Input
          type="text"
          placeholder="Add Number"
          className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
      </div>
      <div className="w-full flex gap-5">
        <div className="w-full space-y-3">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
            CVV
          </Typography>
          <Input
            type="text"
            placeholder="Add CVV"
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        <div className="w-full space-y-3">
          <Typography className="text-base font-medium text-[#48484D] leading-[22.4px]">
            Expiration Date
          </Typography>
          <Input
            type="date"
            placeholder="MM/YY"
            className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
      </div>
      <div className="flex gap-5 ml-auto mt-10">
        <Button
          className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#FEDCD0]  shadow-none hover:shadow-none capitalize"
          ripple={false}
          onClick={handleOpenStripe}
        >
          <Typography className="text-base text-[#FA5014] leading-4 font-medium">
            Cancel
          </Typography>
        </Button>
        <Button
          className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#4CAF50] text-base text-white leading-4 font-medium shadow-none hover:shadow-none capitalize"
          ripple={false}
          onClick={handleOpenStripe}
        >
          Confirm
        </Button>
      </div>
    </section>
  );
};

export default StripeDepositForm;
