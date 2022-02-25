export const Funtions = () => {
  const add = (a:number, b:number):number => {
    return a + b;
  };
  return (
    <>
      <h3>Functions</h3>
      <span>The result is {add(2, 3)}</span>
    </>
  );
};
