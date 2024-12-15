import dayjs from 'dayjs';

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getHumanizeDate(date: string, format: string):string {
  return date ? dayjs(date).format(format) : '';
}

export {capitalizeFirstLetter, getHumanizeDate};
