import "./App.css";
import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import StatItem from "./components/StatItem/StatItem";
import s from "./components/Section/Section.module.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  console.log(options);
  const stateOpt = Object.keys(options);
  const stateVal = Object.values(options);
  console.log(stateVal);
  const isFeedback = stateVal.some((opt) => opt > 0);

  const onLeaveFeedback = (type) => {
    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
    }
  };
  const countTotalFeedback = () => {
    const totalFeedBack = good + neutral + bad;
    return totalFeedBack;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePers = Math.round((good / countTotalFeedback()) * 100);
    return positivePers;
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        {stateOpt.map((type, index) => (
          <FeedbackOptions
            key={index + 1}
            options={type}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </Section>
      <Section title="Statistics">
        {isFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given." />
        )}
      </Section>
    </div>
  );
}

export default App;
