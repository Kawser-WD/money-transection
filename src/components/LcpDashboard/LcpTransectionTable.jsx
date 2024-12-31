import { Typography } from "@material-tailwind/react";
import unlock from "../../assets/Logo/unlock.png";
import security from "../../assets/Logo/security-safe.png";
import arrowLeft from "../../assets/icon/arrow-left.png";
import arrowRight from "../../assets/icon/arrow-right.png";
import { useMemo, useState } from "react";
import ConfirmTransection from "../../pages/ConfirmTransection/ConfirmTransection";
import TransectionSuccess from "../Transection/TransectionSuccess";
import TransectionFailed from "../Transection/TransectionFailed";

const TABLE_HEAD = [
  "Action",
  "State",
  "Request Id",
  "Fragment Id",
  "Country",
  "Bank",
  "Amount",
  "Expire At",
];

const orderList = [
  {
    state: "Req_Confirmed",
    requestId: "654551",
    fragmentId: "654551",
    country: "USA",
    bank: "Bank of America",
    amount: "1,000 ETB",
    expireAt: "27/10/24 23.59.35",
  },
  {
    state: "Req_Confirmed",
    requestId: "654552",
    fragmentId: "654552",
    country: "Canada",
    bank: "Royal Bank of Canada",
    amount: "2,000 ETB",
    expireAt: "27/10/24 23.59.35",
  },
  {
    state: "Req_Confirmed",
    requestId: "654553",
    fragmentId: "654553",
    country: "UK",
    bank: "HSBC",
    amount: "1,500 ETB",
    expireAt: "27/10/24 23.59.35",
  },
  {
    state: "Req_Confirmed",
    requestId: "654554",
    fragmentId: "654554",
    country: "India",
    bank: "State Bank of India",
    amount: "75,000 ETB",
    expireAt: "27/10/24 23.59.35",
  },
];

