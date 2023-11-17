import React from "react";

const Text = ({ style = {} }) => {
  console.log(style);
  return <p style={{ ...style }}>Higher Order Component!</p>;
};
const StyledText = withStyles(Text);

function withStyles(WrapperComponent) {
  return (props) => {
    const style = {
      color: "red",
      fontSize: "1em",
      fontFamily: "Inter",
      ...props.style,
    };
    return <WrapperComponent {...props} style={style} />;
  };
}

export default function MyApp() {
  return (
    <div>
      <Text />
      <StyledText style={{ fontWeight: "bold", fontSize: "1.5em" }} />
    </div>
  );
}
