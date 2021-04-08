import { extend } from 'umi-request';
import { Toast } from '@/components/l-react-ui';

const req = extend({
  prefix: process.env.HOST,
  timeout: 10000,
  errorHandler: error => {
    if (/timeout/.test(error.message)) {
      Toast.error({ content: '请求超时' });
    } else {
      Toast.info({ content: '系统升级，请稍后再试' });
    }
    return null;
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

req.interceptors.request.use((url, config) => {
  console.log('request-url', url);
  console.log('request-config', config);

  return {
    url,
    config,
  };
});

req.interceptors.response.use(async response => {
  console.log('response-response', response);

  return response;
});

export default req;
