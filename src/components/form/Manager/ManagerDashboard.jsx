import { Typography } from "@material-tailwind/react";
import unlock from "../../../assets/Logo/unlock.png";
import tick from "../../../assets/icon/Tick.png"
import win from "../../../assets/icon/window.png"
import security from "../../../assets/Logo/security-safe.png";
import arrowLeft from "../../../assets/icon/arrow-left.png";
import arrowRight from "../../../assets/icon/arrow-right.png";
import { useMemo, useState } from "react";
import ConfirmTransection from "../Manager/ConfirmFragment";
import FragementSuccessful from "../../SuccessFailure/FragmentSuccessful";
import FragmentFailed from "../../SuccessFailure/FragmentFailed";

const TABLE_HEAD = [
  "Action",
  "state",
  "UserID",
  "RequestID",
  "Method",
  "TXID",
  "Expire At",
];

const orderList = [
  {
    state: "Req_Fragmented",
    userId: "U12345",
    requestId: "654551",
    method: "Manual",
    txId: "TX654551",
    expireAt: "27/10/24 23.59.35",
  },
  {
    state: "FC_COMPLETE",
    userId: "J32323",
    requestId: "234242",
    method: "Manual",
    txId: "TX934590",
    expireAt: "27/10/24 23.59.35",
  },
  {
    state: "FC_NOT_COMPLETE",
    userId: "J32323",
    requestId: "234242",
    method: "Manual",
    txId: "TX934590",
    expireAt: "27/10/24 23.59.35",
  },
];

const LcpTransectionTable = () => {
  const [lockStates, setLockStates] = useState(
    Array(orderList.length).fill(false)
  );
  const [confirmTransection, setConfirmTransection] = useState(false);
  const [fragmentSuccess, setFragmentSuccess] = useState(false);
  const [fragmentFailed, setFragmentFailed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpenConfirmTransection = (index) => {
    setConfirmTransection(!confirmTransection);
    setCurrentIndex(index); // Track the current row being processed
  };

  const handleFragmentSuccess = () => {
    if (currentIndex !== null) {
      // Update lock state for the specific row only after success
      setLockStates((prevStates) =>
        prevStates.map((isLocked, i) => (i === currentIndex ? true : isLocked))
      );
    }
    setFragmentSuccess(!fragmentSuccess);
    setConfirmTransection(false); // Close the confirm modal
  };

  const handleFragmentFailed = () => {
    setFragmentFailed(!fragmentFailed);
    setConfirmTransection(false); // Close the confirm modal
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
                { state, userId, requestId, method, txId, expireAt },
                index
              ) => {
                const isLast = index === paginatedOrder.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                const isLocked = lockStates[index];

                const isDisabled = state === "Req_Fragmented";
                const buttonColor = isDisabled
                  ? "bg-[#8E8F96] cursor-not-allowed"
                  : isLocked
                  ? "bg-[#4CAF50] text-[14px]" // Green for completed
                  : "bg-[#2C73FF]"; // Blue for active
                const buttonText = isLocked
                  ? "Completed Fragments"
                  : "Create Fragments";

                return (
                  <tr key={requestId}>
                    <td className={classes}>
                      <div className="relative">
                        <button
                          className={`flex items-center gap-2 justify-center rounded-lg text-white h-9 w-[168px] ${buttonColor}`}
                          onClick={() =>
                            !isDisabled && !isLocked && handleOpenConfirmTransection(index)
                          }
                          disabled={isDisabled || isLocked} // Disable if already locked or state is disabled
                        >
                          <img
                            src={isLocked ? tick  : win}
                            alt="icon"
                            className="h-4 w-4 object-cover"
                          />{" "}
                          <span>{buttonText}</span>
                        </button>
                      </div>
                    </td>
                    <td className={`${classes}`}>
                      <div className="h-[36px] w-[166px] rounded-lg bg-[#FA5014] bg-opacity-[10%] text-[#FA5014] flex items-center px-[10px]">
                        <Typography className="text-[16px] font-normal leading-[22.4px]">
                          {state}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {userId}
                      </Typography>
                    </td>
                    <td className={`${classes}`}>
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {requestId}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="text-base font-normal leading-[22.4px]">
                        {method}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="text-base font-normal leading-[22.4px]">
                        {txId}
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
        handleFragmentSuccess={handleFragmentSuccess}
        handleFragmentFailed={handleFragmentFailed}
      />
      <FragementSuccessful
        handleFragmentSuccess={handleFragmentSuccess}
        fragmentSuccess={fragmentSuccess}
      />
      <FragmentFailed
        handleFragmentFailed={handleFragmentFailed}
        fragmentFailed={fragmentFailed}
      />
    </div>
  );
};

export default LcpTransectionTable;
