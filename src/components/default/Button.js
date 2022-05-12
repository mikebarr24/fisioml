function Button(props) {
  const styles = {
    border: "none",
    borderRadius: "100px",
    fontSize: props.fontSize,
    fontWeight: "600",
  };
  return (
    <button className={props.className} style={styles} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

export default Button;
