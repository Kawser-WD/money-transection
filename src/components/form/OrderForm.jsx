import {
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import arrow from "../../assets/icon/Arrow - Down 2.png";
import ConfirmTransferModal from "../CreateOrder/ConfirmTransferModal";

const COUNTRIES = ["France (+33)", "Germany (+49)", "Spain (+34)", "USA (+1)"];
const CODES = ["+33", "+49", "+34", "+1"];

const OrderForm = ({ handleOpen, handleConfirm }) => {
  const [country, setCountry] = useState(0);
  const [formData, setFormData] = useState({
    userId: "",
    amount: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    notificationReference: "",
    receiverCountry: "",
    accountNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <section>
      <>
      <div className="mt-[39px]">
          <span className="text-xl font-medium leading-7 text-secondary">
            Transfer Amount
          </span>
          <div className="grid grid-cols-2 gap-5 mt-7">
            <div className="grid space-y-3">
              <span className="text-base font-medium text-[#48484D] leading-[22.4px]">
                User ID
              </span>
              <select
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                className="border border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 h-12 !rounded-3xl w-full cursor-pointer focus:outline-none px-3"
              >
                <option value="" disabled>
                  Select User ID
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="space-y-3">
            <span>
            <div className="text-base mb-3 font-medium text-[#48484D] leading-[22.4px]">Amount</div>
            <input
                name="amount"
                type="text"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
                className="border border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 h-12 !rounded-3xl w-full cursor-pointer focus:outline-none px-3"
              />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[46px]">
          <span className="text-xl font-medium leading-7 text-secondary">
            Receiver Information
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-7">
            <span>
            <div className="text-base mb-3 font-medium text-[#48484D] leading-[22.4px]">First Name</div>
            <input
              name="firstName"
              label="First Name"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 h-12 !rounded-3xl w-full cursor-pointer focus:outline-none px-3"
            />
            </span>
            <span>
            <div className="text-base mb-3 font-medium text-[#48484D] leading-[22.4px]">Middle Name</div>
            <input
              name="middleName"
              label="Middle Name"
              placeholder="Enter Middle Name"
              value={formData.middleName}
              onChange={handleChange}
              className="border border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 h-12 !rounded-3xl w-full cursor-pointer focus:outline-none px-3"
            />
            </span>
            <span>
            <div className="text-base mb-3 font-medium text-[#48484D] leading-[22.4px]">Last Name</div>
            <input
              name="lastName"
              label="Last Name"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 h-12 !rounded-3xl w-full cursor-pointer focus:outline-none px-3"
            />
            </span>

            <div className="space-y-3 col-span-1 sm:col-span-3">
              <Typography className="text-base font-medium text-[#48484D]">
                Phone Number
              </Typography>
              <div className="flex w-full">
                <Menu placement="bottom-start">
                  <MenuHandler>
                    <Button
                      ripple={false}
                      variant="text"
                      color="blue-gray"
                      className="h-12 w-14 shrink-0 rounded-l-3xl rounded-r-none border border-[#CBD5E0] bg-transparent px-3"
                    >
                      {CODES[country]}
                    </Button>
                  </MenuHandler>
                  <MenuList className="max-h-[20rem] max-w-[18rem]">
                    {COUNTRIES.map((country, index) => (
                      <MenuItem
                        key={country}
                        onClick={() => setCountry(index)}
                        className="text-[#48484D]"
                      >
                        {country}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Input
                  name="phoneNumber"
                  type="text"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-r-3xl !rounded-l-none !border-l-0"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
            </div>
            <div className="col-span-1 sm:col-span-3">
              <InputField
                name="notificationReference"
                label="Notification Reference"
                placeholder="Enter Notification Reference"
                value={formData.notificationReference}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-[46px]">
          <span className="text-xl font-medium leading-7 text-secondary">
            Receiver Bank
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-7">
            <SelectField
              name="receiverCountry"
              label="Country"
              value={formData.receiverCountry}
              handleChange={handleChange}
            />
            <SelectField
              name="bankName"
              label="Bank Name"
              value={formData.bankName}
              handleChange={handleChange}
            />
            <div className="col-span-1 sm:col-span-3">
              <InputField
                name="accountNumber"
                label="Account Number"
                placeholder="Enter Account Number"
                value={formData.accountNumber}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="py-0 mt-12 mb-10 flex justify-end">
          <button
            type="submit"
            disabled={!isFormComplete}
            className={`w-[140px] h-12 rounded-[56px] mb-8 py-4 sm:px-6 gap-[10px] text-base leading-4 font-medium text-center ${
              isFormComplete ? "bg-primary text-ash" : "bg-[#f2f2f2] text-pash"
            }`}
            onClick={() => {
              handleOpen();
              handleConfirm();
            }}
          >
            <span>Submit</span>
          </button>
        </div>
      </>
    </section>
  );
};

// Reusable InputField Component
const InputField = ({ name, label, placeholder, value, handleChange }) => (
  <div className="space-y-3">
    <Typography className="text-base font-medium text-[#48484D]">
      {label}
    </Typography>
    <Input
      name={name}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="!border !border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 !h-12 !rounded-3xl"
      labelProps={{
        className: "hidden",
      }}
      containerProps={{ className: "min-w-[100px]" }}
    />
  </div>
);

// Reusable SelectField Component
const SelectField = ({ name, label, value, handleChange }) => (
  <div className="space-y-3 relative">
    <Typography className="text-base font-medium text-[#48484D]">
      {label}
    </Typography>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className="appearance-none border border-[#CBD5E0] text-[#48484D] placeholder:text-[#8E8F96] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:opacity-100 h-12 rounded-3xl w-full cursor-pointer focus:outline-none px-3 pr-10"
    >
      <option value="" disabled>
        Select {label}
      </option>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
    </select>
    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
      <img src={arrow} alt="arrow-down" className="h-6 w-6 object-cover" />
    </span>
  </div>
);

export default OrderForm;
