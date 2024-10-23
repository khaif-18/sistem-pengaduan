import { IPengaduan } from '@/app/server/interface/pengaduan'
import { useFormik } from 'formik'
import { ChangeEvent } from 'react'

export const useForm = () => {
  const formik = useFormik<IPengaduan>({
    initialValues: {
      jenis_pengaduan: 'Kritik & Saran',
      tanggal: new Date().toISOString(),
      nama: '',
      alamat: '',
      no_telp: '',
      evidence: null,
      deskripsi: '',
    },
    onSubmit: (values) => {
      fetch('/api/try-post', {
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
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const base64String = reader.result?.toString().split(',')[1]
        formik.setFieldValue('evidence', base64String)
      }
    }
  }

  return {
    formik,
    handleFileChange,
  }
}
