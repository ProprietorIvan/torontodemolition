import { Check } from "lucide-react";

interface SuccessScreenProps {
  email?: string;
  setShowSuccess: (show: boolean) => void;
  message?: string;
  subMessage?: string;
}

const SuccessScreen = ({
  email,
  setShowSuccess,
  message = "Message received",
  subMessage = "We'll get back to you shortly",
}: SuccessScreenProps) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl font-medium text-gray-900">{message}</h3>

      <div className="space-y-2 text-center">
        <p className="text-gray-600">{subMessage}</p>
        {email && (
          <p className="text-gray-500 text-sm">
            Response will be sent to your email
          </p>
        )}
      </div>

      <button
        onClick={() => {
          setShowSuccess(false);
        }}
        className="mt-8 bg-[#E74C3C] text-white px-8 py-3 rounded-full hover:bg-[#D44332] transition-colors duration-300"
      >
        Done
      </button>
    </div>
  );
};

export default SuccessScreen;
