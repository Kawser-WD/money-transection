import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import close from "../../assets/icon/Close-Square.png";
import camera from "../../assets/images/camera.png";
import { useState } from "react";
const AddPhoto = ({ handleOpenAddPhoto, openAddPhoto }) => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const onImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview("");
  };
  return (
    <Dialog
      open={openAddPhoto}
      handler={handleOpenAddPhoto}
      className="w-[548px] h-[478px] rounded-2xl"
    >
      <DialogHeader className="bg-ash h-[68px] flex justify-between items-center px-6 rounded-2xl">
        <span className="text-2xl font-medium leading-[33.6px] text-secondary">
          Add Photo
        </span>
        <img
          src={close}
          alt="close-icon"
          className="h-6 w-6 object-cover cursor-pointer"
          onClick={handleOpenAddPhoto}
        />
      </DialogHeader>
      <DialogBody className="px-6 py-8 flex justify-center items-center">
        <div className="bg-[#F5F7F9] h-[200px] w-[200px] p-4 rounded-2xl flex justify-center items-center">
          <label htmlFor="profileImage" className="cursor-pointer">
            <img
              src={imagePreview || camera}
              alt="Profile"
              className="h-auto w-auto object-cover"
              crossOrigin="anonymous"
            />
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onImageChange}
          />
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-between items-center gap-[10px] relative mt-[48px]">
        <Button
          className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#FEDCD0]  shadow-none hover:shadow-none capitalize"
          ripple={false}
          onClick={handleOpenAddPhoto}
        >
          <Typography className="text-base text-[#FA5014] leading-4 font-medium">
            Cancel
          </Typography>
        </Button>
        <div className="flex gap-[10px]">
          <Button
            className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#D5E3FF]  shadow-none hover:shadow-none capitalize"
            ripple={false}
            onClick={handleOpenAddPhoto}
          >
            <Typography className="text-base text-[#2C73FF] leading-4 font-medium">
              Capture
            </Typography>
          </Button>
          <Button
            className="h-12 w-[140px] rounded-[56px] px-4 py-6 flex justify-center items-center bg-[#4CAF50]  shadow-none hover:shadow-none capitalize"
            ripple={false}
            onClick={handleOpenAddPhoto}
          >
            <Typography className="text-base text-white leading-4 font-medium">
              Upload
            </Typography>
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default AddPhoto;
