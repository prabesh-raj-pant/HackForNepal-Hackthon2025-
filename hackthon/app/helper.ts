export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const registrationDeadline: Date = new Date("2025-05-29T23:59:59");
const now: Date = new Date();

export const isRegistrationClosed: boolean = now > registrationDeadline;

export const formattedDeadline: string = formatDate(registrationDeadline);

export const registrationStatusMessage: string = isRegistrationClosed
  ? `Registration Closed on ${formattedDeadline}`
  : `Deadline: ${formattedDeadline}`;
