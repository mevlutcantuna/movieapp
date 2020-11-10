export const YEAR_CHANGE = "YEAR_CHANGE";
export const TYPE_CHANGE = "TYPE_CHANGE";
export const NAME_CHANGE = "NAME_CHANGE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

export function yearChange() {
  return {
    type: YEAR_CHANGE,
  };
}

export function typeChange() {
  return {
    type: TYPE_CHANGE,
  };
}

export function nameChange() {
  return {
    type: NAME_CHANGE,
  };
}

export function searchMovie() {
  return {
    type: SEARCH_MOVIE,
  };
}
