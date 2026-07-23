import { useState, useEffect } from 'react'
import { updateProfileApi } from '../../api/profile'
import FormField from '../common/FormField'
import FormAlert from '../common/FormAlert'
import Drawer from '../common/Drawer'
import FormButton from '../common/FormButton'

export default function ProfileDrawer({ isOpen, onClose, profile, onSave }) {
  const [form, setForm]       = useState({ name: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (profile) setForm({ name: profile.name || '', email: profile.email || '' })
  }, [profile])

  useEffect(() => {
    if (!isOpen) { setError(''); setSuccess('') }
  }, [isOpen])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!form.name.trim())  { setError('Name is required.');  return }
    if (!form.email.trim()) { setError('Email is required.'); return }
    setError('')
    setLoading(true)
    updateProfileApi(form)
      .then((res) => { setSuccess('Profile updated successfully.'); setLoading(false); onSave(res.data) })
      .catch(()   => { setError('Failed to update profile. Please try again.'); setLoading(false) })
  }

  return (
    <Drawer
      open={isOpen}
      title="Edit Profile"
      onClose={onClose}
      size="sm"
      error={error}
      footer={
        <>
          <FormButton variant="ghost" onClick={onClose} fullWidth>Cancel</FormButton>
          <FormButton variant="primary" loading={loading} loadingText="Saving…" onClick={handleSubmit} fullWidth>
            Save Changes
          </FormButton>
        </>
      }
    >
      <FormAlert type="success" message={success} />

      <FormField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your full name"
        required
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email address"
        required
      />

    </Drawer>
  )
}