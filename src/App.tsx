import { useEffect, useState } from 'react'
import { useAuth } from './lib/auth-context'
import { LoginForm } from './components/login-form'
import { Button } from './components/ui/button'
import { UsersCollection } from './db/collections/users.collection'

function App() {
  const { user, loading, signOut } = useAuth()
  const [userProfile, setUserProfile] = useState<any>(null)
  const [profileLoading, setProfileLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setProfileLoading(true)
      UsersCollection.getMyInfo()
        .then((data) => {
          setUserProfile(data)
        })
        .catch((error) => {
          console.error('Failed to fetch user profile:', error)
        })
        .finally(() => {
          setProfileLoading(false)
        })
    }
  }, [user])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Welcome!</h1>
            <Button onClick={signOut} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            You're signed in as:
          </h2>
          <p className="text-gray-600">{user.email}</p>
          {profileLoading ? (
            <p className="text-gray-500 mt-2 animate-pulse">
              Loading profile...
            </p>
          ) : (
            userProfile &&
            (userProfile.firstname || userProfile.lastname) && (
              <p className="text-gray-800 mt-2">
                {userProfile.firstname} {userProfile.lastname}
              </p>
            )
          )}
        </div>
      </main>
    </div>
  )
}

export default App
