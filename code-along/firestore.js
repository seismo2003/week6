document.addEventListener('DOMContentLoaded', async function(event) {
  let db = fire
  // Step 1: Make the world's tiniest to-do app
  let 
  if(todoText.length > 0) {

  }
  // Step 2: Read existing to-dos from Firestore
  let db = firebase.firestore()
  let querySnapshot = await db.collection('todos').get()
  let todos = querySnapshot.docs
  for (let i = 0; i<todos.length; i++){
    let todoId = todos[i].id
    let todoData = todos[i].data()
    let todoText = todoData.text
    document.querySelector('.todos').insertAdjacentElement('beforeend',`
      <div class="todo-${todoId} py-4 text-xl border-b-2 border-purple-500 w-full">
        <a href="#" class="done p-2 text-sm bg-green-500 text-white">✓</a>
        ${todoText}
      </div>
    `)
    document.querySelector('#todo').value = ''

    let docRef = await db.collection("todos").add({
      test: todoText
    })
    let todoId = docRef.Id
    console.log(todoText)
  }
  console.log()
  // Step 3: Add code to Step 1 to add todo to Firestore
  // Step 4: Add code to allow completing todos
})