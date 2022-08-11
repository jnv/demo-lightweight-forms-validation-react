export function onSubmit(e) {
  const data = new FormData(e.currentTarget);
  const fdObj = Object.fromEntries(data.entries());
  console.log(fdObj);
  alert(JSON.stringify(fdObj, null, 2));
  e.preventDefault();
}
