import { ReviewLength } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectCommentStatus } from '../../store/comments/comments-selectors';

type SubmitButtonProps = {
  isButtonDisabled: boolean;
}

function SubmitButton({isButtonDisabled}:SubmitButtonProps): JSX.Element {
  const isCommentStatusPending = useAppSelector(selectCommentStatus);

  return (
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{ReviewLength.Min} characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled={!isButtonDisabled || isCommentStatusPending}>Submit</button>
    </div>
  );
}

export default SubmitButton;
