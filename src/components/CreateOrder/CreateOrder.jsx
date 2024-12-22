import { useState } from "react";
import noData from "../../assets/images/No-Data.png";
import OrderModal from "./OrderModal";
const CreateOrder = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-[28px] font-medium leading-[39.2px] text-secondary">
          Create new order from here
        </h1>
        <button
          className="w-[145px] h-12 rounded-[56px] py-4 sm:px-6 gap-[10px] bg-primary text-[#FFFFFF] text-base leading-4 font-medium text-center"
          onClick={handleOpen}
        >
          Create Order
        </button>
      </div>
      <div className="mt-7">
        <img
          src={noData}
          alt="noData"
          className="h-[251px] w-full object-cover"
        />
      </div>
      <OrderModal handleOpen={handleOpen} open={open}></OrderModal>
    </section>
  );
};

export default CreateOrder;
