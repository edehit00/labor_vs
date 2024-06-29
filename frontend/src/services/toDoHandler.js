export function handleAddToDo(todo, description) {
    fetch("http://localhost:8080/api/todo/add", {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            todo: todo,
            description: description,
        }),
    });
}
