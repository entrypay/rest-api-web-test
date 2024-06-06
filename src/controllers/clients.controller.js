import { Clients } from "../models/Clients.js";
import { Op } from "sequelize";
// Obtener todos los clientes
export const getClients = async (req, res) => {
  try {
    const clients = await Clients.findAll();
    res.json(clients);
  } catch (error) {
    console.error("Error getting all clients:", error);
    res.status(500).json({ message: "Error getting all clients", error });
  }
};

// Obtener un cliente por su id
export const getOneClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Clients.findByPk(id);
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ message: "Cliente no encontrado" });
    }
  } catch (error) {
    console.error("Error obteniendo el cliente:", error);
    res.status(500).json({ message: "Error obteniendo el cliente", error });
  }
};

// Buscar cliente por número telefónico o correo electrónico
export const findClientByPhoneOrEmail = async (req, res) => {
  try {
    const { numero_telofonico, correo_electronico } = req.body;

    const client = await Clients.findOne({
      where: {
        [Op.or]: [
          { numero_telofonico },
          { correo_electronico }
        ]
      }
    });

    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ message: "Cliente no encontrado" });
    }
  } catch (error) {
    console.error("Error buscando el cliente:", error);
    res.status(500).json({ message: "Error buscando el cliente", error });
  }
};


// Crear un nuevo cliente
export const createClient = async (req, res) => {
  try {
    const { nombres, apellidos, numero_telofonico, correo_electronico } = req.body;

    // Verificar si ya existe un cliente con el mismo número telefónico o correo electrónico
    const existingClient = await Clients.findOne({
      where: {
        [Op.or]: [
          { numero_telofonico },
          { correo_electronico }
        ]
      }
    });

    if (existingClient) {
      return res.status(400).json({ message: "El cliente ya está registrado con ese número telefónico o correo electrónico" });
    }

    // Crear un nuevo cliente
    const newClient = await Clients.create({
      nombres,
      apellidos,
      numero_telofonico,
      correo_electronico,
    });

    res.json(newClient);
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({ message: "Error creating client", error });
  }
};

// Actualizar un cliente existente
export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombres, apellidos, numero_telofonico, correo_electronico } =
      req.body;

    const client = await Clients.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    client.nombres = nombres || client.nombres;
    client.apellidos = apellidos || client.apellidos;
    client.numero_telofonico = numero_telofonico || client.numero_telofonico;
    client.correo_electronico = correo_electronico || client.correo_electronico;

    await client.save();

    res.json(client);
  } catch (error) {
    console.error("Error updating client:", error);
    res.status(500).json({ message: "Error updating client", error });
  }
};

// Eliminar un cliente
export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Clients.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    await client.destroy();

    res.json({ message: "Cliente eliminado exitosamente" });
  } catch (error) {
    console.error("Error deleting client:", error);
    res.status(500).json({ message: "Error deleting client", error });
  }
};
