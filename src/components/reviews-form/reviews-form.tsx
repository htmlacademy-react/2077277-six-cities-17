import RatingList from '../rating-list/rating-list';
import SubmitButton from '../submit-button/submit-button';
import { ChangeEvent, useState } from 'react';
import { FormDataType } from '../../type';
import { ReviewLength } from '../../const';
import { postOfferComment } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GetUrlId } from '../../utils';
import { selectCommentStatus } from '../../store/selectors';

const initialState: FormDataType = {
  rating: 0,
  review: '',
};

function ReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = GetUrlId();
  const isCommentStatusPending = useAppSelector(selectCommentStatus);
  const [formData, setFormData] = useState<FormDataType>(initialState);
  const isButtonDisabled = formData.rating !== 0 && formData.review.length >= ReviewLength.Min && formData.review.length <= ReviewLength.Max;

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
  };

  const handleSubmitForm = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offerId) {
      dispatch(postOfferComment({
        id: offerId,
        comment: formData
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            setFormData({
              rating: 0,
              review: '',
            });
          }
        });
    }
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmitForm} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList onChangeRating={handleChangeRating} dataRating={formData.rating} />
      <textarea className="reviews__textarea form__textarea" onChange={handleChangeReview} value={formData.review} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" disabled={isCommentStatusPending}></textarea>
      <SubmitButton isButtonDisabled={isButtonDisabled} />
    </form>
  );
}

export default ReviewsForm;
