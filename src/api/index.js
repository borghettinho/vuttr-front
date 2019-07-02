import Axios from "axios";

const baseUrl = "http://localhost:3000/tools";

let getTools = () =>
  Axios.get(baseUrl)
    .catch(e => console.log(e)) // placeholder error catchers
    .then(response => response.data);

let searchTools = query => {
  Axios.get(baseUrl, { params: { q: query } })
    .catch(e => console.log(e)) // placeholder error catchers
    .then(response => response);
};

let searchTags = query => {
  Axios.get(baseUrl, { params: { tags_like: query } })
    .catch(e => console.log(e)) // placeholder error catchers
    .then(response => console.log(response.data));
};

let addTool = data =>
  Axios.post(baseUrl, data)
    .catch(e => console.log(e)) // placeholder error catchers
    .then(response => console.log(response.data));

let deleteTool = id => {
  Axios.delete(`${baseUrl}/${id}`)
    .catch(e => console.log(e)) // placeholder error catchers
    .then(response => console.log(response.data));
};

export { getTools, searchTools, searchTags, addTool, deleteTool };
