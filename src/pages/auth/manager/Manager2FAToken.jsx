import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/manager.png";
import TVTwoFATokenForm from "../../../components/form/TransectionVerifier/TVTFATokenForm";
import Manager2FATokenForm from "../../../components/form/Manager/Manager2FATokenForm";
const Manager2FAToken = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<Manager2FATokenForm />}
    />
  );
};

export default Manager2FAToken;
