import logo from "../../../assets/Logo/transection-logo.png";
import TransectionVerifierSignUpForm from "../../../components/form/TransectionVerifier/TransectionVerifierSignUpForm";
import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
const TransectionVerifierSignUp = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<TransectionVerifierSignUpForm />}
    />
  );
};

export default TransectionVerifierSignUp;
