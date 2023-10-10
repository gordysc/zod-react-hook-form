"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "$components/TextInput";
import { bulletinSchema, type Bulletin } from "$schema/bulletins";

const BulletinForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Bulletin>({
    resolver: zodResolver(bulletinSchema)
  });

  async function onSubmit(data: Bulletin) {
    // TODO: Submit the bulletin to the server
    console.log({ data });
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder="Title"
        error={errors.title?.message}
        {...register("title")}
      />

      <TextInput
        placeholder="Content"
        error={errors?.content?.message}
        {...register("content")}
      />

      <button type="submit" className="btn btn-primary w-full">
        Create Bulletin
      </button>
    </form>
  );
};

export default BulletinForm;
