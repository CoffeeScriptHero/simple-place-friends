import * as yup from "yup";
import { RequiredMessage } from "./SignUpForm-styles";

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .required(<RequiredMessage>Please provide your login.</RequiredMessage>)
    .matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, {
      message: (
        <RequiredMessage>Hmm, that login doesn't look right.</RequiredMessage>
      ),
    })
    .min(
      3,
      <RequiredMessage>
        Please create a login longer than 3 characters.
      </RequiredMessage>
    )
    .max(
      20,
      <RequiredMessage>
        Please create a login shorter than 21 characters.
      </RequiredMessage>
    ),
  password: yup
    .string()
    .required(<RequiredMessage>Please provide your password.</RequiredMessage>)
    .min(
      4,
      <RequiredMessage>
        Please set a password longer than 3 characters.
      </RequiredMessage>
    )
    .max(
      25,
      <RequiredMessage>
        Please set a password shorter than 26 characters.
      </RequiredMessage>
    )
    .matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, {
      message: (
        <RequiredMessage>
          Hmm, that password doesn't look right.
        </RequiredMessage>
      ),
    }),
  passwordConfirmation: yup
    .string()
    .required(<RequiredMessage>Please confirm password.</RequiredMessage>)
    .oneOf(
      [yup.ref("password"), null],
      <RequiredMessage>The passwords must match.</RequiredMessage>
    ),
});

export const logInSchema = yup.object().shape({
  username: yup
    .string()
    .required(<RequiredMessage>Please provide your login.</RequiredMessage>)
    .matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, {
      message: (
        <RequiredMessage>Hmm, that login doesn't look right.</RequiredMessage>
      ),
    })
    .min(
      3,
      <RequiredMessage>
        Please create a login longer than 3 characters.
      </RequiredMessage>
    )
    .max(
      20,
      <RequiredMessage>
        Please create a login shorter than 21 characters.
      </RequiredMessage>
    ),
  password: yup
    .string()
    .required(<RequiredMessage>Please provide your password.</RequiredMessage>)
    .min(
      4,
      <RequiredMessage>
        Please set a password longer than 3 characters.
      </RequiredMessage>
    )
    .max(
      25,
      <RequiredMessage>
        Please set a password shorter than 26 characters.
      </RequiredMessage>
    )
    .matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, {
      message: (
        <RequiredMessage>
          Hmm, that password doesn't look right.
        </RequiredMessage>
      ),
    }),
});
