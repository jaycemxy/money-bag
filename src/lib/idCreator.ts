export default function idCreator() {
  let id = parseInt(window.localStorage.getItem("id_max") || "0") || 0;
  id += 1;
  window.localStorage.setItem("id_max", id.toString());
  return id;
}
