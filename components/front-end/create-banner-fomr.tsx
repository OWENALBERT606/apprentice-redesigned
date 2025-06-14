"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { generateSlug } from "@/lib/generateSlug";
import toast from "react-hot-toast";
import { Banner, Category } from "@prisma/client";
import { CategoryProps } from "@/types/types";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextAreaInput";
import ImageInput from "../FormInputs/ImageInput";
import FormHeader from "../Forms/FormHeader";
import { createBanner, updateBannerById } from "@/actions/banners";
import FormFooter from "../Forms/FormFooter";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type CategoryFormProps = {
  editingId?: string | undefined;
  initialData?: Banner | undefined | null;
};
export default function BannerForm({
  editingId,
  initialData,
}: CategoryFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      title: initialData?.title,
      link1:initialData?.link1,
      link2:initialData?.link2,
      description: initialData?.description || "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveData(data: any) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;

      if (editingId) {
        await updateBannerById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        router.push("/dashboard/banners");
        setImageUrl("/placeholder.svg");
      } else {
        await createBanner(data);
        setLoading(false);
        // Toast
        toast.success("Successfully Created!");
        //reset
        reset();
        setImageUrl("/placeholder.svg");
        //route
        router.push("/dashboard/banners");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  console.log(status);

  return (
    <form className="" onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/banners"
        parent=""
        title="Banner"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardTitle>Banner Title</CardTitle>
              <CardDescription>
                
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid  gap-6">
                <div className="grid  grid-cols-2 gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Banner Title"
                    name="title"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Banner Link 1"
                    name="link1"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Banner Link 2"
                    name="link2"
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Description"
                    name="description"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-full ">
          <div className="grid auto-rows-max items-start gap-4 ">
            <ImageInput
              title="Banner Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="bannerImage"
            />
          </div>
        </div>
      </div>
      <FormFooter
        href="/banners"
        editingId={editingId}
        loading={loading}
        title="banner"
        parent=""
      />
    </form>
  );
}
