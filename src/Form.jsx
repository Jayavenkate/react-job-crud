import { FormBuilder } from "cb-react-forms";

export function Form() {
  return (
    <div>
      <h1>Form Builder</h1>
      {/* <ReactFormGenerator />, */}
      <FormBuilder onSubmit={(data) => console.log(data)} />
    </div>
  );
}
