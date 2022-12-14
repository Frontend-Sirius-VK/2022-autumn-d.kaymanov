import EventBus from '../utils/eventBus.js';


export class CarData {
    constructor() {
        this.products = null;
    }
    fetchData(id) {
        fetch(`/getOneCarSpec/${id}`)
            .then((response) => {
                const {status} = response;
                if (status === 404) {
                    EventBus.emit('one-car-spec:not-found', ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.']);
                    return;
                }

                if (status === 400) {
                    EventBus.emit('one-car-spec:bad-request', ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.']);
                    return;
                }

                if (status === 500) {
                    EventBus.emit('one-car-spec:server-error', ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.']);
                    return;
                }

                return response.json();
            })

            .then((data) => {
                EventBus.emit('one-car-spec:got-data', data);
            })
    }
}
