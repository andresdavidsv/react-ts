export const TypesBasics = () => {
  const name: string = 'Andres';
  const age: number = 26;
  const isActive: boolean = false;
  const powers: string[] = ['Velocidad', 'Volar'];

  return (
    <>
      <h3>TYPES BASICS</h3>
      {name}, {age}, {isActive ? 'active' : 'not active'}
      {powers.join(', ')}
    </>
  );
};
