import { useFormik } from "formik"
import { useState } from "react"

interface PengaduanData {
  pdfInfo: string
}

export const useAdminDukunganHook = () => {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null) // New state for submit status
  const formik = useFormik<PengaduanData>({
    initialValues: {
      pdfInfo: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/dukungan_penegak_hukum/post', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
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
