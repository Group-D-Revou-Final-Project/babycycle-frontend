import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { API_VERIF_REGIS, API_VERIFY, API_RESEND_VERIF } from '@/constants/api';

export default function VerificationPage() {
  const [step, setStep] = useState(1); // Tracks current step
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(API_VERIF_REGIS, { email });
      setMessage('OTP has been sent to your email!');
      setStep(2); // Move to the next step
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(API_VERIFY, { verification_code: verificationCode, email });
      setMessage('Your email has been verified!');
      // Redirect or take further action
      router.push('/success'); // Example: Navigate to a success page
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    try {
      await axios.post(API_RESEND_VERIF, { email });
      setMessage('A new OTP has been sent to your email!');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'An error occurred while resending OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        {step === 1 ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">Verify Your Email</h1>
            <p className="text-sm text-gray-600 mb-6">
              An OTP will be sent to your email and will expire in 5 minutes.
            </p>
            <form onSubmit={handleSendOTP}>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border rounded mb-4"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-500 text-white rounded disabled:bg-gray-300"
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-4">Insert Your OTP</h1>
            <form onSubmit={handleVerifyOTP}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                className="w-full p-3 border rounded mb-4"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-500 text-white rounded disabled:bg-gray-300"
              >
                {loading ? 'Verifying...' : 'Verify'}
              </button>
            </form>
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={loading}
              className="w-full mt-4 py-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              {loading ? 'Resending...' : 'Re-send OTP'}
            </button>
          </>
        )}
        {message && <p className="text-center mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
}
