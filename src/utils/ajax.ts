/**
* Класс для получения данных с бэкенда по установленному API с методами GET и POST
*
*/
export class Ajax {
    /**
    * Выполняет запрос с методом GET на бэкенд
    *
    * @param {url string} url - url запроса на бэкенд
    * @return {Object} статус ответа и тело ответа в виде JSON
    */
    static async get<T>(url :string) {
        const response = await fetch(url);

        let result = await response.text();

        const body = result ? <T>JSON.parse(result) : null;

        return { status: response.status, body };
    }

    /**
    * Выполняет запрос с методом POST на бэкенд
    *
    * @param {url string} url - url запроса на бэкенд
    * @param {Object} body - объект для отправки
    * @return {Object} статус ответа и тело ответа в виде JSON
    */
    static async post({ url, body } :{ url:string, body:any }) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        let result = await response.text() as any;

        if (result && response.ok) {
            result = JSON.parse(result);
        } else {
            result = {};
        }

        return { status: response.status, body: result };
    }
}
