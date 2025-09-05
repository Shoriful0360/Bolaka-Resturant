import { useState } from "react";

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
console.log('rating',rating)
  if (!isOpen) return null; // Modal বন্ধ থাকলে কিছু দেখাবে না

  const handleSubmit = () => {
    if (reviewText && rating > 0) {
      onSubmit({ reviewText, rating });
      setReviewText("");
      setRating(0);
      onClose();
    } else {
      alert("Please enter review and select rating");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-96 relative">
        <h2 className="text-xl font-bold mb-4">Write a Review</h2>

        {/* Rating */}
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-2xl mr-1 ${star<=rating?'text-yellow-500':'text-gray-300'}`}
            >
              ★
            </button>
          ))}
        </div>
{/* ${star <= rating ? "text-yellow-400" : "text-gray-300"} */}
        {/* Review Text */}
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          className="textarea textarea-bordered w-full h-32 mb-4"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="btn btn-sm btn-ghost text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="btn btn-sm btn-primary text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
