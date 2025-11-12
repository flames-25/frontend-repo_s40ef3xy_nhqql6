import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-light-bg)] dark:bg-[var(--color-dark-bg)]">
      {/* Soft gradient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-10 md:flex-row md:gap-12 lg:gap-16">
        {/* Left: 3D animation (hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10 w-full md:mb-0 md:w-1/2"
        >
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-[var(--color-light-border)]/60 bg-white/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] backdrop-blur md:h-[520px] dark:border-[var(--color-dark-border)]/60 dark:bg-[var(--color-dark-card)]/40">
            <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-[var(--color-dark-bg)]/40" />
          </div>
          <div className="mt-6 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-semibold tracking-tight text-[var(--color-light-text)] dark:text-[var(--color-dark-text)]"
            >
              Welcome back
            </motion.h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-300/80">
              Sign in to continue to your dashboard.
            </p>
          </div>
        </motion.div>

        {/* Right: Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="w-full md:w-[480px]"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-light-border)] bg-[var(--color-light-card)] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl md:p-8 dark:border-[var(--color-dark-border)] dark:bg-[var(--color-dark-card)]">
            {/* subtle animated gradient border */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(60% 60% at 30% 20%, rgba(37,99,235,0.15) 0%, rgba(14,165,233,0.08) 45%, transparent 70%)' }} />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-[var(--color-light-text)] dark:text-[var(--color-dark-text)]">
                    Sign in
                  </h1>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300/80">
                    Use your email and password to continue
                  </p>
                </div>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 8, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  className="hidden rounded-xl bg-[var(--color-primary)]/10 px-3 py-2 text-xs font-semibold text-[var(--color-primary)] md:block"
                >
                  Secure Login
                </motion.div>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <AnimatePresence>{error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-200"
                  >
                    {error}
                  </motion.div>
                )}</AnimatePresence>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300">Email</label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="peer w-full rounded-xl border border-[var(--color-light-border)] bg-white/60 px-4 py-3 text-[var(--color-light-text)] outline-none ring-0 transition-all placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:bg-white focus:shadow-[0_10px_30px_-15px_rgba(37,99,235,0.45)] dark:border-[var(--color-dark-border)] dark:bg-[var(--color-dark-card)]/60 dark:text-[var(--color-dark-text)] dark:placeholder:text-slate-400/80 dark:focus:bg-[var(--color-dark-card)]"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors peer-focus:text-[var(--color-primary)]">@</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-600 dark:text-slate-300">Password</label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="peer w-full rounded-xl border border-[var(--color-light-border)] bg-white/60 px-4 py-3 text-[var(--color-light-text)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:bg-white focus:shadow-[0_10px_30px_-15px_rgba(37,99,235,0.45)] dark:border-[var(--color-dark-border)] dark:bg-[var(--color-dark-card)]/60 dark:text-[var(--color-dark-text)] dark:placeholder:text-slate-400/80 dark:focus:bg-[var(--color-dark-card)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-slate-500 transition-colors hover:text-[var(--color-primary)]"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
                    Remember me
                  </label>
                  <button type="button" className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-secondary)]">
                    Forgot password?
                  </button>
                </div>

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  type="submit"
                  disabled={loading}
                  className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-[var(--color-primary)] px-4 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80"
                >
                  <span className="relative z-10">
                    {loading ? 'Signing in…' : 'Sign in'}
                  </span>
                  <span className="absolute inset-0 -z-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.button>

                <div className="pt-2 text-center text-sm text-slate-600 dark:text-slate-300">
                  Don’t have an account?
                  <a href="#" className="ml-1 font-semibold text-[var(--color-accent)] hover:underline">Sign up</a>
                </div>
              </form>
            </div>
          </div>

          {/* Footer badges */}
          <div className="mt-6 flex items-center justify-center gap-3 text-[10px] text-slate-500 md:justify-start">
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 font-medium text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-300">Secure</span>
            <span className="rounded-full bg-blue-500/10 px-2.5 py-1 font-medium text-blue-600 ring-1 ring-blue-500/20 dark:text-blue-300">Fast</span>
            <span className="rounded-full bg-amber-500/10 px-2.5 py-1 font-medium text-amber-600 ring-1 ring-amber-500/20 dark:text-amber-300">Modern</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default App
