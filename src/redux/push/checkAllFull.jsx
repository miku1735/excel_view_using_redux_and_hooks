export const checkAllFull = (payload, len) => {
  const { fullName, Disease, medicineTaken } = payload;

  if (Object.keys(payload).length === len) {
    if (fullName.match(/\d+/g) !== null) {
      alert("FULLNAME contains numbers");
      return true;
    }
    if (Disease.match(/\d+/g) !== null) {
      alert("Diesease contains numbers");
      return true;
    }
    if (medicineTaken.match(/\d+/g) !== null) {
      alert("Medicine_Taken contains numbers");
      return true;
    }
    return false;
  }
  window.alert("Can't Update,Dont Have All Columns");
  return true;
};
