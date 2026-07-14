const worker = {
  async fetch(request, env) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', {
        status: 405,
        headers: { Allow: 'GET, HEAD' },
      })
    }

    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404) return response

    const url = new URL(request.url)
    const isAssetRequest = /\.[a-z0-9]+$/i.test(url.pathname)
    if (isAssetRequest) return response

    url.pathname = '/index.html'
    return env.ASSETS.fetch(new Request(url, request))
  },
}

export default worker
