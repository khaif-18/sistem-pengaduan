"use client"

import { AlertDescription, AlertTitle, Box, Input, Stack, Textarea, createListCollection } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Field } from "@/components/ui/field"
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { NumberInputField, NumberInputRoot } from "@/components/ui/number-input"
import { useComplaintForm } from "@/hooks/complaintHook"
import { useEffect, useState } from "react"
import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  jenisPengaduan: z.string({ message: "Jenis Pengaduan harus diisi" }).array(),
  tanggal: z.string().nonempty("Tanggal harus diisi"),
  nama: z.string().nonempty("Nama harus diisi"),
  noTelepon: z.string().nonempty("Nomor Telepon harus diisi"),
  deskripsi: z.string().nonempty("Deskripsi harus diisi"),
  // evidence: z.any()
  evidence: z.instanceof(File)
    .refine((file) => file.size < 2 * 1024 * 1024, 'File size must be less than 2MB')
})

type FormValues = z.infer<typeof formSchema>

export default function Homes() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const { formik, submitStatus, setSubmitStatus } = useComplaintForm()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = handleSubmit((data) => {
    formik.setFieldValue("jenisPengaduan", data.jenisPengaduan[0])
    formik.setFieldValue("tanggal", data.tanggal)
    formik.setFieldValue("nama", data.nama)
    formik.setFieldValue("noTelepon", data.noTelepon)
    formik.setFieldValue("deskripsi", data.deskripsi)
    setIsLoading(true)
    formik.handleSubmit()
    // formik.handleSubmit
  })

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000)
      setIsLoading(false)
      return () => clearTimeout(timer)
    }
  }, [submitStatus, setSubmitStatus])

  return (
    <Box maxW="600px" mx="auto" mt={10} mb={10} px={4}>
      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start">
          <Field
            label="Jenis Pengaduan"
            invalid={!!errors.jenisPengaduan}
            errorText={errors.jenisPengaduan?.message}
          >
            <Controller
              control={control}
              name="jenisPengaduan"
              render={({ field }) => (
                <SelectRoot
                  name={field.name}
                  value={field.value}
                  onValueChange={({ value }) => field.onChange(value)}
                  onInteractOutside={() => field.onBlur()}
                  collection={pengaduans}
                >
                  <SelectTrigger>
                    <SelectValueText placeholder="Pilih Jenis Pengaduan" />
                  </SelectTrigger>
                  <SelectContent>
                    {pengaduans.items.map((pengaduan) => (
                      <SelectItem item={pengaduan} key={pengaduan.value}>
                        {pengaduan.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              )}
            />
          </Field>
          <Field
            label="Tanggal"
            invalid={!!errors.tanggal}
            errorText={errors.tanggal?.message}
          >
            <Input type="date"
              {...register("tanggal")}
            />
          </Field>
          <Field
            label="Nama Lengkap"
            invalid={!!errors.nama}
            errorText={errors.nama?.message}
          >
            <Input placeholder="Nama Lengkap"
              {...register("nama")}
            />
          </Field>
          <Field
            label="Nomor Telepon (WhatsApp) (+62)"
            invalid={!!errors.noTelepon}
            errorText={errors.noTelepon?.message}
          >
            <Controller
              name="noTelepon"
              control={control}
              render={({ field }) => (
                <NumberInputRoot
                  maxWidth="570px"
                  disabled={field.disabled}
                  name={field.name}
                  value={field.value}
                  onValueChange={({ value }) => {
                    field.onChange(value)
                  }}
                >
                  <NumberInputField maxLength={12} placeholder="Contoh: 8123456" onBlur={field.onBlur} />
                </NumberInputRoot>
              )}
            />
          </Field>
          <Field
            label="Detail Pengaduan"
            invalid={!!errors.deskripsi}
            errorText={errors.deskripsi?.message}
          >
            <Textarea size="xl" placeholder="Deskripsi"
              {...register("deskripsi")}
            />
          </Field>
          <Field
            label="Foto Terkait Pengaduan"
            invalid={!!errors.evidence}
            errorText={errors.evidence?.message}
          >
            <Input
              type="file"
              onChange={(event) => {
                const file = (event.target as HTMLInputElement).files?.[0]

                if (file) {
                  setValue('evidence', file)
                  const reader = new FileReader()
                  reader.readAsDataURL(file)
                  reader.onloadend = () => {
                    const base64String = reader.result?.toString().split(',')[1]
                    formik.setFieldValue('evidence', base64String)
                  }
                }
              }}
            />
          </Field>
          <Button loading={isLoading} loadingText="Sending..." size="sm" type="submit" bg={"blue.500"}>
            Submit
          </Button>
        </Stack>
      </form>
      {submitStatus && (
        <Alert status={submitStatus} mt={4}>
          <AlertTitle>
            {submitStatus === "success" ? "Berhasil Mengirim!" : "Gagal Mengirim!"}
          </AlertTitle>
          <AlertDescription>
            {submitStatus === "success"
              ? "Pengaduan Anda telah berhasil dikirim."
              : "Terjadi kesalahan saat mengirim. Silakan coba lagi."}
          </AlertDescription>
        </Alert>
      )}
    </Box>
  )
}

const pengaduans = createListCollection({
  items: [
    { label: "Penerangan Jalan Umum (PJU)", value: "Penerangan Jalan Umum (PJU)" },
    { label: "Rambu, Speed Bump, Guard Rail, APPIL, DLL", value: "Rambu, Speed Bump, Guard Rail, APPIL, DLL" },
    { label: "Lainnya", value: "Lainnya" }
  ],
})
