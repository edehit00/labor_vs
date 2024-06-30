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

export function handleDeleteToDo(id) {
    fetch(`http://localhost:8080/api/todo/delete/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    return 0;
}

