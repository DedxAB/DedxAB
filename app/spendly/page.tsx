import { PORTFOLIO_LIVE_URL } from '@/config/site';

export default function SpendlyHomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm text-neutral-600">
              Personal Finance • Expense Tracking • Cloud Backup
            </div>

            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-neutral-950 sm:text-7xl">
              Spendly
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              A modern personal finance application designed to help users
              manage expenses, track budgets, and securely backup data using
              Google Drive.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/spendly/privacy-policy"
                className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Privacy Policy
              </a>

              <a
                href="https://github.com/DedxAB/spendly-expense-tracker-app"
                target="_blank"
                className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
              >
                GitHub Release
              </a>
            </div>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute -right-30 -top-30 h-87.5 w-87.5 rounded-full bg-neutral-100 blur-3xl" />
      </section>

      {/* Features */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Features
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Built for simple and secure expense management
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Expense Tracking',
                description:
                  'Track daily spending and organize financial records efficiently.',
              },
              {
                title: 'Budget Management',
                description:
                  'Monitor budgets and understand spending habits clearly.',
              },
              {
                title: 'Google Drive Backup',
                description:
                  'Securely backup and restore application data using Google Drive AppData storage.',
              },
              {
                title: 'Minimal & Fast',
                description:
                  'Clean user experience focused on speed, simplicity, and usability.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Placeholder */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Application
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Clean and focused user experience
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-9/19 rounded-4xl border border-neutral-200 bg-neutral-100"
              >
                {/* Replace with screenshots */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Privacy & Security
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Your financial data stays under your control
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Spendly only accesses its own Google Drive AppData storage for
            backup functionality and does not access other user files stored in
            Google Drive.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-neutral-900">Spendly</p>

            <p className="mt-1 text-sm text-neutral-500">
              Personal finance & expense tracking application
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a
              href="/spendly/privacy-policy"
              className="transition hover:text-neutral-900"
            >
              Privacy Policy
            </a>

            <a
              href={PORTFOLIO_LIVE_URL}
              target="_blank"
              className="transition hover:text-neutral-900"
            >
              Developer Website
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-neutral-400">
          © {new Date().getFullYear()} Spendly
        </p>
      </footer>
    </main>
  );
}
