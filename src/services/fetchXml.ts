import parser from 'xml2json-light';

export class FetchXml<T> {

    async getXml(url: string): Promise<Document> {

        const xmlParser = new window.DOMParser();

        return fetch(url).then(res => res.text()).then(str => xmlParser.parseFromString(str, 'text/xml'));
    }

    async get(url: string): Promise<T> {

        return fetch(url).then(res => res.text()).then(str => parser.xml2json(str) as object)
        .then(obj => obj[Object.keys(obj)[0]] as T).catch(err => {

            console.warn('Error at FetchXml:', err);

            return null;
        });
    }
}