export class FetchJson<T> {

    async get(url: string): Promise<T> {

        return fetch(url).then(res => res.json()).then(data => data as T).catch(err => {

            console.warn('Error at FetchJson:', err);

            return null;
        });
    }
}