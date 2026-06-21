import { useState, useEffect } from 'react'
import { getProfileApi } from '../api/profile'
import ProfileDrawer from '../components/profile/ProfileDrawer'
import './styles/Profile.css'

export default function Profile() {
  const [profile, setProfile] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    getProfileApi()
      .then((res) => setProfile(res.data))
      .catch(() => {})
  }, [])

  const handleSave = (updated) => {
    setProfile((prev) => ({ ...prev, ...updated }))
  }

  const initial = profile?.name ? profile.name.charAt(0).toUpperCase() : '?'

  return (
    <div className="profile">

      <div className="profile__header">
        <div>
          <h1 className="profile__title">Profile</h1>
          <p className="profile__subtitle">Your account details and settings.</p>
        </div>
        <button className="profile__edit-btn" onClick={() => setDrawerOpen(true)}>
          Edit Profile
        </button>
      </div>

      <div className="profile__card">
        <div className="profile__avatar">{initial}</div>
        <div className="profile__info">
          <span className="profile__name">{profile?.name || '—'}</span>
          <span className="profile__email">{profile?.email || '—'}</span>
          {profile?.package && (
            <span className={`profile__badge profile__badge--${profile.package.toLowerCase()}`}>
              {profile.package}
            </span>
          )}
        </div>
      </div>

      <ProfileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        profile={profile}
        onSave={handleSave}
      />

    </div>
  )
}