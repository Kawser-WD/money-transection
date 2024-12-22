import { Typography } from "@material-tailwind/react";

const ConfirmTransferTable = () => {
  return (
    <section className="grid grid-cols-2 gap-5">
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Request Id
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            546546554
          </Typography>
        </div>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Amount
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            521.5
          </Typography>
        </div>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Exchange Type
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            USD2ETB
          </Typography>
        </div>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Exchange Rate
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            111.15
          </Typography>
        </div>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Exchange Amount
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            513215544
          </Typography>
        </div>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Full Name
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            Farhan Afid
          </Typography>
        </div>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Phone Number
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            +880 665656
          </Typography>
        </div>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Notification Preference
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            WHATSAPP
          </Typography>
        </div>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Bank Name
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            CBE
          </Typography>
        </div>
      </div>
      <div className="h-14 w-full rounded-[30px] border flex justify-between items-center px-4 py-3">
        <Typography className="text-lg leading-[25.2px] font-normal text-pash">
          Account No
        </Typography>
        <div className="flex gap-6">
          <div className="border-l border-[#CBD5E0]"></div>
          <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
            513215
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ConfirmTransferTable;
