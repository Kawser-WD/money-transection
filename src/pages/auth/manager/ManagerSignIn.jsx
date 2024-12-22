import RegistrationLayout from "../../../components/RegistrationLayout/RegistrationLayout";
import logo from "../../../assets/Logo/manager.png";
import ManagerSignInForm from "../../../components/form/Manager/ManagerSignInForm";
const ManagerSignIn = () => {
  return (
    <RegistrationLayout
      leftContent={
        <div>
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
      }
      rightContent={<ManagerSignInForm />}
    />
  );
};

export default ManagerSignIn;
