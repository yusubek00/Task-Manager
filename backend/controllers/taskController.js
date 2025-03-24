let tasks = [];

exports.getTasks = (req, res) => {
    res.json(tasks);
};

exports.addTask = (req, res) => {
    const newTask = { id: tasks.length + 1, title: req.body.title };
    tasks.push(newTask);
    res.json(newTask);
};

exports.deleteTask = (req, res) => {
    tasks = tasks.filter(task => task.id != req.params.id);
    res.json({ message: "Task deleted" });
}