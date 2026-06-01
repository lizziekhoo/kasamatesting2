import { useTranslation } from 'react-i18next'
import { supabase } from '../lib/supabase'

export default function HomePage({ session }) {
  const { t } = useTranslation()

  async function handleSignOut() {
    await supabase.auth.signOut()
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#faf8f2',
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      padding: '40px 24px',
    }}>
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <span style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>♥ Kasama</span>
            <p style={{ fontSize: '12px', color: '#1a6b4a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '2px 0 0' }}>
              Together, we belong.
            </p>
          </div>
          <button
            onClick={handleSignOut}
            style={{ background: 'none', border: '1.5px solid #e8e4dc', borderRadius: '8px', padding: '7px 14px', fontSize: '13px', cursor: 'pointer', color: '#555' }}
          >
            Sign out
          </button>
        </div>

        {/* Welcome banner */}
        <div style={{ background: '#1a6b4a', borderRadius: '16px', padding: '24px', color: '#fff', marginBottom: '24px' }}>
          <p style={{ fontSize: '13px', opacity: 0.75, margin: '0 0 4px' }}>Signed in as</p>
          <p style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>{session?.user?.email}</p>
        </div>


      </div>
    </div>
  )
}
