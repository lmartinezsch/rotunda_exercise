const parseUrl = (urlFormat, urlInstance) => {
    let result = {}
    const urlFormatArray = urlFormat.split('/')
    const [urlPath, queryString] = urlInstance.split('?')
    const urlInstanceArray = urlPath.split('/')

    urlFormatArray.forEach((param, index) => {
        if (param.startsWith(':')) {
            const key = param.substring(1)
            result[key] = urlInstanceArray[index]
        }
    })

    queryString?.split('&').forEach(qp => {
        const [paramKey, paramValue] = qp.split('=')
        result[paramKey] = paramValue
    })


    return result
}

console.log(parseUrl('/:version/api/:collection/:id', '/6/api/listings/3?sort=desc&limit=10'))