const LcpTransectionTable = () => {
  const [lockStates, setLockStates] = useState(
    Array(orderList.length).fill(false)
  );
  const [confirmTransection, setConfirmTransection] = useState(false);
  const [transectionSuccess, setTransectionSuccess] = useState(false);
  const [transectionFailed, setTransectionFailed] = useState(false);

  const handleOpenConfirmTransection = () =>
    setConfirmTransection(!confirmTransection);
  const handleTransectionSuccess = () =>
    setTransectionSuccess(!transectionSuccess);
  const handleTransectionFailed = () =>
    setTransectionFailed(!transectionFailed);

  const toggleLock = (index) => {
    setLockStates((prevStates) =>
      prevStates.map((isLocked, i) => (i === index ? !isLocked : isLocked))
    );
  };

  const [active, setActive] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(orderList.length / itemsPerPage);

  const paginatedOrder = useMemo(() => {
    const start = (active - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return orderList.slice(start, end);
  }, [active]);

  const next = () => {
    if (active < totalPages) setActive(active + 1);
  };

  const prev = () => {
    if (active > 1) setActive(active - 1);
  };

  return (
    <div>
      <div className="relative max-w-full  overflow-auto rounded-lg shadow-none border border-[#E2E8F0]">
        {/* For large screens */}
        <table className=" hidden lg:table  w-full min-w-max table-auto text-left border-none">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b p-4 lg:bg-[#F6F8FA] lg:border-r lg:border-[#E2E8F0]"
                >
                  <Typography className="text-base font-semibold  leading-5 text-secondary uppercase">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedOrder.map(
              (
                {
                  state,
                  requestId,
                  fragmentId,
                  country,
                  bank,
                  amount,
                  expireAt,
                },
                index
              ) => {
                const isLast = index === paginatedOrder.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                const isLocked = lockStates[index];

                return (
                  <tr key={requestId}>
                    <td className={classes}>
                      <div className="relative">
                        {!isLocked ? (
                          <button
                            className="flex items-center gap-2 justify-center rounded-lg bg-[#2C73FF] text-white h-9 w-[168px]"
                            onClick={() => toggleLock(index)}
                          >
                            <img
                              src={unlock}
                              alt="unlock"
                              className="h-4 w-4 object-cover"
                            />{" "}
                            <span>Click here to lock</span>
                          </button>
                        ) : (
                          <button
                            className="flex items-center gap-2 justify-center rounded-lg bg-[#4CAF50] text-white h-9 w-[197px]"
                            onClick={() => handleOpenConfirmTransection()}
                          >
                            <img
                              src={security}
                              alt="unlock"
                              className="h-5 w-5 object-cover"
                            />{" "}
                            <span>Click here to transfer</span>
                          </button>
                        )}
                      </div>
                    </td>
                    <td className={`${classes}`}>
                      {isLocked ? (
                        <button className="h-[36px] w-[120px] rounded-lg bg-[#4CAF50] bg-opacity-[10%] text-[#4CAF50] flex items-center justify-center">
                          <Typography className="text-base font-normal leading-[22.4px]">
                            Locked
                          </Typography>
                        </button>
                      ) : (
                        <button className="h-[36px] w-[94px] rounded-lg bg-[#FA5014] bg-opacity-[10%] text-[#FA5014] flex items-center justify-center">
                          <Typography className="text-base font-normal leading-[22.4px]">
                            Unlocked
                          </Typography>
                        </button>
                      )}
                    </td>
                    <td className={classes}>
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {requestId}
                      </Typography>
                    </td>
                    <td className={`${classes}`}>
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {fragmentId}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="text-base font-normal leading-[22.4px]">
                        {country}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="text-base font-normal leading-[22.4px]">
                        {bank}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="h-[36px] w-[99px] text-[#4CAF50] text-base bg-[#4CAF50]/10 py-[7px] text-center font-normal leading-[22.4px] rounded-[9px]">
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="h-[36px] w-[175px] rounded-lg bg-[#FA5014] bg-opacity-[10%] text-[#FA5014] flex items-center justify-around">
                        <Typography className="text-base font-normal leading-[22.4px]">
                          {expireAt}
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        </div>
        {/* For small screens */}
        <div className="lg:hidden w-[100%]">
  {paginatedOrder.map(
    (
      { state, requestId, fragmentId, country, bank, amount, expireAt },
      index
    ) => {
      const isLocked = lockStates[index];
      return (
        <div
          key={requestId}
          className=" lg:hidden border p-4 mb-4 rounded-lg bg-white w-[100%] max-w-full"
        >
          <div className="flex justify-between">
            <div>
          <Typography className="font-semibold text-base md:text-[20px]">
            Request ID: {requestId}
          </Typography>
          </div>
          <div className="mt-2">
                  {isLocked ? (
                    <button className="h-[36px] w-[120px] rounded-lg bg-[#4CAF50] bg-opacity-[10%] text-[#4CAF50]">
                      <Typography className="text-base font-normal ">
                        Locked
                      </Typography>
                    </button>
                  ) : (
                    <button className="h-[36px] w-[94px] rounded-lg bg-[#FA5014] bg-opacity-[10%] text-[#FA5014]">
                      <Typography className="text-base font-normal leading-[22.4px]">
                        Unlocked
                      </Typography>
                    </button>
                  )}
                </div>
            </div>
          <Typography className="text-sm text-gray-500 md:text-base">
            Fragment ID: {fragmentId}
          </Typography>
          <Typography className="text-sm md:text-base">
            Country: {country}
          </Typography>
          <Typography className="text-sm md:text-base">
            Bank: {bank}
          </Typography>
          <Typography className="text-sm md:text-base">
            Amount: {amount}
          </Typography>
          <Typography className="text-sm md:text-base">
            Expire At: {expireAt}
          </Typography>
          
          <div className="relative mt-4">
                                 {!isLocked ? (
                                   <button
                                     className="flex  items-center gap-2 justify-center rounded-lg bg-[#2C73FF] text-white h-9 w-[100%]"
                                     onClick={() => toggleLock(index)}
                                   >
                                     <img
                                       src={unlock}
                                       alt="unlock"
                                       className="h-5 w-5 object-cover"
                                     />{" "}
                                     <span>Click here to lock</span>
                                   </button>
                                 ) : (
                                   <button
                                     className="flex items-center gap-2 justify-center rounded-lg bg-[#4CAF50] text-white h-9  w-[100%]"
                                     onClick={() => handleOpenConfirmTransection()}
                                   >
                                     <img
                                       src={security}
                                       alt="unlock"
                                       className="h-5 w-5 "
                                     />{" "}
                                     <span>Click here to transfer</span>
                                   </button>
                                 )}
                               </div>
                </div>
              );
            }
          )}
        </div>
       
      <div className="flex items-center justify-between p-4">
        <p className="text-lg">
          Page {active} of {totalPages}
        </p>
        <div>
          <div className="flex gap-2">
                    <button
                               className="flex items-center justify-center rounded-full bg-[#f6f6f6] h-10 w-10"
                               onClick={prev}
                               disabled={active === 1}
                             >
                               <img
                                 src={arrowLeft}
                                 alt="arrow-left"
                                 className="h-[9.33px] w-[5.33px]"
                               />
                             </button>
                   <button
                               className="flex items-center justify-center rounded-full bg-[#f6f6f6] h-10 w-10"
                               onClick={next}
                               disabled={active === totalPages}
                             >
                               <img
                                 src={arrowRight}
                                 alt="arrow-right"
                                 className="h-[9.33px] w-[5.33px]"
                               />
                             </button>
                 </div>
        </div>
      </div>

      <ConfirmTransection
        handleOpenConfirmTransection={handleOpenConfirmTransection}
        confirmTransection={confirmTransection}
        handleTransectionSuccess={handleTransectionSuccess}
        transectionSuccess={transectionSuccess}
        handleTransectionFailed={handleTransectionFailed}
        transectionFailed={transectionFailed}
      />
      <TransectionSuccess
        handleTransectionSuccess={handleTransectionSuccess}
        transectionSuccess={transectionSuccess}
      />
      <TransectionFailed
        handleTransectionFailed={handleTransectionFailed}
        transectionFailed={transectionFailed}
      />
    </div>
  );
};

export default LcpTransectionTable;

