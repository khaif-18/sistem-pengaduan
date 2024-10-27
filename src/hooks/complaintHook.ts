import { useFormik } from "formik"

interface ComplaintData {
  jenisPengaduan: string
  tanggal: string
  nama: string
  noTelepon: string
  deskripsi: string
  evidence: String
}

export const useComplaintForm = () => {
  const formik = useFormik<ComplaintData>({
    initialValues: {
      jenisPengaduan: 'Kritik & Saran',
      tanggal: new Date().toISOString(),
      nama: '',
      noTelepon: '',
      evidence: '',
      deskripsi: '',
    },
    onSubmit: (values) => {
      fetch('/api/complaint/post', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error('Error submitting form:', error)
        })
    },
  })
  return formik
}
