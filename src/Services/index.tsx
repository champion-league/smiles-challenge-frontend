import axios from 'axios';

const base_url = 'https://xmiles.herokuapp.com/'


export async function getRequest(node_id: String) {
  try {
    const res = await (await axios.get(`${base_url}/${node_id}`));
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
}
