import { Header } from '../helpers/config';

export function generateRequest(url, method, body = {}) {
  if (method === 'GET' || method === 'DELETE') {
    return new Request(url, {
      method,
      headers: new Headers(Header),
    });
  }

  return new Request(url, {
    method,
    headers: new Headers(Header),
    body: JSON.stringify(body)
  });
}
