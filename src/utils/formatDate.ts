export function formatDate(dateString: string) {
  // Parse the input date
  const date = new Date(dateString);
  // Get the year from the input date
  const year = date.getFullYear();
  // Create a new Date object for January 1st of the same year in UTC
  const startOfYear = new Date(Date.UTC(year, 0, 1, 0, 0, 0));
  // Convert to ISO string
  return startOfYear.toISOString();
}

export const convertDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export const formatToDDMMYYYY = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit day
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
