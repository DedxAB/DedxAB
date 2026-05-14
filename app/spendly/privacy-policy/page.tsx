import { portfolioConfig } from '@/config/portfolio';
import { PORTFOLIO_LIVE_URL } from '@/config/site';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Spendly Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Effective Date: May 14, 2026
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Spendly respects your privacy. This Privacy Policy explains how
            Spendly handles your data when you use the application and its
            backup & restore features.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Information We Collect
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Spendly may store the following information locally on your
              device:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Expense records</li>
              <li>Budget information</li>
              <li>Bill reminders</li>
              <li>Application preferences</li>
            </ul>

            <p className="mt-6 leading-8 text-gray-600">
              If you choose to use Google Backup & Restore features, backup data
              stored in your personal Google Drive account using Google Drive
              AppData storage.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Google Account Access
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Spendly uses Google Sign-In to authenticate users for backup and
              restore functionality.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Spendly only requests access to the Google Drive AppData folder.
              This allows the application to create, manage, and restore private
              backup files associated with Spendly.
            </p>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-medium text-blue-900">
                Spendly does not access, read, or modify any other files in your
                Google Drive account.
              </p>
            </div>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Data Sharing
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Spendly does not sell, rent, share, or distribute your personal
              data to third parties.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Data Security
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Spendly is designed with privacy and security in mind. User data
              is stored locally on the user’s device. Google account
              authentication is securely handled using Google’s official
              authentication systems.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              All Google authentication is securely handled through Google’s
              official authentication systems. Users are responsible for
              protecting access to their own devices and Google accounts.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              User Control
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Users have full control over their data and may:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Delete backup data at any time</li>
              <li>Disconnect their Google account from Spendly</li>
              <li>Uninstall the application to remove locally stored data</li>
            </ul>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Third-Party Services
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Spendly uses the following third-party services:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Google Sign-In</li>
              <li>Google Drive API</li>
            </ul>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              This Privacy Policy may be updated from time to time. Any changes
              will be posted on this page with an updated effective date.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              If you have any questions regarding this Privacy Policy, you may
              contact:
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
              <p className="font-medium">Arnab Bhoumik</p>

              <p>Email: {portfolioConfig.profile.email}</p>

              <p>Website: {PORTFOLIO_LIVE_URL}</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Spendly. All rights reserved.
        </div>
      </div>
    </main>
  );
}
