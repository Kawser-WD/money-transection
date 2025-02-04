import { Typography } from "@material-tailwind/react";

const ConfirmTransferTable = () => {
  return (
    <section className="grid grid-cols-2 gap-5">
      {[
        { label: "Request Id", value: "546546554" },
        { label: "Amount", value: "521.5" },
        { label: "Exchange Type", value: "USD2ETB" },
        { label: "Exchange Rate", value: "111.15" },
        { label: "Exchange Amount", value: "513215544" },
        { label: "Full Name", value: "Farhan Afid" },
        { label: "Phone Number", value: "+880 665656" },
        { label: "Notification Preference", value: "WHATSAPP" },
        { label: "Bank Name", value: "CBE" },
        { label: "Account No", value: "513215" },
      ].map((item, index) => (
        <div
          key={index}
          className="h-14 w-full rounded-[30px] border flex items-center px-4 py-3"
        >
          {/* Left Label */}
          <div className="flex-1">
            <Typography className="text-lg leading-[25.2px] font-normal text-pash">
              {item.label}
            </Typography>
          </div>

          {/* Separator Bar */}
          <div className="w-[1px] h-6 bg-[#CBD5E0]"></div>

          {/* Right Value */}
          <div className="flex-1 text-right">
            <Typography className="text-lg leading-[25.2px] font-normal text-secondary">
              {item.value}
            </Typography>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ConfirmTransferTable;
