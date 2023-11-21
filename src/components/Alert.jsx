console.log("Alert file")
function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} show my-2 mx-2`}
        role="alert"
      >
        <strong>Sucess</strong> : {props.alert.msg}
      </div>
    )
  );
}
export default Alert;
