const User = require('./User');

module.exports = {
    Query: {
        users: async () => await User.find(),   // Retornando todos os usuários
        user: async (_, { id }) => await User.findById(id), // Retornando um usuário específico
    },
    Mutation: {
        createUser: async (_, { name, email }) => await User.create({ name, email }), // Criando um usuário
        removeUserById: async (_, { id }) => {
            user = await User.findById(id);
            await User.deleteOne(user);
            return user; // Removendo um usuário pelo ID
        },
        updateUser: async (_, { oldName, newName }) => {
            return await User.findOneAndUpdate({ name: oldName }, { name: newName }, { // Atualizando um usuário
                new: true
            });
        }
    }
};
