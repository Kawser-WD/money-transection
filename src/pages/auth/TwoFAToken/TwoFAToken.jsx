import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/logo.png";
import TwoFATokenForm from "../../../components/form/TwoFATokenForm";
const TwoFAToken = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<TwoFATokenForm />}
    />
  );
};

export default TwoFAToken;
