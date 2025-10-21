import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const AlertModal = ({ show, onClose, title = "Notice", message }) => {
  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center relative border-t-8 border-orange-500"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl font-bold text-green-800 mb-3">{title}</h2>
          <p className="text-gray-700 mb-6">{message}</p>

          <button
            onClick={onClose}
            className="bg-gradient-to-r from-orange-400 to-green-500 hover:from-orange-500 hover:to-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            OK
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AlertModal;