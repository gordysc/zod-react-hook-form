import { forwardRef, type InputHTMLAttributes } from "react";

export type TextInputErrors = {
  error: string | undefined;
};

export type TextInputHTMLProps = InputHTMLAttributes<HTMLInputElement>;
export type TextInputProps = TextInputErrors & TextInputHTMLProps;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <div>
        <input ref={ref} {...props} className="input input-bordered w-full" />
        {error && (
          <label className="label">
            <span className="label-text-alt text-red-500">{error}</span>
          </label>
        )}
      </div>
    );
  }
);

export default TextInput;
