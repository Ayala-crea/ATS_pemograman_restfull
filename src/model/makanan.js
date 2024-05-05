const dbPool = require("../config/database");

const getAllMakanan = () => {
  const SQLQuery = "SELECT * FROM makanan";

  return dbPool.execute(SQLQuery);
};

const createDataMakanan = (body) => {
    const SQLQuery = 'INSERT INTO makanan (nama_Makanan, Harga, Deskripsi) VALUES (?, ?, ?)';
    const values = [body.nama_Makanan, body.Harga, body.Deskripsi];

    return dbPool.execute(SQLQuery, values);
};

const getDataMakananById = (Id) => {
    const SQLQuery = 'SELECT * FROM makanan WHERE Id = ?';
    const values = [Id];

    return dbPool.execute(SQLQuery, values);
}

const deleteDataMakanan = (Id) => {
    const SQLQuery = 'DELETE FROM makanan WHERE Id = ?';
    const values = [Id];

    return dbPool.execute(SQLQuery, values);
}

const updateDataMakanan = (Id, body) => {
    const SQLQuery = 'UPDATE makanan SET nama_Makanan = ?, Harga = ?, Deskripsi = ? WHERE Id = ?';
    const values = [body.nama_Makanan, body.Harga, body.Deskripsi, Id];

    return dbPool.execute(SQLQuery, values);
}

module.exports = {
    getAllMakanan,
    createDataMakanan,
    getDataMakananById,
    deleteDataMakanan,
    updateDataMakanan
}
