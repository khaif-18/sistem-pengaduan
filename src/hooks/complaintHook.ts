import { useFormik } from "formik"
import { useState } from "react"

interface ComplaintData {
  jenisPengaduan: string
  tanggal: string
  nama: string
  noTelepon: string
  deskripsi: string
  evidence: String
}

export const useComplaintForm = () => {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null) // New state for submit status
  const formik = useFormik<ComplaintData>({
    initialValues: {
      jenisPengaduan: 'Kritik & Saran',
      tanggal: new Date().toISOString(),
      nama: '',
      noTelepon: '',
      evidence: '',
      deskripsi: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/complaint/post', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          },
        })

        if (response.ok) {
          setSubmitStatus("success")
        } else {
          setSubmitStatus("error")
          console.error('Error submitting form:', await response.text())
        }
      } catch (error) {
        setSubmitStatus("error")
        console.error('Error submitting form:', error)
      }
    },
  })
  return {
    formik,
    submitStatus,
    setSubmitStatus
  }
}
