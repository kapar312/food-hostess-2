import React from "react";

import ButtonLink from "../../../../buttons/ButtonLink";
import {MAIN_PAGE} from "../../../../../consts/routes.const";

import {formatLastDigits} from "../../helpers";

const Placeholder = ({error, lastDigitsOfNumber, errorText}) => {
  return error ? (
    <div className="reserves-page_placeholder__wrapper">
      <p>Ошибка по номеру {formatLastDigits(lastDigitsOfNumber)}</p>
      {errorText && <p>{errorText}</p>}
      <div className="reserves-page_placeholder__actions">
        <ButtonLink hrefTo={MAIN_PAGE} buttonColor="primary">
          На главную
        </ButtonLink>
      </div>
    </div>
  ) : (
    <div className="reserves-page_placeholder__wrapper">
      <p>Нет совпадений по номеру {formatLastDigits(lastDigitsOfNumber)}</p>
      <div className="reserves-page_placeholder__actions">
        <ButtonLink hrefTo={MAIN_PAGE} buttonColor="primary">
          На главную
        </ButtonLink>
      </div>
    </div>
  );
};

export default Placeholder;
