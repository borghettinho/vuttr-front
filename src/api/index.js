import axios from "axios";

const baseUrl = "http://localhost:3000/tools";

const getTools = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (e) {
    return e.message;
  }
};

const searchTools = async query => {
  try {
    const response = await axios.get(baseUrl, { params: { q: query } });
    return response.data;
  } catch (e) {
    return e.message;
  }
};

const searchTags = async query => {
  try {
    const response = await axios.get(baseUrl, { params: { tags_like: query } });
    return response.data;
  } catch (e) {
    return e.message;
  }
};

const addTool = async data => {
  try {
    const response = await axios.post(baseUrl, data);
    return response.data;
  } catch (e) {
    return e.message;
  }
};

const deleteTool = async id => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (e) {
    return e.message;
  }
};

export { getTools, searchTools, addTool, deleteTool, searchTags };
