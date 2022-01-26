import MButtonType from "./MButton.type";

function MButton(props: MButtonType) {
  return <a href="#">{props.title}</a>;
}

export default MButton;
