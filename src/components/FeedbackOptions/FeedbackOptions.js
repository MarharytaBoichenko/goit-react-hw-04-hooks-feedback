import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <button
      className={s.button}
      type="button"
      onClick={() => onLeaveFeedback(options)}
    >
      {options}
    </button>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  type: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};
