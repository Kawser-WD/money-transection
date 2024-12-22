import logo from "../../../assets/Logo/manager.png";
import ManagerSignUpForm from "../../../components/form/Manager/ManagerSignUpForm";
import TransectionVerifierSignUpForm from "../../../components/form/TransectionVerifier/TransectionVerifierSignUpForm";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
const ManagerSignUp = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<ManagerSignUpForm />}
    />
  );
};

export default ManagerSignUp;
