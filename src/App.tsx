import { useEffect, useRef, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
// import { useAuthenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

function App() {

  /* const { signOut } = useAuthenticator(); */
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const input_ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    if(input_ref.current?.value)
      client.models.Todo.create({content:input_ref.current?.value})
  }

  function deleteItem(id:string){
    client.models.Todo.delete({id})
  }

  return (
    <main>
      <h1>My todos</h1>
      <input type='text' ref={input_ref} style={{padding:'10px', borderRadius:'5px', marginBottom:'5px'}}></input>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
           <li key={todo.id} style={{display:'flex', justifyContent:'space-between'}}>
              <span>{todo.content}</span>
              <span style={{ marginRight:'5px', fontWeight:'bold',cursor:'pointer'}} onClick={()=>deleteItem(todo.id)}>X</span>  
            </li> 
        ))}
      </ul>
   {/*    <button onClick={signOut}>Sign out</button> */}
    </main>
  );
}

export default App;
