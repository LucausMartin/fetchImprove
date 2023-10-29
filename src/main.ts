import getFetch from './methods/getFetchMethod';
import postFetch from './methods/postFetchMethod';

const getServerData = (options: OptionsType) => {
  const { method } = options;
  if (method == 'GET' || method == 'get') {
    getFetch(options);
  } else if (method == 'POST' || method == 'post') {
    postFetch(options);
  } else {
    throw new Error('method is not support, coming soon');
  }
};

export default getServerData;
