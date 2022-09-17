import zxcvbn from "zxcvbn";
import styles from "../../styles/main.module.scss";
const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "";
      case 1:
        return "Min 8 characters";
      case 2:
        return "Average";
      case 3:
        return "Good";
      case 4:
        return "Strong";

      default:
        return "";
    }
  };

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";

      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: "5px",
    borderRadius: 10,
  });

  return (
    <>
      <div
        className="progress"
        style={{
          height: "7px",
          marginTop: 10,
          background: "#F0F2F5",
          borderRadius: 10,
        }}
      >
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p style={{ color: funcProgressColor() }}>
        {createPassLabel() && (
          <div className={styles.passwordStrength}>
            <p>Password Strength</p>
            {createPassLabel()}
          </div>
        )}
      </p>
    </>
  );
};

export default PasswordStrengthMeter;
