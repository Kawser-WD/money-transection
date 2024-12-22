import { useState } from "react";
import noData from "../../assets/images/No-Data.png";
const TVDashboardHome = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <section>
      <div className="mt-7">
        <img
          src={noData}
          alt="noData"
          className="h-[251px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default TVDashboardHome;
