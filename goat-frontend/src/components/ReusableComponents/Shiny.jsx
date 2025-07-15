const ShinyText = ({ text, disabled = false, speed = 3 }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`shiny-text `} style={{ animationDuration }}>
      {text}
    </div>
  );
};

export default ShinyText;
