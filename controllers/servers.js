let servers = [
    {id: '1', email: 'dave@mail.ru'},
    {id: '2', email: 'google@email.com'},
    {id: '3', email: 'Yandex'},
    {id: '4', email: 'Microsoft'},
]

export const getAll = (req, res)=>{
    res.status(200).json(servers)
}
export const create = (req, res)=>{
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    servers.push(newServer)
    res.status(201).json(newServer)
}
export const remove = (req, res)=>{
    // console.log('ID:', req.params.id)
    servers = servers.filter(s=>s.id!==req.params.id)
    res.json({message: "Server has been removed."})
}