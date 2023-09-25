const connectDB = require('./src/db.js');

  async function createUser  (user)  {
    const db = await connectDB(); // Conecta a la base de datos
  
    try {
      const usersCollection = db.collection("users");
      const result = await usersCollection.insertOne(user); // Inserta el documento en la colección
      console.log(result);
      return result; // Retorna el resultado de la operación de inserción
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  async function findUsers() {
    const db = await connectDB(); // Conecta a la base de datos

    try {
      const usersCollection = db.collection('users');
      const result = await usersCollection.find('users');
      return result
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async function findUserById(id) {
const db = await connectDB()
    try {
      const usersCollection = db.collection('users');
      const result = await usersCollection.find('id')
      return result
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async function deleteUserById(id){
    
    const db = await connectDB();
    try {
      const usersCollection = db.collection('users');
      const result = usersCollection.deleteOne({id})
      return result;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
      
    }
  }

  async function updateUser(id,data){
    const db = await connectDB();

    try {
      const usersCollection = db.collection('users');
      const updateData = { $set: { ...data } };

      const result = usersCollection.updateOne({id},updateData)
      return result
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  const CRUD = {
    createUser,
    findUsers,
    findUserById,
    deleteUserById,
    updateUser,
  };

module.exports = CRUD;