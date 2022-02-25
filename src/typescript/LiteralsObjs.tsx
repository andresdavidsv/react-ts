interface Person {
  name: string,
  age: number,
  address: Address,
}

interface Address {
  country: string;
  homeNumber: number;
}

export const LiteralsObjs = () => {
  const person: Person = {
    name: 'Andres',
    age: 26,
    address: {
      country: 'United States',
      homeNumber: 613,
    },
  };
  return (
    <>
      <h3>Literals Objs</h3>
      <code>
        <pre>
          {JSON.stringify(person, null, 2)}
        </pre>
      </code>
    </>
  );
};
