import axios from "../api/api";
import { useEffect, useState } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editTodo, setEditTodo] = useState(null);


    const loadTodos = async () => {
        const res = await axios.get("/allTodo");
        setTodos(res.data);
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const saveTodo = async () => {
        if (!title || !description) return;

        if (editTodo) {

            await axios.patch(`/${editTodo}`, {
                title,
                description
            });
        } else {

            await axios.post("/create", {
                title,
                description
            });
        }

        setTitle("");
        setDescription("");
        setEditTodo(null);
        loadTodos();
    };



    const handleEdit = (todo) => {
        setEditTodo(todo.id);
        setTitle(todo.title);
        setDescription(todo.description);
    };


    const deleteTodo = async (id) => {
        await axios.delete(`/${id}`);
        loadTodos();
    };

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-12">


                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white text-center">
                            <h4 className="mb-0">My Todo List</h4>
                        </div>

                        <div className="card-body">


                            <div className="mb-4">
                                <input
                                    className="form-control mb-2"
                                    placeholder="Todo Title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />

                                <textarea
                                    className="form-control mb-3"
                                    placeholder="Todo Description"
                                    rows="3"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />

                                <button
                                    className={`btn ${editTodo ? "btn-warning" : "btn-success"} w-100`}
                                    onClick={saveTodo}
                                    disabled={!title || !description}
                                >
                                    {editTodo ? "✏️ Update Todo" : "➕ Add Todo"}
                                </button>

                            </div>


                            {todos.length === 0 ? (
                                <p className="text-center text-muted">
                                    No todos available. Add one!
                                </p>
                            ) : (
                                <ul className="list-group">
                                    {todos.map(t => (
                                        <li
                                            key={t.id}
                                            className="list-group-item d-flex justify-content-between align-items-start"
                                        >

                                            <div>
                                                <h6 className="mb-1">{t.title}</h6>
                                                <small className="text-muted">
                                                    {t.description}
                                                </small>
                                            </div>


                                            <div className="d-flex gap-2">
                                                <button
                                                    className="btn btn-outline-primary btn-sm"
                                                    onClick={() => handleEdit(t)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => deleteTodo(t.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    <h6 className="text-muted text-center">
                        Total Todos List: {todos.length}
                    </h6>
                    </div>

                </div>
            </div>
        </div>
    );

}

