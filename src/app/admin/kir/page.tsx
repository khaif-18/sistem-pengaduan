"use client"

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { useAdminKirHook } from "@/hooks/adminKirHook";
import { Box, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  pdfInfo: z
    .instanceof(File)
    .refine((file) => file.size < 10 * 1024 * 1024, "File size must be less than 10MB"),
});

type FormValues = z.infer<typeof formSchema>;

export default function AdminKir() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const { formik } = useAdminKirHook();
  
  const [base64File, setBase64File] = useState<string | null>(null);

  const onSubmit = handleSubmit(() => {

    if (base64File) {
      formik.setFieldValue("pdfInfo", base64File);
      formik.handleSubmit();
    }
  });

  return (
    <Box maxW="600px" mx="auto" mt={10} mb={10} px={4}>
      <form onSubmit={onSubmit}>
        <Field label="Upload PDF" invalid={!!errors.pdfInfo} errorText={errors.pdfInfo?.message}>
          <Input
            type="file"
            onChange={(event) => {
              const file = (event.target as HTMLInputElement).files?.[0];

              if (file) {
                setValue("pdfInfo", file);
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  const base64String = reader.result?.toString().split(",")[1];
                  setBase64File(base64String || null);
                  formik.setFieldValue("pdfInfo", base64String || "");
                };
              }
            }}
          />
        </Field>
        <Button mt={4} size="sm" type="submit" bg={"blue.500"}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
