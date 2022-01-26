import MButtonType from "./MButton.type";

function MButton(props: MButtonType) {
  return (
    <a data-testid="m-button" href="#">
      {props.title}
    </a>
  );
}

export default MButton;
