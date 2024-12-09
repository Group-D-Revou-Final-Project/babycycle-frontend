import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function VerifyEmailStep2() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { email } = router.query; // Assume email is passed via query params
      await axios.post('/api/verify-otp', { otp, email }); // Replace with your API endpoint
      setMessage('Your email has been verified!');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      const { email } = router.query;
      await axios.post('/api/send-otp', { email }); // Replace with your API endpoint
      setMessage('A new OTP has been sent to your email!');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'An error occurred while resending OTP');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Insert Your OTP</h1>
        <form onSubmit={handleVerifyOTP}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
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
          className="w-full mt-4 py-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Re-send OTP
        </button>
        {message && <p className="text-center mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
}
