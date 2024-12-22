import { Button, Card, Typography } from "@material-tailwind/react";
import arrow from "../../assets/icon/Arrow - Down 2.png";
import arrowLeft from "../../assets/icon/arrow-left.png";
import arrowRight from "../../assets/icon/arrow-right.png";
import { useMemo, useState } from "react";
import ManualDeposit from "../ManualDeposit/ManualDeposit";
import SquareDeposit from "../SquareDeposit/SquareDeposit";
import StripeDeposit from "../StripeDeposit/StripeDeposit";

const TABLE_HEAD = [
  "Gateway",
  "State",
  "Request Id",
  "Expire At",
  "Bank",
  "Account",
  "Routing",
  "Swift",
];

const orderList = [
  {
    gateway: "Gateway",
    state: "Req_Confirmed",
    requestId: "654551",
    expireAt: "27/10/24 23.59.35",
    bank: "NBKC Bank",
    account: "545564",
    routing: "74656654",
    swift: "F54GF",
  },
  {
    gateway: "Gateway",
    state: "Req_Confirmed",
    requestId: "654551",
    expireAt: "27/10/24 23.59.35",
    bank: "NBKC Bank",
    account: "545564",
    routing: "74656654",
    swift: "F54GF",
  },
  {
    gateway: "Gateway",
    state: "Req_Confirmed",
    requestId: "654551",
    expireAt: "27/10/24 23.59.35",
    bank: "NBKC Bank",
    account: "545564",
    routing: "74656654",
    swift: "F54GF",
  },
  {
    gateway: "Gateway",
    state: "Req_Confirmed",
    requestId: "654551",
    expireAt: "27/10/24 23.59.35",
    bank: "NBKC Bank",
    account: "545564",
    routing: "74656654",
    swift: "F54GF",
  },
  {
    gateway: "Gateway",
    state: "Req_Confirmed",
    requestId: "654551",
    expireAt: "27/10/24 23.59.35",
    bank: "NBKC Bank",
    account: "545564",
    routing: "74656654",
    swift: "F54GF",
  },
  {
    gateway: "Gateway",
    state: "Req_Confirmed",
    requestId: "654551",
    expireAt: "27/10/24 23.59.35",
    bank: "NBKC Bank",
    account: "545564",
    routing: "74656654",
    swift: "F54GF",
  },
  {
    gateway: "Gateway",
    state: "Req_Confirmed",
    requestId: "654551",
    expireAt: "27/10/24 23.59.35",
    bank: "NBKC Bank",
    account: "545564",
    routing: "74656654",
    swift: "F54GF",
  },
  {
    gateway: "Gateway",
    state: "Req_Confirmed",
    requestId: "654551",
    expireAt: "27/10/24 23.59.35",
    bank: "NBKC Bank",
    account: "545564",
    routing: "74656654",
    swift: "F54GF",
  },
];

const Table = () => {
  const [openManual, setOpenMenual] = useState(false);
  const [openSquare, setOpenSquare] = useState(false);
  const [openStripe, setOpenStripe] = useState(false);

  const handleOpenManual = () => setOpenMenual(!openManual);
  const handleOpenSquare = () => setOpenSquare(!openSquare);
  const handleOpenStripe = () => setOpenStripe(!openStripe);

  const [openStates, setOpenStates] = useState(
    Array(orderList.length).fill(false)
  );

  const toggleDropdown = (index) => {
    setOpenStates((prevStates) =>
      prevStates.map((isOpen, i) => (i === index ? !isOpen : isOpen))
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

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className:
      active === index
        ? "rounded-full bg-secondary text-white"
        : "rounded-full bg-gray-50 hover:bg-gray-200 text-black",
  });
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
                {
                  gateway,
                  state,
                  requestId,
                  expireAt,
                  bank,
                  account,
                  routing,
                  swift,
                },
                index
              ) => {
                const isLast = index === paginatedOrder.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={requestId}>
                    <td className={classes}>
                      <div className="relative">
                        <select
                          className="appearance-none border border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 h-9 rounded-lg w-[123px] cursor-pointer focus:outline-none px-3 bg-[#E1E2E3]"
                          onClick={() => toggleDropdown(index)}
                          onChange={(e) => {
                            const selectedValue = e.target.value;
                            if (selectedValue === "Manual Deposit") {
                              handleOpenManual();
                            } else if (selectedValue === "Square Deposit") {
                              handleOpenSquare();
                            } else if (selectedValue === "Stripe Deposit") {
                              handleOpenStripe();
                            }
                          }}
                        >
                          <option value="" disabled selected>
                            Method
                          </option>
                          <option value="Manual Deposit">Manual Deposit</option>
                          <option value="Square Deposit">Square Deposit</option>
                          <option value="Stripe Deposit">Stripe Deposit</option>
                        </select>
                        <span
                          className={`absolute right-12 top-2 transform transition-transform duration-200 ${
                            openStates[index] ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <img
                            src={arrow}
                            alt="arrow-down"
                            className="h-6 w-6 object-cover"
                          />
                        </span>
                      </div>
                    </td>
                    <td className={`${classes}`}>
                      <div className="h-12 w-[157px] rounded-lg bg-[#FA5014] bg-opacity-[10%] text-[#FA5014] flex items-center justify-center">
                        <Typography className="uppercase text-base font-normal leading-[22.4px]">
                          {state}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {requestId}
                      </Typography>
                    </td>
                    <td className={`${classes}`}>
                      <div className="h-12 w-[175px] rounded-lg bg-[#FA5014] bg-opacity-[10%] text-[#FA5014] flex items-center justify-center">
                        <Typography className="uppercase text-base font-normal leading-[22.4px]">
                          {expireAt}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {bank}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {account}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {routing}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography className="uppercase text-base font-normal leading-[22.4px]">
                        {swift}
                      </Typography>
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

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .slice(0, 4)
              .map((page) => (
                <button
                  key={page}
                  {...getItemProps(page)}
                  className={`${
                    active === page
                      ? "bg-primary text-white rounded-full h-10 w-10"
                      : "bg-[#f6f6f6] text-secondary rounded-full h-10 w-10"
                  }`}
                >
                  {page}
                </button>
              ))}
            {totalPages > 4 && active < totalPages - 1 && (
              <span className="text-[#8E8F96]">...</span>
            )}
            {totalPages > 4 && (
              <button
                {...getItemProps(totalPages)}
                className={`${
                  active === totalPages
                    ? "bg-primary text-white rounded-full h-10 w-10"
                    : "bg-[#f6f6f6] text-secondary rounded-full h-10 w-10"
                }`}
              >
                {totalPages}
              </button>
            )}
          </div>

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
      <ManualDeposit
        handleOpenManual={handleOpenManual}
        openManual={openManual}
      />
      <SquareDeposit
        handleOpenSquare={handleOpenSquare}
        openSquare={openSquare}
      />
      <StripeDeposit
        handleOpenStripe={handleOpenStripe}
        openStripe={openStripe}
      />
    </div>
  );
};

export default Table;
