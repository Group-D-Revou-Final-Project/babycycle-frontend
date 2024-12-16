import React, { useState } from "react";

const ChangePassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that both passwords match
    if (newPassword !== repeatPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Validate password length (minimum 8 characters)
    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long!");
      return;
    }

    try {
      // Call the Baby Cycle API
      const response = await fetch("https://api.babycycle.my.id/api/v1/users/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Password reset successfully!");
        setErrorMessage("");
        setNewPassword("");
        setRepeatPassword("");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to reset the password. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-xl font-bold text-gray-700 mb-4 text-center">RESET PASSWORD</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter your new password below
        </p>
        <form onSubmit={handleSubmit}>
          {/* New Password Input */}
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          {/* Repeat Password Input */}
          <input
            type="password"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          {/* Success Message */}
          {successMessage && (
            <p className="text-green-500 text-sm mb-4">{successMessage}</p>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
          >
            RESET
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
