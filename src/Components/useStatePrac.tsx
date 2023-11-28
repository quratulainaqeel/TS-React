import {  FormEvent } from "react";
import { useState } from "react";
interface Person {
  name: string;
  age: number;
}
export default function UseStatePrac() {
  const [user, setuser] = useState<Person>();
  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={user?.name || ""}
          onChange={(e) =>
            setuser((prev) => ({ ...prev!, name: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="Age"
          value={user?.age || ""}
          onChange={(e) =>
            setuser((prev) => ({ ...prev!, age: Number(e.target.value) }))
          }
        />
        <button type="submit">Registration</button>
      </form>
    </>
  );
}
