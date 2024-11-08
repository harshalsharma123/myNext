const errorMessages = {
  100: "HEADER_IS_MISSING",
  101: "DEVICE_TYPE_NOT_ALLOWED",
  102: "SOMETHING_WENT_WRONG",
  103: "A_TOKEN_IS_REQUIRED_FOR_AUTHENTICATION",
  104: "INVALID_TOKEN",
  400: "BAD_REQUEST_PLEASE_CHECK_YOUR_INPUT",
  404: "RESOURCE_NOT_FOUND",
  500: "INTERNAL_SERVER_ERROR",
  200: "SUCCESS",
};

export const getErrorMessageByCode = (code) => {
  return errorMessages[code] || "An unexpected error occurred.";
};

export const getErrorCodeByMessage = (message) => {
  return (
    Object.keys(errorMessages).find((key) => errorMessages[key] === message) ||
    "Code not found"
  );
};
