import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/transection-logo.png";
import TVTwoFATokenForm from "../../../components/form/TransectionVerifier/TVTFATokenForm";
const TVTFAToken = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<TVTwoFATokenForm />}
    />
  );
};

export default TVTFAToken;
