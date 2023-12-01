export default async function handler(req, res) {
  const backendResponse = await fetch("http://localhost:8081/api/data");
  const data = await backendResponse.json();

  res.status(200).json(data);
}
