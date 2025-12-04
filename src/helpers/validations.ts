import { format } from "date-fns";
import { matchIsValidTel } from "mui-tel-input";
import { isColor } from "./colors";

export const isEmail = (value: string) => {
  // const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regex = new RegExp(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  return regex.test(value);
};

type IsValidStringParams = {
  t: Function;
  min: number;
  max: number;
  required?: boolean;
};

export const isValidString = (params: IsValidStringParams) => {
  const { t, min, max, required = true } = params;

  return {
    minLength: {
      value: min,
      message: t("common:validations.min_length", { value: min }),
    },
    maxLength: {
      value: max,
      message: t("common:validations.max_length", { value: max }),
    },
    validate: (value: string) => {
      if (required && !value) {
        return t("common:validations.required_field");
      }
      return true;
    },
  };
};

type IsValidStringEditorParams = {
  t: Function;
  min: number;
  max: number;
  required?: boolean;
};
export const isValidEditorString = (params: IsValidStringEditorParams) => {
  const { t, min, max, required = true } = params;

  return {
    validate: (value: string) => {
      const length = value?.replace(/<(.|\n)*?>/g, "")?.trim()?.length || 0;
      if (!required && length === 0) return true;

      if (required && length === 0) {
        return t("common:validations.required_field");
      } else if (length < min) {
        return t("common:validations.min_length", { value: min });
      } else if (length > max) {
        return t("common:validations.max_length", { value: max });
      }
      return true;
    },
  };
};

type isUrlParams = {
  t: Function;
  required?: boolean;
};
export const isUrl = (params: isUrlParams) => {
  const { t, required = false } = params;

  return {
    validate: (value: string) => {
      if (!required && !value) return true;
      if (required && !value) return t("common:validations.required_field");
      try {
        const newUrl = new URL(value);
        return newUrl.protocol === "http:" || newUrl.protocol === "https:";
      } catch (err) {
        return t("common:validations.valid_url") || "";
      }
    },
  };
};

type IsEmailAddressParams = {
  t: Function;
  required?: boolean;
};
export const isEmailAddress = (params: IsEmailAddressParams) => {
  const { t, required = true } = params;
  return {
    validate: (value: string) => {
      if (!required && !value) return true;
      if (required && !value) return t("common:validations.required_field");
      return isEmail(value) || t("common:validations.incorrect_email");
    },
  };
};
type IsPhoneNumberParams = {
  t: Function;
  required?: boolean;
};
export const isPhoneNumber = (params: IsPhoneNumberParams) => {
  const { t, required = true } = params;
  return {
    validate: (value: string) => {
      if (!required && !value) return true;
      if (required && !value) return t("common:validations.required_field");
      return (
        matchIsValidTel(value) || t("common:validations.incorrect_phone_number")
      );
    },
  };
};
type IsIntegerNumberParams = {
  t: Function;
  required?: boolean;
  positive?: boolean;
};
export const isIntegerNumber = (params: IsIntegerNumberParams) => {
  const { t, required = true, positive = true } = params;
  return {
    validate: (value: string) => {
      if (!required && !value) return true;
      if (required && !value) return t("common:validations.required_field");

      // Regex to check for integer
      const regex = /^[+-]?\d+$/;
      if (!regex.test(value)) {
        return t("common:validations.only_numeric");
      } else if (positive && value && Number.parseInt(value) < 0) {
        return t("common:validations.positive_number");
      }
      return true;
    },
  };
};

type IsFloatNumberParams = {
  t: Function;
  required?: boolean;
  positive?: boolean;
};
export const isFloatNumber = (params: IsFloatNumberParams) => {
  const { t, required = true, positive = true } = params;
  return {
    validate: (value: string) => {
      if (!required && !value) return true;
      if (required && !value) return t("common:validations.required_field");
      const regex = /^[+-]?\d+(\.\d+)?$/;
      if (!regex.test(value)) {
        return t("common:validations.only_numeric");
      } else if (positive && value && Number.parseFloat(value) < 0) {
        return t("common:validations.positive_number");
      }
      return true;
    },
  };
};

type IsPercentageNumberParams = {
  t: Function;
  required?: boolean;
  positive?: boolean;
  minValue?: number;
};
export const isPercentageNumber = (params: IsPercentageNumberParams) => {
  const { t, required = true, minValue = 1 } = params;
  return {
    validate: (value: string) => {
      if (!required && !value) return true;
      if (required && !value) return t("common:validations.required_field");

      const regex = /^[+-]?\d+(\.\d+)?$/;
      if (!regex.test(value)) {
        return t("common:validations.only_numeric");
      }

      const numValue = Number.parseFloat(value);

      if (numValue < minValue || numValue > 100) {
        return (
          t("common:validations.number_range", {
            min: minValue,
            max: 100,
          }) || ""
        );
      }

      return true;
    },
  };
};

type IsValidDateParams = {
  t: Function;
  min?: Date | null;
  max?: Date | null;
  required?: boolean;
  formatMin?: string;
  formatMax?: string;
};

export const isValidDate = (params: IsValidDateParams) => {
  const {
    t,
    min,
    max,
    required = true,
    formatMin = "dd-MM-yyyy",
    formatMax = "dd-MM-yyyy",
  } = params;

  const minimumDate = min
    ? {
        min: {
          value: min.valueOf(),
          message: t("common:validations.min_date", {
            value: format(min, formatMin),
          }),
        },
      }
    : {};
  const maximumDate = max
    ? {
        max: {
          value: max.valueOf(),
          message: t("common:validations.max_date", {
            value: format(max, formatMax),
          }),
        },
      }
    : {};
  return {
    ...minimumDate,
    ...maximumDate,
    validate: (value: string) => {
      if (required && !value) {
        return t("common:validations.required_field");
      }
      if (value.toString() === "Invalid Date") {
        return t("common:validations.invalid_date");
      }
      return true;
    },
  };
};
type IsVinNumberParams = {
  t: Function;
  required?: boolean;
  positive?: boolean;
};

export const isVinNumber = (params: IsVinNumberParams) => {
  const { t, required = true } = params;
  return {
    validate: (value: string) => {
      if (!required && !value) return true;
      if (required && !value) return t("common:validations.required_field");
      // Check for 17 characters
      if (value.length !== 17) {
        return t("common:validations.invalid_vin_length");
      }
      // Regex to check for vin
      const regex = /^[A-HJ-NPR-Z0-9]{17}$/;
      if (!regex.test(value)) {
        return t("common:validations.invalid_vin");
      }
      return true;
    },
  };
};

type IsRequiredParams = {
  t: Function;
  required?: boolean;
};
export const isRequired = (params: IsRequiredParams) => {
  const { t, required = true } = params;

  if (!required) {
    return undefined;
  }
  return {
    required: t("common:validations.required_field"),
  };
};

type IsValidColorParams = {
  t: Function;
  required?: boolean;
};
export const isValidColor = (params: IsValidColorParams) => {
  const { t, required = true } = params;

  return {
    validate: (value: string) => {
      if (!required && !value) return true;
      if (required && !value) return t("common:validations.required_field");
      if (!isColor(value)) {
        return t("common:validations.invalid_color");
      }
      return true;
    },
  };
};
