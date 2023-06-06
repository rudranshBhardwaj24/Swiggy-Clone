import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex justify-center flex-col w-50 p-5 m-5">
      <img
        className="w-21 m-5 p-5"
        src="https://media.istockphoto.com/id/1164643253/vector/broken-robot-line-icon.jpg?s=612x612&w=0&k=20&c=dXGqypnuja5dJsURElQvYPUw6XkUBDW5uXTiwjlbaSU="
      ></img>
      <h1>Opss!!</h1>
      <h2>Something went wrong</h2>
      <h2>{err.status + ":" + err.statusText}</h2>
    </div>
  );
};
export default Error;
