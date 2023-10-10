"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "$components/TextInput";
import {
  bulletinSchema,
  type Bulletin,
  type BulletinErrors
} from "$schema/bulletins";

const BulletinForm = () => {
  const { handleSubmit, register } = useForm<Bulletin>({});
  const [errors, setErrors] = useState<BulletinErrors | null>(null);

  async function onSubmit(data: Bulletin) {
    const result = await bulletinSchema.safeParseAsync(data);

    if (result.success) {
      // TODO: send data to server
      setErrors(null);
    } else {
      setErrors(result.error.format());
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder="Title"
        errors={errors?.title?._errors}
        {...register("title")}
      />

      <TextInput
        placeholder="Content"
        errors={errors?.content?._errors}
        {...register("content")}
      />

      <button type="submit" className="btn btn-primary w-full">
        Create Bulletin
      </button>
    </form>
  );
};

export default BulletinForm;
