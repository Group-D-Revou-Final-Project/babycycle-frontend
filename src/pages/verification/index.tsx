import { useState } from 'react';
import axios from 'axios';

export default function VerifyEmailStep1() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/send-otp', { email }); // Replace with your API endpoint
      setMessage('OTP has been sent to your email!');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
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
        {message && <p className="text-center mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
}
