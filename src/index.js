import InputContainer from "./Input/containers/InputContainer";
import InputComponent from "./Input/components/Input";
import TextAreaComponent from "./Input/components/TextArea";
import SelectComponent from "./Input/components/Select";
export {default as Reducer} from "./Input/ducks/Input";

export const Input = InputContainer(InputComponent);
export const TextArea = InputContainer(TextAreaComponent);
export const Select = InputContainer(SelectComponent);