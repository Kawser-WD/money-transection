const RegistrationLayout = ({ leftContent, rightContent }) => {
  return (
    <div className="grid h-screen sm:grid-cols-1 md:grid-cols-[760px_1fr]">
      <div className="h-full bg-[#ffffff] grid content-center justify-items-center">
        {leftContent}
      </div>
      <div className="h-full bg-[#f7f8fa] grid content-center justify-items-center">
        {rightContent}
      </div>
    </div>
  );
};

export default RegistrationLayout;
