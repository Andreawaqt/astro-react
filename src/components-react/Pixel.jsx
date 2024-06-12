
function pixel(props) {
    let { id } = props;
    let color = props.color;
    console.log(id);
  return (
    <div style={{
        backgroundColor: color,
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
        height: "30px",
        width: "30px",
      }} id={id}
      onClick={() => props.onClick(id, color)}
    ></div>
  );
}
export default pixel;