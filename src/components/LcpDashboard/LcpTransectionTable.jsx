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
  "Deposite Id",
  "Expire At",
];

const orderList = [
  {
    state: "Req_Confirmed",
    requestId: "654551",
    fragmentId: "654551",
    depositeId: "654551",
    expireAt: "27/10/24 23.59.35",
  },
  {
    state: "Req_Confirmed",
    requestId: "654552",
    fragmentId: "654552",
    depositeId: "654552",
    expireAt: "27/10/24 23.59.35",
  },
  {
    state: "Req_Confirmed",
    requestId: "654553",
    fragmentId: "654553",
    depositeId: "654553",
    expireAt: "27/10/24 23.59.35",
  },
  {
    state: "Req_Confirmed",
    requestId: "654554",
    fragmentId: "654554",
    depositeId: "654554",
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
      <div className="relative overflow-auto rounded-lg shadow-none border border-[#E2E8F0]">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b p-4 bg-[#F6F8FA] border-r border-[#E2E8F0]"
                >
                  <Typography className="text-base font-semibold leading-5 text-secondary uppercase">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedOrder.map(
              (
                { state, requestId, fragmentId, depositeId, expireAt },
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
                              className="h-5 w-5 object-cover"
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
                        <button className="h-12 w-[120px] rounded-lg bg-[#4CAF50] bg-opacity-[10%] text-[#4CAF50] flex items-center justify-center">
                          <Typography className="text-base font-normal leading-[22.4px]">
                            Locked
                          </Typography>
                        </button>
                      ) : (
                        <button className="h-12 w-[120px] rounded-lg bg-[#FA5014] bg-opacity-[10%] text-[#FA5014] flex items-center justify-center">
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
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {depositeId}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="h-12 w-[175px] rounded-lg bg-[#FA5014] bg-opacity-[10%] text-[#FA5014] flex items-center justify-center">
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
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="text-lg font-medium leading-[22.66px] text-[#8E8F96]">
            Show Page <span className="text-black">{active}</span> of{" "}
            <span>{totalPages}</span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-4">
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
