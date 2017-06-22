const limitCharacters = (input, limitLength) => {
  let limit = input.val();
  if (limit.length <= limitLength) {
      return true;
  } else {
    limit = limit.substring(0, limit.length - 1);
    input.val(limit);
  }
}
