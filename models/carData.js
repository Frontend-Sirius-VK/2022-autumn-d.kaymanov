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
                    EventBus.emit('one-car-spec:not-found', {title: 'Ошибка 404', description: 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.'});
                    return
                }

                if (status === 400) {
                    EventBus.emit('one-car-spec:bad-request', {title: 'Ошибка 400', description: 'Вы ввели некорректный запрос, проверьте данные.'});
                    return;
                }

                if (status === 500) {
                    EventBus.emit('one-car-spec:server-error', {title: 'Ошибка 500', description: 'Ошибка обращения к сервису. Попробуйте обновить страницу.'});
                    return;
                }

                return response.json();
            })

            .then((data) => {
                EventBus.emit('one-car-spec:got-data', data);
            })
    }
}
