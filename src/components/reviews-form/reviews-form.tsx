import RatingList from '../rating-list/rating-list';
import { ChangeEvent, useState } from 'react';
import { FormDataType } from '../../type';

const initialState: FormDataType = {
  rating: null,
  review: '',
};

function ReviewsForm(): JSX.Element {
  const [FormData, setFormData] = useState<FormDataType>(initialState);
  const [ButtonDisabled, setButtonDisabled] = useState(true);

  const handleChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      rating: Number(evt.target.value),
    }));
  };

  const handleChangeReview = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      review: evt.target.value,
    }));

    if (FormData.review.length >= 5 && FormData.review.length <= 10) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleSubmitForm = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormData(initialState);
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmitForm} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList onChangeRating={handleChangeRating} />
      <textarea className="reviews__textarea form__textarea" onChange={handleChangeReview} value={FormData.review} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={ButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
