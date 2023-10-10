import { forwardRef, type InputHTMLAttributes } from "react";

export type TextInputErrors = {
  errors: string[] | undefined;
};

export type TextInputHTMLProps = InputHTMLAttributes<HTMLInputElement>;
export type TextInputProps = TextInputErrors & TextInputHTMLProps;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ errors, ...props }, ref) => {
    return (
      <div>
        <input ref={ref} {...props} className="input input-bordered w-full" />
        {errors && (
          <label className="label">
            <span className="label-text-alt text-red-500">{errors}</span>
          </label>
        )}
      </div>
    );
  }
);

export default TextInput;
