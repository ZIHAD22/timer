const ButtonForOparation = (props) => {
  return (
    <button onClick={props.oparationFunc} className="btn">
      {props.nameOfButton}
    </button>
  );
};

export default ButtonForOparation;
