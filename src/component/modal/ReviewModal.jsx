import { useState } from "react";
import PropTypes from "prop-types"
import Swal from "sweetalert2";
const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [reviewText, setReviewText] = useState("");
  const[titel,setTitel]=useState()
  const [rating, setRating] = useState(0);
  const[error,setError]=useState('')
  if (!isOpen) return null; // Modal বন্ধ থাকলে কিছু দেখাবে না

  const handleReviewText = (value) => {
   

    if (value.length > 200) {
      setError("Text should not exceed 150 words");
      return
  
    } else {
      setError("");
      setReviewText(value);
    }
  };

const handleSubmit = () => {
  if (reviewText.length > 0 && titel.length > 0 && rating > 0) {
    onSubmit({ reviewText, rating, titel });
    setReviewText("");
    setRating(0);
    setTitel(""); // যদি তুমি titel state use করো
    onClose();
  } else {
    Swal.fire("Please enter review, title and select rating!");
  }
};


  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-60 flex items-center justify-center">
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
          <label htmlFor="">
           
            <input onChange={(e)=>setTitel(e.target.value)} 
            type="text" 
            value={titel} 
           placeholder="Food Name"
           required 
           className="input input-bordered w-full mb-2" />
          </label>
        {/* Review Text */}
        <textarea
          value={reviewText}
          onChange={(e)=>handleReviewText(e.target.value)}
          placeholder="Write your review..."
          className="textarea textarea-bordered w-full h-32 mb-4"
        />
        {/* error message */}
        {error && <p className="text-red-600">{error}</p>}
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

// proptypes validation define
ReviewModal.propTypes={
  isOpen: PropTypes.bool.isRequired ,
  onClose: PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired
}