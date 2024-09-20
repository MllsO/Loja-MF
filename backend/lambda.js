import { Pool } from 'pg';



// Configura es do banco de dados PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'postgreslojamf.cjoou8goivt4.us-east-2.rds.amazonaws.com',
  database: 'loja_MF',
  password: 'Milla1207',
  port: 5432,
});

exports.handler = async (event) => {
  // Verifica o tipo de requisi o HTTP (GET, POST, DELETE, etc.)
  const httpMethod = event.httpMethod;

  let response;
  try {
    switch (httpMethod) {
      case 'GET':
        response = await handleGetRequest();
        break;
      case 'POST':
        response = await handlePostRequest(event.body);
        break;
      case 'DELETE':
        response = await handleDeleteRequest(event.pathParameters.id);
        break;
      default:
        response = {
          statusCode: 405,
          body: JSON.stringify({ message: 'M todo no permitido' }),
        };
        break;
    }
  } catch (error) {
    console.error('Erro:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno do servidor' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

// Fun o para lidar com requisi es GET
const handleGetRequest = async () => {
  const result = await pool.query('SELECT * FROM', algo); // Exemplo de consulta para obter dados de vestidos
  return result.rows;
};

// Fun o para lidar com requisi es POST
const handlePostRequest = async (body) => {
  const { modelo_vestido, tamanho_vestido, cor_vestido } = JSON.parse(body);
  const result = await pool.query(
    'INSERT INTO vestidos (modelo_vestido, tamanho_vestido, cor_vestido) VALUES ($1, $2, $3) RETURNING *',
    [modelo_vestido, tamanho_vestido, cor_vestido]
  );
  return result.rows[0];
};

// Fun o para lidar com requisi es DELETE
const handleDeleteRequest = async (id) => {
  await pool.query('DELETE FROM vestidos WHERE id = $1', [id]);
  return { message: 'Registro deletado com sucesso' };
};

