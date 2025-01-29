import RatingListMemo from '../rating-list/rating-list';
import SubmitButtonMemo from '../submit-button/submit-button';
import { ChangeEvent, memo, useCallback, useState } from 'react';
import { FormDataType } from '../../type';
import { ReviewLength } from '../../const';
import { postOfferComment } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useUrlId } from '../../utils';
import { selectCommentStatus } from '../../store/comments/comments-selectors';

const initialState: FormDataType = {
  rating: 0,
  review: '',
};

function ReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useUrlId();
  const isCommentStatusPending = useAppSelector(selectCommentStatus);
  const [formData, setFormData] = useState<FormDataType>(initialState);
  const isButtonDisabled = formData.rating !== 0 && formData.review.length >= ReviewLength.Min && formData.review.length <= ReviewLength.Max;

  const handleRatingChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        rating: Number(evt.target.value),
      }));
    },
    []
  );

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      review: evt.target.value,
    }));
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
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
    <form className="reviews__form form" onSubmit={handleFormSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingListMemo onChangeRating={handleRatingChange} dataRating={formData.rating} />
      <textarea className="reviews__textarea form__textarea" onChange={handleReviewChange} value={formData.review} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" disabled={isCommentStatusPending}></textarea>
      <SubmitButtonMemo isButtonDisabled={isButtonDisabled} />
    </form>
  );
}

const ReviewsFormMemo = memo(ReviewsForm);

export default ReviewsFormMemo;
