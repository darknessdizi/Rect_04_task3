// import { IPropsInput } from "../../modals/modals";

export const FieldInput = () => {
  // const { name, text, value, onChange, pattern } = props;

  return (
    <div className="conteiner__frame">
      <input type="file" className="frame__input" accept='image/*' multiple />
      <div className="frame__span">
        <span className="span__text">Click to select</span>
      </div>
    </div>
  );
}
